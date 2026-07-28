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

function DocumentItems({ items, nested = false }) {
  return (
    <div className={nested ? "space-y-3 pl-5" : "space-y-3"}>
      {items.map((item, index) => {
        const entry = typeof item === "string" ? { text: item } : item;

        return (
          <div className="space-y-3" key={`${entry.label || index}-${entry.text}`}>
            <p>
              {entry.label ? (
                <span className="font-semibold text-slate-950">
                  {entry.label}{" "}
                </span>
              ) : null}
              {entry.text}
            </p>
            {entry.children ? (
              <DocumentItems items={entry.children} nested />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function PolicyContent({ paragraphs = [], sections = [], variant = "card" }) {
  if (variant === "document") {
    return (
      <div className="space-y-5">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {sections.map((section) => (
          <section className="space-y-3" key={section.heading}>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items ? <DocumentItems items={section.items} /> : null}
          </section>
        ))}
      </div>
    );
  }

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
  variant = "card",
}) {
  if (variant === "document") {
    return (
      <main className="min-h-screen bg-white text-slate-950">
        <section className="relative min-h-52 overflow-hidden sm:min-h-60">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/policy-banner.svg"
          />
          <div className="absolute inset-0 bg-slate-950/30" />
          <div className="relative mx-auto flex min-h-52 max-w-[1320px] items-center px-5 sm:min-h-60 lg:px-8">
            <h1 className="text-[32px] font-bold leading-tight text-white sm:text-4xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-5 py-12 lg:px-8 lg:py-14">
          <article>
            <div className="space-y-5 text-[16px] leading-7 text-[#8f969f] sm:ml-10">
              {intro ? <p>{intro}</p> : null}
              <PolicyContent
                paragraphs={paragraphs}
                sections={sections}
                variant={variant}
              />
            </div>
          </article>
        </section>
      </main>
    );
  }

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
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-[#0a66b2]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">{title}</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-600">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <article className="rounded-[8px] border border-slate-200 bg-white p-6">
          <div className="text-sm leading-7 text-slate-600">
            <PolicyContent paragraphs={paragraphs} sections={sections} />
          </div>
        </article>
      </section>
    </main>
  );
}
