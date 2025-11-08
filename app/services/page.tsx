// "use client";

import Link from "next/link";
import * as React from "react";

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 md:py-30">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We provide a range of matchmaking services designed to help you meet
          compatible partners with trust, privacy, and guidance.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-3">Profile Creation</h3>
          <p className="text-gray-600 mb-4">
            Detailed profile setup assistance: professional photos, bio help,
            and family background fields to make your profile stand out.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Profile audit & optimization</li>
            <li>Guided profile writing</li>
            <li>Photo tips & uploads</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-3">Matchmaking & Search</h3>
          <p className="text-gray-600 mb-4">
            Powerful search and curated match recommendations using preferences
            and behaviour signals.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>Advanced filters (education, location, caste, etc.)</li>
            <li>Personalized match suggestions</li>
            <li>Daily curated matches</li>
          </ul>
        </article>

        <article className="bg-white p-6 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-3">Verification & Safety</h3>
          <p className="text-gray-600 mb-4">
            We verify profiles and provide safety features to make your
            conversations secure and trustworthy.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>ID verification badges</li>
            <li>Privacy controls and blocking</li>
            <li>Secure messaging</li>
          </ul>
        </article>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h4 className="text-xl font-semibold mb-3">Premium Features</h4>
          <p className="text-gray-600 mb-4">
            Unlock Premium for advanced visibility, unlimited contacts, and
            verified badges to increase trust with prospective matches.
          </p>
          <Link href="/pricing" className="inline-block bg-[#b69a60] text-white px-5 py-2 rounded-md hover:bg-[#c7a96d] transition">
            View Pricing
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <h4 className="text-xl font-semibold mb-3">Counselling & Support</h4>
          <p className="text-gray-600 mb-4">
            Relationship counselling, onboarding help, and dedicated support to
            guide you through meetings and decisions.
          </p>
          <Link href="/contact" className="inline-block px-5 py-2 rounded-md border border-[#bea366] text-[#6b4f2e] hover:bg-[#f8f1e0] transition">
            Contact Support
          </Link>
        </div>
      </section>

      <section className="mt-12 text-center text-gray-600">
        <p className="max-w-2xl mx-auto">Want a tailored plan? <Link href="/contact" className="text-[#b69a60] underline">Get in touch</Link> and we'll help build a custom matchmaking plan.</p>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Services — Utkal Matrimony",
  description: "Discover our matchmaking services: profile creation, verification, personalized matching, and premium plans.",
  openGraph: {
    title: "Services — Utkal Matrimony",
    description: "Profile optimization, curated matches, verification and premium subscription plans to help you find a trusted life partner.",
    url: "https://utkalamatrimony.com/services",
    siteName: "Utkal Matrimony",
    type: "website",
    images: [
      {
        url: "https://utkalamatrimony.com/og-services.png",
        alt: "Utkal Matrimony - Services",
      },
    ],
  },
  robots: { index: true, follow: true },
};
