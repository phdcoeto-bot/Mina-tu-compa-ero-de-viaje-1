import React, { useState } from 'react';
import { AppView, Language } from './types';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ChatWidget from './components/ChatWidget';
import EsimMarket from './components/EsimMarket';
import Perks from './components/Perks';
import MembershipPaywall from './components/MembershipPaywall';
import DigitalWallet from './components/DigitalWallet';

export default function App() {
  const [hasPaidMembership, setHasPaidMembership] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('es');

  // If membership is not paid, show the paywall
  if (!hasPaidMembership) {
    return <MembershipPaywall onSuccess={() => setHasPaidMembership(true)} />;
  }

  // Simple router logic
  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard 
          language={language}
          setLanguage={setLanguage}
          onNavigate={(view) => {
            if (view === 'CHAT') {
                setIsChatOpen(true);
            } else {
                setCurrentView(view);
            }
        }} />;
      case AppView.ESIM:
        return <EsimMarket language={language} />;
      case AppView.WALLET:
        return <DigitalWallet language={language} />;
      case AppView.PERKS:
        return <Perks language={language} />;
      default:
        return <Dashboard language={language} setLanguage={setLanguage} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-brand-100">
      
      {/* Mobile-first Container */}
      <main className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Top Safe Area Spacing (for mobile feeling on desktop) */}
        <div className="h-4 bg-gray-50 w-full"></div>

        {/* Content Area */}
        <div className="px-5 py-4 min-h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
           {renderView()}
        </div>

        {/* Floating Chat Widget */}
        <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} language={language} />

        {/* Bottom Navigation */}
        <Navbar 
          currentView={currentView} 
          onChangeView={setCurrentView} 
          isChatOpen={isChatOpen}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
          language={language}
        />
        
      </main>
    </div>
  );
}