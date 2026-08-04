"use client";

import { useEffect, useState } from "react";
import { submitGojobinForm } from "../lib/gojobinFormApi";

const initialEnquiryForm = {
  fullName: "",
  mobileNumber: "",
  email: "",
  message: "",
};

export default function EnquiryModal({ context, isOpen, onClose }) {
  const [enquiryForm, setEnquiryForm] = useState(initialEnquiryForm);
  const [enquiryStatus, setEnquiryStatus] = useState({
    message: "",
    type: "idle",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setEnquiryForm(initialEnquiryForm);
    setEnquiryStatus({ message: "", type: "idle" });
    setIsSubmitting(false);
  }, [context, isOpen]);

  if (!isOpen) {
    return null;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setEnquiryForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    if (enquiryStatus.type !== "idle") {
      setEnquiryStatus({ message: "", type: "idle" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setEnquiryStatus({ message: "", type: "idle" });

    try {
      await submitGojobinForm({
        ...enquiryForm,
        enquiryType: context || "Launch enquiry",
      });

      setEnquiryForm(initialEnquiryForm);
      setEnquiryStatus({
        message: "Thank you. Your enquiry has been submitted.",
        type: "success",
      });
    } catch (error) {
      setEnquiryStatus({
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit enquiry right now.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/65 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        aria-labelledby="enquiry-modal-title"
        aria-modal="true"
        className="modal-panel max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/30"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#c95709]">
              Enquiry form
            </p>
            <h2
              id="enquiry-modal-title"
              className="mt-1 text-2xl font-bold text-slate-950"
            >
              Tell us what you need
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              You are enquiring about:{" "}
              <span className="font-semibold text-[#0a66b2]">{context}</span>
            </p>
          </div>
          <button
            aria-label="Close enquiry form"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl leading-none text-slate-600 transition hover:border-[#0a66b2] hover:text-[#0a66b2]"
            onClick={onClose}
            type="button"
          >
            x
          </button>
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Full name
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                name="fullName"
                onChange={handleChange}
                placeholder="Enter your name"
                required
                type="text"
                value={enquiryForm.fullName}
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Mobile number
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                name="mobileNumber"
                onChange={handleChange}
                placeholder="+91"
                required
                type="tel"
                value={enquiryForm.mobileNumber}
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Email
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                required
                type="email"
                value={enquiryForm.email}
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Enquiry type
              </span>
              <span className="mt-2 text-sm font-medium text-slate-900">
                {context}
              </span>
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
              <span className="text-xs font-medium uppercase text-slate-500">
                Message
              </span>
              <textarea
                className="mt-2 min-h-28 resize-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                name="message"
                onChange={handleChange}
                placeholder="Tell us what you need help with"
                required
                value={enquiryForm.message}
              />
            </label>
          </div>
          {enquiryStatus.message ? (
            <p
              className={`mt-4 rounded-[6px] px-4 py-3 text-sm font-semibold ${
                enquiryStatus.type === "success"
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700"
              }`}
              role="status"
            >
              {enquiryStatus.message}
            </p>
          ) : null}
          <button
            className="shine-button mt-5 min-h-12 rounded-[6px] bg-[#f47a20] px-7 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
