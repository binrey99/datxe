'use client';

import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white w-full sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="font-bold text-base md:text-lg">VE TRANSPORT</span>
              <p className="text-xs text-blue-200">{t('header_tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center text-sm">
            <a href="javascript:void(0)" className="hover:text-yellow-300">{t('nav_services')}</a>
            <a href="javascript:void(0)" className="hover:text-yellow-300">{t('nav_pricing')}</a>
            <a href="javascript:void(0)" className="hover:text-yellow-300">{t('nav_about')}</a>
            <a href="javascript:void(0)" className="hover:text-yellow-300">{t('nav_contact')}</a>
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-bold hover:bg-yellow-300 text-xs">
              {t('nav_quote')}
            </button>
            
            {/* Language Selector Desktop */}
            <div className="flex gap-2 ml-4 border-l border-blue-700 pl-4">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 text-xs rounded ${language === 'vi' ? 'bg-yellow-400 text-blue-900 font-bold' : 'hover:text-yellow-300'}`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-2 py-1 text-xs rounded ${language === 'zh' ? 'bg-yellow-400 text-blue-900 font-bold' : 'hover:text-yellow-300'}`}
              >
                中文
              </button>
            </div>
          </div>

          {/* Mobile Menu Button + Language */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language Selector Mobile */}
            <div className="flex gap-1 border-r border-blue-700 pr-3">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-2 py-1 text-xs rounded ${language === 'vi' ? 'bg-yellow-400 text-blue-900 font-bold' : 'hover:text-yellow-300'}`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('zh')}
                className={`px-2 py-1 text-xs rounded ${language === 'zh' ? 'bg-yellow-400 text-blue-900 font-bold' : 'hover:text-yellow-300'}`}
              >
                中文
              </button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl hover:text-yellow-300"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-blue-800 rounded p-4 space-y-2 mt-2">
            <a href="javascript:void(0)" className="block py-2 hover:text-yellow-300">{t('nav_services')}</a>
            <a href="javascript:void(0)" className="block py-2 hover:text-yellow-300">{t('nav_pricing')}</a>
            <a href="javascript:void(0)" className="block py-2 hover:text-yellow-300">{t('nav_about')}</a>
            <a href="javascript:void(0)" className="block py-2 hover:text-yellow-300">{t('nav_contact')}</a>
            <button className="w-full bg-yellow-400 text-blue-900 px-4 py-2 rounded font-bold hover:bg-yellow-300 text-sm">
              {t('nav_quote')}
            </button>
          </div>
        )}
      </div>

      {/* Info Bar */}
      <div className="bg-blue-800 text-center py-2 text-xs md:text-sm overflow-x-auto">
        <span className="inline-block">☎️ {t('header_hotline')} 0912-456-789 | 📧 contact@vetransport.vn</span>
      </div>
    </header>
  );
}
