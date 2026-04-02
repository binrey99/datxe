'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const getSteps = (t: (key: string) => string) => [
  { step: 1, title: t('how_step1'), desc: t('how_step1_desc') },
  { step: 2, title: t('how_step2'), desc: t('how_step2_desc') },
  { step: 3, title: t('how_step3'), desc: t('how_step3_desc') },
  { step: 4, title: t('how_step4'), desc: t('how_step4_desc') },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = getSteps(t);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('how_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('how_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="text-base md:text-lg font-bold text-center mb-1 md:mb-2 text-blue-900">{item.title}</h3>
              <p className="text-center text-gray-600 text-xs md:text-sm">{item.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-1/2 h-0.5 bg-blue-300 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
