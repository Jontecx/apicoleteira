import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 190 : 250;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
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

        {/* SWIPEABLE 9:19 CUSTOMER SNAP TRACK */}
        <div className="relative w-full py-4 group/slider">
          {/* Left and Right navigation trigger controls */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none px-2 sm:px-6">
            <button
              onClick={() => scrollSlider("left")}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollSlider("right")}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipeable snap container */}
          <div 
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 px-1"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="shrink-0 w-[170px] sm:w-[220px] bg-white border-2 border-slate-200/60 rounded-[28px] shadow-sm flex items-center justify-center overflow-hidden p-6 text-center select-none snap-start transition-transform hover:scale-[1.01]"
                style={{ aspectRatio: "9/19" }}
              >
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest font-mono select-none">
                  fotos clientes
                </span>
              </div>
            ))}
          </div>

          {/* Swift mobile guide tip */}
          <div className="text-center mt-2 pointer-events-none md:hidden">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              ← deslize para ver mais →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
