/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
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
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Heart,
  Award,
  ArrowDown,
  Play,
  CheckCircle,
  Volume2,
  Calendar,
  DollarSign,
  TrendingUp,
  Search,
  Truck,
  ShoppingBag,
  X
} from "lucide-react";
import { ApicoleteiraLogo } from "./components/ApicoleteiraLogo";
import { NAVIGATION_ITEMS, COMPANY_DETAILS, PRODUCT_FEATURES, INSTAGRAM_POSTS } from "./data";

export default function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactModel, setContactModel] = useState("Máquina de sorvete de Massa");
  const [contactState, setContactState] = useState("");

  // Machine color selector skin state (Vermelho, Azul, Amarelo)
  const [machineSkin, setMachineSkin] = useState<"vermelho" | "azul" | "amarelo">("vermelho");

  // Scroll opacity for scroll indicators
  const [scrollGuideOpacity, setScrollGuideOpacity] = useState(1);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  // Animation refs for GSAP cinematic suspense
  const tensionOverlayRef = useRef<HTMLDivElement>(null);
  const suspenseText1Ref = useRef<HTMLDivElement>(null);
  const suspenseText2Ref = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const mainSubtitleRef = useRef<HTMLDivElement>(null);
  const ctaButtonsRef = useRef<HTMLDivElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollGuideOpacity(Math.max(0, 1 - scrollPos / 400));
      setScrolledPastHero(scrollPos > 120);
    };

    window.addEventListener("scroll", handleScroll);

    // GSAP Cinematic Tension Sequence
    const tl = gsap.timeline();

    // Reset initial states of elements for animated entrance
    gsap.set(mainTitleRef.current, { opacity: 0, scale: 1.05, filter: "blur(10px)", y: 20 });
    gsap.set(mainSubtitleRef.current, { opacity: 0, y: 25 });
    gsap.set(ctaButtonsRef.current, { opacity: 0, y: 15 });
    gsap.set(statsBarRef.current, { opacity: 0, y: 20 });
    if (heroLogoRef.current) {
      gsap.set(heroLogoRef.current, { opacity: 0, scale: 0.8 });
    }

    // Direct, immediate reveal transition
    tl.to(heroLogoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.5)"
    })
    .to(mainTitleRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3")
    .to(mainSubtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4")
    .to(ctaButtonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4")
    .to(statsBarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

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
    const baseText = customText || `Olá! Vim através do site da Apicoleteira e gostaria de saber mais informações sobre as Máquinas de Sorvete e Picolé configuradas no estilo ${machineSkin.toUpperCase()}.`;
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(baseText)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDetails = contactPhone ? `, meu telefone é ${contactPhone}` : "";
    const personalizedText = `Olá Apicoleteira! Meu nome é ${contactName || "Interessado"}${phoneDetails}, sou de ${contactState || "Brasil"}. Gostaria de agendar as especificações do modelo/interesse: "${contactModel}" com estética no tom ${machineSkin.toUpperCase()}!`;
    window.open(getWhatsAppLink(personalizedText), "_blank");
  };

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#ff1e42]" />;
      case "ThermometerSnowflake":
        return <Snowflake className="w-5 h-5 text-[#2563eb]" />;
      case "Sliders":
        return <Sliders className="w-5 h-5 text-[#facc15]" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-[#2563eb]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#ff1e42]" />;
      default:
        return <Award className="w-5 h-5 text-[#ff1e42]" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#ff1e42] selection:text-white overflow-x-hidden">
      
      {/* HEADER BAR (Smooth trigger sticky on scroll past hero, strictly resembling the uploaded image style) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 px-6 md:px-12 ${
        scrolledPastHero 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Mockup matching Double Square Logo from the Uploaded Image with space for actual logo image */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative flex items-center h-10 shrink-0">
              <img 
                src="logoapicoleteira.jpg" 
                alt="Logo Apicoleteira" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
                className="max-h-10 w-auto object-contain select-none"
              />
              <div className="logo hidden flex items-center gap-1">
                <div className="w-4 h-4 rounded-[4px] bg-[#222] -rotate-20 group-hover:rotate-0 transition-transform duration-300 shadow-sm" />
                <div className="w-4 h-4 rounded-[4px] bg-[#2563eb] rotate-20 -ml-2.5 group-hover:rotate-0 transition-transform duration-300 shadow-sm" />
              </div>
            </div>
            <span className="font-sans font-black text-sm md:text-base text-[#222] tracking-widest uppercase transition-colors">
              APICOLETEIRA
            </span>
          </a>

          {/* Nav links exactly matching Image names translated beautifully */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#inicio" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Início</a>
            <a href="#sobre-nos" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">História</a>
            <a href="#equipamentos" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Maquinários</a>
            <a href="#vantagens" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Vantagens</a>
            <a href="#contato" className="text-sm font-bold text-[#222] hover:text-[#ff1e42] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#ff1e42] hover:after:w-full after:transition-all">Contato</a>
          </nav>

          {/* Right quick icons exact display as the mockup images (or outline representations) */}
          <div className="flex items-center gap-5">
            <a href="#contato" className="text-[#222] hover:text-[#ff1e42] transition-colors relative" title="Orçamento">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff1e42] text-white text-[9px] font-mono font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">1</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. INSTANT CINEMATIC FULLSCREEN HERO (Framed perfectly with image aesthetics) */}
      <section 
        id="inicio"
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white pt-24 md:pt-28 pb-12"
      >
        {/* Floating background decorative outline circles matching Image style with brand glows */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[15%] right-[-10%] w-[450px] h-[450px] bg-[#ff1e42]/4 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[20%] left-[5%] w-16 h-16 border-4 border-slate-100/40 rounded-full opacity-60 pointer-events-none" />
        <div className="absolute bottom-[30%] left-[10%] w-24 h-24 border-4 border-slate-100/40 rounded-full opacity-60 pointer-events-none" />
        <div className="absolute top-[35%] right-[45%] w-10 h-10 border-4 border-slate-100/40 rounded-full opacity-60 pointer-events-none" />

        {/* HERO CONTAINER matching double column split */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Hidden to remove requested phrase, preserving GSAP animation reference */}
            <div ref={heroLogoRef} className="hidden" />

            {/* A Máquina que traz o Sabor da Infância layout text, revealed cleanly */}
            <h1 
              ref={mainTitleRef}
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#222222] tracking-tight leading-[0.95] uppercase"
            >
              A Máquina que traz o <br className="hidden sm:inline" />
              <span className="text-[#ff1e42]">Sabor da Infância</span>
            </h1>

            {/* Paragraph matching styling */}
            <div ref={mainSubtitleRef} className="mt-6">
              <p className="text-xs sm:text-base text-slate-700 max-w-md leading-relaxed">
                Experimente a verdadeira satisfação com as nossas máquinas de sorvete de massa de alto rendimento. Projetadas em aço inox 304, elas garantem a perfeita cremosidade e o picolé mais amado desde 1972.
              </p>
            </div>

            {/* Hidden container to preserve GSAP animation ref safety */}
            <div ref={ctaButtonsRef} className="hidden" />

            {/* Three Bento-style stats cards below */}
            <div 
              ref={statsBarRef}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-2.5 md:gap-4 border-t border-blue-100 pt-6 sm:pt-8"
            >
              {/* Card 1 */}
              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">UMA</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Receita Exclusiva</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">24+</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Estados Atendidos</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#2563eb] hover:bg-blue-700 p-3.5 sm:p-4.5 rounded-2xl text-white group shadow-md transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-black tracking-tight leading-none">50+</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
                <p className="text-[8px] sm:text-xs font-semibold uppercase mt-1.5 leading-tight">Tradição no Mercado</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE CONTENT - High fidelity composition matching image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Orange/Yellow fluid curved backdrop block */}
            <div className="absolute top-[5%] right-0 w-full lg:right-[-5%] lg:w-[110%] h-[92%] bg-[#2563eb] rounded-[48px] overflow-hidden -z-10 twist-organic-shape shadow-lg flex items-center justify-center">
              {/* Dynamic light details */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            </div>

            {/* Price Box / Nostalgia float badge on left */}
            <div className="absolute left-[-8px] sm:left-[-10px] md:left-[-20px] top-[20%] sm:top-[30%] z-25 bg-[#f0f7ff]/95 p-2.5 px-4 sm:p-3.5 sm:px-6 rounded-full flex items-center gap-3 sm:gap-4 shadow-[#222222]/10 shadow-lg border-2 border-blue-200 backdrop-blur-sm transform hover:-translate-y-1 transition-transform">
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-slate-500 uppercase">desde</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#222] font-mono select-none">1972</span>
              </div>
              <a href="#contato" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2563eb] hover:bg-[#ff1e42] text-white flex items-center justify-center text-base sm:text-lg font-black shadow-inner transition-colors">
                +
              </a>
            </div>

            {/* Beautiful cutout image of gourmet ice cream scoops in a cup as displayed in the mockup */}
            <div className="relative w-full max-w-[420px] md:max-w-[480px]">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop"
                alt="Gourmet Ice Cream from Apicoleteira"
                className="w-full h-auto object-contain drop-shadow-3xl transform hover:scale-102 transition-transform duration-500"
              />
            </div>

          </div>

        </div>

        {/* 3. SCROLL INDICATOR (that disappears on scroll down) */}
        <div 
          style={{ opacity: scrollGuideOpacity }}
          className="absolute bottom-6 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-1.5 transition-opacity duration-300 z-20 pointer-events-none"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#222] font-black uppercase">Role para Descobrir</span>
          <div className="w-5 h-8 border-2 border-[#222]/45 rounded-full flex justify-center p-1 opacity-70">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-[#ff1e42] rounded-full" 
            />
          </div>
        </div>

      </section>

      {/* 3. DOBRA 1: QUEM SOMOS (HISTÓRIA E HERANÇA RETRÔ) */}
      <section id="sobre-nos" className="py-16 sm:py-24 bg-[#f0f7ff] relative overflow-hidden">
        
        {/* Aesthetic background decorations with brand Red & Blue blur glows */}
        <div className="absolute top-[-10%] left-[-15%] w-[450px] h-[450px] bg-[#ff1e42]/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-15%] w-[450px] h-[450px] bg-[#2563eb]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-16 h-16 border-4 border-blue-200/30 rounded-full opacity-50 pointer-events-none" />
        <div className="absolute top-[40%] left-[8%] w-12 h-12 border-4 border-blue-200/30 rounded-full opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Story text and premium quote card */}
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

              {/* Bauhaus Styled Bold Statement Panel (Aligned to matches Hero Badge style) */}
              <div className="mt-8 p-4 sm:p-6 bg-[#f0f7ff]/95 border-l-4 sm:border-l-8 border-[#ff1e42] rounded-r-2xl sm:rounded-r-3xl text-[#222] shadow-md border-2 border-blue-200 border-l-0 relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-350">
                <p className="font-serif italic font-semibold text-slate-800 text-xs sm:text-base">
                  "{COMPANY_DETAILS.quote}"
                </p>
                <span className="text-[10px] font-mono text-blue-800 tracking-wide mt-3 block uppercase font-black">
                  — Lema Registrado da Família Pelagio
                </span>
              </div>
            </div>

            {/* Right Column: Beautiful custom Retro Television matching Hero's aesthetics */}
            <div className="lg:col-span-6 relative flex justify-center items-center py-4">

              {/* TV Bezel Case */}
              <div className="w-full max-w-lg bg-slate-950 border-[8px] sm:border-[12px] border-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-300">
                
                {/* TV Signal Details Indicator */}
                <div className="absolute top-2 left-4 text-[9px] font-mono text-emerald-400 font-bold z-20 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-full border border-emerald-800/60 shadow">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span>MODULAÇÃO HISTÓRICA PEGN</span>
                </div>

                {/* Video Player Frame */}
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/IjmbX90_IFg"
                    title="Pequenas Empresas Grandes Negócios Interview"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Technical Slate Trim Dial Rail */}
                <div className="bg-slate-900 text-blue-100 py-3.5 px-6 flex items-center justify-between border-t border-slate-800">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-sans font-black tracking-widest uppercase text-blue-400">TV GLOBO PEGN</span>
                    <span className="text-[8px] font-mono text-slate-400 mt-0.5 uppercase">Auditado Sr. Aurélio Pelagio</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-slate-800 border-[3px] border-slate-600 cursor-pointer shadow-inner hover:rotate-45 transition-transform" />
                    <div className="w-5 h-5 rounded-full bg-slate-800 border-[3px] border-slate-600 cursor-pointer shadow-inner hover:-rotate-12 transition-transform" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. DOBRA 2: EQUIPAMENTOS (BENTO-GRID & STAINLESS ENGINEERING WITH SQUARE IMAGE & RAW TEXT) */}
      <section id="equipamentos" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        
        {/* Background elements with brand Red & Blue blur glows */}
        <div className="absolute top-[-15%] right-[-15%] w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-15%] w-[450px] h-[450px] bg-[#ff1e42]/4 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[15%] left-[2%] w-24 h-24 border-4 border-slate-100/30 rounded-full opacity-45 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#222222] tracking-tight leading-[0.95] uppercase">
              QUALIDADE <span className="text-[#ff1e42]">INABALÁVEL</span> <br /> EM AÇO INOX 304
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Diga adeus à fragilidade do plástico comum. Nossos maquinários de alta engenharia contam com resistência profissional definitiva.
            </p>
          </div>

          {/* SQUARE IMAGE LEFT, ELEGANT RAW TEXT RIGHT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-20">
            
            {/* Square Image Left: Aspect-aware and gentle rounded on mobile */}
            <div className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden bg-white rounded-2xl lg:rounded-none shadow-md lg:shadow-none">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop"
                alt="Aço Inox Apicoleteira"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Elegant Description Right: No boxes, pure styled text */}
            <div className="text-left flex flex-col justify-center space-y-5 lg:pl-6">
              
              <h3 className="font-sans font-black text-2xl sm:text-4.5xl text-[#222222] uppercase tracking-tight leading-none">
                Construção 100% <br /> Aço Inox 304
              </h3>

              {/* Descriptions placed beautifully on the right of the image in list format */}
              <ul className="space-y-4 text-slate-700 font-normal mt-2">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Durabilidade de Gerações</strong>
                    <span className="text-xs sm:text-sm text-slate-650">Equipamentos fabricados totalmente em aço inoxidável e poliacetal injetado, imunes à corrosão e livres de plásticos frágeis.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Alta Potência Hermética</strong>
                    <span className="text-xs sm:text-sm text-slate-650">Refrigeração termo-regulável dimensionada para render perfeitamente mesmo sob as temperaturas mais quentes do Brasil.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 font-bold block leading-tight">Suporte Técnico Detalhado</strong>
                    <span className="text-xs sm:text-sm text-slate-650">Acompanhamento e acesso vitalício a receitas de sabores tradicionais americanos sob a curadoria da Família Pelagio.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4">
                <a
                  href={getWhatsAppLink("Olá! Gostaria de saber mais sobre a durabilidade e especificações técnicas da máquina de sorvete americana em Aço Inox 304.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs font-black text-[#ff1e42] hover:text-rose-700 uppercase tracking-widest transition-colors group"
                >
                  <span>Solicitar ficha técnica do Inox</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DOBRA 3: RETORNO DE TRADIÇÃO & DEPOIMENTOS DE CLIENTES */}
      <section id="vantagens" className="py-16 sm:py-24 bg-[#f0f7ff] relative overflow-hidden">
        
        {/* Aesthetic background decorations with brand Red & Blue blur glows */}
        <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-[#2563eb]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[15%] left-[-10%] w-[450px] h-[450px] bg-[#ff1e42]/6 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-[30%] left-[45%] w-12 h-12 border-4 border-blue-200/30 rounded-full opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#222222] tracking-tight leading-[0.95] uppercase">
              LUCRO REAL <span className="text-[#ff1e42]">E SUCESSO</span> <br /> DE QUEM FAZ
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans">
              Diferente de sistemas complexos e burocráticos, o negócio com a Apicoleteira fala através dos resultados práticos de quem já conquistou sua independência financeira.
            </p>
          </div>

          {/* INSTAGRAM CONVEYOR FEED IN PHYSICAL POLAROID CARDS SCROLL */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="absolute left-0 inset-y-0 w-8 md:w-20 bg-gradient-to-r from-[#f0f7ff] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-8 md:w-20 bg-gradient-to-l from-[#f0f7ff] via-transparent to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused] whitespace-nowrap">
              {[...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS].map((post, index) => (
                <div
                  key={`${post.id}-${index}`}
                  className="shrink-0 w-[260px] sm:w-[320px] rounded-[24px] sm:rounded-[32px] bg-white border-4 border-blue-100 p-3 sm:p-4.5 overflow-hidden shadow-lg flex flex-col relative group transition-all duration-300 hover:border-blue-500 hover:shadow-xl text-left"
                >
                  {/* Polaroid Photo Frame */}
                  <div className="relative aspect-[9/13] bg-slate-950 overflow-hidden rounded-[20px] shrink-0 border-2 border-slate-100">
                    <img
                      src={post.imageUrl}
                      alt="Customer Product Showcase"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    
                    {/* Success growth badge overlay */}
                    <div className="absolute top-3 right-3 z-15 bg-[#222222] text-blue-400 border border-blue-500/50 text-[9px] font-mono font-black py-1 px-2.5 rounded-full shadow-md uppercase">
                      {post.growth}
                    </div>

                    {/* Dark bottom vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none z-10" />

                    {/* Testimonial speech inside frame */}
                    <div className="absolute bottom-4 inset-x-4 z-20 text-white whitespace-normal text-left">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Heart className="w-3.5 h-3.5 fill-[#ff1e42] text-[#ff1e42]" />
                        <span className="text-[10px] font-black text-[#fafaf5] font-mono">
                          {post.likes.toLocaleString()} curtidas
                        </span>
                      </div>
                      <p className="text-[11px] text-white/95 leading-relaxed font-bold drop-shadow font-sans italic">
                        "{post.testimonial}"
                      </p>
                    </div>
                  </div>

                  {/* Info bottom area mimicking vintage text label */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-400 via-[#ff1e42] to-[#2563eb] p-[1.5px]">
                          <img
                            src={`https://picsum.photos/seed/${post.username}/100/100`}
                            alt="Instagram account profile"
                            className="w-full h-full object-cover rounded-full bg-white"
                          />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-black text-slate-900 font-mono leading-none">
                            @{post.username}
                          </span>
                          <span className="text-[9px] text-[#2563eb] mt-0.5 font-mono uppercase font-semibold">
                            {post.location}
                          </span>
                        </div>
                      </div>

                      <a
                        href={getWhatsAppLink(`Olá! Vi o relato de sucesso de @${post.username} no site e gostaria de entender sobre o picolé e sorvete artesanal.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-bold text-[#ff1e42] hover:text-red-700 flex items-center gap-0.5 transition-colors uppercase tracking-wider"
                      >
                        <span>Conversar</span>
                        <ChevronRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. DOBRA 4: FORMULÁRIO DE CONTATO & SUPORTE COMERCIAL (Loose, borderless, high-contrast aligned typography) */}
      <section id="contato" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        
        {/* Subtle base brand glow to close the page gracefully */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#2563eb]/3 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#ff1e42]/3 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Title Block with high-contrast elegant typography */}
          <div className="text-left mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-slate-100">
            <span className="text-xs font-mono font-bold tracking-widest text-[#ff1e42] block uppercase">
              Suporte de Vendas diretamente de S.P
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-[#222222] mt-2 uppercase leading-none tracking-tight">
              ENCOMENDE SEU MAQUINÁRIO <span className="text-[#ff1e42]">SOB MEDIDA</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
              Nossos engenheiros e artesãos estão prontos para montar seu equipamento nas especificações técnicas mais cobiçadas do mercado nacional.
            </p>
          </div>

          {/* Split Grid - 2 Column aligned, loose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Left Side: Traditional Details (Completely loose and aligned) */}
            <div className="flex flex-col justify-between space-y-8 text-left">
              
              <div className="space-y-6 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ff1e42]/5 border border-[#ff1e42]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#ff1e42]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Fábrica & Showroom</span>
                    <span className="text-[#222222] leading-relaxed text-xs">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2563eb]/5 border border-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">Horário de Operação</span>
                    <span className="text-[#222222] leading-relaxed text-xs">Segunda a Sexta: 08:00h às 18:00h <br /> Sábados: 09:00h às 13:00h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#2563eb]/5 border border-[#2563eb]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 uppercase tracking-wider text-[10px] font-mono">E-mail Comercial</span>
                    <span className="text-[#222222] leading-relaxed text-xs">{COMPANY_DETAILS.email}</span>
                  </div>
                </div>

              </div>

              {/* Assinatura Pelagio: completely borderless, loose text aligned */}
              <div className="pt-6 border-t border-slate-100 text-[#222222] text-xs">
                <span className="text-[10px] font-mono font-black text-[#ff1e42] uppercase block mb-1">
                  Garantia Histórica Pelagio
                </span>
                Cada máquina recebe número de série especial e assinatura de placa de latão de fábrica para valor de revenda permanente.
              </div>

            </div>

            {/* Right Side: Simple Inline Lead capturing form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
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
                className="w-full bg-[#ff1e42] hover:bg-rose-700 text-white py-3.5 px-4 rounded-xl font-mono text-xs font-extrabold uppercase tracking-wider transition-all block text-center mt-3 shadow-md hover:shadow-lg cursor-pointer"
              >
                Enviar para o WhatsApp
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* FOOTER RAILS */}
      <footer className="bg-slate-950 text-slate-400 py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-900 pb-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center h-10 shrink-0">
                  <img 
                    src="logoapicoleteira.jpg" 
                    alt="Logo Apicoleteira" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                    className="max-h-10 w-auto object-contain select-none"
                  />
                  <div className="logo hidden flex items-center gap-1">
                    <div className="w-4 h-4 rounded-[4px] bg-white -rotate-20" />
                    <div className="w-4 h-4 rounded-[4px] bg-[#2563eb] rotate-20 -ml-2.5" />
                  </div>
                </div>
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

          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-650 gap-4">
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

      {/* 7. POPUP VIDEO INTERVIEW MODAL (Trabajo del Process/Como funciona) */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          >
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-only section navigation buttons (Transparent background, fixed to the right) */}
      <div className="fixed right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 md:hidden pointer-events-none">
        <button
          onClick={() => navigateSection("up")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-slate-900/10 flex items-center justify-center text-[#222222] active:bg-[#ff1e42]/20 active:text-[#ff1e42] transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Dobra anterior"
          title="Subir"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigateSection("down")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-slate-900/10 flex items-center justify-center text-[#222222] active:bg-[#ff1e42]/20 active:text-[#ff1e42] transition-all shadow-md active:scale-95 cursor-pointer"
          aria-label="Próxima dobra"
          title="Descer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
