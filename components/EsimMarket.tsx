import React, { useState } from 'react';
import { Wifi, Signal, ShieldCheck, ShoppingBag, Check, Zap, Info } from 'lucide-react';
import { DataPackage, Language } from '../types';

const DATA_PACKAGES: DataPackage[] = [
  { 
    id: '1', 
    gigs: 7, 
    label: '7 GB', 
    price: 10.00, 
    url: 'https://www.telcel.com/esim/amigo/paso2?data=eyJwYWNrYWdlTmFtZSI6IiBBbWlnbyBTaW4gTMOtbWl0ZSAyMDAgIiwicGFja2FnZVByaWNlIjoyMDAsInBhY2thZ2VTa3UiOiJQQTIwMCIsImZhbWlseU5hbWUiOiJQYXF1ZXRlcyBBbWlnbyBTaW4gTMOtbWl0ZSBlU0lNIn0%3D' 
  },
  { 
    id: '2', 
    gigs: 11, 
    label: '11 GB', 
    price: 15.00, 
    url: 'https://www.telcel.com/esim/amigo/paso2?data=eyJwYWNrYWdlTmFtZSI6IiBBbWlnbyBTaW4gTMOtbWl0ZSAzMDAgIiwicGFja2FnZVByaWNlIjozMDAsInBhY2thZ2VTa3UiOiJQQTMwMCIsImZhbWlseU5hbWUiOiJQYXF1ZXRlcyBBbWlnbyBTaW4gTMOtbWl0ZSBlU0lNIn0%3D' 
  },
  { 
    id: '3', 
    gigs: 16, 
    label: '16 GB', 
    price: 25.00, 
    url: 'https://www.telcel.com/esim/amigo/paso2?data=eyJwYWNrYWdlTmFtZSI6IiBBbWlnbyBTaW4gTMOtbWl0ZSA1MDAgICIsInBhY2thZ2VQcmljZSI6NTAwLCJwYWNrYWdlU2t1IjoiUEE1MDAiLCJmYW1pbHlOYW1lIjoiUGFxdWV0ZXMgQW1pZ28gU2luIEzDrW1pdGUgZVNJTSJ9' 
  },
];

