import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const festivals = [
  { name: "Diwali", emoji: "🪔", date: "Oct 20", campaign: "Ready" },
  { name: "Navratri", emoji: "💃", date: "Oct 2", campaign: "Ready" },
  { name: "Eid", emoji: "🌙", date: "Mar 31", campaign: "AI Drafting" },
  { name: "Pongal", emoji: "🌾", date: "Jan 14", campaign: "Ready" },
  { name: "Holi", emoji: "🎨", date: "Mar 13", campaign: "Coming Up" },
  { name: "Christmas", emoji: "🎄", date: "Dec 25", campaign: "AI Drafting" },
];

export function FestivalEnginePreview() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{ background: "var(--color-surface-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-6"
              style={{
                background: "rgba(255,107,43,0.15)",
                color: "var(--color-saffron-light)",
              }}
            >
              <Sparkles className="h-3 w-3" />
              Festival Calendar Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Never Miss a
              <span style={{ color: "var(--color-saffron)" }}>
                {" "}
                Marketing Moment
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Buzzlo AI tracks 50+ Indian festivals, regional events, and
              cricket moments — and auto-prepares your campaign content days in
              advance. You approve, we publish.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "50+ Indian festival campaigns auto-generated",
                "Regional festivals tailored to your city",
                "Cricket moment marketing (IPL, World Cup)",
                "Approve in one tap, publish automatically",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white text-xs"
                    style={{ background: "var(--color-saffron)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/features"
              className={cn(
                buttonVariants(),
                "mt-8 inline-flex items-center hover:opacity-90 transition-opacity"
              )}
              style={{ background: "var(--color-saffron)", color: "white" }}
            >
              See All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right: Festival grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {festivals.map((fest) => (
              <div
                key={fest.name}
                className="rounded-2xl p-4 border transition-transform hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="text-3xl mb-2">{fest.emoji}</div>
                <h3 className="text-sm font-semibold text-white">{fest.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{fest.date}</p>
                <span
                  className="inline-block mt-2 rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    background:
                      fest.campaign === "Ready"
                        ? "rgba(16,185,129,0.15)"
                        : "rgba(255,107,43,0.15)",
                    color:
                      fest.campaign === "Ready"
                        ? "#34d399"
                        : "var(--color-saffron-light)",
                  }}
                >
                  {fest.campaign}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
