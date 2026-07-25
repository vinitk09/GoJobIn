import Image from "next/image";
import Link from "next/link";

export default function PolicyPage({ eyebrow, title, intro, sections }) {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
          <Link href="/" aria-label="GoJobin home">
            <Image
              src="/image.png"
              alt="GoJobin"
              width={154}
              height={58}
              className="h-auto w-36"
            />
          </Link>
          <Link
            className="rounded-full border border-[#0a66b2] px-5 py-2.5 text-sm font-semibold text-[#0a66b2] transition hover:bg-[#0a66b2] hover:text-white"
            href="/"
          >
            Back to home
          </Link>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">{title}</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
        <div className="space-y-6">
          {sections.map((section) => (
            <article
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm"
              key={section.heading}
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                {section.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
