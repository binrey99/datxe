'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Fleet() {
  const { t } = useLanguage();

  const vehicles = [
    { 
      icon: '🚐',
      name: t('fleet_car_name'), 
      desc: t('fleet_car_desc'),
      specs: `${t('fleet_capacity')}: 16 | ${t('fleet_year')}: 2022-2024`
    },
    { 
      icon: '🚌',
      name: t('fleet_bus_name'), 
      desc: t('fleet_bus_desc'),
      specs: `${t('fleet_capacity')}: 29 | ${t('fleet_year')}: 2021-2023`
    },
    { 
      icon: '🚚',
      name: t('fleet_truck_name'), 
      desc: t('fleet_truck_desc'),
      specs: `${t('fleet_capacity')}: 5T | ${t('fleet_year')}: 2020-2024`
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('fleet_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('fleet_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {vehicles.map((vehicle, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white h-16 md:h-20 flex items-center justify-center text-3xl md:text-5xl">
                {vehicle.icon}
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-base md:text-xl font-bold text-blue-900 mb-1 md:mb-2">{vehicle.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">{vehicle.desc}</p>
                <div className="bg-blue-50 p-2 md:p-3 rounded text-xs md:text-sm text-gray-700 border-l-4 border-blue-600">
                  {vehicle.specs}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
