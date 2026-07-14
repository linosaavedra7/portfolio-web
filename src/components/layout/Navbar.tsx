'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { NAV_LINKS } from '@/config/constants';
import { cn } from '@/lib/cn';

const SECTION_IDS = ['experiencia', 'proyectos', 'sobre-mi'];

function SunIcon() {
  return (
    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  );
}

const THEME_OPTIONS = [
  { value: 'light',  label: 'Light',  Icon: SunIcon },
  { value: 'dark',   label: 'Dark',   Icon: MoonIcon },
  { value: 'system', label: 'System', Icon: SystemIcon },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let closest = '';
      let closestDist = Infinity;
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - mid);
        if (dist < closestDist) { closestDist = dist; closest = id; }
      });
      setActiveSection(closest);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const CurrentIcon = resolvedTheme === 'light' ? SunIcon : MoonIcon;

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-4">
      <nav
        className={cn(
          'flex gap-x-1 px-4 py-1.5 text-sm font-medium rounded-full justify-center items-center border transition-all duration-300 text-gray-600 dark:text-gray-300',
          scrolled
            ? 'border-black/10 bg-white/80 backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.1)] dark:border-white/10 dark:bg-gray-900/80 dark:shadow-[0_3px_20px_rgb(0,0,0,0.3)]'
            : 'border-transparent',
        )}
      >
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;
          return (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'relative text-xs sm:text-sm block px-1.5 sm:px-3 py-2 sm:py-1.5 rounded-full transition-colors duration-200',
                isActive ? 'text-yellow-400 bg-white/5' : 'hover:text-yellow-400',
              )}
            >
              {link.label}
            </a>
          );
        })}

        {/* Theme toggle */}
        <div className="relative ml-2 pl-2 border-l border-white/10" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex hover:scale-125 transition-transform duration-200 p-1"
            aria-label="Cambiar tema"
          >
            <CurrentIcon />
          </button>

          {menuOpen && (
            <div className="absolute top-9 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md z-50 dark:border-gray-500/20 dark:bg-gray-900/90">
              <ul>
                {THEME_OPTIONS.map(({ value, label }) => (
                  <li
                    key={value}
                    onClick={() => { setTheme(value); setMenuOpen(false); }}
                    className={cn(
                      'px-2 py-1.5 cursor-pointer rounded-sm transition-colors',
                      theme === value
                        ? 'text-yellow-500 dark:text-yellow-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-neutral-400/40 dark:hover:bg-gray-500/50',
                    )}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
