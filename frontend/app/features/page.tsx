import type { Metadata } from "next";
import Link from "next/link";
import {
  Languages,
  MessageCircle,
  Calendar,
  Bot,
  Heart,
  Wand2,
  Share2,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FeaturePillarCard } from "@/components/features/FeaturePillarCard";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features — WhatsApp, Multilingual AI, Festival Marketing",
  description:
    "Explore Buzzlo AI's full feature set: India-native multilingual AI, WhatsApp commerce hub, festival calendar engine, agentic automation, and nonprofit suite.",
  alternates: { canonical: "/features" },
};

const pillars = [
  {
    icon: Languages,
    title: "India-Native Multilingual AI",
    description:
      "The only marketing AI that truly speaks India. Generate high-quality content in 8+ Indian languages instantly.",
    bullets: [
      "Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati",
      "Same campaign in multiple languages simultaneously",
      "Voice input in Hindi — speak to create posts",
      "Brand voice preserved across all languages",
    ],
    accent: "var(--color-saffron)",
    bg: "var(--color-saffron-50)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Commerce Hub",
    description:
      "Full WhatsApp Business API integration — the marketing channel that 500M+ Indians check every day.",
    bullets: [
      "Broadcast campaigns to thousands in one click",
      "Product catalogs and order tracking in chat",
      "AI-powered automated replies for FAQs",
      "UPI payment collection within WhatsApp",
    ],
    accent: "var(--color-whatsapp)",
    bg: "#f0fdf4",
  },
  {
    icon: Calendar,
    title: "Festival Calendar Engine",
    description:
      "50+ Indian festivals tracked and auto-campaigned — Diwali, Eid, Pongal, Onam, Navratri, and more.",
    bullets: [
      "Auto-generates campaign content weeks in advance",
      "Regional festivals tailored to your city",
      "Cricket moment marketing (IPL, World Cup)",
      "One-tap approve and publish workflow",
    ],
    accent: "var(--color-navy)",
    bg: "#eff4ff",
  },
  {
    icon: Bot,
    title: "Agentic Automation",
    description:
      "AI that doesn't just suggest — it acts. Multi-agent orchestration handles your entire marketing stack.",
    bullets: [
      "AI Campaign Wizard: 3 questions → full 30-day plan",
      "Auto-Scheduler posts at optimal engagement times",
      "Smart Reply monitors and responds to DMs",
      "Growth Advisor gives monthly action plans",
    ],
    accent: "var(--color-navy-mid)",
    bg: "#eff4ff",
  },
  {
    icon: Heart,
    title: "Nonprofit Marketing Suite",
    description:
      "Purpose-built tools for NGOs, social enterprises, and community organisations at 70% off.",
    bullets: [
      "Donor engagement campaigns and newsletters",
      "Volunteer recruitment automation",
      "Grant visibility and awareness drives",
      "Impact storytelling content generation",
    ],
    accent: "#7c3aed",
    bg: "#faf5ff",
  },
  {
    icon: Wand2,
    title: "Campaign Creator",
    description:
      "Go from idea to live campaign in under 2 minutes — with templates, AI copy, and image suggestions.",
    bullets: [
      "200+ industry templates (restaurant, clinic, boutique…)",
      "Upload a photo → get 7 days of branded posts",
      "One-Click Boost to launch Meta/Google ads",
      "Festival and seasonal campaign overlays",
    ],
    accent: "var(--color-saffron)",
    bg: "var(--color-saffron-50)",
  },
  {
    icon: Share2,
    title: "Social Media Manager",
    description:
      "All your social channels, DMs, and comments in one place — managed by AI.",
    bullets: [
      "Unified inbox: Instagram, Facebook, WhatsApp",
      "Visual content calendar with drag-and-drop",
      "Auto-post queue — set it once, AI posts daily",
      "Lead capture forms with automatic CRM sync",
    ],
    accent: "var(--color-navy)",
    bg: "#eff4ff",
  },
  {
    icon: BarChart3,
    title: "Analytics & Market Intelligence",
    description:
      "No dashboards to decipher. Just clear, plain-English reports and competitor insights.",
    bullets: [
      "Plain-English weekly performance reports",
      "Competitor tracker for 3–5 local rivals",
      "Revenue attribution: which posts drove sales",
      "Predictive recommendations for upcoming posts",
    ],
    accent: "var(--color-navy-mid)",
    bg: "#eff4ff",
  },
  {
    icon: TrendingUp,
    title: "Growth Pathways",
    description:
      "From 0 to 10,000 followers — Buzzlo AI coaches your business through every milestone.",
    bullets: [
      "AI Business Coach: monthly growth conversation",
      "Gamified milestones with unlockable features",
      "Budget Optimizer: maximum ROI on ad spend",
      "Multi-location management for franchises",
    ],
    accent: "var(--color-whatsapp)",
    bg: "#f0fdf4",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, var(--color-surface-cream) 0%, #eff4ff 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Everything Your Business Needs
            <span
              className="block mt-1"
              style={{ color: "var(--color-saffron)" }}
            >
              to Grow Online
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nine powerful feature pillars — all working together, all powered by
            AI, all designed for the way Indian businesses actually work.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link
              href={siteConfig.signupUrl}
              className={cn(
                buttonVariants({ size: "lg" }),
                "hover:opacity-90 transition-opacity inline-flex items-center"
              )}
              style={{ background: "var(--color-saffron)", color: "white" }}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Feature pillars grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <FeaturePillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 sm:py-20"
        style={{ background: "var(--color-surface-dark)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to try Buzzlo AI?
          </h2>
          <p className="mt-3 text-gray-300">
            Free plan available now. No credit card required.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link
              href={siteConfig.signupUrl}
              className={cn(
                buttonVariants({ size: "lg" }),
                "hover:opacity-90 transition-opacity"
              )}
              style={{ background: "var(--color-saffron)", color: "white" }}
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-white border-white/30 hover:bg-white/10"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
