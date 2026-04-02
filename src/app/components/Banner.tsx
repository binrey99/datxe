'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Banner() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 py-8 md:py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 px-4">
        <div className="flex-1 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">{t('banner_title')}</h1>
          <h2 className="text-xl md:text-2xl text-yellow-300 mb-2 md:mb-4">{t('banner_subtitle')}</h2>
          <p className="text-white text-sm md:text-lg mb-4 md:mb-6">{t('banner_desc')}</p>
          <div className="flex gap-2 md:gap-4 flex-col xs:flex-row">
            <button className="bg-yellow-400 text-blue-900 px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-yellow-300 text-sm md:text-lg w-full xs:w-auto">
              {t('banner_quote_btn')}
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-white hover:text-blue-900 text-sm md:text-lg w-full xs:w-auto">
              {t('banner_contact_btn')}
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6">
            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3 md:mb-4">{t('banner_quote_btn')}</h3>
            <input className="w-full border rounded px-3 md:px-4 py-2 mb-2 md:mb-3 text-sm" placeholder={t('banner_company')} />
            <input className="w-full border rounded px-3 md:px-4 py-2 mb-2 md:mb-3 text-sm" placeholder={t('banner_contact_person')} />
            <input className="w-full border rounded px-3 md:px-4 py-2 mb-2 md:mb-3 text-sm" type="email" placeholder={t('banner_email')} />
            <input className="w-full border rounded px-3 md:px-4 py-2 mb-2 md:mb-3 text-sm" placeholder={t('banner_phone')} />
            <textarea className="w-full border rounded px-3 md:px-4 py-2 mb-2 md:mb-3 text-sm" placeholder={t('banner_need')} rows={2}></textarea>
            <button className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 text-sm">
              {t('banner_submit')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
