import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const tiers = [
  {
    name: "Starter",
    price: "₹0",
    badge: "Free Forever",
    highlights: ["2 social channels", "10 AI posts/month", "WhatsApp Business"],
    featured: false,
    purple: false,
  },
  {
    name: "Pro",
    price: "₹999",
    badge: "Most Popular",
    highlights: ["5 social channels", "Unlimited AI posts", "Festival campaigns"],
    featured: true,
    purple: false,
  },
  {
    name: "Mission",
    price: "₹299",
    badge: "For NGOs",
    highlights: ["Pro features", "70% NGO discount", "Donor tools"],
    featured: false,
    purple: true,
  },
];

export function PricingTeaser() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ background: "var(--color-surface-cream)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-navy)" }}
            >
              Plans That Grow
              <span style={{ color: "var(--color-saffron)" }}> With You</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Starting at ₹0 — no credit card required. Upgrade only when you need
              more. Designed for Indian SMBs with pocket-friendly pricing.
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span
                className="text-5xl font-bold"
                style={{ color: "var(--color-saffron)" }}
              >
                ₹0
              </span>
              <span className="text-xl text-gray-500">to start</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Pro at ₹999/month · Business at ₹2,999/month · NGOs at ₹299/month
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={siteConfig.signupUrl}
                className={cn(
                  buttonVariants(),
                  "inline-flex items-center hover:opacity-90 transition-opacity"
                )}
                style={{ background: "var(--color-saffron)", color: "white" }}
              >
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className={cn(buttonVariants({ variant: "outline" }), "inline-flex items-center")}
              >
                See Full Pricing
              </Link>
            </div>
          </div>

          {/* Right: Tier cards */}
          <div className="flex flex-col gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl border-2 bg-white p-5 transition-shadow hover:shadow-md"
                style={{
                  borderColor: tier.featured
                    ? "var(--color-saffron)"
                    : tier.purple
                    ? "#c4b5fd"
                    : "#e5e7eb",
                  boxShadow: tier.featured
                    ? "0 0 0 3px rgba(255,107,43,0.1)"
                    : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-bold text-gray-900">{tier.name}</span>
                    <span
                      className="ml-2 text-xl font-bold"
                      style={{
                        color: tier.featured
                          ? "var(--color-saffron)"
                          : tier.purple
                          ? "#7c3aed"
                          : "var(--color-navy)",
                      }}
                    >
                      {tier.price}
                      <span className="text-sm font-normal text-gray-500">
                        /mo
                      </span>
                    </span>
                  </div>
                  <Badge
                    style={
                      tier.featured
                        ? { background: "var(--color-saffron)", color: "white" }
                        : tier.purple
                        ? { background: "#f3e8ff", color: "#7c3aed" }
                        : {}
                    }
                  >
                    {tier.badge}
                  </Badge>
                </div>
                <ul className="space-y-1">
                  {tier.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0"
                        style={{
                          color: tier.featured
                            ? "var(--color-saffron)"
                            : tier.purple
                            ? "#7c3aed"
                            : "var(--color-whatsapp)",
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
