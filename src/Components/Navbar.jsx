import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector.jsx';

export default function Navbar() {
  const { t } = useTranslation('common');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#unificacion', label: t('nav.unification') },
    { href: '#perfiles', label: t('nav.roles') },
    { href: '#arquitectura', label: t('nav.architecture') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo Corporativo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-indigo-200">
            E
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            {t('brand.prefix')}
            <span className="text-indigo-600">{t('brand.suffix')}</span>
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controles Derecha (Idioma + Auth) */}
        <div className="flex items-center gap-2.5">
          <LanguageSelector />

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-indigo-600 px-3 py-2 transition-colors whitespace-nowrap"
            >
              {t('nav.login')}
            </a>
            <a
              href="/demo"
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm shadow-indigo-200 transition-all whitespace-nowrap"
            >
              {t('nav.centerAccess')}
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 sm:hidden">
            <a
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {t('nav.login')}
            </a>
            <a
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold text-white"
            >
              {t('nav.centerAccess')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
