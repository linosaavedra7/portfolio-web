import { APP_NAME, EMAIL } from '@/config/constants';

export function Footer() {
  return (
    <footer className="opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4 flex flex-col md:flex-row items-center gap-4">
        <span className="text-sm text-center text-zinc-800/90 dark:text-zinc-200/90 md:text-left">
          &copy; {new Date().getFullYear()}{' '}
          <a href="/" className="hover:underline">
            {APP_NAME}
          </a>
          . Hecho con{' '}
          <svg
            className="w-3.5 h-3.5 text-red-500 inline"
            aria-label="amor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>{' '}
          Casi todos los derechos reservados
        </span>

        <ul className="flex flex-wrap items-center text-sm font-medium text-zinc-700 dark:text-white/90">
          <li>
            <a href={`mailto:${EMAIL}`} className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
