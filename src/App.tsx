/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Snowflake,
  Sliders,
  BookOpen,
  Sparkles,
  Phone,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Heart,
  Award,
  Play,
  CheckCircle,
  ShoppingBag,
  X
} from "lucide-react";
import { COMPANY_DETAILS } from "./data";

export default function App() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactModel, setContactModel] = useState("Máquina de sorvete de Massa");
  const [contactState, setContactState] = useState("");

  // Scroll state
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateSection = (direction: "up" | "down") => {
    const sectionIds = ["inicio", "sobre-nos", "equipamentos", "vantagens", "contato"];
    const elements = sectionIds.map((id) => document.getElementById(id));
    
    let currentIndex = 0;
    let minDiff = Infinity;
    
    elements.forEach((el, index) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        const diff = Math.abs(rect.top);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = index;
        }
      }
    });

    let targetIndex = currentIndex;
    if (direction === "up") {
      targetIndex = Math.max(0, currentIndex - 1);
    } else {
      targetIndex = Math.min(sectionIds.length - 1, currentIndex + 1);
    }

    const targetEl = elements[targetIndex];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getWhatsAppLink = (customText?: string) => {
    const baseText = customText || `Olá! Vim através do site da Apicoleteira e gostaria de saber mais informações sobre as Máquinas de Sorvete.`;
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(baseText)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDetails = contactPhone ? `, meu telefone é ${contactPhone}` : "";
    const personalizedText = `Olá Apicoleteira! Meu nome é ${contactName || "Interessado"}${phoneDetails}, sou de ${contactState || "Brasil"}. Gostaria de agendar as especificações do modelo/interesse: "${contactModel}"!`;
    window.open(getWhatsAppLink(personalizedText), "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#ff1e42] selection:text-white overflow-x-hidden">
      
      {/* HEADER BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
        scrolledPastHero 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50/80 py-3" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative flex items-center h-10 shrink-0">
              <img 
                src="logo.jpg" 
                alt="Logo Apicoleteira" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
                className="max-h-10 w-auto object-contain select-none hover:scale-105 transition-transform"
              />
              <div className="hidden text-xl font-bold text-[#ff1e42]">🍦</div>
            </div>
            <span className="font-sans font-black text-sm md:text-base text-[#222] tracking-widest uppercase">
              APICOLETEIRA
            </span>
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Início</a>
            <a href="#sobre-nos" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">História</a>
            <a href="#equipamentos" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Maquinários</a>
            <a href="#vantagens" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Vantagens</a>
            <a href="#contato" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Contato</a>
          </nav>

          {/* Right side contact CTA action */}
          <div className="flex items-center gap-4">
            <a href="#contato" className="text-[#222] hover:text-[#ff1e42] transition-colors relative" title="Orçamento">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff1e42] text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION - Instant Rendering / No looping delays */}
      <section 
        id="inicio"
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white pt-24 md:pt-28 pb-12"
      >
        {/* Soft background glow accents (Static gradients, web performance friendly) */}
        <div className="absolute top-[12%] left-[-8%] w-[450px] h-[450px] bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#ff1e42]/4 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            <h1 
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#222222] tracking-tight leading-[0.95] uppercase"
            >
              A Máquina que traz o <br className="hidden sm:inline" />
              <span className="text-[#ff1e42]">Sabor da Infância</span>
            </h1>

            <p 
              className="mt-6 text-sm sm:text-base text-slate-700 max-w-md leading-relaxed"
            >
              Experimente a verdadeira satisfação com as nossas máquinas de sorvete de massa de alto rendimento. Projetadas em aço inox 304, elas garantem a perfeita cremosidade e o picolé mais amado desde 1972.
            </p>

            {/* Stats Bento Cards */}
            <div 
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 border-t border-blue-100 pt-6 sm:pt-8"
            >
              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-sm transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">UMA</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Receita Exclusiva</p>
              </div>

              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-sm transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">24+</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Estados Atendidos</p>
              </div>

              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-sm transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">50+</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Tradição no Mercado</p>
              </div>
            </div>

          </div>

          {/* Right Side Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="absolute top-[5%] right-0 w-full lg:right-[-5%] lg:w-[110%] h-[92%] bg-[#2563eb] rounded-[48px] overflow-hidden -z-10 twist-organic-shape shadow-md flex items-center justify-center">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>

            <div className="absolute left-[-8px] sm:left-[-10px] md:left-[-20px] top-[25%] sm:top-[35%] z-25 bg-[#f0f7ff]/95 p-2.5 px-4 sm:p-3.5 sm:px-6 rounded-full flex items-center gap-3 sm:gap-4 shadow-md border border-blue-200 backdrop-blur-sm transform hover:-translate-y-0.5 transition-transform">
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-slate-500 uppercase">desde</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#222] font-mono select-none">1972</span>
              </div>
              <a href="#contato" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2563eb] hover:bg-[#ff1e42] text-white flex items-center justify-center text-lg font-black transition-colors">
                +
              </a>
            </div>

            {/* High Performance Direct Image Paint */}
            <div className="relative w-full max-w-[420px] md:max-w-[480px]">
              <img
                src="dobra1.png"
                alt="Gourmet Ice Cream from Apicoleteira"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
                decoding="sync"
              />
            </div>

          </div>

        </div>

      </section>

      {/* 3. HISTÓRIA E RETRO TELEVISION */}
      <section id="sobre-nos" className="py-16 sm:py-24 bg-[#f0f7ff] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Story text */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#222222] tracking-tight leading-[0.95] uppercase">
                TRADIÇÃO QUE <br />
                <span className="text-[#ff1e42]">ATRAVESSOU</span> GERAÇÕES
              </h2>

              <p className="mt-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                Somos uma empresa familiar fundada pelo pioneiro <strong className="text-[#222] font-bold">{COMPANY_DETAILS.founder}</strong>. Ele próprio projetou, soldou e validou o visual americano impecável de nossas maquinarias em aço inox.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nossos maquinários são adaptados individualmente para cada cliente. Mantemos a altíssima constância de refrigeração para fornecer o sorvete ou picolé mais cremoso do mercado, sem precisar de aditivos químicos desnecessários.
              </p>

              {/* Family Quote */}
              <div className="mt-8 p-4 sm:p-6 bg-white/80 border-l-4 sm:border-l-8 border-[#ff1e42] rounded-r-2xl text-[#222] shadow-sm border-y border-r border-blue-100/50">
                <p className="font-serif italic font-semibold text-slate-800 text-xs sm:text-base">
                  "{COMPANY_DETAILS.quote}"
                </p>
                <span className="text-[10px] font-mono text-blue-800 tracking-wide mt-3 block uppercase font-black">
                  — Lema Registrado da Família Pelagio
                </span>
              </div>
            </div>

            {/* Right Column: Retro Television with Optimized Click-to-Play to avoid loading heavy scripts initially */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-4">

              <div className="w-full max-w-lg bg-slate-950 border-[8px] sm:border-[12px] border-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl relative">
                
                {/* TV Signal Details Indicator */}
                <div className="absolute top-2 left-4 text-[9px] font-mono text-emerald-400 font-bold z-20 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-full border border-emerald-800/60 shadow">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span>MODULAÇÃO HISTÓRICA PEGN</span>
                </div>

                {/* Video Player Box */}
                <div className="relative aspect-video w-full bg-[#111] overflow-hidden">
                  {isPlayingVideo ? (
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/IjmbX90_IFg?autoplay=1&rel=0&showinfo=0"
                      title="Pequenas Empresas Grandes Negócios Interview"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    /* Pure CSS Vintage Scanline Overlay / No expensive visual requests */
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer select-none group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" onClick={() => setIsPlayingVideo(true)}>
                      {/* Scanlines visual accent */}
                      <div className="absolute inset-0 bg-repeat bg-[linear-gradient(rgba(18,16,16,0)+50%,rgba(0,0,0,0.25)+50%)] bg-[length:100%_4px] opacity-25 pointer-events-none" />
                      
                      <div className="relative z-10 w-16 h-16 rounded-full bg-[#ff1e42] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                      <span className="relative z-10 font-mono text-[10px] uppercase text-emerald-400 font-extrabold tracking-widest bg-black/80 border border-emerald-950/80 px-3 py-1.5 rounded mt-4">
                        Clique para Assistir PEGN
                      </span>
                    </div>
                  )}
                </div>

                {/* TV Trim Rail */}
                <div className="bg-slate-900 text-blue-100 py-3 px-6 flex items-center justify-between border-t border-slate-800">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-sans font-black tracking-widest uppercase text-blue-400">TV GLOBO PEGN</span>
                    <span className="text-[8px] font-mono text-slate-400 mt-0.5 uppercase">Auditado Sr. Aurélio Pelagio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-850 border-2 border-slate-600" />
                    <div className="w-4 h-4 rounded-full bg-slate-850 border-2 border-slate-600" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. EQUIPAMENTOS - Stainless Steel Craftsmanship with Square Image & Description */}
      <section id="equipamentos" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#222222] tracking-tight leading-[0.95] uppercase">
              QUALIDADE <span className="text-[#ff1e42]">INABALÁVEL</span> <br /> EM AÇO INOX 304
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Diga adeus à fragilidade do plástico comum. Nossos maquinários de alta engenharia contam com resistência profissional definitiva.
            </p>
          </div>

          {/* Square Image & Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            
            {/* Square Image Left: WebP formatted and lazy loaded */}
            <div className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[#fafafa] rounded-2xl shadow-sm border border-slate-100">
              <img
                src="maquina.png"
                alt="Aço Inox Industrial Apicoleteira"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content list panel */}
            <div className="text-left flex flex-col justify-center space-y-5 lg:pl-6">
              
              <h3 className="font-sans font-black text-2xl sm:text-3.5xl text-[#222222] uppercase tracking-tight leading-none">
                Construção 100% Retrô <br className="hidden sm:inline" /> em Aço Inox 304
              </h3>

              <ul className="space-y-5 text-slate-700 font-normal">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Durabilidade de Gerações</strong>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Equipamentos fabricados totalmente em aço inoxidável e poliacetal injetado, imunes à corrosão e livres de polímeros frágeis.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Alta Potência Hermética</strong>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Refrigeração termo-regulável dimensionada para render perfeitamente mesmo sob as frentes de calor mais quentes do Brasil.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Suporte Técnico Familiar</strong>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Acompanhamento e acesso vitalício a receitas de sabores tradicionais sob a curadoria direta da Família Pelagio.</p>
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de falar com o time técnico e agendar orçamento sobre as máquinas industriais em aço inox 304.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black text-[#ff1e42] hover:text-rose-700 uppercase tracking-widest transition-colors group cursor-pointer"
                >
                  <span>Solicitar ficha técnica do Inox</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. VANTAGENS - LUCRO REAL E SUCESSO DE QUEM FAZ */}
      <section id="vantagens" className="py-16 sm:py-24 bg-[#f0f7ff] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#222222] tracking-tight leading-[0.95] uppercase">
              LUCRO REAL <span className="text-[#ff1e42]">E SUCESSO</span> <br /> DE QUEM FAZ
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Diferente de sistemas virtuais complexos, o negócio com a Apicoleteira fala através dos resultados práticos de quem realmente trabalha e produz.
            </p>
          </div>

          {/* TESTIMONIALS FEED IN PHYSICAL POLAROID CARDS (Completely static conveyor with direct image loading & NO links) */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 inset-y-0 w-8 md:w-20 bg-gradient-to-r from-[#f0f7ff] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-8 md:w-20 bg-gradient-to-l from-[#f0f7ff] via-transparent to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee belt */}
            <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused] whitespace-nowrap">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  style={{ aspectRatio: "9/19" }}
                  className="shrink-0 w-[160px] sm:w-[200px] bg-white border-2 border-slate-150 rounded-[32px] shadow-sm flex items-center justify-center overflow-hidden p-4 text-center select-none"
                >
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono">
                    fotos clientes
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. ORÇAMENTOS E FORMULÁRIO */}
      <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-left mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-slate-100">
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#222222] mt-2 uppercase leading-none tracking-tight">
              ENCOMENDE SEU MAQUINÁRIO <span className="text-[#ff1e42]">SOB MEDIDA</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
              Nossos engenheiros e artesãos estão prontos para montar seu equipamento nas especificações técnicas mais cobiçadas do mercado nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Column info */}
            <div className="flex flex-col justify-between space-y-8 text-left">
              
              <div className="space-y-6 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Fábrica & Showroom</span>
                    <span className="text-[#222222] leading-relaxed text-xs">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Horário de Operação</span>
                    <span className="text-[#222222] leading-relaxed text-xs">Segunda a Sexta: 08:00h às 18:00h <br /> Sábados: 09:00h às 13:00h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">E-mail Comercial</span>
                    <span className="text-[#222222] leading-relaxed text-xs">{COMPANY_DETAILS.email}</span>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-slate-100 text-[#222222] text-xs">
                <span className="text-[10px] font-mono font-black text-[#ff1e42] uppercase block mb-1">
                  Garantia Histórica Pelagio
                </span>
                Cada máquina recebe número de série especial e assinatura de placa de latão de fábrica para valor de revenda permanente.
              </div>

            </div>

            {/* Right Column Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left bg-[#f8fafc] p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="block text-xs font-mono font-black text-[#ff1e42] uppercase tracking-wider mb-2">
                Agendar Orçamento:
              </span>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase mb-1">Seu Nome</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Roberto Almeida"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff1e42] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase mb-1">Telefone com DDD</label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: (11) 99999-9999"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff1e42] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase mb-1">Modelo de Interesse</label>
                <select
                  value={contactModel}
                  onChange={(e) => setContactModel(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#ff1e42] transition-colors"
                >
                  <option value="Máquina de sorvete de Massa">Máquina de sorvete de Massa</option>
                  <option value="Produtos de massa">Produtos de massa</option>
                  <option value="Combo completo (Máquina + Receitas)">Combo completo (Máquina + Receitas)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase mb-1">Seu Estado</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: São Paulo - SP"
                  value={contactState}
                  onChange={(e) => setContactState(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#ff1e42] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff1e42] hover:bg-rose-700 text-white py-3 px-4 rounded-xl font-mono text-xs font-extrabold uppercase tracking-wider transition-all block text-center mt-3 shadow hover:shadow-md cursor-pointer"
              >
                Enviar para o WhatsApp
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-900 pb-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <img 
                  src="logo.jpg" 
                  alt="Logo Apicoleteira" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                  className="w-10 h-10 object-contain select-none rounded" 
                />
                <div className="hidden text-xl font-bold">🍦</div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-sm text-white tracking-widest leading-none">
                    APICOLETEIRA®
                  </span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-blue-400 mt-1 font-bold">
                    Tradição e Inox Desde 1972
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500 max-w-sm">
                Focados na fabricação de alto padrão de máquinas de sorvete de massa retrô de extrema durabilidade e rendimento térmico impecável.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                FALE CONOSCO / MOOCA SÃO PAULO
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.youtube.com/watch?v=IjmbX90_IFg"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#ff1e42] text-white flex items-center justify-center transition-all shadow border border-slate-800"
                  aria-label="YouTube channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#ff1e42] text-white flex items-center justify-center transition-all shadow border border-slate-800"
                  aria-label="Instagram handle"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow border border-slate-800"
                  aria-label="WhatsApp conversation"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-4">
            <p className="text-center sm:text-left font-mono text-[10px]">
              © 2026 APICOLETEIRA. Todos os direitos reservados. CNPJ: 14.240.027/0001-92
            </p>
            <div className="flex items-center gap-4 text-slate-500">
              <a href="#inicio" className="hover:underline hover:text-white">Início</a>
              <span>·</span>
              <a href="#sobre-nos" className="hover:underline hover:text-white">História</a>
              <span>·</span>
              <a href="#equipamentos" className="hover:underline hover:text-white">Equipamentos</a>
              <span>·</span>
              <a href="#vantagens" className="hover:underline hover:text-white">Vantagens</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Mobile navigation assistance */}
      <div className="fixed right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 md:hidden pointer-events-none">
        <button
          onClick={() => navigateSection("up")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#222222] active:bg-[#ff1e42] active:text-white transition-all shadow-md active:scale-95 cursor-pointer animate-none"
          aria-label="Subir"
          title="Subir"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigateSection("down")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#222222] active:bg-[#ff1e42] active:text-white transition-all shadow-md active:scale-95 cursor-pointer animate-none"
          aria-label="Descer"
          title="Descer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
