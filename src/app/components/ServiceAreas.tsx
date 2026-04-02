'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ServiceAreas() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('areas_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('areas_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Map Area */}
          <div className="bg-gray-100 rounded-lg p-4 md:p-6 flex items-center justify-center min-h-64 md:min-h-80">
            <div className="text-center">
              <div className="text-4xl md:text-6xl mb-2 md:mb-4">🗺️</div>
              <p className="text-sm md:text-base text-gray-600 font-semibold">Khu vực Hà Nam & Hà Nội</p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Phục vụ các tỉnh lân cận</p>
            </div>
          </div>

          {/* Coverage Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-4 flex items-center gap-2">
                📍 {t('areas_primary')}
              </h3>
              <div className="space-y-2">
                {[
                  t('areas_ha_nam'),
                  t('areas_ha_noi'),
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 md:p-3 bg-blue-50 rounded">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-blue-900 font-semibold">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                🚚 {t('areas_secondary')}
              </h3>
              <div className="space-y-2">
                {[
                  t('areas_bac_ninh'),
                  t('areas_hung_yen'),
                  t('areas_hai_phong'),
                ].map((area, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 md:p-3 bg-gray-100 rounded">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
