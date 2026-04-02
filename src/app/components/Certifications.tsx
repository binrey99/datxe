'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Certifications() {
  const { t } = useLanguage();

  const certs = [
    { icon: '📄', title: t('cert_license'), desc: t('cert_license_desc') },
    { icon: '🛡️', title: t('cert_insurance'), desc: t('cert_insurance_desc') },
    { icon: '🔍', title: t('cert_inspection'), desc: t('cert_inspection_desc') },
    { icon: '✅', title: t('cert_tax'), desc: t('cert_tax_desc') },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('cert_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-10">{t('cert_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {certs.map((cert, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 md:p-6 border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-4xl mb-2 md:mb-3">{cert.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-blue-900 mb-1 md:mb-2">{cert.title}</h3>
              <p className="text-gray-700 text-xs md:text-sm">{cert.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-10 p-4 md:p-6 bg-blue-600 text-white rounded-lg text-center">
          <p className="text-base md:text-lg font-semibold mb-1 md:mb-2">🔐 VE Transport - Đối Tác Tin Cậy & Chuyên Nghiệp</p>
          <p className="text-sm md:text-base text-blue-100">Tất cả hoạt động đều tuân thủ quy định pháp luật, an toàn & minh bạch</p>
        </div>
      </div>
    </section>
  );
}
