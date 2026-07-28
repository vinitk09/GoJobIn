"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import EnquiryModal from "./components/EnquiryModal";

const locations = ["Delhi", "Kolkata", "Mumbai", "Bangalore", "Chennai"];

const stats = [
  { value: "12k+", label: "Jobs added" },
  { value: "58k+", label: "Active resumes" },
  { value: "3k+", label: "Companies hiring" },
  { value: "97%", label: "Fresher friendly roles" },
];

const categories = [
  "IT & Software",
  "Sales",
  "Banking",
  "BPO",
  "Digital Marketing",
  "Healthcare",
  "Engineering",
  "Human Resources",
];

const companies = [
  "TechWave",
  "HireNorth",
  "CareerBee",
  "TalentDesk",
  "UrbanStack",
  "PeoplePro",
];

const jobs = [
  {
    role: "Junior Frontend Developer",
    company: "BrightStack Labs",
    place: "Bangalore",
    type: "Fresher",
    salary: "3.6 - 5 LPA",
  },
  {
    role: "Customer Success Associate",
    company: "MetroHire Services",
    place: "Delhi NCR",
    type: "Full time",
    salary: "2.8 - 4.2 LPA",
  },
  {
    role: "Digital Marketing Executive",
    company: "BluePeak Media",
    place: "Mumbai",
    type: "0-1 years",
    salary: "3 - 4.5 LPA",
  },
];

const steps = [
  "Create your candidate profile",
  "Search jobs by city, skill, and sector",
  "Apply directly to verified openings",
];

const benefits = [
  {
    title: "Fresher-focused discovery",
    text: "Simple paths for first-job seekers, walk-in roles, internships, and entry-level hiring.",
  },
  {
    title: "Employer-ready profiles",
    text: "Candidates can highlight skills, city preference, experience, and availability clearly.",
  },
  {
    title: "Useful city targeting",
    text: "Job seekers and recruiters can focus on the locations where hiring moves fastest.",
  },
];

const cityHighlights = [
  { city: "Delhi NCR", roles: "Sales, BPO, IT support" },
  { city: "Mumbai", roles: "Marketing, finance, operations" },
  { city: "Bangalore", roles: "Software, product, support" },
  { city: "Kolkata", roles: "Back office, retail, healthcare" },
];

const stories = [
  {
    name: "Aman Verma",
    role: "Fresher candidate",
    text: "Found entry-level openings by city and applied without getting lost in complicated filters.",
  },
  {
    name: "Priya Sharma",
    role: "HR executive",
    text: "Posted a role and started receiving relevant candidate enquiries for local hiring needs.",
  },
  {
    name: "Rohit Das",
    role: "Sales professional",
    text: "The city-led job discovery helped shortlist roles close to home and save time during the search.",
  },
];

const footerCompanyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#enquiry" },
];

const footerQuickLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/gojobindia" },
  { label: "X", href: "https://x.com/gojobindia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gojobin/" },
  { label: "Instagram", href: "https://www.instagram.com/gojobindia/" },
];

