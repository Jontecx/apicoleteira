import React from "react";
import { ChevronRight } from "./Icons";

interface HeroProps {
  getWhatsAppLink: (text?: string) => string;
}

export default function Hero({ getWhatsAppLink }: HeroProps) {
  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-white pt-24 md:pt-28 pb-12"
    >
      {/* Soft background glow accents (Static gradients, hidden on mobile for extreme GPU gain) */}
      <div className="hidden md:block absolute top-[12%] left-[-8%] w-[450px] h-[450px] bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#ff1e42]/4 rounded-full blur-[110px] pointer-events-none" />

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
          
          <div className="absolute top-[5%] right-0 w-full lg:right-[-5%] lg:w-[110%] h-[92%] bg-[#2563eb] rounded-[48px] overflow-hidden -z-10 twist-organic-shape shadow-sm flex items-center justify-center">
            <div className="hidden md:block absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          </div>

          <div className="absolute left-[-8px] sm:left-[-10px] md:left-[-20px] top-[25%] sm:top-[35%] z-25 bg-[#f0f7ff]/95 p-2.5 px-4 sm:p-3.5 sm:px-6 rounded-full flex items-center gap-3 sm:gap-4 shadow-sm border border-blue-200 backdrop-blur-sm transform hover:-translate-y-0.5 transition-transform">
            <div className="flex flex-col">
              <span className="text-[8px] sm:text-[9px] font-mono tracking-wider text-slate-500 uppercase">desde</span>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#222] font-mono select-none">1972</span>
            </div>
            <a href="#contato" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#2563eb] hover:bg-[#ff1e42] text-white flex items-center justify-center text-lg font-black transition-colors">
              +
            </a>
          </div>

          {/* High Performance Direct Image Paint with automatic fallbacks */}
          <div className="relative w-full max-w-[420px] md:max-w-[480px]">
            <img
              src="dobra1.webp"
              alt="Gourmet Ice Cream from Apicoleteira"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "dobra1.png";
              }}
              className="w-full h-auto object-contain drop-shadow"
              loading="eager"
              decoding="sync"
            />
          </div>

        </div>

      </div>

    </section>
  );
}
