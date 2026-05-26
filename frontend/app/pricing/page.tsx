import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Free Plan + ₹999/mo Pro | India",
  description:
    "Transparent pricing for every Indian business. Free plan available. Pro at ₹999/mo, Business at ₹2,999/mo, Nonprofits at ₹299/mo.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    id: "free",
    name: "Starter",
    subtitle: "For NGOs & first-timers",
    price: "₹0",
    period: "/month",
    badge: null,
    cta: "Start for Free",
    ctaHref: siteConfig.signupUrl,
    ctaExternal: true,
    borderColor: "#e5e7eb",
    priceColor: "var(--color-navy)",
    features: [
      "2 social media channels",
      "10 AI-generated posts/month",
      "1 campaign/month",
      "Basic analytics (30 days)",
      "WhatsApp Business (India)",
      "Festival template overlays",
      "Community support",
    ],
    notIncluded: [
      "Unlimited AI posts",
      "Competitor tracking",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Core revenue driver",
    price: "₹999",
    period: "/month",
    badge: "Most Popular",
    cta: "Get Pro",
    ctaHref: siteConfig.signupUrl,
    ctaExternal: false,
    featured: true,
    borderColor: "var(--color-saffron)",
    priceColor: "var(--color-saffron)",
    features: [
      "5 social channels",
      "Unlimited AI posts",
      "Unlimited campaigns",
      "Campaign Wizard",
      "Unified inbox + smart replies",
      "Advanced analytics (90 days)",
      "Competitor tracking (3 rivals)",
      "Google Business Profile",
      "Hashtag intelligence",
      "Priority support",
    ],
    notIncluded: [
      "Multi-location management",
      "Team collaboration",
      "White-label reports",
    ],
  },
  {
    id: "business",
    name: "Business",
    subtitle: "For scaling businesses",
    price: "₹2,999",
    period: "/month",
    badge: "Scale Up",
    cta: "Get Business",
    ctaHref: siteConfig.signupUrl,
    ctaExternal: false,
    borderColor: "var(--color-navy)",
    priceColor: "var(--color-navy)",
    features: [
      "15 social channels",
      "Multi-location management",
      "Team collaboration (5 seats)",
      "Full competitor intelligence",
      "Revenue attribution",
      "White-label reports",
      "Influencer marketplace access",
      "Dedicated AI account manager",
      "All Pro features",
    ],
    notIncluded: [],
  },
  {
    id: "mission",
    name: "Mission",
    subtitle: "For NGOs & nonprofits",
    price: "₹299",
    period: "/month",
    badge: "Social Impact",
    note: "Verification required",
    cta: "Apply for Mission Plan",
    ctaHref: "/contact",
    ctaExternal: false,
    borderColor: "#c4b5fd",
    priceColor: "#7c3aed",
    features: [
      "All Pro features at 70% off",
      "Donor engagement toolkit",
      "Grant visibility campaigns",
      "Volunteer recruitment tools",
      "Impact storytelling AI",
      "Priority NGO support",
    ],
    notIncluded: [],
  },
];

