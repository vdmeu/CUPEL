import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cupel — When AI does the work, who checks it?",
  description:
    "Cupel is an open framework for tracing professional competence so the humans who supervise AI work are identifiable, accountable, and recognisable across the systems that already exist.",
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
