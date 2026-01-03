import React from 'react';
import { CreditCard, Plus, ArrowUpRight, ArrowDownLeft, History, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { Transaction, Language } from '../types';

const TRANSACTIONS: Transaction[] = [
  { id: '1', merchant: 'Starbucks Coffee', amount: 5.40, currency: 'USD', date: '9:41 AM', category: 'food' },
  { id: '2', merchant: 'Uber Trip', amount: 14.20, currency: 'USD', date: '8:30 PM', category: 'transport' },
  { id: '3', merchant: 'Duty Free Shop', amount: 89.90, currency: 'USD', date: '12 Oct', category: 'shopping' },
  { id: '4', merchant: 'Delta Airlines', amount: 240.00, currency: 'USD', date: '10 Oct', category: 'travel' },
];

const TRANSLATIONS = {
  es: {
    title: 'Billetera',
    balance: 'Balance Total',
    req_wise: 'Solicitar en Wise',
    req_card: 'Solicitar Tarjeta',
    free_wise: 'Gratis en Wise',
    send: 'Enviar',
    recent: 'Movimientos Recientes'
  },
  en: {
    title: 'Wallet',
    balance: 'Total Balance',
    req_wise: 'Request on Wise',
    req_card: 'Request Card',
    free_wise: 'Free on Wise',
    send: 'Send',
    recent: 'Recent Transactions'
  },
  jp: {
    title: 'ウォレット',
    balance: '総残高',
    req_wise: 'Wiseで申し込む',
    req_card: 'カードを申し込む',
    free_wise: 'Wiseで無料',
    send: '送る',
    recent: '最近の取引'
  },
  kr: {
    title: '지갑',
    balance: '총 잔액',
    req_wise: 'Wise에서 신청',
    req_card: '카드 신청',
    free_wise: 'Wise에서 무료',
    send: '보내기',
    recent: '최근 내역'
  }
};

interface DigitalWalletProps {
  language: Language;
}

const DigitalWallet: React.FC<DigitalWalletProps> = ({ language }) => {
  const [showCardNumber, setShowCardNumber] = React.useState(false);
  const t = TRANSLATIONS[language];

  const openWise = () => {
    window.open('https://wise.com/jp/account/', '_blank');
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <Plus size={20} />
        </button>
      </div>

      {/* Virtual Card */}
      <div 
        onClick={openWise}
        className="relative w-full aspect-[1.586] bg-gradient-to-bl from-gray-900 via-gray-800 to-black rounded-3xl p-6 shadow-2xl text-white overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 cursor-pointer group"
      >
        <div className="absolute top-0 right-0 p-6 opacity-20">
           <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
        </div>
        
        <div className="flex flex-col justify-between h-full relative z-10">
          <div className="flex justify-between items-start">
            <span className="font-bold text-lg tracking-wider">Mine</span>
            <span className="italic font-serif text-xl">VISA</span>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-yellow-200/20 rounded-md flex items-center justify-center backdrop-blur-sm border border-white/10">
                   <div className="w-8 h-5 border border-white/30 rounded-sm"></div>
                </div>
                <CreditCard className="opacity-50" size={24}/>
             </div>
             
             <div>
               <p className="text-xs text-gray-400 mb-1">{t.balance}</p>
               <p className="text-3xl font-bold font-mono">$1,250.00</p>
             </div>
             
             <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 font-mono text-sm tracking-widest">
                   {showCardNumber ? '4592 1234 5678 9010' : '•••• •••• •••• 9010'}
                   <button onClick={(e) => { e.stopPropagation(); setShowCardNumber(!showCardNumber); }} className="ml-2 opacity-70 hover:opacity-100">
                     {showCardNumber ? <EyeOff size={14} /> : <Eye size={14} />}
                   </button>
                </div>
                <div className="text-xs text-gray-400">
                  EXP 12/28
                </div>
             </div>
          </div>
          
          {/* Overlay for CTA */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
             <span className="flex items-center gap-2 font-bold text-lg">
                {t.req_wise} <ExternalLink size={20} />
             </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4">
         <button 
           onClick={openWise}
           className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition group"
         >
           <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
             <CreditCard size={20} />
           </div>
           <span className="font-semibold text-sm text-center">{t.req_card} <br/><span className="text-xs text-gray-500 font-normal">{t.free_wise}</span></span>
         </button>
         <button className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition">
           <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
             <ArrowUpRight size={20} />
           </div>
           <span className="font-semibold text-sm">{t.send}</span>
         </button>
      </div>

      {/* Transactions */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
           <History size={18} className="text-gray-400" /> {t.recent}
        </h3>
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
           {TRANSACTIONS.map((tx, i) => (
             <div key={tx.id} className={`p-4 flex items-center justify-between hover:bg-gray-50 transition ${i !== TRANSACTIONS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="flex items-center gap-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.category === 'food' ? 'bg-orange-100 text-orange-600' :
                      tx.category === 'transport' ? 'bg-blue-100 text-blue-600' :
                      tx.category === 'shopping' ? 'bg-pink-100 text-pink-600' :
                      'bg-indigo-100 text-indigo-600'
                   }`}>
                      {tx.category === 'food' && '🍔'}
                      {tx.category === 'transport' && '🚗'}
                      {tx.category === 'shopping' && '🛍️'}
                      {tx.category === 'travel' && '✈️'}
                   </div>
                   <div>
                      <p className="font-bold text-gray-800 text-sm">{tx.merchant}</p>
                      <p className="text-xs text-gray-400">{tx.date}</p>
                   </div>
                </div>
                <span className="font-bold text-gray-900">-${tx.amount.toFixed(2)}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalWallet;