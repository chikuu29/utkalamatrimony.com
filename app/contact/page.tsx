// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Your Website Name",
  description:
    "Get in touch with us for any queries, support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-[#444] mb-4 text-center">
        Contact <span className="text-[#b69a60]">Us</span>
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>
      <ContactForm />
    </div>
  );
}
