"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f7efdf] text-center px-6">
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-[#b69a60] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="bg-[#b69a60] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#a18453] transition duration-300"
        >
          Go Home
        </Link>
        <button
          onClick={() => router.back()}
          className="border border-[#b69a60] text-[#b69a60] px-6 py-3 rounded-md hover:bg-[#f3e8c8] transition duration-300"
        >
          Go Back
        </button>
      </div>

      {/* Optional Decorative Image */}
      <div className="mt-10 opacity-80">
        <img
          src="/couple_transparent.png"
          alt="Couple Illustration"
          className="w-64 mx-auto object-contain"
        />
      </div>
    </div>
  );
}