const TRANSLATIONS = {
  es: {
    title: 'Conectividad',
    tab_store: 'Contratar',
    tab_mine: 'Mis eSIMs',
    banner_badge: 'Cobertura Unificada',
    banner_title: 'North America Pass',
    step1: 'Elige tus datos',
    step2: 'Protección',
    ins_title: 'Seguro de Viaje Mine+',
    ins_desc: 'Cobertura médica hasta $50k, pérdida de equipaje y cancelación de vuelos.',
    total: 'Total a pagar',
    btn_buy: 'Adquirir Paquete',
    note: 'Nota Importante:',
    note_text: 'Es posible que los precios aparezcan en pesos mexicanos (MXN) al finalizar la compra, ya que el proveedor es la principal telefónica del país.',
    redirect: 'Serás redirigido de forma segura para completar tu compra.',
    active_status: 'Activa • Expira en 28 días',
    data_usage: 'Uso de datos',
    ins_active: 'Seguro de Viaje Activo',
    btn_install: 'Instalar eSIM',
    btn_topup: 'Recargar'
  },
  en: {
    title: 'Connectivity',
    tab_store: 'Purchase',
    tab_mine: 'My eSIMs',
    banner_badge: 'Unified Coverage',
    banner_title: 'North America Pass',
    step1: 'Choose your data',
    step2: 'Protection',
    ins_title: 'Mine+ Travel Insurance',
    ins_desc: 'Medical coverage up to $50k, lost luggage and flight cancellation.',
    total: 'Total to pay',
    btn_buy: 'Purchase Package',
    note: 'Important Note:',
    note_text: 'Prices may appear in Mexican Pesos (MXN) at checkout as the provider is the main carrier in the country.',
    redirect: 'You will be securely redirected to complete your purchase.',
    active_status: 'Active • Expires in 28 days',
    data_usage: 'Data usage',
    ins_active: 'Active Travel Insurance',
    btn_install: 'Install eSIM',
    btn_topup: 'Top Up'
  },
  jp: {
    title: '接続性',
    tab_store: '購入',
    tab_mine: 'My eSIM',
    banner_badge: '統一カバレッジ',
    banner_title: '北米パス',
    step1: 'データを選択',
    step2: '保護',
    ins_title: 'Mine+ 旅行保険',
    ins_desc: '最大$50kの医療補償、手荷物紛失、フライトキャンセル。',
    total: '支払い合計',
    btn_buy: 'パッケージを購入',
    note: '重要:',
    note_text: 'プロバイダーが現地の主要通信会社であるため、チェックアウト時に価格がメキシコペソ（MXN）で表示される場合があります。',
    redirect: '購入を完了するために安全にリダイレクトされます。',
    active_status: '有効 • 28日で期限切れ',
    data_usage: 'データ使用量',
    ins_active: '旅行保険有効',
    btn_install: 'eSIMをインストール',
    btn_topup: 'チャージ'
  },
  kr: {
    title: '연결',
    tab_store: '구매',
    tab_mine: '나의 eSIM',
    banner_badge: '통합 커버리지',
    banner_title: '북미 패스',
    step1: '데이터 선택',
    step2: '보호',
    ins_title: 'Mine+ 여행자 보험',
    ins_desc: '최대 $50k 의료 보장, 수하물 분실 및 항공편 취소.',
    total: '총 결제 금액',
    btn_buy: '패키지 구매',
    note: '중요:',
    note_text: '제공업체가 현지 주요 통신사이므로 결제 시 가격이 멕시코 페소(MXN)로 표시될 수 있습니다.',
    redirect: '구매를 완료하기 위해 안전하게 리디렉션됩니다.',
    active_status: '활성 • 28일 후 만료',
    data_usage: '데이터 사용량',
    ins_active: '여행자 보험 활성',
    btn_install: 'eSIM 설치',
    btn_topup: '충전'
  }
};

interface EsimMarketProps {
  language: Language;
}

