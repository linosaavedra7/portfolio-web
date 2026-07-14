import Image from 'next/image';

function PersonIcon() {
  return (
    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
      <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
    >
      <div className="mb-8">
        <h2 className="flex items-center text-3xl font-bold tracking-tight gap-x-3 text-black/80 dark:text-white">
          <PersonIcon />
          Sobre mí
        </h2>
        <div className="section-underline" />
      </div>

      <article className="flex flex-col items-center justify-center gap-8 text-gray-300 md:flex-row">

        <div className="flex flex-col gap-7 text-lg leading-8 order-2 md:order-1 text-gray-700 dark:text-gray-300 [&>p>strong]:text-yellow-600 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono">
          <p>
            Me llamo Lino Saavedra. Empecé a programar a los 15 años participando en{' '}
            <strong>competencias escolares</strong>. Hoy tengo el privilegio de liderar{' '}
            <strong>equipos de desarrollo a nivel internacional</strong>.
          </p>
          <p>
            Uno de mis mayores logros es la creación del{' '}
            <strong>sistema web que realiza la publicación de vuelos de LATAM Airlines</strong>
            {' '}— una plataforma crítica de alta disponibilidad usada a escala continental.
          </p>
          <p>
            Cuando no estoy programando, estoy{' '}
            <strong>viajando por el mundo</strong>. Creo que conocer culturas nuevas es tan valioso
            como aprender tecnología.
          </p>
        </div>

        <div className="order-1 md:order-2 flex-shrink-0">
          <div className="relative w-64 h-64 rounded-full overflow-hidden ring-1 ring-black/70 bg-gray-800 shadow-xl">
            <Image
              src="/assets/me-4.jpeg"
              alt="Lino Saavedra"
              fill
              quality={100}
              className="object-cover"
              style={{ objectPosition: '50% 15%' }}
            />
          </div>
        </div>

      </article>
    </section>
  );
}
