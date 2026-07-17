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
        </span>

        <ul className="flex flex-wrap items-center text-sm font-medium text-zinc-700 dark:text-white/90">
          <li>
            <a href="mailto:linosaavedra2@gmail.com" className="hover:underline">
              linosaavedra2@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
