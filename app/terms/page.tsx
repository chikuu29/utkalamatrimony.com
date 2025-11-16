export const metadata = {
  title: "Terms & Conditions — Utkal Matrimony",
  description:
    "Terms and conditions for using Utkal Matrimony — membership, payments, content, and responsibilities.",
  openGraph: {
    title: "Utkal Matrimony — Terms & Conditions",
    description: "Terms and conditions for using Utkal Matrimony.",
    url: "https://utkalamatrimony.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const effectiveDate = "November 16, 2025";

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#444] text-center">
          Terms & <span className="text-[#b69a60]">Conditions</span>{" "}
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          Please read these Terms & Conditions carefully before using the Utkal
          Matrimony website and services.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Effective date: {effectiveDate}
        </p>
      </div>

      <section className="space-y-6 text-sm text-gray-700">
        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Utkal Matrimony ("the Service"), you agree to
            be bound by these Terms & Conditions and all applicable laws and
            regulations. If you do not agree with any of these terms, you must
            not use the Service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            2. Eligibility
          </h2>
          <p>
            You must be at least 18 years old to register for an account. By
            registering you represent and warrant that you meet the eligibility
            requirements. The Service is intended for people seeking matrimonial
            matches; commercial or non-personal use is not permitted without
            explicit permission.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            3. Account Registration
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You are responsible for keeping your account credentials secure
              and for all activity under your account.
            </li>
            <li>
              You agree to provide accurate, current and complete information
              and to update your profile as necessary.
            </li>
            <li>
              We may suspend or terminate accounts that provide false
              information, or that engage in abusive or illegal activities.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            4. User Conduct
          </h2>
          <p>
            You agree not to use the Service to upload, post, or transmit any
            content that is unlawful, harmful, threatening, abusive, harassing,
            defamatory, vulgar, or otherwise objectionable. You must respect
            other members' privacy and safety.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            5. Memberships & Payments
          </h2>
          <p>
            Some features of the Service may require payment or subscription
            (premium plans). All fees are described on the Pricing page. By
            purchasing a subscription you agree to the billing terms, including
            recurring charges where applicable.
          </p>
          <p className="mt-2">
            Refunds, cancellations and billing disputes are handled in
            accordance with our refund policy. We reserve the right to change
            prices and fees with prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            6. Content & Intellectual Property
          </h2>
          <p>
            All content on the Service (text, graphics, logos, images) is owned
            or licensed to Utkal Matrimony. You are granted a limited,
            non-exclusive license to use the Service for personal matchmaking
            purposes only. You may not reproduce, distribute, or create
            derivative works without permission.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            7. Safety & Verification
          </h2>
          <p>
            We strive to verify profiles and provide a safe environment, but we
            cannot guarantee the authenticity of every user. Exercise caution
            when interacting with other members and do not share sensitive
            personal information. Report suspicious behavior to support
            immediately.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            8. Disclaimers
          </h2>
          <p>
            The Service is provided "as is" and "as available" without
            warranties of any kind. We expressly disclaim all warranties,
            whether express or implied, including merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            9. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Utkal Matrimony and its
            affiliates will not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the
            Service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            10. Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Service for
            violations of these Terms, fraudulent activity, or other reasons at
            our discretion. You may also delete your account using the account
            settings or by contacting support.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            11. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the jurisdiction where Utkal Matrimony operates. Any
            disputes will be subject to the exclusive jurisdiction of the
            appropriate courts.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            12. Changes to Terms
          </h2>
          <p>
            We may modify these Terms from time to time. When we do, we will
            update the Effective Date above. Continued use of the Service after
            changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#b69a60] mb-2">
            13. Contact
          </h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a
              href="mailto:support@utkalmatrimony.com"
              className="text-[#b69a60]"
            >
              support@utkalmatrimony.com
            </a>{" "}
            or use the{" "}
            <a href="/contact" className="text-[#b69a60]">
              Contact
            </a>{" "}
            page.
          </p>
        </div>
      </section>

      <div className="mt-10 text-sm text-gray-600">
        <p>
          Thank you for using Utkal Matrimony. Please use the Service
          responsibly.
        </p>
      </div>
    </main>
  );
}
