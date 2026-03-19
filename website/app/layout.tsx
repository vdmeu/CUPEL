import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cupel — A common layer for professional trust",
  description:
    "Cupel is an open framework for tracing professional competence in an AI-saturated world. It connects credentials, assessments, outcomes, peer verification, and AI audit trails.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
