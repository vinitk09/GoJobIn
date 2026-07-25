"use client";

export default function EnquiryModal({ context, isOpen, onClose }) {
  if (!isOpen) {
    return null;
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

        <form className="mt-5" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Full name
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Enter your name"
                type="text"
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Mobile number
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="+91"
                type="tel"
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Email
              </span>
              <input
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="you@example.com"
                type="email"
              />
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-xs font-medium uppercase text-slate-500">
                Enquiry type
              </span>
              <select
                className="mt-2 bg-transparent text-sm text-slate-900 outline-none"
                defaultValue={context}
              >
                <option>{context}</option>
                <option>Looking for a job</option>
                <option>Hiring candidates</option>
                <option>Need pricing details</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label className="field-card flex flex-col rounded-[6px] border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
              <span className="text-xs font-medium uppercase text-slate-500">
                Message
              </span>
              <textarea
                className="mt-2 min-h-28 resize-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                placeholder="Tell us what you need help with"
              />
            </label>
          </div>
          <button className="shine-button mt-5 min-h-12 rounded-[6px] bg-[#f47a20] px-7 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5">
            Submit enquiry
          </button>
        </form>
      </div>
    </div>
  );
}
