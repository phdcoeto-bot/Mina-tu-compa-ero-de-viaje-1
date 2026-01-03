import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { Message, Language } from '../types';
import { sendMessageToMine } from '../services/geminiService';
import MascotAvatar from './MascotAvatar';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const TRANSLATIONS = {
  es: { header: 'Mine Asistente', status: 'En línea', placeholder: 'Escribe tu pregunta...' },
  en: { header: 'Mine Assistant', status: 'Online', placeholder: 'Type your question...' },
  jp: { header: 'マイン アシスタント', status: 'オンライン', placeholder: '質問を入力...' },
  kr: { header: '마인 어시스턴트', status: '온라인', placeholder: '질문을 입력하세요...' },
};

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onClose, language }) => {
  const t = TRANSLATIONS[language];
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: '¡Hola! Soy Mine, tu compañero de viaje. 🌍 ¿En qué puedo ayudarte hoy? ¿Necesitas datos eSIM o revisar tus finanzas?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Note: In a real app, we might prepend instruction to reply in the selected language
      const responseText = await sendMessageToMine(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:bg-transparent md:pointer-events-none">
      <div className="bg-white w-full h-full md:w-[400px] md:h-[600px] md:fixed md:bottom-24 md:right-6 md:rounded-2xl md:shadow-2xl md:border md:border-gray-200 flex flex-col pointer-events-auto overflow-hidden">
        {/* Header */}
        <div className="bg-brand-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <MascotAvatar size="sm" animated={false} />
            <div>
              <h3 className="font-bold">{t.header}</h3>
              <p className="text-xs text-brand-100">{t.status}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-brand-700 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 no-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent outline-none text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="p-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;