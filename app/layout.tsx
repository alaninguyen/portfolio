// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Alani Nguyen — Product Designer",
  description:
    "Product designer (UX minor) crafting clean, performance-driven products and digital experiences.",
  openGraph: {
    title: "Alani Nguyen — Product Designer",
    description:
      "Physical builds, brand systems, and web UX. Clean aesthetics + research-backed execution.",
    images: ["/og.png"], // put /public/og.jpg (1200x630)
    url: "https://alani-nguyen.vercel.app",
    siteName: "Alani Nguyen — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alani Nguyen — Product Designer",
    description:
      "Physical builds, brand systems, and web UX. Clean aesthetics + research-backed execution.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className="min-h-dvh antialiased">
        {/* Header */}
        <header className="border-b border-white/10 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-black/60 z-50">
          <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">Alani Nguyen</Link>
            <div className="flex items-center gap-5 text-sm">
              <Link href="/#projects" className="opacity-80 hover:opacity-100">Projects</Link>
              <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
              <a href="/Alani-Nguyen-Resume.pdf" className="opacity-80 hover:opacity-100">Resume</a>
              <a href="mailto:alaninguyen@email.com" className="rounded-xl bg-white text-black px-3 py-1">
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm opacity-70">
            © {new Date().getFullYear()} Alani Nguyen — Product Design & UX
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
