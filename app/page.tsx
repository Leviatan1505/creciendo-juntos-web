"use client";

import { AlertTriangle, HeartHandshake, ShieldCheck, Phone, Users, User, Baby } from "lucide-react";
import { MessageCircle } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-brand-khaki/20 text-brand-noir">
      {/* Header informativo */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-noir/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-emerald text-brand-khaki font-semibold">
              CJ
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-brand-khaki">Creciendo Juntos</p>
              <p className="text-xs text-brand-khaki/70">Información y orientación</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-brand-khaki/70 hover:text-brand-khaki" href="#vision">Visión</a>
            <a className="text-sm text-brand-khaki/70 hover:text-brand-khaki" href="#violencia">Violencia</a>
            <a className="text-sm text-brand-khaki/70 hover:text-brand-khaki" href="#suicidio">Señales de suicidio</a>
            <a className="text-sm text-brand-khaki/70 hover:text-brand-khaki" href="#ayuda">Ayuda</a>
          </nav>

          <a
            href="#ayuda"
            className="inline-flex items-center gap-2 rounded-2xl bg-brand-earth px-4 py-2 text-sm font-medium text-white shadow-md ring-1 ring-white/10 hover:opacity-95"
          >
            <HeartHandshake className="h-4 w-4" />
            Obtener ayuda
          </a>
        </div>
      </header>

      {/* Hero / Mensaje principal */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-wasabi/30 bg-white px-3 py-1 text-xs text-brand-noir/70">
              <ShieldCheck className="h-4 w-4 text-brand-emerald" />
              Confidencialidad • Orientación • Acompañamiento
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Información clara para tomar decisiones en momentos difíciles.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70">
              Este espacio ofrece orientación general para reconocer riesgos, pedir apoyo y dar el primer paso.
              Si hay peligro inmediato, busca ayuda de emergencia.
            </p>

            {/* Banner de emergencia */}
            <div className="mt-7 rounded-3xl border border-brand-earth/30 bg-brand-earth/10 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-2xl bg-brand-earth px-2 py-2 text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Si tú o alguien está en peligro inmediato</p>
                  <p className="mt-1 text-sm text-black/70">
                    Llama a <span className="font-semibold">911</span>. Para apoyo emocional 24/7 en México:
                    <span className="font-semibold"> Línea de la Vida 800 911 2000</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card visión resumida */}
          <div id="vision" className="rounded-3xl border border-brand-wasabi/25 bg-white/85 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-emerald">Nuestra visión</h2>
            <p className="mt-2 text-sm text-black/70">
              Ser un espacio seguro, humano y profesional donde cada persona pueda encontrar claridad, herramientas y
              acompañamiento para reconstruir bienestar emocional.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-wasabi/25 bg-white p-4">
                <p className="text-xs text-black/60">Enfoque</p>
                <p className="mt-1 font-semibold text-brand-noir">Respeto + evidencia</p>
              </div>
              <div className="rounded-2xl border border-brand-wasabi/25 bg-white p-4">
                <p className="text-xs text-black/60">Prioridad</p>
                <p className="mt-1 font-semibold text-brand-noir">Seguridad primero</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Violencia */}
      <section id="violencia" className="border-y border-brand-wasabi/20 bg-brand-wasabi/10">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">Si vives una situación de violencia</h2>
          <p className="mt-2 text-sm text-black/70 max-w-3xl">
            No es tu culpa. La violencia puede ser física, psicológica, sexual, económica o digital. Lo más importante es
            tu seguridad.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Prioriza tu seguridad",
                desc: "Si hay riesgo inmediato, aléjate a un lugar seguro y llama a emergencias (911).",
              },
              {
                title: "Habla con alguien de confianza",
                desc: "Una persona cercana puede ayudarte a acompañarte, resguardar documentos o pedir apoyo.",
              },
              {
                title: "Registra lo necesario",
                desc: "Si puedes hacerlo de forma segura: guarda evidencias (mensajes, fotos) y fechas. No te expongas.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-brand-wasabi/25 bg-white/85 p-6 shadow-sm">
                <p className="text-sm font-semibold text-brand-emerald">{c.title}</p>
                <p className="mt-2 text-sm text-black/65">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-brand-wasabi/25 bg-white/85 p-6">
            <p className="font-semibold text-brand-noir">Señales frecuentes de violencia psicológica</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/70 space-y-1">
              <li>Control excesivo (tiempo, amistades, dinero, teléfono).</li>
              <li>Humillaciones, amenazas, chantaje o “culpa” constante.</li>
              <li>Aislamiento: te aleja de familia/amigos o te hace sentir miedo de pedir ayuda.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Señales de suicidio */}
      <section id="suicidio" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Reconocer señales de alerta de suicidio</h2>
        <p className="mt-2 text-sm text-black/70 max-w-3xl">
          Si notas estas señales en ti o en alguien más, es importante buscar ayuda cuanto antes. Ante peligro inmediato,
          llama al 911. En México también puedes llamar a Línea de la Vida 800 911 2000.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-wasabi/25 bg-white/85 p-6 shadow-sm">
            <p className="font-semibold text-brand-emerald">Señales de alerta</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-black/70 space-y-1">
              <li>Hablar de querer morir, sentirse una carga o no tener salida.</li>
              <li>Despedidas inusuales, regalar pertenencias importantes.</li>
              <li>Aislamiento marcado, cambios bruscos de ánimo o desesperanza.</li>
              <li>Incremento de consumo de alcohol/drogas o conductas de riesgo.</li>
              <li>Buscar métodos o “cómo hacerlo”.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-wasabi/25 bg-white/85 p-6 shadow-sm">
            <p className="font-semibold text-brand-emerald">Qué hacer (pasos simples)</p>
            <ol className="mt-3 list-decimal pl-5 text-sm text-black/70 space-y-1">
              <li>Quédate cerca y escucha sin juzgar.</li>
              <li>Pregunta directo si hay ideas de hacerse daño y si hay un plan.</li>
              <li>Si hay plan o peligro: no lo dejes solo/a y llama a emergencias (911).</li>
              <li>Busca apoyo profesional y líneas de ayuda (Línea de la Vida 800 911 2000).</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Botones grandes de ayuda */}
      <section id="ayuda" className="bg-brand-noir text-brand-khaki">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold">¿Necesitas ayuda?</h2>
          <p className="mt-2 text-sm text-brand-khaki/70 max-w-3xl">
            Elige la opción que mejor se ajuste. Estas rutas pueden abrir un formulario o guía específica.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              href="/ayuda"
              className="group rounded-3xl bg-brand-emerald p-7 shadow-md ring-1 ring-white/10 hover:opacity-95 transition"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/10 p-2">
                  <User className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold">Necesito ayuda</p>
              </div>
              <p className="mt-3 text-sm text-brand-khaki/80">
                Solicítala aquí y te orientamos sobre el siguiente paso.
              </p>
            </a>

            <a
              href="/ayuda-para-alguien"
              className="group rounded-3xl bg-brand-earth p-7 shadow-md ring-1 ring-white/10 hover:opacity-95 transition"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/10 p-2">
                  <Users className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold">Ayuda para alguien más</p>
              </div>
              <p className="mt-3 text-sm text-white/90">
                Si te preocupa alguien, aquí tienes pasos y un formulario para orientarte.
              </p>
            </a>

            <a
              href="/ayuda-para-mi-hijo"
              className="group rounded-3xl bg-brand-wasabi p-7 shadow-md ring-1 ring-white/10 hover:opacity-95 transition"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-white/10 p-2">
                  <Baby className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold">Mi hijo/a necesita ayuda</p>
              </div>
              <p className="mt-3 text-sm text-white/90">
                Orientación para madres/padres: señales, conversación y cómo buscar apoyo.
              </p>
            </a>
          </div>

          <div className="mt-10 rounded-3xl bg-white/5 p-6">
            <p className="text-sm text-brand-khaki/80">
              <span className="font-semibold text-brand-khaki">Emergencia:</span> 911 •{" "}
              <span className="font-semibold text-brand-khaki">Línea de la Vida:</span> 800 911 2000 •{" "}
              <span className="font-semibold text-brand-khaki">Creciendo Juntos:</span> 656 827 2062
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-xs text-brand-khaki/60">
          © {new Date().getFullYear()} Creciendo Juntos. Información general; no sustituye atención profesional.
        </div>
        <a
  href="https://wa.me/5216568272062?text=Hola%20necesito%20ayuda%20psicológica"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
  aria-label="Contactar por WhatsApp"
>
  <MessageCircle className="h-6 w-6" />
</a>
      </section>
      
    </main>
  );
}
