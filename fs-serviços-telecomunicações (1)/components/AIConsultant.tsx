
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { MessageSquare, Send, Sparkles, X, Loader2 } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Olá! Sou seu consultor técnico assistido por IA. Qual o tamanho do seu projeto de rede hoje?' }
  ]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "Você é um consultor técnico sênior da FS Serviços Telecomunicações. Ajude o cliente a entender qual tecnologia (FTTH, Wi-Fi 6, MikroTik, Cabeamento Estruturado) é melhor para o caso dele. Seja profissional, técnico e educado. Diga que para orçamentos finais ele deve clicar no botão de WhatsApp da página principal.",
          temperature: 0.7,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "Desculpe, tive um problema técnico. Tente novamente." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Erro ao conectar com o consultor. Por favor, tente falar diretamente pelo WhatsApp." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full gold-gradient shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Sparkles className="w-6 h-6 text-fs-dark" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-fs-dark font-bold px-0 group-hover:px-2">
          Consultoria IA
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-fs-card w-full max-w-lg rounded-[32px] border border-gold/20 flex flex-col h-[600px] overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-fs-dark" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Consultor Técnico IA</h3>
                  <p className="text-[10px] text-gold uppercase tracking-widest">FS Serviços Telecom</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gold text-fs-dark font-medium rounded-tr-none' 
                      : 'bg-white/5 text-white/80 rounded-tl-none border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                    <Loader2 className="w-5 h-5 animate-spin text-gold" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleAsk} className="p-6 border-t border-white/10 bg-black/40">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Descreva seu projeto ou dúvida técnica..."
                  className="w-full bg-fs-dark border border-white/10 rounded-2xl px-5 py-4 pr-14 focus:outline-none focus:border-gold transition-colors text-white"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-2 p-3 gold-gradient rounded-xl text-fs-dark hover:opacity-90 transition-opacity disabled:grayscale"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
