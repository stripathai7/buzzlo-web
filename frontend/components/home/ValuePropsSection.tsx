import { Languages, MessageCircle, Calendar, Bot, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valueProps = [
  {
    icon: Languages,
    title: "Multilingual AI",
    description:
      "Create marketing content in Hindi, Tamil, Telugu, Kannada, Marathi, and more — automatically. Reach customers in the language they trust.",
    accent: "var(--color-saffron)",
    bg: "var(--color-saffron-50)",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-First Marketing",
    description:
      "Broadcast campaigns, catalogs, and automated replies — all through WhatsApp Business. Where your customers already are.",
    accent: "var(--color-whatsapp)",
    bg: "#f0fdf4",
  },
  {
    icon: Calendar,
    title: "Festival Calendar Engine",
    description:
      "Never miss Diwali, Eid, Pongal, or any of 50+ Indian festivals. AI prepares your campaign content days in advance.",
    accent: "var(--color-navy)",
    bg: "#eff4ff",
  },
  {
    icon: Bot,
    title: "Agentic Automation",
    description:
      "Your AI co-pilot doesn't just suggest — it acts. Posts go live, replies get sent, and analytics get reviewed — while you focus on your business.",
    accent: "var(--color-saffron)",
    bg: "var(--color-saffron-50)",
  },
  {
    icon: TrendingUp,
    title: "Plain-English Analytics",
    description:
      "No dashboards to decipher. Just clear insights: 'Your Tuesday post drove 23 inquiries. Here's what worked.'",
    accent: "var(--color-navy)",
    bg: "#eff4ff",
  },
  {
    icon: Shield,
    title: "Nonprofit-Ready",
    description:
      "Special pricing and tools for NGOs, social enterprises, and community organisations. Impact marketing at ₹299/month.",
    accent: "#7c3aed",
    bg: "#faf5ff",
  },
];

export function ValuePropsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Everything a Small Business Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            One platform. Zero marketing skills required. Just describe your
            business and let Buzzlo AI do the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <Card
                key={prop.title}
                className="border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                    style={{ background: prop.bg }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: prop.accent }}
                    />
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {prop.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
