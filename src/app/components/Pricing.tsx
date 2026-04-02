'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    { 
      title: t('pricing_monthly'), 
      price: t('pricing_monthly_price'), 
      period: 'đ/tháng',
      desc: t('pricing_monthly_desc'),
      color: 'border-blue-400'
    },
    { 
      title: t('pricing_yearly'), 
      price: t('pricing_yearly_price'), 
      period: 'đ/năm',
      desc: t('pricing_yearly_desc'),
      color: 'border-green-400',
      highlight: true
    },
    { 
      title: t('pricing_charter'), 
      price: t('pricing_charter_price'), 
      period: '',
      desc: t('pricing_charter_desc'),
      color: 'border-purple-400'
    },
  ];

  const features = [
    t('pricing_feature1'),
    t('pricing_feature2'),
    t('pricing_feature3'),
    t('pricing_feature4'),
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('pricing_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('pricing_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`border-2 ${plan.color} rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow ${
                plan.highlight ? 'transform md:scale-105' : ''
              }`}
            >
              <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-1 md:mb-2">{plan.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{plan.desc}</p>
              <div className="mb-4 md:mb-6">
                <p className="text-2xl md:text-3xl font-bold text-green-600">{plan.price}</p>
                <p className="text-xs text-gray-500">{plan.period}</p>
              </div>
              <button className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded hover:bg-yellow-300 mb-3 md:mb-4 text-sm">
                {t('pricing_request')}
              </button>
              <div className="border-t pt-3 md:pt-4">
                <p className="font-semibold text-xs md:text-sm text-blue-900 mb-2 md:mb-3">{t('pricing_includes')}</p>
                <ul className="space-y-1 md:space-y-2">
                  {features.map((feature, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-600">✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
