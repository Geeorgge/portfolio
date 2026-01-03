import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorge Hernández - Backend Software Engineer",
  description:
    "Backend Software Engineer with 2+ years of experience building scalable solutions for SaaS startups. Specialized in Python, PHP, SQL optimization, and data automation. Based in Saltillo, Mexico.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%236366f1'>&lt;&gt;</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-gray-100">{children}</body>
    </html>
  );
}
