import React, { useState } from 'react';
import { Wifi, CreditCard, ShieldCheck, ChevronRight, Globe, ExternalLink, Check } from 'lucide-react';
import MascotAvatar from './MascotAvatar';
import { Language } from '../types';

interface DashboardProps {
  onNavigate: (view: any) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TRANSLATIONS = {
  es: {
    greeting: 'Buenos días, viajero',
    title: <>Listo para tu<br/>próxima aventura?</>,
    chat: 'Hablar con Mine',
    esim_title: 'eSIM Activa',
    esim_rem: '2.4 GB restantes',
    card_title: 'Tarjeta',
    card_cta: 'Solicitar GRATIS',
    card_sub: 'Visa Internacional',
    wc_label: 'Mundial 2026',
    wc_title: 'México, USA & Canadá',
    wc_desc: 'Paquetes de datos especiales "Roaming Norteamérica" ya disponibles.',
    wc_btn: 'Ver Planes',
    status_title: 'Estado de Servicios',
    status_insurance: 'Seguro de Viaje',
    status_ins_sub: 'Activo - Cobertura Global',
    status_active: 'Activo',
    status_lounge: 'Acceso a Salas VIP',
    status_lounge_sub: 'Plan Premium requerido',
    status_activate: 'Activar'
  },
  en: {
    greeting: 'Good morning, traveler',
    title: <>Ready for your<br/>next adventure?</>,
    chat: 'Talk to Mine',
    esim_title: 'Active eSIM',
    esim_rem: '2.4 GB remaining',
    card_title: 'Card',
    card_cta: 'Get for FREE',
    card_sub: 'International Visa',
    wc_label: 'World Cup 2026',
    wc_title: 'Mexico, USA & Canada',
    wc_desc: 'Special "North America Roaming" data packages available now.',
    wc_btn: 'View Plans',
    status_title: 'Service Status',
    status_insurance: 'Travel Insurance',
    status_ins_sub: 'Active - Global Coverage',
    status_active: 'Active',
    status_lounge: 'VIP Lounge Access',
    status_lounge_sub: 'Premium Plan required',
    status_activate: 'Activate'
  },
  jp: {
    greeting: 'おはようございます、旅人さん',
    title: <>次の冒険の<br/>準備はいいですか？</>,
    chat: 'マインと話す',
    esim_title: 'eSIM アクティブ',
    esim_rem: '残り 2.4 GB',
    card_title: 'カード',
    card_cta: '無料で申し込む',
    card_sub: '国際 Visa カード',
    wc_label: '2026年 ワールドカップ',
    wc_title: 'メキシコ・米国・カナダ',
    wc_desc: '「北米ローミング」特別データパッケージが利用可能です。',
    wc_btn: 'プランを見る',
    status_title: 'サービス状況',
    status_insurance: '旅行保険',
    status_ins_sub: '有効 - グローバル補償',
    status_active: '有効',
    status_lounge: 'VIPラウンジ利用',
    status_lounge_sub: 'プレミアムプランが必要です',
    status_activate: '有効化'
  },
  kr: {
    greeting: '좋은 아침입니다, 여행자님',
    title: <>다음 모험을<br/>떠날 준비가 되셨나요?</>,
    chat: '마인과 대화하기',
    esim_title: 'eSIM 활성',
    esim_rem: '2.4 GB 남음',
    card_title: '카드',
    card_cta: '무료 신청',
    card_sub: '국제 Visa 카드',
    wc_label: '2026 월드컵',
    wc_title: '멕시코, 미국 & 캐나다',
    wc_desc: '특별 "북미 로밍" 데이터 패키지가 출시되었습니다.',
    wc_btn: '요금제 보기',
    status_title: '서비스 상태',
    status_insurance: '여행자 보험',
    status_ins_sub: '활성 - 글로벌 커버리지',
    status_active: '활성',
    status_lounge: 'VIP 라운지 입장',
    status_lounge_sub: '프리미엄 플랜 필요',
    status_activate: '활성화'
  }
};

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, language, setLanguage }) => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = TRANSLATIONS[language];

  const languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'jp', label: '日本語', flag: '🇯🇵' },
    { code: 'kr', label: '한국어', flag: '🇰🇷' },
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Header */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between relative overflow-visible">
        
        {/* Language Switcher - Absolute Top Right */}
        <div className="absolute top-4 right-4 z-50">
           <button 
             onClick={() => setShowLangMenu(!showLangMenu)}
             className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-brand-600 transition shadow-sm border border-gray-100 backdrop-blur-sm"
           >
             <Globe size={16} />
           </button>
           
           {showLangMenu && (
             <div className="absolute top-10 right-0 bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-40 animate-in fade-in zoom-in-95 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between hover:bg-gray-50 transition ${language === lang.code ? 'bg-brand-50 text-brand-700 font-medium' : 'text-gray-600'}`}
                  >
                    <span className="flex items-center gap-2">
                       <span>{lang.flag}</span> {lang.label}
                    </span>
                    {language === lang.code && <Check size={14} />}
                  </button>
                ))}
             </div>
           )}
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-sm mb-1">{t.greeting}</p>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">{t.title}</h2>
          <button 
            onClick={() => onNavigate('CHAT')}
            className="mt-4 px-4 py-2 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full hover:bg-brand-100 transition flex items-center gap-2"
          >
            {t.chat} <ChevronRight size={16} />
          </button>
        </div>
        <div className="relative z-10 mr-4 mt-2">
          <MascotAvatar size="md" />
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full -mr-10 -mt-10 z-0"></div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div 
            onClick={() => onNavigate('ESIM')}
            className="bg-blue-50 p-5 rounded-2xl cursor-pointer hover:shadow-md transition border border-blue-100"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mb-3 shadow-blue-200 shadow-lg">
            <Wifi size={20} />
          </div>
          <h3 className="font-bold text-gray-800">{t.esim_title}</h3>
          <p className="text-sm text-gray-500 mt-1">{t.esim_rem}</p>
          <div className="mt-3 w-full bg-blue-200 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full w-[60%]"></div>
          </div>
        </div>

        <div 
            onClick={() => window.open('https://wise.com/jp/account/', '_blank')}
            className="bg-emerald-50 p-5 rounded-2xl cursor-pointer hover:shadow-md transition border border-emerald-100 group relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-3 shadow-emerald-200 shadow-lg group-hover:scale-110 transition-transform">
                <CreditCard size={20} />
            </div>
            <h3 className="font-bold text-gray-800">{t.card_title}</h3>
            <p className="text-sm font-bold text-emerald-700 mt-1 flex items-center gap-1">
                {t.card_cta} <ExternalLink size={12} />
            </p>
            <p className="text-xs text-gray-500 mt-2">{t.card_sub}</p>
          </div>
        </div>
      </div>

      {/* World Cup Special Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="text-indigo-200" size={18} />
            <span className="text-indigo-200 text-xs font-bold uppercase tracking-wider">{t.wc_label}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{t.wc_title}</h3>
          <p className="text-indigo-100 text-sm mb-4 max-w-[80%]">
            {t.wc_desc}
          </p>
          <button 
             onClick={() => onNavigate('ESIM')}
             className="bg-white text-indigo-600 px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-gray-50 transition"
          >
            {t.wc_btn}
          </button>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-20 text-white">
          <Globe size={150} />
        </div>
      </div>

      {/* Status List */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">{t.status_title}</h3>
        <div className="space-y-4">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t.status_insurance}</p>
                  <p className="text-xs text-gray-500">{t.status_ins_sub}</p>
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{t.status_active}</span>
           </div>
           
           <div className="flex items-center justify-between opacity-60">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                  <Wifi size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t.status_lounge}</p>
                  <p className="text-xs text-gray-500">{t.status_lounge_sub}</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('PERKS')}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {t.status_activate}
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;