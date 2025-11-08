// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Your Website Name",
  description:
    "Get in touch with us for any queries, support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto py-30 px-4">
      {/* <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1> */}
      <h1 className="text-7xl font-extrabold text-[#b69a60] mb-4">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-8 text-center">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>
      <ContactForm />
    </div>
  );
}
