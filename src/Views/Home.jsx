import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar.jsx';

const ROLE_KEYS = ['alumnos', 'docentes', 'familias'];

export default function Home() {
  const { t } = useTranslation(['home', 'common']);
  const [activeRole, setActiveRole] = useState('alumnos');

  const pillars = t('home:pillars.items', { returnObjects: true });
  const safePillars = Array.isArray(pillars) ? pillars : [];

  const currentProfile = t(`home:rolesSection.profiles.${activeRole}`, {
    returnObjects: true,
  });
  const highlights = Array.isArray(currentProfile?.highlights)
    ? currentProfile.highlights
    : [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t('home:hero.badge')}
            </div>

            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              {t('home:hero.titlePrefix')}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-emerald-500">
                {t('home:hero.titleHighlight')}
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600 leading-relaxed">
              {t('home:hero.subtitle')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/login"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-200 transition-all"
              >
                {t('home:hero.ctaPrimary')}
              </a>
              <a
                href="#unificacion"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-200 transition-all"
              >
                {t('home:hero.ctaSecondary')}
              </a>
            </div>

            {/* Mockup Visual del Dashboard Unificado */}
            <div className="mt-16 max-w-5xl mx-auto rounded-2xl bg-white p-2 sm:p-4 shadow-2xl shadow-slate-200/80 border border-slate-200/80 text-left">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-400 font-mono">
                  {t('home:mockup.url')}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-6 bg-slate-50/70 rounded-xl mt-2">
                {/* Tarjeta 1: Aula Virtual */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      {t('home:mockup.campus.badge')}
                    </span>
                    <span className="text-xs text-slate-400 shrink-0">
                      {t('home:mockup.campus.due')}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {t('home:mockup.campus.title')}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('home:mockup.campus.meta')}
                  </p>
                  <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-4/5 rounded-full" />
                  </div>
                </div>

                {/* Tarjeta 2: Calificaciones Oficiales */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {t('home:mockup.grades.badge')}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 shrink-0">
                      {t('home:mockup.grades.delta')}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {t('home:mockup.grades.title')}
                  </h3>
                  <p className="text-2xl font-extrabold text-slate-900 mt-1">
                    8.75{' '}
                    <span className="text-xs font-normal text-slate-400">
                      {t('home:mockup.grades.scale')}
                    </span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('home:mockup.grades.footer')}
                  </p>
                </div>

                {/* Tarjeta 3: Comunicación / Intranet */}
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                      {t('home:mockup.comms.badge')}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">
                    {t('home:mockup.comms.title')}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t('home:mockup.comms.body')}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-indigo-600">
                    {t('home:mockup.comms.link')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: LOS 4 PILARES UNIFICADOS */}
        <section
          id="unificacion"
          className="py-20 bg-white border-y border-slate-200/70"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {t('home:pillars.title')}
              </h2>
              <p className="mt-3 text-slate-600">
                {t('home:pillars.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {safePillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-100/70 text-indigo-700 mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN INTERACTIVA POR PERFIL */}
        <section id="perfiles" className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900">
                {t('home:rolesSection.title')}
              </h2>
              <p className="mt-2 text-slate-600">
                {t('home:rolesSection.subtitle')}
              </p>
            </div>

            {/* Selector de pestañas */}
            <div className="flex justify-center gap-2 p-1.5 bg-slate-200/70 rounded-xl max-w-lg mx-auto mb-10">
              {ROLE_KEYS.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeRole === role
                      ? 'bg-white text-indigo-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t(`home:rolesSection.tabs.${role}`)}
                </button>
              ))}
            </div>

            {/* Contenido dinámico del rol */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                {currentProfile?.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {currentProfile?.description}
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="arquitectura"
        className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              E
            </div>
            <span className="text-white font-bold tracking-tight">
              {t('common:brand.name')}
            </span>
          </div>
          <p className="text-xs text-center sm:text-right">
            {t('common:footer.tfgNotice')}
          </p>
        </div>
      </footer>
    </div>
  );
}
