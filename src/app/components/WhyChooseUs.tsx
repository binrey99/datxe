'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const getBenefits = (t: (key: string) => string) => [
  { icon: '🏆', title: t('why_experience'), desc: t('why_experience_desc') },
  { icon: '💼', title: t('why_price'), desc: t('why_price_desc') },
  { icon: '🗣️', title: t('why_chinese'), desc: t('why_chinese_desc') },
  { icon: '🚌', title: t('why_vehicle'), desc: t('why_vehicle_desc') },
  { icon: '⏰', title: t('why_reliability'), desc: t('why_reliability_desc') },
  { icon: '📞', title: t('why_support'), desc: t('why_support_desc') },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const benefits = getBenefits(t);

  return (
    <section className="py-8 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('why_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('why_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-blue-600">
              <div className="text-2xl md:text-4xl mb-2 md:mb-3">{benefit.icon}</div>
              <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-blue-900">{benefit.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
