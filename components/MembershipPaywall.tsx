import React, { useState } from 'react';
import { ShieldCheck, Globe, CreditCard, Check, Sparkles } from 'lucide-react';
import MascotAvatar from './MascotAvatar';

interface MembershipPaywallProps {
  onSuccess: () => void;
}

const MembershipPaywall: React.FC<MembershipPaywallProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePay = () => {
    // Open the provided Stripe payment link
    window.open('https://buy.stripe.com/dRmbJ1faX88S8co08jbV601', '_blank');

    setIsLoading(true);
    // Simulate the system detecting the successful payment (webhook/return) 
    // to unlock the app for this demo
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 w-full max-w-sm text-center">
        <div className="mb-8 flex justify-center">
          <MascotAvatar size="lg" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bienvenido a Mine</h1>
        <p className="text-gray-500 mb-8">
          Tu pasaporte digital para viajar sin límites. Conéctate, paga y viaja seguro.
        </p>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mb-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-xl">
            ANUAL
          </div>
          
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Membresía Premium</h2>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-gray-900">$30.00</span>
            <span className="text-gray-500">/ año</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Acceso a eSIMs Globales</p>
                <p className="text-xs text-gray-500">Tarifas preferenciales en datos</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Tarjeta Visa</p>
                <p className="text-xs text-gray-500">Sin comisiones internacionales</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">Asistente de Viaje IA</p>
                <p className="text-xs text-gray-500">Ayuda 24/7 en cualquier idioma</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handlePay}
          disabled={isLoading}
          className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-brand-700 transition transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              Pagar Membresía <Sparkles size={18} />
            </>
          )}
        </button>
        
        <p className="text-xs text-gray-400 mt-4">
          Pago seguro procesado por Stripe. Cancelación disponible en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default MembershipPaywall;