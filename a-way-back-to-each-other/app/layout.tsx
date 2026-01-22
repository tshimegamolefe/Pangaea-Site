import type { Metadata } from "next";
import { Work_Sans, Lora, Inconsolata } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pangaea.dev"),
  title: {
    default: "Pangaea — A Way Back to Each Other",
    template: "%s — Pangaea",
  },
  description:
    "A way back to each other. Pangaea helps neighbors, families, and communities reconnect through trust, privacy, and mutual aid—online or offline.",
  keywords: [
    "a way back to each other",
    "community connection",
    "local communities",
    "mutual aid",
    "offline communication",
    "mesh networking",
    "private coordination",
    "community resilience",
    "people over platforms",
    "hyperlocal networks",
    "decentralized communication",
    "privacy-first technology",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pangaea.dev",
    siteName: "Pangaea",
    title: "Pangaea — A Way Back to Each Other",
    description:
      "When the world feels divided, we find strength in coming together. Pangaea reconnects people through genuine, local, private community.",
    images: [
      {
        url: "/a-way-back.png",
        width: 1200,
        height: 630,
        alt: "Pangaea — A Way Back to Each Other",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pangaea — A Way Back to Each Other",
    description:
      "Building bridges, not walls. A private, community-first way to reconnect with the people around you.",
    images: ["/a-way-back.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pangaea.dev",
  },
  themeColor: "#F2E6D8", // warm neutral; optional but helps mobile previews
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${lora.variable} ${inconsolata.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}