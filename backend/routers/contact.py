from fastapi import APIRouter, HTTPException
from models.contact import ContactRequest
from services.email_service import send_contact_email

router = APIRouter()


@router.post("/api/contact")
async def contact(data: ContactRequest):
    try:
        send_contact_email(data)
        return {"status": "ok", "message": "Message sent successfully"}
    except Exception as exc:
        # Log to stderr for monitoring without leaking internals to client
        import sys
        print(f"[contact] Email send failed: {exc}", file=sys.stderr)
        raise HTTPException(status_code=500, detail="Failed to send message. Please try again.")
