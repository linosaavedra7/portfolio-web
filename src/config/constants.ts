export const APP_NAME = 'Lino Saavedra';
export const APP_DESCRIPTION = 'Full Stack Developer & Software Engineer';
export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const EMAIL = 'linosaavedra2@gmail.com';

export const NAV_LINKS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: 'mailto:linosaavedra2@gmail.com', external: true },
] as const;
