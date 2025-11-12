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
  const StepIndicator = () => (
    <div className="flex items-center gap-3 mb-6">
      {["Start", "Basic Info", "Contact", "Location", "Review"].map(
        (label, i) => (
          <div
            key={label}
            className={`flex items-center gap-2 ${
              i <= step ? "text-[#b69a60]" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i <= step
                  ? "bg-[#b69a60] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            <div className="hidden sm:block text-sm">{label}</div>
          </div>
        )
      )}
    </div>
  );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#444] mb-4">
          Create your <span className="text-[#b69a60]">profile</span>
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Quick, secure and private — start with phone or email.
        </p>
      </div>
      {draft && (
        <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-300 text-sm">
          We found a saved draft — your previous data was restored. You can
          continue from where you left off.
        </div>
      )}

      <StepIndicator />

      <div className="bg-white p-6 rounded-lg shadow">
        {message && <div className="mb-4 text-sm text-red-600">{message}</div>}

        {step === 0 && (
          <section>
            <h2 className="text-lg font-medium mb-3">Start with contact</h2>
            <p className="text-sm text-gray-600 mb-4">
              Provide a phone number or email so we can save your progress.
            </p>

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
            <h2 className="text-lg font-medium mb-3">Basic Information</h2>
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
            <h2 className="text-lg font-medium mb-3">Contact & Password</h2>
            <p className="text-sm text-gray-600 mb-3">
              We will use this to verify your account.
            </p>

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
            <h2 className="text-lg font-medium mb-3">Location</h2>

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
            <h2 className="text-lg font-medium mb-3">Review & Submit</h2>

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