const comparisonRows = [
  {
    feature: "Social channels",
    free: "2",
    pro: "5",
    business: "15",
    mission: "5",
  },
  {
    feature: "AI posts/month",
    free: "10",
    pro: "Unlimited",
    business: "Unlimited",
    mission: "Unlimited",
  },
  {
    feature: "Campaigns/month",
    free: "1",
    pro: "Unlimited",
    business: "Unlimited",
    mission: "Unlimited",
  },
  {
    feature: "Analytics history",
    free: "30 days",
    pro: "90 days",
    business: "180 days",
    mission: "90 days",
  },
  {
    feature: "WhatsApp Business",
    free: true,
    pro: true,
    business: true,
    mission: true,
  },
  {
    feature: "Festival templates",
    free: true,
    pro: true,
    business: true,
    mission: true,
  },
  {
    feature: "Campaign Wizard",
    free: false,
    pro: true,
    business: true,
    mission: true,
  },
  {
    feature: "Competitor tracking",
    free: false,
    pro: "3 rivals",
    business: "Unlimited",
    mission: "3 rivals",
  },
  {
    feature: "Team collaboration",
    free: false,
    pro: false,
    business: "5 seats",
    mission: false,
  },
  {
    feature: "Multi-location",
    free: false,
    pro: false,
    business: true,
    mission: false,
  },
  {
    feature: "White-label reports",
    free: false,
    pro: false,
    business: true,
    mission: false,
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <Check
        className="h-4 w-4 mx-auto"
        style={{ color: "var(--color-whatsapp)" }}
      />
    );
  if (value === false) return <X className="h-4 w-4 mx-auto text-gray-300" />;
  return <span className="text-xs text-gray-700">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--color-surface-cream) 0%, #eff4ff 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Simple, Honest Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Built for Indian SMBs. No hidden fees. No foreign pricing. Start free
            — upgrade only when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier) => (
              <Card
                key={tier.id}
                className="relative flex flex-col"
                style={{
                  borderWidth: 2,
                  borderColor: tier.borderColor,
                  boxShadow:
                    "featured" in tier && tier.featured
                      ? "0 0 0 4px rgba(255,107,43,0.12)"
                      : undefined,
                }}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      style={
                        "featured" in tier && tier.featured
                          ? {
                              background: "var(--color-saffron)",
                              color: "white",
                            }
                          : tier.id === "mission"
                          ? { background: "#7c3aed", color: "white" }
                          : {
                              background: "var(--color-navy)",
                              color: "white",
                            }
                      }
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-0 pt-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap
                      className="h-4 w-4"
                      style={{ color: tier.priceColor }}
                    />
                    <span className="font-bold text-gray-900">{tier.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{tier.subtitle}</p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: tier.priceColor }}
                    >
                      {tier.price}
                    </span>
                    <span className="text-gray-500 text-sm">{tier.period}</span>
                  </div>
                  {"note" in tier && tier.note && (
                    <p className="text-xs text-purple-600 mt-1">{tier.note}</p>
                  )}
                </CardHeader>

                <CardContent className="flex flex-col flex-1 pt-4 pb-6">
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{
                            color:
                              "featured" in tier && tier.featured
                                ? "var(--color-saffron)"
                                : tier.id === "mission"
                                ? "#7c3aed"
                                : "var(--color-whatsapp)",
                          }}
                        />
                        {f}
                      </li>
                    ))}
                    {tier.notIncluded.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-400 line-through"
                      >
                        <X className="h-4 w-4 shrink-0 mt-0.5 text-gray-300" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {tier.id === "free" ? (
                    <Link
                      href={tier.ctaHref}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full justify-center hover:opacity-90 transition-opacity"
                      )}
                    >
                      {tier.cta}
                    </Link>
                  ) : tier.id === "mission" ? (
                    <Link
                      href={tier.ctaHref}
                      className={cn(
                        buttonVariants(),
                        "w-full justify-center hover:opacity-90 transition-opacity"
                      )}
                      style={{ background: "#7c3aed", color: "white" }}
                    >
                      {tier.cta}
                    </Link>
                  ) : (
                    <Link
                      href={tier.ctaHref}
                      className={cn(
                        buttonVariants(),
                        "w-full justify-center hover:opacity-90 transition-opacity"
                      )}
                      style={
                        "featured" in tier && tier.featured
                          ? { background: "var(--color-saffron)", color: "white" }
                          : { background: "var(--color-navy)", color: "white" }
                      }
                    >
                      {tier.cta}
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            All prices in INR. US/EU pricing available — Pro at $29/mo, Business
            at $79/mo.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold text-center mb-8"
            style={{ color: "var(--color-navy)" }}
          >
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-40 sm:w-auto">
                    Feature
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-600">
                    Free
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold"
                    style={{ color: "var(--color-saffron)" }}
                  >
                    Pro
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold"
                    style={{ color: "var(--color-navy)" }}
                  >
                    Business
                  </th>
                  <th className="text-center px-3 py-3 font-semibold text-purple-700">
                    Mission
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="px-4 py-2.5 text-gray-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <CellValue value={row.free} />
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <CellValue value={row.pro} />
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <CellValue value={row.business} />
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <CellValue value={row.mission} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--color-surface-dark)" }}
      >
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-3 text-gray-300 text-sm">
            Start free today — no credit card required. Upgrade anytime as your
            business grows.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link
              href={siteConfig.signupUrl}
              className={cn(
                buttonVariants({ size: "lg" }),
                "inline-flex items-center hover:opacity-90 transition-opacity"
              )}
              style={{ background: "var(--color-saffron)", color: "white" }}
            >
              Start for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-white border-white/30 hover:bg-white/10"
              )}
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
