'use client';

import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {/* Về VE Transport */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-4">{t('footer_title')}</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">{t('footer_desc')}</p>
            <div className="flex gap-3">
              <a href="javascript:void(0)" className="text-blue-400 hover:text-blue-300">Facebook</a>
              <a href="javascript:void(0)" className="text-blue-400 hover:text-blue-300">WeChat</a>
            </div>
          </div>

          {/* Dịch Vụ */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-4">{t('footer_services')}</h4>
            <ul className="text-xs md:text-sm text-gray-300 space-y-1 md:space-y-2">
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_long_term')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_shuttle')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_charter')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_insurance')}</a></li>
            </ul>
          </div>

          {/* Công Ty */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-4">{t('footer_company')}</h4>
            <ul className="text-xs md:text-sm text-gray-300 space-y-1 md:space-y-2">
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_about')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_career')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">{t('footer_news')}</a></li>
              <li><a href="javascript:void(0)" className="hover:text-white">Liên Hệ</a></li>
            </ul>
          </div>

          {/* Liên Hệ & Hỗ Trợ */}
          <div>
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-4">{t('footer_contact_title')}</h4>
            <p className="text-xs md:text-sm text-gray-300 mb-1 md:mb-2">☎️ <strong>0912-456-789</strong></p>
            <p className="text-xs md:text-sm text-gray-300 mb-1 md:mb-2">📧 contact@vetransport.vn</p>
            <p className="text-xs md:text-sm text-gray-300 mb-1 md:mb-2">📍 Hà Nam, Việt Nam</p>
            <p className="text-xs md:text-sm text-blue-400 font-semibold">🌍 {t('footer_chinese_support')}</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-4 md:mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400">
          <p>&copy; 2026 VE Transport. {t('footer_copyright')}</p>
          <div className="flex gap-2 md:gap-4 mt-3 md:mt-0 flex-wrap justify-center md:justify-start">
            <a href="javascript:void(0)" className="hover:text-white">{t('footer_terms')}</a>
            <a href="javascript:void(0)" className="hover:text-white">{t('footer_privacy')}</a>
            <a href="javascript:void(0)" className="hover:text-white">{t('footer_agreement')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
