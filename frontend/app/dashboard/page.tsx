import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false },
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-96 items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold" style={{ color: "var(--color-navy)" }}>
          Dashboard
        </h1>
        <p className="mt-2 text-gray-500">Coming soon — launching with the product.</p>
      </div>
    </div>
  );
}
