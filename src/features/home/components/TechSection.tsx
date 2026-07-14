const techGroups = [
  {
    category: 'Frontend',
    techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zod'],
  },
  {
    category: 'Backend',
    techs: ['NestJS', 'Node.js', 'Prisma', 'REST API', 'PostgreSQL', 'Supabase'],
  },
  {
    category: 'DevOps & Cloud',
    techs: ['Vercel', 'Railway', 'GitHub Actions', 'Docker', 'Git'],
  },
  {
    category: 'Integraciones',
    techs: ['Stripe', 'Mercado Pago', 'OpenAI', 'Claude API', 'Supabase Auth'],
  },
];

export function TechSection() {
  return (
    <section id="technologies" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Tecnologías</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
            >
              <h3 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
