'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const getStats = (t: (key: string) => string) => [
  { icon: '📅', label: t('stats_years'), value: '15+' },
  { icon: '🏢', label: t('stats_companies'), value: '500+' },
  { icon: '🚌', label: t('stats_vehicles'), value: '150+' },
  { icon: '😊', label: t('stats_satisfied'), value: '98%' },
];

export default function Stats() {
  const { t } = useLanguage();
  const stats = getStats(t);

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t('stats_title')}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-5xl mb-2 md:mb-3">{stat.icon}</div>
              <p className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</p>
              <p className="text-xs md:text-base text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
