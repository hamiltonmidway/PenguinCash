// src/components/StatCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

export function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trend = "neutral",
}: StatCardProps) {
  const trendColor =
    trend === "up"
      ? "var(--accent-color)"
      : trend === "down"
      ? "crimson"
      : "var(--text-color)";

  return (
    <Card
      className="rounded-xl"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        border: "1px solid var(--accent-color)",
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle
          className="font-medium"
          style={{
            fontSize: "calc(var(--font-size) * 0.9)",
            opacity: 0.8,
          }}
        >
          {title}
        </CardTitle>
        <Icon className="h-4 w-4" style={{ color: "var(--text-color)", opacity: 0.7 }} />
      </CardHeader>
      <CardContent>
        <div
          className="font-bold"
          style={{ fontSize: "calc(var(--font-size) * 1.6)" }}
        >
          {value}
        </div>
        {change && (
          <p
            className="mt-1"
            style={{ fontSize: "calc(var(--font-size) * 0.8)", color: trendColor }}
          >
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
