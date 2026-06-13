import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aabeke's Portfolio | Governance, Risk & Compliance",
  description: "Governance, risk, and compliance assessments demonstrating practical expertise across AI governance, privacy law, and organizational compliance frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
