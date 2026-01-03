import React from 'react';
import { Crown, HeartHandshake, Armchair, Shield, Lock } from 'lucide-react';
import { Language } from '../types';

const TRANSLATIONS = {
  es: {
    title: 'Beneficios Premium',
    member: 'MIEMBRO',
    sub_active: 'Tu suscripción anual está activa',
    med_ins: 'Seguro Médico $50k USD',
    lounge: '4 Pases Salas VIP / año',
    assistance: 'Servicios de Asistencia',
    assist_247: 'Asistencia 24/7',
    assist_desc: 'Médica, legal y equipaje perdido',
    call: 'Llamar',
    lock: 'Bloqueo de Tarjeta',
    lock_desc: 'Seguridad instantánea',
    wc_promo: '¿Necesitas mejorar tu plan para el Mundial 2026?',
    see_opts: 'Ver Opciones'
  },
  en: {
    title: 'Premium Perks',
    member: 'MEMBER',
    sub_active: 'Your annual subscription is active',
    med_ins: '$50k USD Medical Insurance',
    lounge: '4 VIP Lounge Passes / year',
    assistance: 'Assistance Services',
    assist_247: '24/7 Assistance',
    assist_desc: 'Medical, legal, and lost luggage',
    call: 'Call',
    lock: 'Card Lock',
    lock_desc: 'Instant security',
    wc_promo: 'Need to upgrade for World Cup 2026?',
    see_opts: 'View Options'
  },
  jp: {
    title: 'プレミアム特典',
    member: 'メンバー',
    sub_active: '年間購読が有効です',
    med_ins: '$50k USD 医療保険',
    lounge: 'VIPラウンジパス 4回/年',
    assistance: 'アシスタンスサービス',
    assist_247: '24時間年中無休サポート',
    assist_desc: '医療、法律、手荷物紛失',
    call: '電話する',
    lock: 'カードロック',
    lock_desc: '即時セキュリティ',
    wc_promo: '2026年ワールドカップに向けてアップグレードが必要ですか？',
    see_opts: 'オプションを見る'
  },
  kr: {
    title: '프리미엄 혜택',
    member: '멤버',
    sub_active: '연간 구독이 활성화되었습니다',
    med_ins: '$50k USD 의료 보험',
    lounge: 'VIP 라운지 패스 4회/년',
    assistance: '지원 서비스',
    assist_247: '24/7 지원',
    assist_desc: '의료, 법률 및 수하물 분실',
    call: '전화하기',
    lock: '카드 잠금',
    lock_desc: '즉각적인 보안',
    wc_promo: '2026 월드컵을 위해 업그레이드가 필요하신가요?',
    see_opts: '옵션 보기'
  }
};

interface PerksProps {
  language: Language;
}

const Perks: React.FC<PerksProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
           <Crown size={12} fill="currentColor" /> {t.member}
        </div>
      </div>

      <div className="bg-black text-white p-6 rounded-3xl relative overflow-hidden shadow-2xl">
         <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-1">Mine Black</h3>
            <p className="text-gray-400 text-sm mb-6">{t.sub_active}</p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Shield size={16} />
                  </div>
                  <span className="text-sm font-medium">{t.med_ins}</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Armchair size={16} />
                  </div>
                  <span className="text-sm font-medium">{t.lounge}</span>
               </div>
            </div>
         </div>
         {/* Abstract shapes */}
         <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
      </div>

      <h3 className="font-bold text-gray-800 mt-6">{t.assistance}</h3>
      <div className="grid grid-cols-1 gap-4">
         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:border-brand-300 transition">
            <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
               <HeartHandshake size={24} />
            </div>
            <div className="flex-1">
               <h4 className="font-bold text-gray-900">{t.assist_247}</h4>
               <p className="text-xs text-gray-500">{t.assist_desc}</p>
            </div>
            <button className="text-brand-600 font-bold text-sm">{t.call}</button>
         </div>

         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:border-brand-300 transition">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
               <Lock size={24} />
            </div>
            <div className="flex-1">
               <h4 className="font-bold text-gray-900">{t.lock}</h4>
               <p className="text-xs text-gray-500">{t.lock_desc}</p>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded-full relative">
               <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 shadow-sm"></div>
            </div>
         </div>
      </div>
      
      <div className="p-4 bg-brand-50 rounded-2xl border border-brand-100 mt-6 text-center">
         <p className="text-brand-800 text-sm">
           {t.wc_promo}
         </p>
         <button className="mt-2 text-brand-600 font-bold text-sm underline">{t.see_opts}</button>
      </div>
    </div>
  );
};

export default Perks;