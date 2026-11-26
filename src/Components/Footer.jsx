import React from 'react';
import { useTranslation } from 'react-i18next';


export const Footer = () => {
      const { t } = useTranslation(['home', 'common']);
    
  return (
     <footer
        id="arquitectura"
        className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-12 border-t border-slate-800"
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
  )
}
