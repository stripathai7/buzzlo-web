import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Globe, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const trustItems = [
  "Multilingual AI",
  "WhatsApp-First",
  "Festival-Ready",
  "₹0 to Start",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(135deg, var(--color-surface-cream) 0%, #eff4ff 100%)",
      }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-saffron)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--color-navy-mid)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-6"
              style={{
                borderColor: "var(--color-saffron)",
                color: "var(--color-saffron)",
                background: "var(--color-saffron-50)",
              }}
            >
              <Star className="h-3 w-3 fill-current" />
              🚀 Now Live — Start Free Today
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              style={{ color: "var(--color-navy)" }}
            >
              Your AI Marketing
              <span
                className="block mt-1"
                style={{ color: "var(--color-saffron)" }}
              >
                Co-Pilot
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-1 text-gray-700 font-semibold">
                No Skills Needed.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Built for India&apos;s{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--color-navy)" }}
              >
                63 million small businesses
              </span>{" "}
              who rely on WhatsApp, regional languages, and festival-driven
              commerce. Run professional marketing in under 15 minutes a day — in
              your own language.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={siteConfig.signupUrl}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "hover:opacity-90 transition-opacity text-base font-semibold inline-flex items-center"
                )}
                style={{ background: "var(--color-saffron)", color: "white" }}
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-base font-semibold"
                )}
                style={{
                  borderColor: "var(--color-navy)",
                  color: "var(--color-navy)",
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Phone frame */}
              <div
                className="rounded-3xl shadow-2xl overflow-hidden border-4 border-white"
                style={{ background: "var(--color-navy)" }}
              >
                {/* Phone status bar */}
                <div className="flex items-center justify-between px-4 py-2 text-white text-xs">
                  <span>9:41</span>
                  <span>Buzzlo AI</span>
                  <span>●●●</span>
                </div>

                {/* WhatsApp-style chat UI */}
                <div className="bg-gray-50 p-4 space-y-3 min-h-64">
                  <div className="flex items-start gap-2">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-saffron)" }}
                    >
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-white px-3 py-2 shadow-sm max-w-56">
                      <p className="text-xs text-gray-800">
                        🎉 <strong>Diwali Campaign Ready!</strong>
                        <br />
                        Your 7-day content plan is live. First post goes out
                        today at 6 PM.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-saffron)" }}
                    >
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-white px-3 py-2 shadow-sm max-w-56">
                      <p className="text-xs text-gray-800">
                        📊 <strong>This week:</strong> 1.2K WhatsApp views, 43
                        new inquiries. Your bakery is growing! 🚀
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-none px-3 py-2 max-w-48"
                      style={{ background: "var(--color-whatsapp)" }}
                    >
                      <p className="text-xs text-white">
                        Post in Hindi for tomorrow please 🙏
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-saffron)" }}
                    >
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-white px-3 py-2 shadow-sm max-w-56">
                      <p className="text-xs text-gray-800">
                        ✅ Done!{" "}
                        <strong>हिंदी पोस्ट तैयार है।</strong> Publishing at 8
                        AM tomorrow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white border-t">
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    Type in Hindi or English...
                  </span>
                  <div
                    className="ml-auto flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: "var(--color-saffron)" }}
                  >
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-8 top-12 rounded-xl bg-white shadow-lg border px-3 py-2 hidden sm:block">
                <p className="text-xs text-gray-500">Reach</p>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--color-navy)" }}
                >
                  12.4K
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-whatsapp)" }}
                >
                  ↑ 34% this week
                </p>
              </div>

              <div className="absolute -right-6 bottom-16 rounded-xl bg-white shadow-lg border px-3 py-2 hidden sm:block">
                <div className="flex items-center gap-1 mb-1">
                  <Globe
                    className="h-3 w-3"
                    style={{ color: "var(--color-saffron)" }}
                  />
                  <p className="text-xs text-gray-500">Languages</p>
                </div>
                <p className="text-xs font-semibold text-gray-800">
                  Hindi · Tamil · Telugu
                </p>
                <p className="text-xs text-gray-500">+6 more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
