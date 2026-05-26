import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Buzzlo AI — Get in Touch",
  description:
    "Have questions about Buzzlo AI? Contact our team. We typically respond within 24 hours.",
  alternates: { canonical: "/contact" },
};

const infoItems = [
  {
    icon: Mail,
    title: "Email Us",
    value: siteConfig.contactEmail,
    sub: "We'll reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 99000 00000",
    sub: "Available 9 AM – 7 PM IST",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    sub: "Mon – Sat, including holidays",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-14 sm:py-20"
        style={{ background: "linear-gradient(135deg, var(--color-surface-cream) 0%, #eff4ff 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Get in{" "}
            <span style={{ color: "var(--color-saffron)" }}>Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Have a question about Buzzlo AI? Want to explore how it fits your
            business? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: Info + contact details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-navy)" }}
                >
                  We&apos;re Here to Help
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Whether you&apos;re a bakery owner in Pune or an NGO in Chennai, our team
                  understands the challenges of Indian small businesses. Reach out — in
                  Hindi or English, we&apos;re happy to help.
                </p>
              </div>

              <div className="space-y-4">
                {infoItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "var(--color-saffron-50)" }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: "var(--color-saffron)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--color-navy)" }}
                        >
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-700">{item.value}</p>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* India-first note */}
              <div
                className="rounded-xl p-4 text-sm"
                style={{ background: "var(--color-saffron-50)", borderLeft: "3px solid var(--color-saffron)" }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--color-navy)" }}>
                  India-First Support 🇮🇳
                </p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our support team is based in India and available in Hindi and English.
                  We understand the unique needs of Indian SMBs.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
                <h2
                  className="text-lg font-bold mb-6"
                  style={{ color: "var(--color-navy)" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
