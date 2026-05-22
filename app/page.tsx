import { siteContent } from "@/data/siteContent";

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteContent.whatsappNumber}`;

  return (
  <main className="min-h-screen bg-[#f7efe7] text-[#2f2a24]">
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8c7b5]/60 bg-[#f7efe7]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {siteContent.businessName}
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#6f6258] md:flex">
          <a href="#servicios" className="transition hover:text-[#2f2a24]">
            Servicios
          </a>

          <a href="#beneficios" className="transition hover:text-[#2f2a24]">
            Beneficios
          </a>

          <a href="#contacto" className="transition hover:text-[#2f2a24]">
            Contacto
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#6f8f72] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#5f7d62]"
        >
          Reservar
        </a>
      </nav>
    </header>

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

      <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
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

      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-20">
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

      <section id="contacto" className="mx-auto max-w-5xl px-6 py-20 text-center">
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
      
      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-[#6f6258]">
        <p className="font-medium text-[#2f2a24]">{siteContent.businessName}</p>
        <p className="mt-2">{siteContent.location}</p>
        <a
          href={siteContent.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block transition hover:text-[#2f2a24]"
        >
          Instagram
        </a>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#6f8f72] px-6 py-4 font-medium text-white shadow-lg transition hover:bg-[#5f7d62]"
      >
         WhatsApp
      </a>
    </main>
  );
}