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
    <div className="h-30 bg-[#f7efdf]">
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
            <Link href="/" className="flex items-center">
              <img
                src="/utkal_matrimony_logo.png"
                alt="Utkal Matrimony"
                className="hover:shadow-md rounded-2xl h-14 w-auto sm:h-16 md:h-16 object-contain hover:opacity-80 transition-opacity duration-300  mix-blend-multiply"
              />
            </Link>

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
