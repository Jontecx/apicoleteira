/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Snowflake,
  Sliders,
  BookOpen,
  Sparkles,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Youtube,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Heart,
  Award,
  Play,
  CheckCircle,
  ShoppingBag,
  X
} from "lucide-react";
import { COMPANY_DETAILS, INSTAGRAM_POSTS, MACHINE_SLIDES } from "./data";

export default function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactModel, setContactModel] = useState("Máquina de sorvete americano");
  const [contactState, setContactState] = useState("");

  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);
  const [currentMachineSlide, setCurrentMachineSlide] = useState(0);
  const [isMachinePaused, setIsMachinePaused] = useState(false);

  // Machine slideshow auto-timer (alternates between maquina, maquina2, etc.)
  useEffect(() => {
    if (isMachinePaused) return;

    const machineInterval = setInterval(() => {
      setCurrentMachineSlide((prev) => (prev + 1) % MACHINE_SLIDES.length);
    }, 3800);

    return () => clearInterval(machineInterval);
  }, [isMachinePaused]);

  // Testimonials manual & automatic scroll control
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (testimonialScrollRef.current) {
      const container = testimonialScrollRef.current;
      const scrollAmount = 330;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Automatic right-to-left continuous scroll for Lucro Real section
  useEffect(() => {
    if (isTestimonialPaused) return;

    const interval = setInterval(() => {
      if (testimonialScrollRef.current) {
        const container = testimonialScrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 20) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 330, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTestimonialPaused]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const past = window.scrollY > 120;
          setScrolledPastHero((prev) => (prev !== past ? past : prev));
          ticking = false;
        });
        ticking = true;
      }
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
    const baseText = customText || `Olá! Vim através do site da Apicoleteira e gostaria de saber mais informações sobre as Máquinas de Sorvete e Picolé.`;
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(baseText)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDetails = contactPhone ? `, meu telefone é ${contactPhone}` : "";
    const personalizedText = `Olá Apicoleteira! Meu nome é ${contactName || "Interessado"}${phoneDetails}, sou de ${contactState || "Brasil"}. Gostaria de agendar as especificações do modelo/interesse: "${contactModel}"!`;
    window.open(getWhatsAppLink(personalizedText), "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#000000] font-sans antialiased selection:bg-[#18077b] selection:text-white overflow-x-hidden">
      
      {/* HEADER BAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 py-4 px-6 md:px-12 ${
        scrolledPastHero 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#cdea8c]" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative flex items-center h-10 shrink-0">
              <picture>
                <source srcset="/logo.avif" type="image/avif" />
                <source srcset="/logo.webp" type="image/webp" />
                <img 
                  src="/logo.jpg" 
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  alt="Logo Apicoleteira" 
                  className="max-h-10 w-auto object-contain select-none"
                />
              </picture>
            </div>
            <span className="font-sans font-black text-sm md:text-base text-[#18077b] tracking-widest uppercase transition-colors">
              APICOLETEIRA
            </span>
          </a>

          {/* Navigation links */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-sm font-bold text-[#000000] hover:text-[#18077b] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18077b] hover:after:w-full after:transition-all">Início</a>
            <a href="#sobre-nos" className="text-sm font-bold text-[#000000] hover:text-[#18077b] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18077b] hover:after:w-full after:transition-all">História</a>
            <a href="#equipamentos" className="text-sm font-bold text-[#000000] hover:text-[#18077b] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18077b] hover:after:w-full after:transition-all">Maquinários</a>
            <a href="#vantagens" className="text-sm font-bold text-[#000000] hover:text-[#18077b] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18077b] hover:after:w-full after:transition-all">Vantagens</a>
            <a href="#contato" className="text-sm font-bold text-[#000000] hover:text-[#18077b] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#18077b] hover:after:w-full after:transition-all">Contato</a>
          </nav>

          {/* Right quick cart/quote icon */}
          <div className="flex items-center gap-5">
            <a href="#contato" className="text-[#000000] hover:text-[#18077b] transition-colors relative" title="Orçamento">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#18077b] text-white text-[9px] font-mono font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">1</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section 
        id="inicio"
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white pt-24 md:pt-28 pb-12"
      >
        {/* Decorative background glows */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-[#cdea8c]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[-10%] w-[380px] h-[380px] bg-[#18077b]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* HERO CONTAINER */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#000000] tracking-tight leading-[0.95] uppercase">
              A Máquina que traz o <br className="hidden sm:inline" />
              <span className="text-[#18077b]">Sabor da Infância</span>
            </h1>

            <div className="mt-6">
              <p className="text-xs sm:text-base text-[#000000] max-w-md leading-relaxed">
                Experimente a verdadeira máquina de sorvete americano com um alto rendimento lucrativo. Projetado com a aço inox e materiais atóxicos garantindo a qualidade para seu negócio desde 1972.
              </p>
            </div>

            {/* Three Bento-style stats cards below */}
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-2.5 md:gap-4 border-t border-[#cdea8c] pt-6 sm:pt-8">
              <div className="bg-[#cdea8c] hover:opacity-90 p-3.5 sm:p-4.5 rounded-2xl text-[#18077b] group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none text-[#18077b]">SIM</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0 text-[#18077b]" />
                </div>
                <p className="text-[8px] sm:text-xs font-bold uppercase mt-1.5 leading-tight text-[#000000]">Receitas exclusivas</p>
              </div>

              <div className="bg-[#cdea8c] hover:opacity-90 p-3.5 sm:p-4.5 rounded-2xl text-[#18077b] group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none text-[#18077b]">MUNDIAL</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0 text-[#18077b]" />
                </div>
                <p className="text-[8px] sm:text-xs font-bold uppercase mt-1.5 leading-tight text-[#000000]">Entrega nacional e internacional</p>
              </div>

              <div className="bg-[#cdea8c] hover:opacity-90 p-3.5 sm:p-4.5 rounded-2xl text-[#18077b] group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none text-[#18077b]">+50</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0 text-[#18077b]" />
                </div>
                <p className="text-[8px] sm:text-xs font-bold uppercase mt-1.5 leading-tight text-[#000000]">Anos de tradição no mercado</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Green fluid curved backdrop block */}
            <div className="absolute top-[5%] right-0 w-full lg:right-[-5%] lg:w-[110%] h-[92%] bg-[#cdea8c] rounded-[48px] overflow-hidden -z-10 twist-organic-shape shadow-lg flex items-center justify-center">
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            </div>

            {/* Floating badge */}
            <div className="absolute left-[-8px] sm:left-[-10px] md:left-[-20px] top-[20%] sm:top-[30%] z-25 bg-white/95 p-2.5 px-4 sm:p-3.5 sm:px-6 rounded-full flex items-center gap-3 sm:gap-4 shadow-[#000000]/10 shadow-lg border-2 border-[#cdea8c] backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-slate-500 uppercase">desde</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#000000] font-mono select-none">1972</span>
              </div>
              <a href="#contato" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18077b] text-white hover:bg-[#cdea8c] hover:text-[#18077b] flex items-center justify-center text-base sm:text-lg font-black shadow-inner transition-colors">
                +
              </a>
            </div>

            {/* Cutout image */}
            <div className="relative w-full max-w-[420px] md:max-w-[480px]">
              <picture>
                <source srcset="/dobra1.avif" type="image/avif" />
                <source srcset="/dobra1.webp" type="image/webp" />
                <img
                  src="/dobra1.jpg"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  alt="Gourmet Ice Cream from Apicoleteira"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </picture>
            </div>

          </div>

        </div>

      </section>

      {/* 3. DOBRA 1: QUEM SOMOS */}
      <section id="sobre-nos" className="py-16 sm:py-24 bg-[#f0fdf4] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Story text */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight leading-[0.95] uppercase">
                TRADIÇÃO QUE <br />
                <span className="text-[#18077b]">ATRAVESSOU</span> GERAÇÕES
              </h2>

              <p className="mt-6 text-sm sm:text-base text-[#000000] leading-relaxed font-normal">
                Somos uma empresa fundada pelo pioneiro <strong className="text-[#000000] font-bold">{COMPANY_DETAILS.founder}</strong>. Ele próprio projetou, vendeu e validou o visual americano impecável de nossas máquinas em aço inox.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#000000] leading-relaxed opacity-85">
                Nossas máquinas são adaptadas individualmente para cada cliente. Mantemos a altíssima constância de refrigeração para fornecer o sorvete mais delicioso do mercado.
              </p>

              <div className="mt-8 p-4 sm:p-6 bg-white/95 border border-[#cdea8c] border-l-4 sm:border-l-8 border-l-[#18077b] rounded-r-2xl sm:rounded-r-3xl text-[#000000] shadow-md relative overflow-hidden">
                <p className="font-serif italic font-semibold text-slate-850 text-xs sm:text-base">
                  "{COMPANY_DETAILS.quote}"
                </p>
                <span className="text-[10px] font-mono text-[#18077b] tracking-wide mt-3 block uppercase font-black">
                  — Lema Registrado da Empresa Apicoleteira
                </span>
              </div>
            </div>

            {/* Right Column: Retro TV */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-4">
              <div className="w-full max-w-lg bg-slate-950 border-[8px] sm:border-[12px] border-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">
                
                <div className="absolute top-2 left-4 text-[9px] font-mono text-emerald-400 font-bold z-20 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-full border border-emerald-800/60 shadow">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>MODULAÇÃO HISTÓRICA PEGN</span>
                </div>

                <div 
                  className="relative aspect-video w-full bg-black cursor-pointer group/tv overflow-hidden"
                  onClick={() => setShowVideoModal(true)}
                >
                  <picture className="w-full h-full">
                    <source srcset="/dobra1.avif" type="image/avif" />
                    <source srcset="/dobra1.webp" type="image/webp" />
                    <img
                      src="/dobra1.jpg"
                      loading="lazy"
                      decoding="async"
                      alt="Apicoleteira Dobra 1"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/tv:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-black/40 group-hover/tv:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#18077b] text-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover/tv:scale-110">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-green-100 py-3.5 px-6 flex items-center justify-between border-t border-slate-800">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-sans font-black tracking-widest uppercase text-emerald-400">TV GLOBO PEGN</span>
                    <span className="text-[8px] font-mono pr-2 text-slate-400 mt-0.5 uppercase block truncate">Auditado Aurélio Pelagio</span>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border-[3px] border-slate-600" />
                    <div className="w-5 h-5 rounded-full bg-slate-800 border-[3px] border-slate-600" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. DOBRA 2: EQUIPAMENTOS */}
      <section id="equipamentos" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight leading-[0.95] uppercase">
              Qualidade <span className="text-[#18077b]">garantida</span> <br /> em Aço Inox
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#000000] max-w-xl mx-auto leading-relaxed">
              Diga adeus ao plástico e à madeira comum. Nossos maquinários de alta engenharia contam com resistência profissional definitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-12">
            
            {/* Square Image Left - Auto Alternating Machine Slideshow */}
            <div 
              className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-900 rounded-2xl lg:rounded-none shadow-md lg:shadow-none group"
              onMouseEnter={() => setIsMachinePaused(true)}
              onMouseLeave={() => setIsMachinePaused(false)}
              onTouchStart={() => setIsMachinePaused(true)}
              onTouchEnd={() => setIsMachinePaused(false)}
            >
              {MACHINE_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    idx === currentMachineSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <picture className="w-full h-full">
                    <source srcset={slide.avifUrl} type="image/avif" />
                    <source srcset={slide.webpUrl} type="image/webp" />
                    <img
                      src={slide.imageUrl}
                      loading="lazy"
                      decoding="async"
                      alt={slide.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </picture>
                </div>
              ))}

              {/* Navigation arrows in the bottom right corner */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setCurrentMachineSlide((prev) => (prev === 0 ? MACHINE_SLIDES.length - 1 : prev - 1))}
                  aria-label="Máquina anterior"
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#18077b] text-white flex items-center justify-center backdrop-blur-md border border-white/15 shadow-md transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMachineSlide((prev) => (prev + 1) % MACHINE_SLIDES.length)}
                  aria-label="Próxima máquina"
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#18077b] text-white flex items-center justify-center backdrop-blur-md border border-white/15 shadow-md transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description Right */}
            <div className="text-left flex flex-col justify-center space-y-5 lg:pl-6">
              <h3 className="font-sans font-black text-2xl sm:text-4.5xl text-[#000000] uppercase tracking-tight leading-none">
                Construção Retrô <br /> com a modernidade do aço.
              </h3>

              <ul className="space-y-4 text-[#000000] font-normal mt-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#cdea8c]/35 text-[#18077b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#18077b] font-bold block leading-tight">Durabilidade de Gerações</strong>
                    <span className="text-xs sm:text-sm text-[#000000] opacity-85">Equipamentos fabricados totalmente em aço inoxidável e poliacetal injetado, com 1 ano de garantia total de fábrica.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#cdea8c]/35 text-[#18077b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#18077b] font-bold block leading-tight">Alta Potência</strong>
                    <span className="text-xs sm:text-sm text-[#000000] opacity-85">Sorvetes saem com uma ótima qualidade mesmo sob as temperaturas mais quentes do Brasil.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#cdea8c]/35 text-[#18077b] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-[#18077b] font-bold block leading-tight">Suporte Técnico Detalhado</strong>
                    <span className="text-xs sm:text-sm text-[#000000] opacity-85">Suporte e acesso à nossa equipe e manuais de como manusear nossas máquinas.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DOBRA 3: LUCRO REAL E SUCESSO DE QUEM FAZ (MOTION SCROLL TRACK & SIDE ARROWS) */}
      <section id="vantagens" className="py-16 sm:py-24 bg-[#f0fdf4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          {/* Header & Side Navigation Arrows */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 sm:mb-14">
            <div className="text-center sm:text-left">
              <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight leading-[0.95] uppercase">
                LUCRO REAL <span className="text-[#18077b]">E SUCESSO</span> <br /> DE QUEM FAZ
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#000000] max-w-xl leading-relaxed font-sans">
                Diferente de sistemas complexos e burocráticos, o negócio com a Apicoleteira fala através dos resultados práticos de quem já conquistou sua independência financeira.
              </p>
            </div>

            {/* Left and Right Navigation Arrows */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollTestimonials("left")}
                className="w-11 h-11 rounded-full border-2 border-[#18077b] bg-white hover:bg-[#18077b] text-[#18077b] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                aria-label="Voltar depoimento"
                title="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials("right")}
                className="w-11 h-11 rounded-full border-2 border-[#18077b] bg-white hover:bg-[#18077b] text-[#18077b] hover:text-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
                aria-label="Avançar depoimento"
                title="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* AUTO-SCROLLING TRACK (RIGHT TO LEFT AUTOMATICALLY) */}
          <div className="relative w-full py-2">
            <div 
              ref={testimonialScrollRef}
              onMouseEnter={() => setIsTestimonialPaused(true)}
              onMouseLeave={() => setIsTestimonialPaused(false)}
              onTouchStart={() => setIsTestimonialPaused(true)}
              onTouchEnd={() => setIsTestimonialPaused(false)}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 scroll-smooth"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            >
              {INSTAGRAM_POSTS.map((post, index) => (
                <div
                  key={`${post.id}-${index}`}
                  className="shrink-0 w-[260px] sm:w-[290px] rounded-[24px] sm:rounded-[32px] bg-slate-950 border-4 border-[#cdea8c] p-2.5 sm:p-3 overflow-hidden shadow-xl flex flex-col relative group transition-all hover:border-[#18077b] text-left snap-start"
                >
                  {/* 9:16 ASPECT RATIO REELS CARD CONTAINER */}
                  <div 
                    style={{ aspectRatio: "9/16" }}
                    className="relative w-full rounded-[20px] overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-left bg-slate-900 border border-slate-800"
                  >
                    {/* Background Image with AVIF -> WebP -> JPG support */}
                    <picture className="absolute inset-0 w-full h-full pointer-events-none">
                      {post.avifUrl && <source srcset={post.avifUrl} type="image/avif" />}
                      {post.webpUrl && <source srcset={post.webpUrl} type="image/webp" />}
                      <img
                        src={post.imageUrl}
                        loading="lazy"
                        decoding="async"
                        alt="Depoimento Apicoleteira"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      />
                    </picture>

                    {/* Dark gradient readability overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/30 pointer-events-none" />

                    {/* Top Header Tag */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="bg-[#cdea8c] text-[#18077b] text-[9px] sm:text-[10px] font-mono font-black py-1 px-3 rounded-full shadow-md uppercase tracking-wider">
                        {post.growth}
                      </span>
                    </div>

                    {/* Middle Testimonial Content */}
                    <div className="relative z-10 my-auto whitespace-normal select-none py-2">
                      <div className="text-[#cdea8c] opacity-50 text-4xl font-serif h-3 -ml-1">“</div>
                      <p className="text-[12.5px] sm:text-[14px] text-white leading-relaxed font-bold font-sans drop-shadow-md">
                        {post.testimonial}
                      </p>
                      <div className="text-[#cdea8c] opacity-50 text-4xl font-serif h-2 text-right -mr-1">”</div>
                    </div>

                    {/* Bottom Tranquil Footer */}
                    <div className="relative z-10 border-t border-white/15 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#cdea8c]" />
                        <span className="text-[10px] font-mono font-bold text-white/90 tracking-wide uppercase">
                          Apicoleteira · Negócio Local
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. DOBRA 4: FORMULÁRIO DE CONTATO */}
      <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-left mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-slate-100">
            <span className="text-xs font-mono font-bold tracking-widest text-[#18077b] block uppercase">
              Suporte de Vendas diretamente de S.P
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#000000] mt-2 uppercase leading-none tracking-tight">
              ENCOMENDE SEU EQUIPAMENTO <span className="text-[#18077b]">SOB MEDIDA</span>
            </h2>
            <p className="text-[#000000] text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
              Nossos engenheiros e artesãos estão prontos para montar seu equipamento nas especificações técnicas mais cobiçadas do mercado nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            <div className="flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-6 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#18077b]/5 border border-[#18077b]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#18077b]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Fábrica & Showroom</span>
                    <span className="text-[#000000] leading-relaxed text-xs">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#cdea8c]/20 border border-[#cdea8c] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#18077b]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Horário de Operação</span>
                    <span className="text-[#000000] leading-relaxed text-xs">Segunda a Sexta: 08:00h às 18:00h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#cdea8c]/20 border border-[#cdea8c] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#18077b]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">E-mail Comercial</span>
                    <span className="text-[#000000] leading-relaxed text-xs">{COMPANY_DETAILS.email}</span>
                  </div>
                </div>

              </div>

            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <span className="block text-xs font-mono font-black text-[#18077b] uppercase tracking-wider mb-2">
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
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#18077b] transition-colors"
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
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#18077b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-700 uppercase mb-1">Modelo de Interesse</label>
                <select
                   value={contactModel}
                   onChange={(e) => setContactModel(e.target.value)}
                   className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#18077b] transition-colors"
                >
                  <option value="Máquina de sorvete americano">Máquina de sorvete americano</option>
                  <option value="Máquina de bancada">Máquina de bancada</option>
                  <option value="Máquina de piso">Máquina de piso</option>
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
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#18077b] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#18077b] hover:bg-opacity-90 text-white py-3.5 px-4 rounded-xl font-mono text-xs font-extrabold uppercase tracking-wider transition-all block text-center mt-3 shadow-md hover:shadow-lg cursor-pointer"
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
                <div className="relative flex items-center h-10 shrink-0">
                  <picture>
                    <source srcset="/logo.avif" type="image/avif" />
                    <source srcset="/logo.webp" type="image/webp" />
                    <img 
                      src="/logo.jpg" 
                      loading="lazy"
                      decoding="async"
                      alt="Logo Apicoleteira" 
                      className="max-h-10 w-auto object-contain select-none"
                    />
                  </picture>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-black text-sm text-white tracking-widest leading-none">
                    APICOLETEIRA®
                  </span>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#cdea8c] mt-1 font-bold">
                    tradição e qualidade
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500 max-w-sm">
                Focados na fabricação de alto padrão de máquinas de sorvete americano de extrema durabilidade e rendimento térmico impecável.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                FALE CONOSCO / VILA DIVA, SÃO PAULO
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_DETAILS.ytInterviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#18077b] text-white flex items-center justify-center transition-all shadow border border-slate-800"
                  aria-label="Canal no YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#18077b] text-white flex items-center justify-center transition-all shadow border border-slate-800"
                  aria-label="Instagram Oficial"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-650 gap-4">
            <p className="text-center sm:text-left font-mono text-[10px]">
              © 2026 APICOLETEIRA. Todos os direitos reservados. CNPJ: 44.907.021/0001-60
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

      {/* POPUP VIDEO INTERVIEW MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              title="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/IjmbX90_IFg"
              title="Pequenas Empresas Grandes Negócios Interview"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Mobile-only section navigation buttons */}
      <div className="fixed right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 md:hidden pointer-events-none">
        <button
          onClick={() => navigateSection("up")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-slate-900/10 flex items-center justify-center text-[#222222] active:bg-[#18077b]/20 active:text-[#18077b] transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Dobra anterior"
          title="Subir"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigateSection("down")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-slate-900/10 flex items-center justify-center text-[#222222] active:bg-[#18077b]/20 active:text-[#18077b] transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Próxima dobra"
          title="Descer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}

