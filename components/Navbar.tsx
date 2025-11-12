"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Hide promo and detect scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowPromo(scrollY <= 60);
      setScrolled(scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-25 bg-[#f7efdf]">
    <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 🔹 Promotional Bar */}

      {showPromo && (
        <div
          className={`bg-[#b69a60] text-white text-center text-sm py-2 transition-all duration-300 ${
            showPromo
              ? "opacity-100 max-h-10"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          🎉 Limited Offer: Get 50% off on your first subscription! 🎉
        </div>
      )}

      {/* 🔹 Navigation Bar */}
      <nav>
        <div
          className={`transition-all duration-500 max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8  ${
            scrolled ? "bg-[#f7efdf]  rounded-2xl px-3 " : "bg-[#f7efdf]"
          }`}
        >
          <div className="flex justify-between items-center h-16 transition-all duration-500">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                {/* Logo Icon */}
                <div className="bg-[#b69a60] text-white p-2 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21C12 21 4.5 13.875 4.5 8.625C4.5 5.25 7.125 3 10.5 3C11.97 3 13.365 3.765 14.25 4.905C15.135 3.765 16.53 3 18 3C21.375 3 24 5.25 24 8.625C24 13.875 16.5 21 16.5 21H12Z"
                    />
                  </svg>
                </div>

                {/* Logo Text */}
                <span className="text-2xl font-semibold text-[#444] hover:text-[#b69a60] transition duration-300">
                  Utkal Matrimony
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div
              className={`hidden md:flex space-x-4 font-medium text-[#444] bg-[#f7efdf] overflow-hidden rounded-[10px] ${
                scrolled ? "shadow-md " : ""
              }  `}
            >
              {["Home", "About", "Services", "Contact", "Review"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="px-4 py-2 rounded-lg transition-all duration-300 
                    hover:text-[#b69a60] hover:bg-[#f3e8c8] hover:shadow-md hover:border hover:border-[#b69a60] "
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* Login / Signup */}
            <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
              <div className="flex justify-between border border-[#bea366] rounded-[10px] overflow-hidden text-[#bea366]">
                <Link href="/login" className="py-1.5 px-6 cursor-pointer hover:bg-[#f8f1e0] transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="py-1.5 px-6 cursor-pointer bg-[#b69a60] text-white hover:bg-[#c7a96d] transition-colors">
                  Signup
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#b69a60] focus:outline-none transition-colors"
              >
                {isOpen ? (
                  <X
                    size={28}
                    className="transition-transform duration-300 rotate-180"
                  />
                ) : (
                  <Menu
                    size={28}
                    className="transition-transform duration-300"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#f7efdf] shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="block text-gray-700 hover:text-[#b69a60]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}

              {/* <div className="mt-2 border-t border-[#e8dfc9] pt-2">
                <Link href="/login" className="block text-gray-700 hover:text-[#b69a60]" onClick={() => setIsOpen(false)}>Login</Link>
                <Link href="/signup" className="block text-gray-700 hover:text-[#b69a60]" onClick={() => setIsOpen(false)}>Signup</Link>
              </div> */}
              <div className="flex justify-between border border-[#bea366] rounded-[10px] overflow-hidden text-[#bea366]">
                 <Link href="/signup" className="py-1.5 px-6 cursor-pointer bg-[#b69a60] text-white hover:bg-[#c7a96d] transition-colors">
                  Signup
                </Link>
                <Link href="/login" className="py-1.5 px-6 cursor-pointer hover:bg-[#f8f1e0] transition-colors">
                  Login
                </Link>
               
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
    </div>
  );
}
