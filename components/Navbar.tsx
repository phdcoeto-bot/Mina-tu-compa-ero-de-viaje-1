import React from 'react';
import { LayoutDashboard, Wifi, CreditCard, ShieldPlus, MessageCircle } from 'lucide-react';
import { AppView, Language } from '../types';

interface NavbarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  isChatOpen: boolean;
  onToggleChat: () => void;
  language: Language;
}

const NAV_TRANSLATIONS = {
  es: { home: 'Inicio', esim: 'eSIM', mine: 'Mine', wallet: 'Billetera', perks: 'Beneficios' },
  en: { home: 'Home', esim: 'eSIM', mine: 'Mine', wallet: 'Wallet', perks: 'Perks' },
  jp: { home: 'ホーム', esim: 'eSIM', mine: 'マイン', wallet: 'ウォレット', perks: '特典' },
  kr: { home: '홈', esim: 'eSIM', mine: '마인', wallet: '지갑', perks: '혜택' },
};

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView, isChatOpen, onToggleChat, language }) => {
  const t = NAV_TRANSLATIONS[language];

  const navItems = [
    { id: AppView.DASHBOARD, icon: LayoutDashboard, label: t.home },
    { id: AppView.ESIM, icon: Wifi, label: t.esim },
    { id: 'CHAT_BTN', icon: MessageCircle, label: t.mine, isAction: true },
    { id: AppView.WALLET, icon: CreditCard, label: t.wallet },
    { id: AppView.PERKS, icon: ShieldPlus, label: t.perks },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2 pb-6 md:pb-2 z-40 shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          
          if (item.isAction) {
             return (
                <div key={item.id} className="relative -top-5">
                   <button 
                     onClick={onToggleChat}
                     className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition active:scale-95 ${
                        isChatOpen ? 'bg-gray-800 text-white' : 'bg-brand-500 text-white'
                     }`}
                   >
                      <item.icon size={24} />
                   </button>
                </div>
             )
          }

          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id as AppView)}
              className={`flex flex-col items-center gap-1 transition ${
                isActive ? 'text-brand-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;