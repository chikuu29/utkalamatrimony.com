// "use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30 md:py-30">
      <div className="space-y-8 md:space-y-12 text-center md:text-left">
        {/* <h1 className="text-4xl md:text-5xl font-serif"></h1> */}
        <h1 className="text-7xl font-extrabold text-[#b69a60] mb-4">About Us</h1>

        <p className="text-gray-700 max-w-3xl mx-auto md:mx-0 text-lg">
          Utkal Matrimony connects people who are serious about finding a life
          partner. We focus on shared values, clear profiles, and safe
          communication so you can meet compatible people with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide a friendly, secure, and value-driven matchmaking
              platform that empowers singles to find long-term relationships. We
              combine easy-to-use features with thoughtful design to keep the
              process human and respectful.
            </p>

            <Link href="/contact" className="inline-block bg-[#b69a60] text-white px-6 py-2 rounded-md hover:bg-[#c7a96d] transition">
              Contact Us
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <img src="/team/priya.jpg" alt="Priya Sharma" className="w-16 h-16 rounded-full object-cover shadow" />
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Founder & CEO</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/team/rohan.jpg" alt="Rohan Patel" className="w-16 h-16 rounded-full object-cover shadow" />
                <div>
                  <div className="font-semibold">Rohan Patel</div>
                  <div className="text-sm text-gray-500">Head of Product</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "About Us — Utkal Matrimony",
  description:
    "Utkal Matrimony connects singles seeking a life partner with trust, safety and values-driven matchmaking.",
  openGraph: {
    title: "About Us — Utkal Matrimony",
    description:
      "Learn about Utkal Matrimony's mission, team and the values that guide our matchmaking platform.",
    url: "https://utkalamatrimony.com/about",
    siteName: "Utkal Matrimony",
    type: "website",
    images: [
      {
        url: "https://utkalamatrimony.com/og-about.png",
        alt: "Utkal Matrimony - About",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
