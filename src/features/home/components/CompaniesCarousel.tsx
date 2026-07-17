import Image from 'next/image';

const darkBrightnessClass: Record<number, string> = {
  1:   '',
  1.5: 'dark:brightness-[1.5]',
  1.7: 'dark:brightness-[1.7]',
  2.5: 'dark:brightness-[2.5]',
};

const companies = [
  { name: 'LATAM Airlines',                          logo: '/assets/companies/logo-latam-airlines.png', darkBrightness: 2.5, w: 3301, h: 1009 },
  { name: 'Minera Sierra Gorda',                     logo: '/assets/companies/logo-sierra-gorda.png',   darkBrightness: 2.5, w: 275,  h: 85  },
  { name: 'Minera Collahuasi',                       logo: '/assets/companies/collahuasi.png',           darkBrightness: 2.5, w: 251,  h: 86  },
  { name: 'Desis',                                   logo: '/assets/companies/desis.png',                darkBrightness: 1.5, w: 289,  h: 321 },
  { name: 'Frío-Loa Aire Acondicionado',             logo: '/assets/companies/frio-loa.png',             darkBrightness: 1.5, w: 404,  h: 132, tall: true },
  { name: 'Universidad Central de Chile',            logo: '/assets/companies/ucen.png',                 darkBrightness: 1.7, w: 1455, h: 1456 },
  { name: 'Universidad Católica del Norte',          logo: '/assets/companies/ucn.png',                  darkBrightness: 1,   w: 885,  h: 885  },
  { name: 'Sociedad Chilena de Ciencia de la Comp.', logo: '/assets/companies/sccc.png',                 darkBrightness: 2.5, w: 2000, h: 367  },
];

const track = [...companies, ...companies];

export function CompaniesCarousel() {
  return (
    <section
      id="empresas"
      className="scroll-mt-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
    >
      <div className="mb-8">
        <h2 className="flex items-center text-3xl font-bold tracking-tight gap-x-3 text-black/80 dark:text-white">
          <BuildingIcon />
          Empresas donde trabajé
        </h2>
        <div className="section-underline" />
      </div>

      <div className="relative overflow-hidden mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[var(--page-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[var(--page-bg)] to-transparent" />

        <div className="animate-marquee flex items-center gap-12 w-max">
          {track.map((company, i) => (
            <Image
              key={i}
              src={company.logo}
              alt={company.name}
              width={company.w}
              height={company.h}
              className={`shrink-0 object-contain max-w-[200px] ${'tall' in company && company.tall ? 'h-24' : 'h-16'} w-auto grayscale opacity-50 dark:opacity-70 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300 ${darkBrightnessClass[company.darkBrightness]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="w-8 h-8"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l18 0" />
      <path d="M9 8l1 0" />
      <path d="M9 12l1 0" />
      <path d="M9 16l1 0" />
      <path d="M14 8l1 0" />
      <path d="M14 12l1 0" />
      <path d="M14 16l1 0" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </svg>
  );
}
