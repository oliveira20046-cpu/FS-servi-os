
import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { AIConsultant } from './components/AIConsultant';
import { 
  Network, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Server, 
  Construction,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  Globe,
  MessageCircle,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactPhone = "(94) 992646042";
  const contactEmail = "oliveira20046@gmail.com";
  const contactInstagram = "fs_servicos_telecom";
  const whatsappLink = "https://wa.me/5594992646042";
  const instagramLink = `https://instagram.com/${contactInstagram}`;

  const cities = [
    "Pau D'arco - PA",
    "Redenção - PA",
    "Santa Maria das Barreiras - PA",
    "Santana do Araguaia - PA",
    "Vila Rica - MT",
    "Confresa - MT"
  ];

  const services = [
    {
      title: "PROJETOS DE REDES OPTICA FTTH",
      description: "Planejamento, instalação e otimização de redes de fibra óptica até a residência. Foco em tecnologias GPON e EPON para garantir ultra velocidade e estabilidade inabalável de sinal.",
      items: ["Planejamento Estratégico", "Instalação Técnica", "Otimização de Sinal", "Redes GPON e EPON"],
      icon: <Zap className="w-10 h-10 text-gold" />
    },
    {
      title: "PROJETOS DE REDE OPTICA FTTX",
      description: "Infraestrutura robusta para Backbone e criação de rotas estratégicas. Implementação de conexões Ponto a Ponto de alta performance para interligação de unidades.",
      items: ["Backbone de Fibra", "Criação de Rotas", "Ponto a Ponto (PTP)", "Alta Disponibilidade"],
      icon: <Network className="w-10 h-10 text-gold" />
    },
    {
      title: "REDES EMPRESARIAIS",
      description: "Consultoria completa em TI: da implementação e criação da topologia até a distribuição lógica, configuração de switches e gerência proativa da rede.",
      items: ["Implementação e Criação", "Distribuição de Carga", "Configuração Lógica", "Gerência de Tráfego"],
      icon: <Server className="w-10 h-10 text-gold" />
    },
    {
      title: "CABEAMENTO ESTRUTURADO",
      description: "Reorganização de redes existentes com foco em eficiência. Dimensionamento preciso para futuras expansões e organização rigorosa de racks de distribuição.",
      items: ["Reorganização de Redes", "Dimensionamento de Pontos", "Organização de Racks", "Certificação de Cabos"],
      icon: <Construction className="w-10 h-10 text-gold" />
    },
    {
      title: "CONFIGURAÇÕES ESPECIALIZADAS",
      description: "Expertise técnica avançada em equipamentos líderes de mercado. Configuração otimizada para máxima performance e segurança dos seus ativos de rede.",
      items: ["MikroTik", "UniFi (Ubiquiti)", "TP-Link", "Intelbras"],
      icon: <Settings className="w-10 h-10 text-gold" />
    },
    {
      title: "CFTV E SEGURANÇA",
      description: "Sistemas inteligentes de monitoramento. Instalação de câmeras IP e analógicas (Intelbras, Hikvision) com planos de manutenção preventiva e corretiva.",
      items: ["Instalação de Câmeras", "Configuração de DVR/NVR", "Manutenção Corretiva", "Intelbras & Hikvision"],
      icon: <ShieldCheck className="w-10 h-10 text-gold" />
    }
  ];

  return (
    <div className="min-h-screen text-white selection:bg-gold selection:text-fs-dark">
      <nav className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled ? 'bg-fs-dark/95 backdrop-blur-md border-b border-gold/10 py-3 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Logo hideText={false} className="h-10" />
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
            <a href="#home" className="hover:text-gold transition-colors">Início</a>
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-gradient text-fs-dark px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 text-xs">
              <MessageCircle className="w-4 h-4" /> ORÇAMENTO
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-fs-dark/90 via-fs-dark/60 to-fs-dark z-10" />
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 grayscale scale-110"
            alt="Infraestrutura de Telecomunicações"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Engenharia de Redes de Alta Performance
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold font-display leading-tight mb-8">
            Conectividade <br/> 
            <span className="gold-text-gradient italic">Sem Fronteiras.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Especialistas em projetos de redes ópticas, infraestrutura empresarial e configurações de alta performance com anos de excelência técnica comprovada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#servicos" className="w-full sm:w-auto gold-gradient text-fs-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
              Ver Serviços
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border border-gold/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gold/10 transition-all backdrop-blur-md flex items-center justify-center gap-3 group">
              <MessageCircle className="w-5 h-5 text-gold" /> 
              Fale Conosco
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-fs-dark border-y border-gold/10 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Projetos Entregues", val: "100+" },
            { label: "Cidades Atendidas", val: "Brasil" },
            { label: "Suporte Técnico", val: "24/7" },
            { label: "Anos de Mercado", val: "4" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-gold text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">{stat.val}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-black/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
            <div className="flex items-center gap-6 max-w-md">
              <div className="p-5 gold-gradient rounded-3xl">
                <Globe className="w-10 h-10 text-fs-dark" />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-display">Nossa Atuação</h4>
                <p className="text-white/50 text-sm mt-1">Sólida presença regional e infraestrutura para atendimento em todo o território nacional.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end max-w-3xl">
              {cities.map((city, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold hover:border-gold/50 hover:bg-gold/5 transition-all cursor-default">
                  {city}
                </span>
              ))}
              <span className="px-5 py-2.5 bg-gold/10 border border-gold/40 rounded-full text-xs font-black text-gold animate-pulse">
                + ATENDIMENTO NACIONAL
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Portfólio Premium</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold">Soluções de Engenharia</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative bg-fs-card border border-white/5 rounded-[48px] p-12 hover:border-gold/40 transition-all hover:-translate-y-4 duration-500 flex flex-col items-start shadow-2xl"
              >
                <div className="mb-10 p-5 bg-gold/5 rounded-3xl border border-gold/10 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold mb-6 group-hover:text-gold transition-colors leading-tight">{service.title}</h4>
                <p className="text-white/50 text-sm mb-10 leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10 w-full">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/40 group-hover:text-white/80 transition-colors">
                      <div className="w-5 h-5 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-gold" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto w-full pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-black">Saiba Mais</span>
                  <ChevronRight className="w-5 h-5 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIConsultant />

      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-bold mb-16">Tecnologia Global & Parceiros Estratégicos</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {["MikroTik", "Ubiquiti", "TP-Link", "Intelbras", "Hikvision"].map((brand) => (
              <span key={brand} className="text-3xl md:text-4xl font-black font-display tracking-tighter hover:text-gold transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-32 px-6 bg-fs-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Contato Oficial</h2>
                <h3 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">Sua rede em <br/><span className="italic text-gold">boas mãos.</span></h3>
                <p className="text-white/50 text-xl font-light leading-relaxed max-w-md">
                  Projetamos o futuro da sua conectividade com rigor técnico absoluto e as marcas líderes do mercado mundial.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Phone className="w-6 h-6" />, label: "Telefone & WhatsApp", val: contactPhone, link: whatsappLink },
                  { icon: <Instagram className="w-6 h-6" />, label: "Instagram", val: `@${contactInstagram}`, link: instagramLink },
                  { icon: <Mail className="w-6 h-6" />, label: "E-mail Corporativo", val: contactEmail, link: `mailto:${contactEmail}` }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                    <div className="w-14 h-14 gold-gradient flex items-center justify-center rounded-2xl text-fs-dark group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{item.label}</h5>
                      <p className="text-white/40 group-hover:text-gold transition-colors">{item.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-12 rounded-[56px] shadow-3xl">
              <form className="space-y-8" onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappLink, '_blank');
              }}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">NOME COMPLETO</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all text-white font-medium" placeholder="João Silva" required />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">CIDADE</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all text-white font-medium" placeholder="Sua Cidade" required />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">SERVIÇO DE INTERESSE</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-all appearance-none text-white font-medium cursor-pointer">
                    <option className="bg-fs-dark">Projetos FTTH / GPON</option>
                    <option className="bg-fs-dark">Redes Empresariais</option>
                    <option className="bg-fs-dark">Cabeamento Estruturado</option>
                    <option className="bg-fs-dark">Segurança Eletrônica (CFTV)</option>
                  </select>
                </div>
                <button type="submit" className="w-full gold-gradient text-fs-dark font-black py-6 rounded-3xl text-lg hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                  <MessageCircle className="w-6 h-6" /> Solicitar Orçamento
                </button>
                <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">Atendimento via WhatsApp em segundos</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <Logo hideText={false} className="h-14" />
            
            <div className="flex gap-8">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/20 text-xs tracking-widest uppercase mb-2">© 2021 FS Serviços Telecomunicações</p>
              <p className="text-gold/60 text-[10px] font-bold tracking-[0.2em] uppercase">Excelência Técnica em Todo o País</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
