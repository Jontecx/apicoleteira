import React, { useState } from "react";
import { COMPANY_DETAILS } from "../data";
import { Play } from "./Icons";

export default function About() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
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

          {/* Right Column: Retro Television with Optimized Click-to-Play */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-4">

            <div className="w-full max-w-lg bg-slate-950 border-[8px] sm:border-[12px] border-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md relative">
              
              {/* TV Signal Details Indicator */}
              <div className="absolute top-2 left-4 text-[9px] font-mono text-emerald-400 font-bold z-20 flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-full border border-emerald-800/60 shadow-sm">
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
                  <div 
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer select-none group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" 
                    onClick={() => setIsPlayingVideo(true)}
                  >
                    {/* Scanlines visual accent */}
                    <div className="absolute inset-0 bg-repeat bg-[linear-gradient(rgba(18,16,16,0)+50%,rgba(0,0,0,0.25)+50%)] bg-[length:100%_4px] opacity-25 pointer-events-none" />
                    
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[#ff1e42] text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
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
  );
}
