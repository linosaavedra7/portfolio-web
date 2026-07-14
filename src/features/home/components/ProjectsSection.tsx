'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import {
  siNextdotjs, siReact, siTypescript, siPython,
  siPostgresql, siAngular, siMaterialdesign, siDjango,
  siMapbox, siNestjs, siTailwindcss,
  type SimpleIcon,
} from 'simple-icons';

const TECH_ICONS: Record<string, SimpleIcon> = {
  'Next.js':          siNextdotjs,
  'React':            siReact,
  'TypeScript':       siTypescript,
  'Python':           siPython,
  'PostgreSQL':       siPostgresql,
  'Angular':          siAngular,
  'Angular Material': siMaterialdesign,
  'Django':           siDjango,
  'Mapbox':           siMapbox,
  'NestJS':           siNestjs,
  'Tailwind CSS':     siTailwindcss,
};

function TechBadge({ tag }: { tag: string }) {
  const icon = TECH_ICONS[tag];
  return (
    <span className="flex items-center gap-x-1.5 rounded-full text-xs py-1 px-2.5 bg-gray-100 text-gray-700 border border-gray-200 dark:bg-gray-800 dark:text-white/80 dark:border-white/10">
      {icon && (
        <span
          className="flex items-center justify-center rounded-sm flex-shrink-0"
          style={{ background: `#${icon.hex}`, width: 14, height: 14 }}
        >
          <svg role="img" viewBox="0 0 24 24" width={9} height={9} fill="white" aria-label={icon.title}>
            <path d={icon.path} />
          </svg>
        </span>
      )}
      {tag}
    </span>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12h.01" /><path d="M12 12h.01" /><path d="M9 12h.01" />
      <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
      <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" /><path d="M15 4h5v5" />
    </svg>
  );
}

/* ── Browser window frame ───────────────────────────── */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#1a1a2e]
                    transition-all duration-300 ease-out
                    group-hover:-translate-y-2
                    group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                    group-hover:border-white/20">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111120] border-b border-white/[0.07]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 mx-3 h-4 rounded-full bg-white/[0.06]" />
      </div>
      {children}
    </div>
  );
}

/* ── Project-specific preview visuals ───────────────── */
function LatamPreview() {
  return (
    <div className="relative w-full h-[220px] overflow-hidden">
      <Image
        src="/assets/projects/latam-preview.png"
        alt="Flights Publication System — LATAM Airlines"
        fill
        className="proj-reveal-img object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 46vw"
        priority
      />
      {/* Overlay que desaparece en hover para revelar la imagen */}
      <div className="proj-reveal-overlay absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
    </div>
  );
}


function PmsPreview() {
  return (
    <div className="relative w-full h-[220px] overflow-hidden">
      <Image
        src="/assets/projects/Project-Management-System.png"
        alt="Project Management System — Kanban & Gantt"
        fill
        className="proj-reveal-img object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 46vw"
      />
      <div className="proj-reveal-overlay absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
    </div>
  );
}

function RentokilPreview() {
  return (
    <div className="relative w-full h-[220px] overflow-hidden">
      <Image
        src="/assets/projects/rentokil-preview.png"
        alt="Sistema de Asignación y Gestión de Rutas — Rentokil Initial Chile"
        fill
        className="proj-reveal-img object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 46vw"
      />
      <div className="proj-reveal-overlay absolute inset-0 bg-black/30 transition-opacity duration-700 group-hover:opacity-0" />
    </div>
  );
}

const previewComponents: Record<string, React.ReactNode> = {
  latam: <LatamPreview />,
  rentokil: <RentokilPreview />,
  pms: <PmsPreview />,
};

/* ── Data ───────────────────────────────────────────── */
const linkBtnClass =
  'inline-flex items-center justify-center gap-2 px-3 py-2 text-base transition border max-w-fit rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/80 ' +
  'bg-gray-100 border-gray-300 text-gray-800 ' +
  'dark:bg-gray-800 dark:border-gray-600 dark:text-white ' +
  'hover:bg-gray-800 hover:border-gray-900 hover:text-white ' +
  'dark:hover:bg-gray-700 dark:hover:border-gray-500';

const projects = [
  {
    key: 'latam',
    title: 'Sistema de Publicación de Vuelos — LATAM Airlines',
    description: 'Plataforma interna desarrollada para LATAM Airlines que centraliza la gestión y trazabilidad de las publicaciones de vuelos. La solución consolida movimientos operacionales, optimizó la eficiencia operativa y fortaleció la confiabilidad de los procesos.',
    tags: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: null,
    liveUrl: '/latam-preview/',
    company: 'LATAM Airlines',
  },
  {
    key: 'rentokil',
    title: 'Sistema de Asignación y Gestión de Rutas — Rentokil Initial Chile',
    description: 'Plataforma interna desarrollada para Rentokil Initial Chile que automatiza la asignación de clientes a rutas logísticas mediante algoritmos de optimización. Reduce el tiempo de planificación y maximiza la eficiencia operativa de los técnicos de servicio.',
    tags: ['Angular', 'TypeScript', 'Angular Material', 'Django', 'Python', 'PostgreSQL', 'Mapbox'],
    githubUrl: null,
    liveUrl: '/rentokil-preview/',
    company: 'Rentokil Initial',
  },
  {
    key: 'pms',
    title: 'Plataforma de Gestión de Proyectos',
    description: 'Plataforma personal de gestión de proyectos y tareas con vistas Kanban y Gantt interactivas. Permite organizar sprints, asignar responsables, filtrar por estado y prioridad, y visualizar el avance de cada iniciativa en una línea de tiempo.',
    tags: ['Next.js', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: null,
    liveUrl: '/pms-preview/',
    company: null,
  },
];

/* ── Component ──────────────────────────────────────── */
export function ProjectsSection() {
  useEffect(() => {
    const articles = document.querySelectorAll<HTMLElement>('.project-article');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.25 },
    );
    articles.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="proyectos" className="scroll-mt-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <div className="mb-8">
        <h2 className="flex items-center text-3xl font-bold tracking-tight gap-x-3 text-black/80 dark:text-white">
          <CodeIcon />
          Proyectos
        </h2>
        <div className="section-underline" />
      </div>

      <div className="flex flex-col gap-y-16">
        {projects.map((project, i) => (
          <article
            key={project.key}
            className="project-article anim-fade-in group flex flex-col md:flex-row items-center gap-8"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Preview image — left */}
            <div className="w-full md:w-[46%] flex-shrink-0">
              <BrowserFrame>
                {previewComponents[project.key]}
              </BrowserFrame>
            </div>

            {/* Content — right */}
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="flex items-center gap-x-3 flex-wrap gap-y-1">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                {project.company && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/60 whitespace-nowrap">
                    {project.company}
                  </span>
                )}
              </div>

              <ul className="flex flex-row flex-wrap mt-3 gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <TechBadge tag={tag} />
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-gray-700 dark:text-gray-400">{project.description}</p>

              <footer className="flex items-center mt-4 gap-x-4">
                {project.liveUrl && (
                  <a target="_blank" href={project.liveUrl} rel="noopener noreferrer" className={linkBtnClass}>
                    <ExternalLinkIcon />
                    Ver demo
                  </a>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
