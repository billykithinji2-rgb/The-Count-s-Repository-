import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, Calendar, Bot, User, RefreshCw, ChevronDown, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ChatMessage } from '../types';
import { Logo } from './Logo';

interface ChatbotProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPromptedTeaser, setHasPromptedTeaser] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Jambo! Welcome to EverSmile Dental at Garden City Business Park, Nairobi. I'm SmileBot, your 24/7 AI patient care assistant. How can I help you today with appointment bookings, working hours, laser teeth whitening, or emergency care?",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'What are your working hours?',
    'Where is the clinic located?',
    'Tell me about teeth whitening',
    'I have a dental emergency!',
    'How do I book an appointment?',
    'What are your social media links?',
    'Do you accept health insurance?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsgId = `user-${Date.now()}`;
    const newMessages: ChatMessage[] = [
      ...messages,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];

    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          messages: newMessages.map((m) => ({
            sender: m.sender,
            content: m.text,
          })),
        }),
      });

      const data = await res.json();
      const botReply = data.reply || data.fallback || "Thank you for reaching out to EverSmile Dental. Please call us at +254 795 803 669 for immediate assistance.";

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "We are having trouble connecting right now. Please call EverSmile Dental directly at +254 795 803 669 or use the booking form on this page.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: "Conversation refreshed! How can I assist your smile today?",
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Welcome Teaser Bubble (when closed) */}
      {!isOpen && hasPromptedTeaser && (
        <div className="mb-3 max-w-xs bg-white rounded-3xl p-4 shadow-xl border border-pink-100 text-xs text-slate-800 flex items-start gap-3 animate-fadeIn">
          <div className="shrink-0">
            <Logo size="sm" />
          </div>
          <div className="space-y-1">
            <div className="font-bold text-slate-900 flex items-center justify-between">
              <span className="font-display">EverSmile AI Concierge</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHasPromptedTeaser(false);
                }}
                className="text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Have questions about appointments, costs, or directions? Ask our friendly AI assistant!
            </p>
          </div>
        </div>
      )}

      {/* Floating Toggle Button with Pink to Emerald Gradient */}
      {!isOpen && (
        <button
          id="open-ai-chat-btn"
          onClick={() => {
            setIsOpen(true);
            setHasPromptedTeaser(false);
          }}
          className="group flex items-center gap-2.5 bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 text-white p-4 sm:px-6 sm:py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all transform hover:scale-105 cursor-pointer"
          aria-label="Open AI Dental Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
          </div>
          <span className="hidden sm:inline font-display font-bold text-sm">
            Chat with SmileBot AI
          </span>
        </button>
      )}

      {/* Expanded Chat Dialog */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] bg-white rounded-3xl shadow-2xl border border-pink-100 overflow-hidden flex flex-col h-[570px] max-h-[85vh] animate-scaleUp">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-emerald-600 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                <Logo size="sm" />
              </div>
              <div>
                <h4 className="font-display text-sm font-extrabold flex items-center gap-1.5 leading-tight">
                  <span>SmileBot Concierge</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                </h4>
                <div className="text-[10px] text-pink-100">
                  EverSmile Dental • Online 24/7
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Restart chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Help Ticker */}
          <div className="bg-pink-50/70 px-3.5 py-2 border-b border-pink-100 flex items-center justify-between text-[11px] text-pink-900 font-medium">
            <a
              href={CLINIC_INFO.socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-pink-600" />
              <span>Garden City Business Park</span>
            </a>
            <a href={`tel:${CLINIC_INFO.phoneClean}`} className="font-bold text-pink-700 hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-white border border-pink-100 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <Logo size="sm" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-pink-600 text-white rounded-tr-xs shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1.5 text-right ${
                      msg.sender === 'user' ? 'text-pink-200' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs mt-0.5 font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-slate-500">
                <div className="w-7 h-7 rounded-full bg-white border border-pink-100 flex items-center justify-center shrink-0">
                  <Logo size="sm" />
                </div>
                <div className="bg-white border border-pink-100 px-4 py-2.5 rounded-2xl rounded-tl-xs shadow-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-slate-500 ml-1">SmileBot is answering...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-slate-100 hover:bg-pink-50 text-slate-700 hover:text-pink-700 text-[11px] font-semibold transition-colors cursor-pointer disabled:opacity-50 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Action Bar: Book Appointment shortcut */}
          <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">Ready to visit clinic?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="font-bold text-pink-600 hover:text-pink-800 inline-flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Open Booking Form</span>
            </button>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about hours, whitening, implants, location..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white"
            />
            <button
              id="send-ai-message-btn"
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isLoading}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-600 to-emerald-500 hover:from-pink-700 hover:to-emerald-600 disabled:opacity-50 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
