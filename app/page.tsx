import { siteContent } from "@/data/siteContent";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteContent.whatsappNumber}`;

  return (
    <main className="min-h-screen bg-[#f7efe7] text-[#2f2a24]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8b6f47]">
          {siteContent.location}
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          {siteContent.heroTitle}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f6258]">
          {siteContent.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#6f8f72] px-8 py-4 font-medium text-white transition hover:bg-[#5f7d62]"
          >
            {siteContent.primaryCta}
          </a>

          <a
            href={siteContent.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#8b6f47] px-8 py-4 font-medium text-[#5f4b32] transition hover:bg-white"
          >
            {siteContent.secondaryCta}
          </a>
        </div>
      </section>
    </main>
  );
}