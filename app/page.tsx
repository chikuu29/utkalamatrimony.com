import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Features></Features>
    </>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: "Utkal Matrimony - Find Your Perfect Match",
  description:
    "Utkal Matrimony helps you find your ideal life partner with ease and trust.",
  keywords: ["Matrimony", "Marriage", "Utkal", "Matchmaking"],
  openGraph: {
    title: "Utkal Matrimony - Trusted Matchmaking",
    description:
      "Join Utkal Matrimony today to connect with your perfect match!",
    url: "https://utkalmatrimony.com/",
    siteName: "Utkal Matrimony",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Utkal Matrimony Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkal Matrimony",
    description: "Find your perfect life partner with Utkal Matrimony",
    images: [""],
  },
};
