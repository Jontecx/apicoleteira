import React from "react";
import { COMPANY_DETAILS } from "../data";
import { Youtube, Instagram, MessageCircle } from "./Icons";

export default function Footer() {
  const getWhatsAppLink = () => {
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent("Olá! Vim através do site da Apicoleteira e gostaria de saber mais informações sobre as Máquinas de Sorvete.")}`;
  };

  return (
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
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#ff1e42] text-white flex items-center justify-center transition-all shadow border border-slate-900"
                aria-label="YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#ff1e42] text-white flex items-center justify-center transition-all shadow border border-slate-900"
                aria-label="Instagram handle"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow border border-slate-900"
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
  );
}
