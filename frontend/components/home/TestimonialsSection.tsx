import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const placeholders = [
  {
    initials: "RS",
    name: "Rahul Sharma",
    role: "Bakery Owner, Pune",
    text: "\"Buzzlo AI helped me run my Diwali campaign in Hindi without any marketing knowledge. Sales went up 40% that week.\"",
    stars: 5,
    bg: "var(--color-saffron)",
  },
  {
    initials: "PK",
    name: "Priya Kumar",
    role: "Boutique, Bengaluru",
    text: "\"Finally a tool that understands Indian festivals and posts in Kannada. My WhatsApp broadcasts now feel personal.\"",
    stars: 5,
    bg: "var(--color-navy-mid)",
  },
  {
    initials: "AN",
    name: "Arjun NGO",
    role: "Nonprofit Coordinator, Chennai",
    text: "\"The Mission plan is a blessing for small NGOs like ours. We can now reach donors and volunteers without a marketing team.\"",
    stars: 5,
    bg: "#7c3aed",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-navy)" }}
          >
            Loved by Indian Business Owners
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Join hundreds of Indian businesses already growing with Buzzlo AI
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {placeholders.map((t) => (
            <Card
              key={t.name}
              className="border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold shrink-0"
                    style={{ background: t.bg }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
