'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const getServices = (t: (key: string) => string) => [
  { icon: '📅', title: t('service_long_term'), desc: t('service_long_term_desc') },
  { icon: '🚌', title: t('service_shuttle'), desc: t('service_shuttle_desc') },
  { icon: '🎉', title: t('service_charter'), desc: t('service_charter_desc') },
  { icon: '🌙', title: t('service_24_7'), desc: t('service_24_7_desc') },
  { icon: '👥', title: t('service_driver'), desc: t('service_driver_desc') },
  { icon: '🔒', title: t('service_safety'), desc: t('service_safety_desc') },
];

export default function PopularRoutes() {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('services_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-8">{t('services_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border-2 border-blue-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow hover:border-blue-400">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">{service.icon}</div>
              <h3 className="text-base md:text-xl font-bold text-blue-900 mb-1 md:mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
