import React from "react";
import { ShoppingBag } from "./Icons";

interface HeaderProps {
  scrolledPastHero: boolean;
}

export default function Header({ scrolledPastHero }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${
      scrolledPastHero 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-50/80 py-3" 
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
  );
}
