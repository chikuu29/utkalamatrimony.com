
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fef9f0] text-[#444] border-t border-[#e0d5b8] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#b69a60] mb-3">
            Utkal Matrimony
          </h2>
          <p className="text-sm leading-relaxed">
            Connecting hearts with trust and tradition. Find your perfect match
            and begin your journey with confidence and happiness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#b69a60] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Pricing", "Contact", "Review"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  className="hover:text-[#b69a60] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-[#b69a60] mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:text-[#b69a60] transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#b69a60] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#b69a60] transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#b69a60] mb-3">
            Get in Touch
          </h3>
          <p className="text-sm">📍 Bhubaneswar, Odisha, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@utkalmatrimony.com</p>

          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="hover:text-[#b69a60] transition-colors text-xl"
            >
              🌐
            </Link>
            <Link
              href="#"
              className="hover:text-[#b69a60] transition-colors text-xl"
            >
              📘
            </Link>
            <Link
              href="#"
              className="hover:text-[#b69a60] transition-colors text-xl"
            >
              📸
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#e0d5b8] text-center text-sm py-4 bg-[#f9f4e5]">
        © {new Date().getFullYear()} Utkal Matrimony — All Rights Reserved.
      </div>
    </footer>
  );
}