function SocialIcon({ label }) {
  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
        <path
          d="M14.1 8.7V6.9c0-.8.6-1.4 1.4-1.4H17V2.3h-2.7c-3 0-4.8 1.8-4.8 4.7v1.7H7v3.4h2.5v9.6h3.7v-9.6h3l.5-3.4h-3.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
        <path
          d="m13.8 10.5 6.6-7.7h-1.6l-5.7 6.7-4.6-6.7H3.2l7 10.2-7 8.2h1.6l6.1-7.1 4.9 7.1h5.3l-7.3-10.7Zm-2.2 2.6-.7-1L5.3 4h2.4l4.5 6.5.7 1 5.9 8.4h-2.4l-4.8-6.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
        <path
          d="M6.9 8.9H3.5v11h3.4v-11ZM5.2 3.4a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1Zm15.3 10.2c0-3.3-1.8-4.9-4.2-4.9a3.7 3.7 0 0 0-3.3 1.8V8.9H9.7v11H13v-5.4c0-1.4.3-2.8 2-2.8s1.8 1.6 1.8 2.9v5.3h3.4v-6.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24">
      <path
        d="M7.8 2.5h8.4a5.3 5.3 0 0 1 5.3 5.3v8.4a5.3 5.3 0 0 1-5.3 5.3H7.8a5.3 5.3 0 0 1-5.3-5.3V7.8a5.3 5.3 0 0 1 5.3-5.3Zm0 1.9a3.4 3.4 0 0 0-3.4 3.4v8.4a3.4 3.4 0 0 0 3.4 3.4h8.4a3.4 3.4 0 0 0 3.4-3.4V7.8a3.4 3.4 0 0 0-3.4-3.4H7.8Zm4.2 3.2a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.7-2.3a1.1 1.1 0 1 1 0 2.1 1.1 1.1 0 0 1 0-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryFor, setEnquiryFor] = useState("General enquiry");
  const [selectedSector, setSelectedSector] = useState("Select sector");
  const [isSectorOpen, setIsSectorOpen] = useState(false);

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll("[data-scroll-reveal]"),
    );

    if (revealItems.length === 0) {
      return undefined;
    }

    document.documentElement.classList.add("scroll-reveal-ready");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));

      return () => {
        document.documentElement.classList.remove("scroll-reveal-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-reveal-ready");
    };
  }, []);

  function openEnquiry(context) {
    setEnquiryFor(context);
    setIsEnquiryOpen(true);
  }

  function handleFeatureClick(event) {
    if (!event.target.closest("[data-sector-dropdown]")) {
      setIsSectorOpen(false);
    }

    const trigger = event.target.closest("[data-enquiry]");

    if (!trigger) {
      return;
    }

    event.preventDefault();
    openEnquiry(trigger.getAttribute("data-enquiry") || "General enquiry");
  }

  function handleFeatureSubmit(event, context) {
    event.preventDefault();
    openEnquiry(context);
  }

  return (
    <>
    <main
      className="min-h-screen overflow-hidden bg-[#f7fafc] text-slate-950"
      onClick={handleFeatureClick}
    >
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="bg-[#16467d] text-sm font-medium text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>{locations.join(" | ")}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="tel:+919162080808">+91-9162080808</a>
              <a href="mailto:info@gojobin.com">info@gojobin.com</a>
            </div>
          </div>
        </div>

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
          <a href="#" className="shrink-0 transition hover:scale-[1.02]" aria-label="GoJobin home">
            <Image
              src="/image.png"
              alt="GoJobin"
              width={154}
              height={58}
              preload
              className="h-auto w-36 sm:w-40"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <a className="nav-link text-[#0a66b2]" href="#">
              Home
            </a>
            <a className="nav-link" href="#about">About us</a>
            <a className="nav-link" href="#candidate">Candidate</a>
            <a className="nav-link" href="#employer">Employer</a>
            <a className="nav-link" href="#pricing">Pricing</a>
            <a className="nav-link" href="#jobs">All Jobs</a>
            <a className="nav-link" href="#enquiry">Enquiry</a>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold">
            <a
              className="shine-button rounded-full bg-[#0a66b2] px-5 py-2.5 text-white shadow-sm shadow-blue-900/20"
              href="#post-job"
              data-enquiry="Post a job"
            >
              Post job
            </a>
          </div>
        </nav>
      </header>

      <div className="bg-[#f47a20] px-5 py-3 text-center text-sm font-semibold text-white">
        GoJobin website is coming soon - our main platform is currently under development.
      </div>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#eaf4ff_0%,#ffffff_48%,#fff5ee_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex rounded-full border border-[#b7d8f5] bg-white px-4 py-2 text-sm font-medium text-[#0a66b2] shadow-sm">
              Main website under development
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              GoJobin is coming soon
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We are building a fresh job portal experience for candidates and
              employers across India. Stay connected while the full website gets
              ready.
            </p>

            <form
              className="search-card mt-8 rounded-[8px] border border-slate-200 bg-white p-3 shadow-xl shadow-blue-950/10"
              onSubmit={(event) => handleFeatureSubmit(event, "Search jobs")}
            >
              <div className="grid gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)_minmax(0,0.85fr)_minmax(150px,auto)]">
                <label className="field-card flex min-h-14 flex-col justify-center rounded-[6px] border border-slate-200 bg-slate-50 px-4">
                  <span className="text-xs font-medium uppercase tracking-normal text-slate-500">
                    What
                  </span>
                  <input
                    className="mt-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="Job title, keywords, or company"
                    type="search"
                  />
                </label>
                <label className="field-card flex min-h-14 flex-col justify-center rounded-[6px] border border-slate-200 bg-slate-50 px-4">
                  <span className="text-xs font-medium uppercase tracking-normal text-slate-500">
                    Where
                  </span>
                  <input
                    className="mt-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                    placeholder="City, state, or remote"
                    type="search"
                  />
                </label>
                <div
                  className="field-card relative flex min-h-14 flex-col justify-center rounded-[6px] border border-slate-200 bg-slate-50 px-4"
                  data-sector-dropdown
                >
                  <span className="text-xs font-medium uppercase tracking-normal text-slate-500">
                    Sector
                  </span>
                  <button
                    className="mt-1 flex w-full items-center justify-between gap-3 bg-transparent text-left text-sm font-medium text-slate-900 outline-none"
                    aria-expanded={isSectorOpen}
                    onClick={() => setIsSectorOpen((isOpen) => !isOpen)}
                    type="button"
                  >
                    <span>{selectedSector}</span>
                    <span
                      className={`text-xs text-slate-500 transition ${
                        isSectorOpen ? "rotate-180" : ""
                      }`}
                    >
                      v
                    </span>
                  </button>
                  <div
                    className={`sector-menu absolute left-0 right-0 top-[calc(100%+8px)] z-30 rounded-[8px] border border-slate-200 bg-white p-2 shadow-xl shadow-blue-950/12 transition ${
                      isSectorOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    {["IT & Software", "Sales", "Banking", "BPO"].map(
                      (sector) => (
                        <button
                          className="w-full rounded-[6px] px-3 py-2 text-left text-sm font-medium text-slate-700 transition hover:bg-[#eaf4ff] hover:text-[#0a66b2]"
                          key={sector}
                          onClick={() => {
                            setSelectedSector(sector);
                            setIsSectorOpen(false);
                            openEnquiry(`${sector} jobs`);
                          }}
                          type="button"
                        >
                          {sector}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                <button className="shine-button min-h-14 w-full min-w-[150px] whitespace-nowrap rounded-[6px] bg-[#f47a20] px-5 text-sm font-semibold leading-none text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5">
                  Notify Me
                </button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[#13365f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:-translate-y-0.5"
                href="#candidate"
                data-enquiry="Upload resume"
              >
                Upload resume
              </a>
              <a
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0a66b2]"
                href="#employer"
                data-enquiry="Hiring enquiry"
              >
                Hiring? Post free
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {["Remote jobs", "Walk-in roles", "Fresher hiring", "Verified employers"].map(
                (item) => (
                  <button
                    key={item}
                    className="feature-chip rounded-full border border-slate-200 bg-white/80 px-3 py-2"
                    data-enquiry={item}
                    type="button"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>

          <div className="relative animate-fade-up animation-delay-200">
            <div className="float-soft rounded-[8px] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/10">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-normal text-[#0a66b2]">
                    Live opportunities
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    Fresh roles matched today
                  </h2>
                </div>
                <span className="pulse-live rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Open
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {jobs.map((job, index) => (
                  <article
                    key={job.role}
                    className="job-card rounded-[8px] border border-slate-200 p-4 transition hover:border-[#0a66b2] hover:bg-blue-50/40"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-950">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-slate-600">
                          {job.company}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#fff2e9] px-3 py-1 text-xs font-semibold text-[#c95709]">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        {job.place}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">
                        {job.salary}
                      </span>
                    </div>
                    <button
                      className="mt-4 rounded-[6px] bg-[#0a66b2] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#16467d]"
                      data-enquiry={`Apply for ${job.role}`}
                    >
                      Apply now
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white" data-scroll-reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200 px-5 sm:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="stat-card bg-white py-8 text-center">
              <p className="text-3xl font-bold text-slate-950">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0a66b2] py-4 text-white" data-scroll-reveal>
        <div className="ticker mx-auto max-w-7xl overflow-hidden px-5 lg:px-8">
          <div className="ticker-track flex min-w-max gap-8 text-sm font-semibold uppercase">
            {[...companies, ...companies].map((company, index) => (
              <span key={`${company}-${index}`} className="opacity-90">
                {company} hiring on GoJobin
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="jobs"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8"
        data-scroll-reveal
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
              Find work faster
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Popular job sectors
            </h2>
          </div>
          <a
            className="text-sm font-semibold text-[#0a66b2]"
            href="#"
            data-enquiry="View all sectors"
          >
            View all sectors
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="category-card rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0a66b2] hover:shadow-lg hover:shadow-blue-950/10"
              data-enquiry={`${category} jobs`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#eaf4ff] text-sm font-semibold text-[#0a66b2]">
                {category.slice(0, 2)}
              </span>
              <h3 className="mt-5 font-semibold text-slate-950">{category}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Fresher and experienced openings
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white" data-scroll-reveal>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
              Why GoJobin
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              A cleaner way to connect jobs, resumes, and recruiters
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The landing experience is designed around fast job discovery,
              clear hiring actions, and a simple path for candidates and
              employers.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="category-card rounded-[8px] border border-slate-200 bg-[#fbfdff] p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-[#16467d] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">
                  {benefit.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7fafc]" data-scroll-reveal>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#c95709]">
              Hiring locations
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Focus on India's active job markets
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Highlight city-wise job discovery so candidates can find relevant
              roles close to where they want to work.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cityHighlights.map((item) => (
              <article
                key={item.city}
                className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0a66b2]"
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {item.city}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.roles}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="candidate"
        className="relative overflow-hidden border-y border-slate-200 bg-[#102f53] text-white"
        data-scroll-reveal
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,102,178,0.45),rgba(16,47,83,0)_55%,rgba(244,122,32,0.22))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#ffb27a]">
              Candidate desk
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Built for freshers and growing professionals
            </h2>
            <p className="mt-4 leading-7 text-blue-100">
              GoJobin helps job seekers build a searchable profile, discover
              relevant openings, and move quickly when the right role appears.
            </p>
            <a
              className="mt-7 inline-flex rounded-full bg-[#f47a20] px-6 py-3 text-sm font-semibold text-white"
              href="#register"
              data-enquiry="Create candidate profile"
            >
              Create candidate profile
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="step-card rounded-[8px] border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <span className="text-sm font-semibold text-[#ffb27a]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="employer"
        className="mx-auto max-w-7xl px-5 py-16 lg:px-8"
        data-scroll-reveal
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm shadow-blue-950/5">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
              Employers
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Post jobs and reach active talent across India
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Gojobin.com is a classified recruitment platform for employers
              who need great people and candidates who want dependable career
              opportunities.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Free posting", "Resume access", "City targeting"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-[8px] border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="font-semibold text-slate-950">{item}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Simple hiring tools for faster shortlists
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            id="pricing"
            className="pricing-card rounded-[8px] border border-[#ffd9bf] bg-[#fff7f1] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-normal text-[#c95709]">
              Start free
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              List your first opening today
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Share the role, location, experience range, and sector. GoJobin
              puts the opportunity in front of relevant job seekers.
            </p>
            <a
              className="mt-7 inline-flex rounded-full bg-[#0a66b2] px-6 py-3 text-sm font-semibold text-white"
              href="#post-job"
              data-enquiry="Post new job"
            >
              Post new job
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white" data-scroll-reveal>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
                About GoJobin
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                A prominent name in Indian online recruitment
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                GoJobin is an online employment solution for people seeking
                jobs and employers who need great people. It supports freshers,
                trained candidates, and experienced professionals with a focused
                job-search experience.
              </p>
              <p>
                The platform is built around free job posting, searchable
                openings, active resumes, and city-led discovery for India's
                recruitment market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7fafc]" data-scroll-reveal>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
                Success stories
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Real outcomes for job seekers and hiring teams
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Show visitors how GoJobin supports both sides of recruitment:
                candidates finding relevant roles and employers receiving
                focused enquiries.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {stories.map((story) => (
                <article
                  key={story.name}
                  className="category-card rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf4ff] text-sm font-semibold text-[#0a66b2]">
                    {story.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">
                    {story.text}
                  </p>
                  <h3 className="mt-5 font-semibold text-slate-950">
                    {story.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{story.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="bg-white" data-scroll-reveal>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#c95709]">
              Enquiry
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Need help with hiring or finding the right job?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Send an enquiry to the GoJobin team. This section can later be
              connected to email, CRM, or an admin dashboard.
            </p>

            <div className="mt-8 space-y-4 rounded-[8px] border border-slate-200 bg-[#f7fafc] p-5">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Call support
                </p>
                <a
                  className="mt-1 inline-flex text-sm text-[#0a66b2]"
                  href="tel:+919162080808"
                >
                  +91-9162080808
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Email support
                </p>
                <a
                  className="mt-1 inline-flex text-sm text-[#0a66b2]"
                  href="mailto:info@gojobin.com"
                >
                  info@gojobin.com
                </a>
              </div>
            </div>
          </div>

          <form
            className="search-card rounded-[8px] border border-slate-200 bg-white p-5 shadow-xl shadow-blue-950/10"
            onSubmit={(event) => event.preventDefault()}
          >
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
                <select className="mt-2 bg-transparent text-sm text-slate-900 outline-none">
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
                  className="mt-2 min-h-32 resize-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Tell us what you need help with"
                />
              </label>
            </div>
            <button className="shine-button mt-5 min-h-12 rounded-[6px] bg-[#f47a20] px-7 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5">
              Submit enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#071723] text-white" data-scroll-reveal>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.12fr_0.78fr_0.9fr_1.05fr_1.35fr] lg:gap-12 lg:px-8">
          <div className="max-w-[275px]">
            <Image
              src="/GoJobin-logo.png"
              alt="GoJobin"
              width={1366}
              height={573}
              className="h-auto w-40 sm:w-48"
            />
            <p className="mt-9 text-sm font-semibold leading-8 text-white">
              gojobin.com is a classified website for jobs. Our goal at
              gojobin.com is to make it as easy as possible to search or post
              jobs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-normal text-white">
              Company
            </h3>
            <div className="mt-9 grid gap-6 text-sm font-bold text-white">
              {footerCompanyLinks.map((link) => (
                <a
                  className="group flex items-center gap-4 transition hover:text-[#2fb8ff]"
                  href={link.href}
                  key={link.label}
                >
                  <span className="text-base font-black leading-none text-[#21b8ff]">
                    &gt;
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-normal text-white">
              Quick Links
            </h3>
            <div className="mt-9 grid gap-6 text-sm font-bold text-white">
              {footerQuickLinks.map((link) => (
                <a
                  className="group flex items-center gap-4 transition hover:text-[#2fb8ff]"
                  href={link.href}
                  key={link.label}
                >
                  <span className="text-base font-black leading-none text-[#21b8ff]">
                    &gt;
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-normal text-white">
              Contact Us
            </h3>
            <div className="mt-9 space-y-5 text-sm font-bold leading-6 text-white">
              <p>
                Mobile No -
                <a className="transition hover:text-[#2fb8ff]" href="tel:+919162080808">
                  {" "}
                  +91-9162080808
                </a>
              </p>
              <p>Monday - Saturday</p>
              <p>(10:00AM to 06:00PM IST)</p>
              <p>
                Email -
                <a
                  className="transition hover:text-[#2fb8ff]"
                  href="mailto:info@gojobin.com"
                >
                  {" "}
                  info@gojobin.com
                </a>
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center bg-[#4a4d51] text-white transition hover:bg-[#0a66b2]"
                  href={social.href}
                  key={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-normal text-white">
              Subscribe With Us
            </h3>
            <form
              className="mt-9 grid max-w-[335px] gap-5 text-sm font-bold text-white"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                <span>Your Name</span>
                <input
                  className="mt-3 h-13 w-full bg-white px-4 text-sm font-medium text-slate-950 outline-none"
                  type="text"
                />
              </label>
              <label>
                <span>Your Email</span>
                <input
                  className="mt-3 h-13 w-full bg-white px-4 text-sm font-medium text-slate-950 outline-none"
                  type="email"
                />
              </label>
              <button className="shine-button mt-1 h-12 w-fit bg-[#55585c] px-5 text-sm font-bold text-white transition hover:bg-[#0a66b2]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>

      <button
        aria-label="Open enquiry form"
        className="floating-enquiry fixed bottom-6 right-6 z-[85] flex h-14 w-14 items-center justify-center rounded-full bg-[#f47a20] text-white shadow-2xl shadow-orange-900/30 transition hover:scale-105 max-sm:bottom-4 max-sm:right-4"
        onClick={() => openEnquiry("Quick enquiry")}
        type="button"
      >
        <span className="floating-enquiry-label">Enquiry</span>
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.75 5.75h14.5v10.5H8.2l-3.45 3v-13.5Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M8 9h8M8 12.5h5.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      <EnquiryModal
        context={enquiryFor}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}
