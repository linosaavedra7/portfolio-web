export const APP_NAME = 'Lino Saavedra';
export const APP_DESCRIPTION = 'Full Stack Developer & Software Engineer';
export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const EMAIL = 'linosaavedra2@gmail.com';

export const NAV_LINKS = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Contacto', href: 'https://wa.me/56998378427?text=Vi%20tu%20sitio%20web%20de%20desarrollador%2C%20me%20interesa%20contactarte', external: true },
] as const;
