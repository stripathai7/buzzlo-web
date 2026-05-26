import { LucideIcon, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturePillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
  bg: string;
}

export function FeaturePillarCard({
  icon: Icon,
  title,
  description,
  bullets,
  accent,
  bg,
}: FeaturePillarCardProps) {
  return (
    <Card className="border border-gray-100 hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div
          className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4"
          style={{ background: bg }}
        >
          <Icon className="h-6 w-6" style={{ color: accent }} />
        </div>
        <h3
          className="text-base font-semibold mb-2"
          style={{ color: "var(--color-navy)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        <ul className="mt-auto space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
              <Check
                className="h-4 w-4 shrink-0 mt-0.5"
                style={{ color: accent }}
              />
              {b}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