const EsimMarket: React.FC<EsimMarketProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'store' | 'my-esims'>('store');
  const [selectedPkgId, setSelectedPkgId] = useState<string>('2'); // Default 11GB
  const [includeInsurance, setIncludeInsurance] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const t = TRANSLATIONS[language];

  const selectedPackage = DATA_PACKAGES.find(p => p.id === selectedPkgId) || DATA_PACKAGES[1];
  const insurancePrice = 10.00;
  const totalPrice = selectedPackage.price + (includeInsurance ? insurancePrice : 0);

  const handlePurchase = () => {
    // 1. Open the specific link for the selected package immediately
    if (selectedPackage.url) {
      window.open(selectedPackage.url, '_blank');
    }

    setIsProcessing(true);
    
    // 2. Simulate internal app state update (Order placed)
    setTimeout(() => {
        setIsProcessing(false);
        setActiveTab('my-esims');
    }, 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
        <div className="flex gap-2">
           <button 
             onClick={() => setActiveTab('store')}
             className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'store' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'}`}
           >
             {t.tab_store}
           </button>
           <button 
             onClick={() => setActiveTab('my-esims')}
             className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'my-esims' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'}`}
           >
             {t.tab_mine}
           </button>
        </div>
      </div>

      {activeTab === 'store' ? (
        <div className="space-y-6">
           {/* Header Region Info */}
           <div className="bg-gradient-to-r from-indigo-900 to-blue-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-xs font-bold border border-white/30 px-2 py-0.5 rounded-full uppercase">{t.banner_badge}</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{t.banner_title}</h3>
                <div className="flex items-center gap-4 mt-2">
                   <div className="text-center">
                     <span className="text-3xl block">🇲🇽</span>
                     <span className="text-[10px] uppercase font-bold opacity-70">MEX</span>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-center">
                     <span className="text-3xl block">🇺🇸</span>
                     <span className="text-[10px] uppercase font-bold opacity-70">USA</span>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-center">
                     <span className="text-3xl block">🇨🇦</span>
                     <span className="text-[10px] uppercase font-bold opacity-70">CAN</span>
                   </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl -mr-10 -mt-10"></div>
           </div>

           {/* Step 1: Data Selection */}
           <div>
             <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs">1</div>
                {t.step1}
             </h4>
             <div className="grid grid-cols-3 gap-3">
               {DATA_PACKAGES.map(pkg => (
                 <button 
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3 rounded-xl border-2 transition relative ${
                        selectedPkgId === pkg.id 
                        ? 'border-brand-500 bg-brand-50' 
                        : 'border-gray-100 bg-white hover:border-brand-200'
                    }`}
                 >
                    {pkg.gigs >= 16 && (
                        <div className="absolute -top-2 -right-2">
                             <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                        </div>
                    )}
                    <span className="block font-bold text-lg text-gray-800">{pkg.label}</span>
                    <span className="block text-sm text-gray-500">${pkg.price}</span>
                 </button>
               ))}
             </div>
           </div>

           {/* Step 2: Insurance Add-on */}
           <div>
             <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs">2</div>
                {t.step2}
             </h4>
             <div 
                onClick={() => setIncludeInsurance(!includeInsurance)}
                className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition ${
                    includeInsurance ? 'border-brand-500 bg-brand-50' : 'border-gray-100 bg-white'
                }`}
             >
                <div className={`p-2 rounded-full ${includeInsurance ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <ShieldCheck size={24} />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between">
                        <h5 className="font-bold text-gray-800">{t.ins_title}</h5>
                        <span className="font-bold text-brand-700">+$10.00</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{t.ins_desc}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                    includeInsurance ? 'border-brand-500 bg-brand-500 text-white' : 'border-gray-300'
                }`}>
                    {includeInsurance && <Check size={14} />}
                </div>
             </div>
           </div>

           {/* Summary & Pay */}
           <div className="bg-white border-t border-gray-100 pt-4 pb-2">
               <div className="flex justify-between items-center mb-4">
                  <div>
                      <p className="text-sm text-gray-500">{t.total}</p>
                      <p className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)} USD</p>
                  </div>
               </div>
               <button 
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 transition flex items-center justify-center gap-2"
               >
                  {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                      <>
                        <ShoppingBag size={20} /> {t.btn_buy}
                      </>
                  )}
               </button>
               
               <div className="mt-4 flex gap-2 items-start bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-blue-800 leading-relaxed">
                     <span className="font-semibold">{t.note}</span> {t.note_text}
                  </p>
               </div>
               
               <p className="text-center text-[10px] text-gray-400 mt-2">
                 {t.redirect}
               </p>
           </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-200">
             <div className="flex justify-between items-center mb-4">
               <div>
                  <h3 className="font-bold text-lg text-gray-900">{t.banner_title}</h3>
                  <p className="text-sm text-gray-500">{t.active_status}</p>
               </div>
               <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                 <Signal size={20} />
               </div>
             </div>
             
             <div className="space-y-2">
               <div className="flex justify-between text-sm">
                 <span className="text-gray-600">{t.data_usage}</span>
                 <span className="font-bold">0.0 GB / 11 GB</span>
               </div>
               <div className="w-full bg-gray-100 rounded-full h-2">
                 <div className="bg-green-500 h-2 rounded-full w-[2%]"></div>
               </div>
             </div>
             
             <div className="mt-4 bg-gray-50 p-3 rounded-lg flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-600" />
                <span className="text-xs text-gray-600 font-medium">{t.ins_active}</span>
             </div>

             <div className="mt-6 flex gap-3">
               <button className="flex-1 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50">{t.btn_install}</button>
               <button className="flex-1 py-2 bg-brand-600 text-white rounded-lg text-sm font-semibold hover:bg-brand-700">{t.btn_topup}</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EsimMarket;