import type { ReactNode } from 'react';

function BriefcaseIcon() {
  return (
    <svg className="w-8 h-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
}

const experiences: { role: string; company: string; period: string; description: ReactNode; link: string | null; current: boolean }[] = [
  {
    role: 'Software Engineer',
    company: 'LATAM Airlines',
    period: 'Abril 2024 — Actualidad',
    description: <>Uno de mis mayores logros es la construcción del sistema web que permite la <strong>publicación de vuelos de la compañía</strong> y la integración que realiza la asignación del servicio Premium Economy en cada una de las rutas.</>,
    link: null,
    current: true,
  },
  {
    role: 'Software Engineer / Full Stack Developer',
    company: 'Minera Sierra Gorda SCM',
    period: 'Abril 2023 — Abril 2024',
    description: <>Empresa minera de clase mundial. Desarrollé una plataforma web que permite la visualización de cambios de turno en mina y una aplicación de indicadores de producción del mineral <strong>en tiempo real</strong> orientada a jefes de turno.</>,
    link: null,
    current: false,
  },
  {
    role: 'Full Stack Developer',
    company: 'Rentokil Initial',
    period: 'Julio 2022 — Enero 2023',
    description: <>Empresa dedicada al rubro de la higiene ambiental y fumigación. Desarrollé el sistema web de asignación logística que <strong>redujo un 70% los tiempos de visita</strong>, permitiendo a cada técnico de la empresa conocer la ruta y orden óptimo de visitas a clientes durante su jornada laboral.</>,
    link: null,
    current: false,
  },
];

export function ExperienceSection() {
  return (
    <section id="experiencia" className="scroll-mt-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <div className="mb-8">
        <h2 className="flex items-center text-3xl font-bold tracking-tight gap-x-3 text-black/80 dark:text-white">
          <BriefcaseIcon />
          Experiencia laboral
        </h2>
        <div className="section-underline" />
      </div>

      <ol className="relative mt-16" aria-label="Experiencia laboral">
        {experiences.map((exp, i) => (
          <li key={i} className="anim-fade-in" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10">

              <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-0">
                  <div className="flex items-center">
                    <span className="absolute -left-[42px] flex h-[14px] w-[14px] items-center justify-center" aria-hidden="true">
                      {exp.current && (
                        <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-yellow-400/40" />
                      )}
                      <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-yellow-400 shadow-[0_0_8px_2px_rgba(251,191,36,0.45)]" />
                    </span>
                    <h3 className="text-xl font-bold text-yellow-500 dark:text-yellow-400">{exp.role}</h3>
                  </div>
                  <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{exp.company}</h4>
                  <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{exp.period}</time>
                </div>
              </div>

              <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3 [&_strong]:text-yellow-500 dark:[&_strong]:text-yellow-200 [&_strong]:font-semibold">
                <p>{exp.description}</p>
                {exp.link && (
                  <a href={exp.link} className="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 hover:text-yellow-700 dark:hover:text-yellow-300 gap-1">
                    Saber más <ArrowRightIcon />
                  </a>
                )}
              </div>

            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
