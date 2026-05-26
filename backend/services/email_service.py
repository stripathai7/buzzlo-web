import smtplib
import html as html_module
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from config import settings
from models.contact import ContactRequest


def send_contact_email(data: ContactRequest) -> None:
    """Send contact form submission to the company inbox via Gmail SMTP."""
    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Buzzlo AI] New Contact: {data.name} ({data.business_type})"
    msg["From"] = f"Buzzlo AI <{settings.smtp_user}>"
    msg["To"] = settings.recipient_email
    msg["Reply-To"] = data.email

    name = html_module.escape(data.name)
    email = html_module.escape(data.email)
    phone = html_module.escape(data.phone)
    business_type = html_module.escape(data.business_type)
    message = html_module.escape(data.message).replace("\n", "<br>")

    html_body = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a1a; }}
    .container {{ max-width: 560px; margin: 0 auto; padding: 24px; }}
    .header {{ background: #FF6B2B; color: white; padding: 16px 24px; border-radius: 8px 8px 0 0; }}
    .body {{ background: #fafaf8; border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; }}
    .field {{ margin-bottom: 16px; }}
    .label {{ font-size: 11px; font-weight: 600; text-transform: uppercase; color: #767676; margin-bottom: 4px; }}
    .value {{ font-size: 14px; color: #1a1a1a; }}
    .message-box {{ background: white; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; font-size: 14px; line-height: 1.6; }}
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <strong>⚡ New Contact Form Submission</strong>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">{name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:{email}">{email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone</div>
        <div class="value">{phone}</div>
      </div>
      <div class="field">
        <div class="label">Business Type</div>
        <div class="value">{business_type}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">{message}</div>
      </div>
    </div>
  </div>
</body>
</html>
"""

    plain_body = (
        f"New contact form submission\n\n"
        f"Name: {data.name}\n"
        f"Email: {data.email}\n"
        f"Phone: {data.phone}\n"
        f"Business Type: {data.business_type}\n\n"
        f"Message:\n{data.message}"
    )

    msg.attach(MIMEText(plain_body, "plain"))
    msg.attach(MIMEText(html_body, "html"))

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=10) as server:
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(settings.smtp_user, settings.smtp_password)
        server.sendmail(settings.smtp_user, settings.recipient_email, msg.as_string())
