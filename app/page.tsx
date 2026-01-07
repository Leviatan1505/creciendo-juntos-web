"use client";

import { CalendarDays, ShieldCheck, ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-brand-khaki/30 text-brand-noir">

      {/* Header */}
     <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-noir/90 backdrop-blur">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-emerald text-brand-khaki font-semibold">
              CJ
            </div>
            <div className="leading-tight">
              <p className="font-semibold">Creciendo Juntos</p>
              <p className="text-xs text-black/60">Clínica psicológica</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-black/70 hover:text-brand-noir" href="#servicios">Servicios</a>
            <a className="text-sm text-black/70 hover:text-brand-noir" href="#equipo">Equipo</a>
            <a className="text-sm text-black/70 hover:text-brand-noir" href="#contacto">Contacto</a>
          </nav>

          <a
            href="#agendar"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-emerald px-4 py-2 text-sm font-medium text-brand-khaki shadow-sm hover:opacity-95"
          >
            <CalendarDays className="h-4 w-4" />
            Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs text-black/70">
            <ShieldCheck className="h-4 w-4 text-brand-emerald" />
            Confidencialidad • Acompañamiento • Bienestar
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Un espacio seguro para{" "}
            <span className="text-brand-emerald">sentir</span>,{" "}
            <span className="text-brand-emerald">entender</span> y avanzar.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-black/70">
            Terapia individual, pareja y evaluación inicial. Atención humana, profesional y basada en evidencia.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-earth px-5 py-3 text-sm font-medium text-brand-khaki shadow-sm hover:opacity-95"
            >
              Solicitar cita
              <ChevronRight className="h-4 w-4" />
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/15 bg-white/35 px-5 py-3 text-sm font-medium text-brand-noir hover:bg-white/50"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-black/70">
            <div className="rounded-2xl border border-black/10 bg-white/40 p-3">
              <p className="font-semibold text-brand-noir">4</p>
              <p>consultorios</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/40 p-3">
              <p className="font-semibold text-brand-noir">Presencial</p>
              <p>y en línea</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/40 p-3">
              <p className="font-semibold text-brand-noir">Agenda</p>
              <p>rápida</p>
            </div>
          </div>
        </div>

        {/* Card agendar (demo) */}
        <div id="agendar" className="flex items-center">
          <div className="w-full rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Solicitar cita</h2>
            <p className="mt-1 text-sm text-black/70">
              Demo de diseño (luego conectamos agenda/BD).
            </p>

            <form
              className="mt-5 grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Solicitud enviada! (demo)");
              }}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-black/80">Nombre</label>
                  <input
                    required
                    className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-wasabi/50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-black/80">Teléfono</label>
                  <input
                    required
                    className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-wasabi/50"
                    placeholder="+52 ..."
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-black/80">Motivo</label>
                <select className="mt-1 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-wasabi/50">
                  <option>Ansiedad / Estrés</option>
                  <option>Depresión</option>
                  <option>Relaciones / Pareja</option>
                  <option>Autoestima</option>
                  <option>Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-emerald px-5 py-3 text-sm font-medium text-brand-khaki hover:opacity-95"
              >
                Enviar solicitud
              </button>

              <p className="text-xs text-black/60">
                Al enviar aceptas nuestro aviso de privacidad (placeholder).
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <p className="mt-1 text-black/70">Atención cálida y profesional en un entorno cómodo.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Terapia individual", d: "Herramientas y seguimiento enfocados en tus objetivos." },
            { t: "Terapia de pareja", d: "Comunicación, límites, acuerdos y reconstrucción de confianza." },
            { t: "Evaluación inicial", d: "Primera sesión para armar un plan de trabajo." },
          ].map((s) => (
            <div key={s.t} className="rounded-3xl border border-black/10 bg-white/40 p-6 shadow-sm">
              <p className="font-semibold text-brand-emerald">{s.t}</p>
              <p className="mt-2 text-sm text-black/70">{s.d}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-brand-earth" />
            </div>
          ))}
        </div>
      </section>
        {/* Equipo */}
<section id="equipo" className="mx-auto max-w-6xl px-4 py-16">
  <h2 className="text-2xl font-semibold text-brand-noir">
    Nuestro equipo
  </h2>
  <p className="mt-1 text-black/70">
    Profesionales comprometidos con tu bienestar emocional.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {[
      {
        name: "Lic. Ana López",
        role: "Terapia individual",
        focus: "Ansiedad, estrés y autoestima",
      },
      {
        name: "Mtro. Carlos Hernández",
        role: "Terapia de pareja",
        focus: "Comunicación y relaciones",
      },
      {
        name: "Psic. Mariana Ruiz",
        role: "Atención adolescente",
        focus: "Emociones y acompañamiento escolar",
      },
    ].map((p) => (
      <div
        key={p.name}
        className="rounded-3xl border border-black/10 bg-white/40 p-6 shadow-sm hover:shadow-md transition"
      >
        {/* Foto placeholder */}
        <div className="mb-4 h-40 w-full rounded-2xl bg-brand-wasabi/30 flex items-center justify-center text-brand-emerald font-semibold">
          Foto
        </div>

        <p className="font-semibold text-lg text-brand-emerald">
          {p.name}
        </p>
        <p className="text-sm text-black/70">{p.role}</p>
        <p className="mt-2 text-sm text-black/60">{p.focus}</p>

        <button
          className="mt-4 w-full rounded-2xl bg-brand-earth px-4 py-2.5 text-sm font-medium text-brand-khaki hover:opacity-90"
        >
          Agendar con este terapeuta
        </button>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-black/10 bg-brand-noir text-brand-khaki">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="font-semibold">Creciendo Juntos</p>
          <p className="mt-1 text-sm text-brand-khaki/70">
            Dirección • Teléfono • Horarios (demo)
          </p>
        </div>
      </footer>
    </main>
  );
}
