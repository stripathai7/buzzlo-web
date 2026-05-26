import { CheckCircle, MessageCircle, Smartphone } from "lucide-react";

const features = [
  "Broadcast campaigns to thousands of customers instantly",
  "Two-way chat with AI-suggested replies",
  "Share product catalogs directly in WhatsApp",
  "Collect orders and payments via UPI in chat",
  "Automated flows for FAQs and customer support",
];

export function WhatsAppSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: WhatsApp chat mockup */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div
              className="relative w-72 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100"
              style={{ background: "#e5ddd5" }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{ background: "var(--color-whatsapp)" }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Meera&apos;s Boutique</p>
                  <p className="text-xs text-green-100">Buzzlo AI • Online</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-3 space-y-3 min-h-72">
                {/* Broadcast message */}
                <div className="rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm max-w-64">
                  <p className="text-xs font-semibold text-green-700 mb-1">
                    🛍️ New Arrivals this Navratri!
                  </p>
                  <p className="text-xs text-gray-700">
                    Namaskar! Our new ethnic collection is here — 20% off for first 50 customers. Shop now 👇
                  </p>
                  <div className="mt-2 rounded bg-gray-50 border p-2 text-xs text-blue-600">
                    👗 View Collection
                  </div>
                  <p className="text-right text-xs text-gray-400 mt-1">6:32 PM ✓✓</p>
                </div>

                {/* Customer reply */}
                <div className="flex justify-end">
                  <div
                    className="rounded-lg rounded-tr-none px-3 py-2 max-w-52"
                    style={{ background: "#d9fdd3" }}
                  >
                    <p className="text-xs text-gray-800">
                      I want the red lehenga! What&apos;s the price?
                    </p>
                    <p className="text-right text-xs text-gray-400 mt-1">6:35 PM ✓✓</p>
                  </div>
                </div>

                {/* AI auto-reply */}
                <div className="rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm max-w-64">
                  <p className="text-xs text-gray-500 mb-1 italic">AI replied automatically</p>
                  <p className="text-xs text-gray-700">
                    The red lehenga is ₹2,499 (offer price ₹1,999). Shall I reserve one for you? 🌸
                  </p>
                  <p className="text-right text-xs text-gray-400 mt-1">6:35 PM ✓✓</p>
                </div>

                {/* UPI payment prompt */}
                <div className="flex justify-end">
                  <div
                    className="rounded-lg rounded-tr-none px-3 py-2 max-w-52"
                    style={{ background: "#d9fdd3" }}
                  >
                    <p className="text-xs text-gray-800">Yes! Send me the UPI link</p>
                    <p className="text-right text-xs text-gray-400 mt-1">6:36 PM ✓✓</p>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{ background: "#f0f0f0" }}
              >
                <MessageCircle className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-400 flex-1">Type a message...</span>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ background: "var(--color-whatsapp)" }}
                >
                  <span className="text-white text-xs">▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-6"
              style={{
                background: "rgba(37,211,102,0.1)",
                color: "#16a34a",
                border: "1px solid rgba(37,211,102,0.3)",
              }}
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp Commerce Hub
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-navy)" }}
            >
              Reach Customers
              <span className="block" style={{ color: "var(--color-whatsapp)" }}>
                Where They Already Are
              </span>
            </h2>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              98% of Indians on smartphones use WhatsApp every day. Buzzlo AI
              turns WhatsApp into your most powerful marketing channel — with zero
              technical setup.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle
                    className="h-5 w-5 shrink-0 mt-0.5"
                    style={{ color: "var(--color-whatsapp)" }}
                  />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
