"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

type FormState = {
  // initial contact
  mobile_number: string;
  email: string;
  password: string;
  confirm_password: string;

  // basic info
  looking_for: string;
  profile_created_by: string;
  full_name: string;
  gender: string;
  date_of_birth: string;
  religion: string;
  mother_tongue: string;

  // location
  country: string;
  state: string;
  city: string;

  // agreement
  terms_agreement: boolean;
};

const DRAFT_KEY = "signup_draft_v1";

const initialState: FormState = {
  mobile_number: "",
  email: "",
  password: "",
  confirm_password: "",
  looking_for: "Bride",
  profile_created_by: "Self",
  full_name: "",
  gender: "Male",
  date_of_birth: "",
  religion: "Hindu",
  mother_tongue: "Odia",
  country: "India",
  state: "Odisha",
  city: "Bhubaneswar",
  terms_agreement: false,
};

// Unified registration steps configuration.
// Change labels, mobileLabel, title or subtitle here to affect stepper and per-step headers.
type StepConfig = {
  label: string;
  mobileLabel: string;
  title: string;
  subtitle: string;
};

const STEPS: StepConfig[] = [
  {
    label: "Start",
    mobileLabel: "Start",
    title: "Start with contact",
    subtitle: "Provide a phone number or email so we can save your progress.",
  },
  {
    label: "Basic Info",
    mobileLabel: "Info",
    title: "Basic Information",
    subtitle: "Tell us a little about yourself.",
  },
  {
    label: "Contact",
    mobileLabel: "Contact",
    title: "Contact & Password",
    subtitle: "Add contact details and a secure password.",
  },
  {
    label: "Location",
    mobileLabel: "Location",
    title: "Location",
    subtitle: "Where are you located?",
  },
  {
    label: "Review",
    mobileLabel: "Review",
    title: "Review & Submit",
    subtitle: "Confirm your details before submitting.",
  },
];

// Page-level texts (configurable)
const PAGE_TITLE_PART1 = "Create your";
const PAGE_TITLE_HIGHLIGHT = "profile";
const PAGE_SUBTITLE = "Quick, secure and private — start with phone or email.";

function useDraft() {
  const [draft, setDraft] = useState<FormState | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setDraft(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  const save = (data: FormState) => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    setDraft(data);
  };
  const clear = () => {
    localStorage.removeItem(DRAFT_KEY);
    setDraft(null);
  };

  return { draft, save, clear };
}

