import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { FestivalEnginePreview } from "@/components/home/FestivalEnginePreview";
import { WhatsAppSection } from "@/components/home/WhatsAppSection";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buzzlo AI — AI Marketing Co-Pilot for Indian SMBs",
  description:
    "Automate WhatsApp campaigns, multilingual content, and festival marketing. Built for India's 63 million small businesses. Start free.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <FestivalEnginePreview />
      <WhatsAppSection />
      <PricingTeaser />
      <TestimonialsSection />
    </>
  );
}
