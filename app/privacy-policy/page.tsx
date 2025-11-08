import React from "react";

export const metadata = {
  title: "Privacy Policy | Utkal Matrimony",
  description:
    "Read our Privacy Policy to understand how Utkal Matrimony protects your personal information and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-30 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-[#b69a60] mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>Utkal Matrimony</strong>, we value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard your data when you use our
        website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, phone
        number, gender, and profile information when you register or interact
        with our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your data is used to provide matchmaking services, improve our platform,
        communicate with you, and ensure a safe and personalized experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Security</h2>
      <p className="mb-4">
        We use industry-standard encryption and security practices to protect
        your personal data from unauthorized access, misuse, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal data. Information is only shared with
        trusted partners or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
      <p className="mb-4">
        You can access, modify, or delete your data anytime by logging into your
        account or contacting our support team.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Updates to this Policy</h2>
      <p className="mb-4">
        We may update this policy periodically. Please review it regularly to
        stay informed about how we protect your information.
      </p>

      <p className="mt-8">
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a
          href="mailto:support@utkalmatrimony.com"
          className="text-[#b69a60] underline"
        >
          support@utkalmatrimony.com
        </a>
        .
      </p>
    </main>
  );
}
