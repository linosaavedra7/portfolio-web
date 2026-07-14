import Image from 'next/image';
import { GitHubIcon, LinkedInIcon } from '@/components/shared/SocialIcons';
import { APP_NAME, EMAIL } from '@/config/constants';

function SparkleIcon() {
  return (
    <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialButtonClass =
  'inline-flex items-center justify-center gap-2 px-4 py-1 transition border rounded-full text-sm ' +
  'bg-gray-100 border-gray-300 text-gray-800 ' +
  'dark:bg-gray-800 dark:border-gray-600 dark:text-white ' +
  'hover:bg-gray-900 hover:border-gray-700 hover:text-white ' +
  'dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black ' +
  'focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/80 max-w-fit';

export function HeroSection() {
  return (
    <section className="py-16 md:py-36 scroll-mt-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
      <div className="max-w-xl">

        {/* Avatar + availability badge */}
        <div className="anim-fade-in flex gap-4 mb-6 items-center">
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full blur-xl scale-125"
              style={{ backgroundColor: 'rgba(250,204,21,0.25)' }}
              aria-hidden="true"
            />
            <Image
              src="/assets/me-4.jpeg"
              alt="Lino Saavedra"
              width={80}
              height={80}
              quality={100}
              className="relative rounded-full shadow-2xl w-20 h-20 object-cover ring-2 ring-yellow-400/60 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-950"
              style={{ objectPosition: '50% 15%' }}
            />
          </div>

          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span
              className="absolute inset-[-1000%] animate-spin-conic"
              style={{ background: 'conic-gradient(from 90deg at 50% 50%, #51E4B8 0%, #21554E 50%, #51E4B8 100%)' }}
            />
            <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full backdrop-blur-3xl whitespace-nowrap gap-1.5 bg-green-100 text-green-800 dark:bg-gray-800 dark:text-white/80">
              <SparkleIcon />
              Disponible para trabajar
            </div>
          </span>
        </div>

        {/* Name */}
        <h1 className="anim-fade-in anim-delay-1 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
          Hey, soy <span className="gradient-name">{APP_NAME}</span>
        </h1>

        {/* Description */}
        <p className="anim-fade-in anim-delay-2 mt-6 text-xl text-gray-800 dark:text-gray-300 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:[&>strong]:text-yellow-200">
          +4 años de experiencia. <strong>Ingeniero de Software</strong>, Chile 🇨🇱.{' '}
          Especialista en el desarrollo de aplicaciones de todo tipo.
        </p>

        {/* Social buttons */}
        <nav className="anim-fade-in anim-delay-3 flex flex-wrap gap-4 mt-8" aria-label="Redes sociales y contacto">
          <a href="https://wa.me/56998378427?text=Vi%20tu%20sitio%20web%20de%20desarrollador%2C%20me%20interesa%20contactarte" target="_blank" rel="noopener noreferrer" className={socialButtonClass}>
            <WhatsAppIcon />
            Contáctame
          </a>
          <a href="https://www.linkedin.com/in/lino-saavedra-vega" target="_blank" rel="noopener noreferrer" className={socialButtonClass}>
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
          <a href="https://github.com/linosaavedra" target="_blank" rel="noopener noreferrer" className={socialButtonClass}>
            <GitHubIcon size={16} />
            GitHub
          </a>
        </nav>

      </div>
    </section>
  );
}
