export const metadata = {
  title: "FAQ — Utkal Matrimony",
  description: "Frequently Asked Questions about Utkal Matrimony — accounts, safety, subscriptions and support.",
  openGraph: {
    title: "Utkal Matrimony — FAQ",
    description: "Answers to common questions about using Utkal Matrimony.",
  },
};

import FAQAccordion from "../../components/FAQAccordion";

export default function FAQPage() {
  const faqs = [
    {
      q: "How do I create an account?",
      a: "Click the Sign Up button and follow the step-by-step registration. You can save a draft and resume later.",
    },
    {
      q: "Is registration free?",
      a: "Yes — basic registration is free. Some premium features and subscriptions are paid. See the Pricing page for details.",
    },
    {
      q: "How do you keep profiles safe and verified?",
      a: "We run a combination of manual checks and verification steps (phone/email). Avoid sharing sensitive data publicly and report suspicious profiles to support.",
    },
    {
      q: "Can I delete my account?",
      a: "Yes — contact support via the Contact page or email us and we will guide you through the account deletion process.",
    },
    {
      q: "How do subscriptions work?",
      a: "Subscriptions unlock premium features. You can choose monthly or yearly plans. Payment options are shown on the Pricing page.",
    },
    {
      q: "I found a bug or have a suggestion — how can I report it?",
      a: "Please use the Contact page or email support@utkalmatrimony.com with a detailed description; include screenshots if helpful.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#444]">Frequently Asked <span className="text-[#b69a60]">Questions</span> </h1>
        <p className="text-sm text-gray-600 mt-2">Helpful answers to common questions about using Utkal Matrimony.</p>
      </div>

      <section>
        <FAQAccordion faqs={faqs} />
      </section>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">Didn't find what you need?</p>
        <a href="/contact" className="inline-block bg-[#b69a60] text-white px-5 py-2 rounded-md hover:opacity-95">Contact Support</a>
      </div>
    </main>
  );
}
