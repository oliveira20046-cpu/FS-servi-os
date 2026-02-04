
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "CEO, Provedor NetFly",
    content: "A FS Serviços transformou nossa infraestrutura de rede. A migração para FTTH foi impecável, e o suporte técnico deles é de outro nível.",
    rating: 5
  },
  {
    name: "Ana Paula Silva",
    role: "Gerente de TI, Hotel Imperial",
    content: "Cabeamento estruturado de primeira qualidade. Organização e performance que superaram todas as nossas expectativas.",
    rating: 5
  },
  {
    name: "Ricardo Mendonça",
    role: "Proprietário, AgroForte",
    content: "Instalação de câmeras e rede Wi-Fi em toda a fazenda. Conectividade robusta até em locais de difícil acesso.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-fs-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-gold font-bold uppercase tracking-[0.2em] mb-4">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Confiança que Conecta</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[40px] hover:border-gold/30 transition-all group">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" />
              <p className="text-white/70 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h5 className="font-bold text-lg">{t.name}</h5>
                <p className="text-gold/60 text-sm uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
