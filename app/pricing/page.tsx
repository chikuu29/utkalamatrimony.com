// "use client";

import Link from "next/link";
import * as React from "react";

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 md:py-30">
      <header className="text-center mb-12">
        {/* <h1 className="text-4xl md:text-5xl font-serif mb-4"></h1> */}
        {/* <h1 className="text-7xl font-extrabold text-[#b69a60] mb-4">Choose Your Plan</h1> */}
        <h2 className="text-4xl font-bold text-[#444] mb-4">
          Choose Your <span className="text-[#b69a60]">Plan</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Pick a subscription that fits your journey. Upgrade anytime to unlock
          more features and connect with trusted matches.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic */}
        <article className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold">Basic</h3>
            <span className="text-sm text-gray-500">Free</span>
          </div>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-3xl font-bold">₹0</span>
            <span className="text-gray-500">/ forever</span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>Profile creation</li>
            <li>Basic search filters</li>
            <li>Limited profile views</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/signup"
              className="block text-center px-4 py-2 rounded-md border border-[#bea366] text-[#6b4f2e] hover:bg-[#f8f1e0] transition"
            >
              Get Started
            </Link>
          </div>
        </article>

        {/* Premium - recommended */}
        <article className="relative rounded-2xl p-8 bg-white shadow-lg border-2 border-[#b69a60] transform md:scale-105">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-[#b69a60] text-white px-3 py-1 rounded-full text-sm">
              Most popular
            </span>
          </div>

          <h3 className="text-2xl font-semibold text-center">Premium</h3>
          <div className="mt-6 flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold">₹299</span>
            <span className="text-gray-500">/ month</span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-700 text-center">
            <li>Unlimited profile views</li>
            <li>Advanced search & filters</li>
            <li>Priority support & verified badges</li>
            <li>See who liked you</li>
          </ul>

          <div className="mt-8">
            <Link
              href="/signup"
              className="block text-center bg-[#b69a60] text-white px-6 py-3 rounded-md hover:bg-[#c7a96d] transition"
            >
              Start Premium
            </Link>
          </div>
        </article>

        {/* Gold */}
        <article className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold">Gold (Annual)</h3>
            <span className="text-sm text-gray-500">Save 20%</span>
          </div>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-3xl font-bold">₹2,499</span>
            <span className="text-gray-500">/ year</span>
          </div>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>Everything in Premium</li>
            <li>Dedicated relationship manager</li>
            <li>Featured profile slots</li>
          </ul>

          <div className="mt-6">
            <Link
              href="/signup"
              className="block text-center px-4 py-2 rounded-md border border-[#bea366] text-[#6b4f2e] hover:bg-[#f8f1e0] transition"
            >
              Subscribe Annual
            </Link>
          </div>
        </article>
      </section>

      <section className="mt-12">
        <h4 className="text-xl font-semibold mb-4">What's included</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold mb-2">Safety & Verification</h5>
            <p className="text-sm">
              Profile verification and privacy controls to keep the experience
              safe.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold mb-2">Personalized Matches</h5>
            <p className="text-sm">
              Get suggested matches tailored to your preferences and behaviour.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold mb-2">Support</h5>
            <p className="text-sm">
              Priority support for Premium and Gold subscribers.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 text-center text-gray-600">
        <p className="max-w-2xl mx-auto">
          Questions about subscriptions or billing?{" "}
          <Link href="/contact" className="text-[#b69a60] underline">
            Contact us
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Pricing — Utkal Matrimony",
  description:
    "Explore subscription plans for Utkal Matrimony — Basic, Premium, and Gold. Choose the plan that fits your matchmaking needs.",
  openGraph: {
    title: "Pricing — Utkal Matrimony",
    description:
      "Compare Basic, Premium and Gold plans. Unlock advanced search, verified badges and priority support with paid plans.",
    url: "https://utkalamatrimony.com/pricing",
    siteName: "Utkal Matrimony",
    type: "website",
    images: [
      {
        url: "https://utkalamatrimony.com/og-pricing.png",
        alt: "Utkal Matrimony - Pricing",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