export default function SignupPage() {
  const { draft, save, clear } = useDraft();

  const [form, setForm] = useState<FormState>(initialState);
  const [step, setStep] = useState<number>(draft ? 1 : 0); // if draft exists, start after initial
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (draft) setForm((s) => ({ ...s, ...draft } as FormState));
  }, [draft]);

  // helper
  const update = (patch: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...patch }));

  const requireContact = () => {
    return (
      (form.mobile_number && form.mobile_number.trim().length >= 10) ||
      (form.email && form.email.includes("@"))
    );
  };

  const next = () => {
    setMessage(null);
    if (step === 0) {
      if (!requireContact()) {
        setMessage("Enter a valid mobile number or email to continue.");
        return;
      }
      // save draft early
      save(form);
      setStep(1);
      setMessage("We saved your contact — you can resume later.");
      return;
    }

    if (step === 3) {
      // check terms
      if (!form.terms_agreement) {
        setMessage("You must agree to the Terms & Privacy Policy to continue.");
        return;
      }
    }

    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const saveDraft = () => {
    save(form);
    setMessage("Draft saved — you can resume anytime.");
  };

  const submit = async () => {
    // Basic validation
    if (!requireContact()) {
      setMessage("Please provide a valid contact before submitting.");
      setStep(0);
      return;
    }
    if (form.password && form.password !== form.confirm_password) {
      setMessage("Passwords do not match.");
      setStep(2);
      return;
    }

    // Simulate submit
    try {
      // TODO: call API
      await new Promise((r) => setTimeout(r, 800));
      clear();
      setMessage("Registration complete — check your email/phone to verify.");
      setStep(4);
    } catch (e) {
      setMessage("Submission failed. Please try again.");
    }
  };

  // Step components
  const StepIndicator = () => {
  const steps: string[] = STEPS.map((s) => s.label);
  const mobileLabels: string[] = STEPS.map((s) => s.mobileLabel);
  const lastIndex = STEPS.length - 1;

    return (
      <div className="mb-10">
        <div className="flex items-center justify-between relative px-1 sm:px-2">
          {/* Connection line background */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
          <div
            className="absolute top-6 left-0 h-1 bg-green-500 -z-10 transition-all duration-500"
            style={{ width: step === 0 ? "0%" : step === lastIndex ? "100%" : `${(step / lastIndex) * 100}%` }}
          ></div>

          {steps.map((label: string, i: number) => {
            const isCompleted = i < step;
            const isCurrent = i === step;
            const isUpcoming = i > step;

            return (
              <div key={label} className="flex flex-col items-center flex-1">
                {/* Circle (clickable when completed) */}
                <button
                  type="button"
                  onClick={isCompleted ? () => setStep(i) : undefined}
                  title={isCompleted ? `Go to ${label}` : undefined}
                  aria-current={isCurrent ? "step" : undefined}
                  aria-disabled={!isCompleted && !isCurrent}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg transition-all duration-300 focus:outline-none ${
                    isCompleted
                      ? "bg-green-500 text-white shadow-lg scale-110 cursor-pointer hover:scale-105"
                      : isCurrent
                      ? "bg-[#b69a60] text-white shadow-lg scale-110"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </button>

                {/* Label - show abbreviated text on mobile, full text on desktop */}
                <div
                  className={`mt-2 text-center font-medium transition-colors duration-300 ${
                    isCompleted
                      ? "text-green-600"
                      : isCurrent
                      ? "text-[#b69a60]"
                      : "text-gray-500"
                  }`}
                >
                  <div className="hidden sm:block text-xs sm:text-sm">{label}</div>
                  <div className="sm:hidden text-xs leading-tight max-w-[50px]">{mobileLabels[i]}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#444] mb-4">
          {PAGE_TITLE_PART1} <span className="text-[#b69a60]">{PAGE_TITLE_HIGHLIGHT}</span>
        </h2>
        <p className="text-sm text-gray-600 mb-6">{PAGE_SUBTITLE}</p>
      </div>
      {draft && (
        <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-300 text-sm">
          We found a saved draft — your previous data was restored. You can
          continue from where you left off.
        </div>
      )}

      <StepIndicator />

      <div className="bg-white p-6 rounded-lg shadow">
          {message && (
            <div
              className={`mb-4 p-4 rounded-lg border-l-4 flex items-start gap-3 animate-fadeIn ${
                message.toLowerCase().includes('error') || message.toLowerCase().includes('invalid') || message.toLowerCase().includes('required')
                  ? 'bg-red-50 border-red-400 text-red-700'
                  : message.toLowerCase().includes('success') || message.toLowerCase().includes('complete')
                  ? 'bg-green-50 border-green-400 text-green-700'
                  : 'bg-blue-50 border-blue-400 text-blue-700'
              }`}
            >
              {message.toLowerCase().includes('error') || message.toLowerCase().includes('invalid') || message.toLowerCase().includes('required') ? (
                  <svg className="w-5 h-5 shrink-0 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              ) : message.toLowerCase().includes('success') || message.toLowerCase().includes('complete') ? (
                  <svg className="w-5 h-5 shrink-0 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                  <svg className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              )}
              <div>
                <p className="font-medium">{message}</p>
              </div>
            </div>
          )}

        {step === 0 && (
          <section>
            <h2 className="text-lg font-medium mb-3">{STEPS[0].title}</h2>
            <p className="text-sm text-gray-600 mb-4">{STEPS[0].subtitle}</p>

            <label className="block mb-3">
              <span className="text-sm">Mobile Number</span>
              <input
                value={form.mobile_number}
                onChange={(e) => update({ mobile_number: e.target.value })}
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                placeholder="9876543210"
                inputMode="numeric"
              />
            </label>

            <label className="block mb-3">
              <span className="text-sm">Email (optional)</span>
              <input
                value={form.email}
                onChange={(e) => update({ email: e.target.value })}
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                placeholder="you@example.com"
                type="email"
              />
            </label>

            <div className="flex gap-3 mt-4">
              <button
                onClick={next}
                className="bg-[#b69a60] text-white px-4 py-2 rounded-md"
              >
                Continue
              </button>
              <button
                onClick={saveDraft}
                className="px-4 py-2 rounded-md border"
              >
                Save draft
              </button>
            </div>
          </section>
        )}

        {step === 1 && (
          <section>
            <h2 className="text-lg font-medium mb-3">{STEPS[1].title}</h2>
            <p className="text-sm text-gray-600 mb-4">{STEPS[1].subtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <span className="text-sm">Looking For</span>
                <select
                  value={form.looking_for}
                  onChange={(e) => update({ looking_for: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Bride</option>
                  <option>Groom</option>
                </select>
              </label>

              <label>
                <span className="text-sm">Profile Created By</span>
                <select
                  value={form.profile_created_by}
                  onChange={(e) =>
                    update({ profile_created_by: e.target.value })
                  }
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Self</option>
                  <option>Parent</option>
                  <option>Sibling</option>
                  <option>Friend</option>
                </select>
              </label>

              <label className="md:col-span-2">
                <span className="text-sm">Full Name</span>
                <input
                  value={form.full_name}
                  onChange={(e) => update({ full_name: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                  placeholder="Surya Narayan"
                />
              </label>

              <label>
                <span className="text-sm">Gender</span>
                <select
                  value={form.gender}
                  onChange={(e) => update({ gender: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span className="text-sm">Date of Birth</span>
                <input
                  value={form.date_of_birth}
                  onChange={(e) => update({ date_of_birth: e.target.value })}
                  type="date"
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                />
              </label>

              <label>
                <span className="text-sm">Religion</span>
                <select
                  value={form.religion}
                  onChange={(e) => update({ religion: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span className="text-sm">Mother Tongue</span>
                <select
                  value={form.mother_tongue}
                  onChange={(e) => update({ mother_tongue: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Odia</option>
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </label>
            </div>

            <div className="flex gap-3 mt-4">
              <button onClick={back} className="px-4 py-2 rounded-md border">
                Back
              </button>
              <button
                onClick={() => {
                  save(form);
                  setStep(2);
                }}
                className="bg-[#b69a60] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <h2 className="text-lg font-medium mb-3">{STEPS[2].title}</h2>
            <p className="text-sm text-gray-600 mb-3">{STEPS[2].subtitle}</p>

            <label className="block mb-3">
              <span className="text-sm">Mobile Number</span>
              <input
                value={form.mobile_number}
                onChange={(e) => update({ mobile_number: e.target.value })}
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                placeholder="9876543210"
              />
            </label>

            <label className="block mb-3">
              <span className="text-sm">Email</span>
              <input
                value={form.email}
                onChange={(e) => update({ email: e.target.value })}
                className="mt-1 block w-full border px-3 py-2 rounded-md"
                placeholder="you@example.com"
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                <span className="text-sm">Password</span>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => update({ password: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                />
              </label>

              <label>
                <span className="text-sm">Confirm Password</span>
                <input
                  type="password"
                  value={form.confirm_password}
                  onChange={(e) => update({ confirm_password: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                />
              </label>
            </div>

            <div className="flex gap-3 mt-4">
              <button onClick={back} className="px-4 py-2 rounded-md border">
                Back
              </button>
              <button
                onClick={() => {
                  save(form);
                  setStep(3);
                }}
                className="bg-[#b69a60] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <h2 className="text-lg font-medium mb-3">{STEPS[3].title}</h2>
            <p className="text-sm text-gray-600 mb-3">{STEPS[3].subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label>
                <span className="text-sm">Country</span>
                <select
                  value={form.country}
                  onChange={(e) => update({ country: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>India</option>
                </select>
              </label>

              <label>
                <span className="text-sm">State</span>
                <select
                  value={form.state}
                  onChange={(e) => update({ state: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Odisha</option>
                </select>
              </label>

              <label>
                <span className="text-sm">City</span>
                <select
                  value={form.city}
                  onChange={(e) => update({ city: e.target.value })}
                  className="mt-1 block w-full border px-3 py-2 rounded-md"
                >
                  <option>Bhubaneswar</option>
                </select>
              </label>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={form.terms_agreement}
                  onChange={(e) =>
                    update({ terms_agreement: e.target.checked })
                  }
                  className="mr-2"
                />
                <span className="text-sm">
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-[#b69a60]">
                    Terms & Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <div className="flex gap-3 mt-4">
              <button onClick={back} className="px-4 py-2 rounded-md border">
                Back
              </button>
              <button
                onClick={next}
                className="bg-[#b69a60] text-white px-4 py-2 rounded-md"
              >
                Review
              </button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section>
            <h2 className="text-lg font-medium mb-3">{STEPS[4].title}</h2>
            <p className="text-sm text-gray-600 mb-3">{STEPS[4].subtitle}</p>

            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <strong>Looking For:</strong> {form.looking_for}
              </div>
              <div>
                <strong>Full Name:</strong> {form.full_name}
              </div>
              <div>
                <strong>Gender:</strong> {form.gender}
              </div>
              <div>
                <strong>DOB:</strong> {form.date_of_birth}
              </div>
              <div>
                <strong>Religion:</strong> {form.religion}
              </div>
              <div>
                <strong>Mother Tongue:</strong> {form.mother_tongue}
              </div>
              <div>
                <strong>Mobile:</strong> {form.mobile_number}
              </div>
              <div>
                <strong>Email:</strong> {form.email}
              </div>
              <div>
                <strong>Location:</strong> {form.city}, {form.state},{" "}
                {form.country}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={back} className="px-4 py-2 rounded-md border">
                Back
              </button>
              <button
                onClick={submit}
                className="bg-[#b69a60] text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                onClick={saveDraft}
                className="px-4 py-2 rounded-md border"
              >
                Save Draft
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
