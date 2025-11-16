"use client";

import React, { useRef, useState, useEffect } from "react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <AccordionItem key={i} q={f.q} a={f.a} />
      ))}
    </div>
  );
}

function AccordionItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [contentRef, a]);

  useEffect(() => {
    // update height whenever open changes to trigger reflow for smooth animation
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full px-4 py-4 flex items-center justify-between text-left cursor-pointer"
      >
        <span className="text-gray-800 font-medium">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 10h8" />
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 6v8" />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: open ? (height ? `${height}px` : "none") : "0px" }}
        className="px-4 overflow-hidden transition-all duration-300"
        aria-hidden={!open}
      >
        <div className="py-3 text-sm text-gray-700">{a}</div>
      </div>
    </div>
  );
}
