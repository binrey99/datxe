'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const caseStudies = [
  { company: '青山集团', location: 'Hà Nội', employees: '150', feedback: '合作3年，非常满意服务质量。钟点车准时准点。(Hợp tác 3 năm, rất hài lòng chất lượng dịch vụ)' },
  { company: 'CSI 制造', location: 'Bắc Ninh', employees: '80', feedback: '周班车从不迟到，驾驶员专业素质高。强烈推荐！(Shuttle không bao giờ muộn, tài xế chuyên nghiệp)' },
  { company: '宏伟科技', location: 'Hưng Yên', employees: '200', feedback: '从厂区接送到酒店，安全舒适。24小时支持非常好。(Dịch vụ an toàn, thoải mái, hỗ trợ 24/7)' },
  { company: '力奇国际', location: 'Hà Nam', employees: '120', feedback: '价格合理，服务专业，推荐给其他公司。(Giá hợp lý, dịch vụ chuyên nghiệp)' },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 md:mb-2 text-blue-900">{t('case_title')}</h2>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6 md:mb-8">{t('case_subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {caseStudies.map((item, idx) => (
            <div key={idx} className="bg-white p-3 md:p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="mb-2 md:mb-3">
                <p className="font-bold text-sm md:text-lg text-blue-900">{item.company}</p>
                <p className="text-xs md:text-sm text-gray-500">📍 {item.location}</p>
                <p className="text-xs md:text-sm text-gray-500">👥 {item.employees} {t('case_employees')}</p>
              </div>
              <p className="text-gray-700 text-xs md:text-sm italic">"{item.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
