'use client';

import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function FAQs() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') },
    { q: t('faq_q6'), a: t('faq_a6') },
  ];

  return (
    <section className="py-8 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('faq_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('faq_subtitle')}</p>
        
        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-3 md:px-6 py-2 md:py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
              >
                <h3 className="text-sm md:text-lg font-bold text-blue-900 text-left">{faq.q}</h3>
                <span className="text-2xl text-blue-600 flex-shrink-0">
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-3 md:px-6 py-2 md:py-4 bg-blue-50 border-t">
                  <p className="text-sm md:text-base text-gray-700">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
