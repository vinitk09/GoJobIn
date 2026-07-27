import Image from "next/image";
import Link from "next/link";

function PolicyItems({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const entry = typeof item === "string" ? { text: item } : item;

        return (
          <div className="flex gap-3" key={`${entry.label || index}-${entry.text}`}>
            {entry.label ? (
              <span className="min-w-9 shrink-0 font-semibold text-slate-900">
                {entry.label}
              </span>
            ) : (
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a66b2]" />
            )}
            <div className="space-y-3">
              <p>{entry.text}</p>
              {entry.children ? <PolicyItems items={entry.children} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PolicyContent({ paragraphs = [], sections = [] }) {
  if (sections.length > 0) {
    return (
      <div className="space-y-10">
        {sections.map((section) => (
          <section className="space-y-4" key={section.heading}>
            <h2 className="text-2xl font-bold leading-tight text-slate-950">
              {section.heading}
            </h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items ? <PolicyItems items={section.items} /> : null}
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function PolicyPage({
  eyebrow,
  title,
  intro,
  paragraphs,
  sections,
}) {
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
        <article className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-base leading-8 text-slate-600">
            <PolicyContent paragraphs={paragraphs} sections={sections} />
          </div>
        </article>
      </section>
    </main>
  );
}
