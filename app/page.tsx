import { siteContent } from "@/data/siteContent";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteContent.whatsappNumber}`;

  return (
    <main className="min-h-screen bg-[#f7efe7] text-[#2f2a24]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#8b6f47]">
          {siteContent.location}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
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

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-[2rem] bg-white/70 p-8 shadow-sm md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
            Sobre la práctica
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            {siteContent.about.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f6258]">
            {siteContent.about.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
            Servicios
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            Sesiones pensadas para tu bienestar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] bg-white/80 p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#8b6f47]">
                {service.duration}
              </p>
              <p className="mt-5 leading-7 text-[#6f6258]">
                {service.description}
              </p>
              <p className="mt-6 font-medium text-[#5f4b32]">
                {service.price}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#8b6f47]">
              Beneficios
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              Una experiencia simple, cálida y consciente
            </h2>
          </div>

          <div className="grid gap-4">
            {siteContent.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-full bg-white/80 px-6 py-4 text-lg shadow-sm"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="rounded-[2rem] bg-[#6f8f72] p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">
            {siteContent.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            {siteContent.contact.description}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-medium text-[#5f7d62] transition hover:bg-[#f7efe7]"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}