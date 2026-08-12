import React from "react";
import { CheckCircle, ChevronRight } from "./Icons";

interface EquipmentProps {
  getWhatsAppLink: (text?: string) => string;
}

export default function Equipment({ getWhatsAppLink }: EquipmentProps) {
  return (
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
          <div className="w-full relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[#fafafa] rounded-2xl border border-slate-100 shadow-sm">
            <img
              src="maquina.webp"
              alt="Aço Inox Industrial Apicoleteira"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "maquina.png";
              }}
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
  );
}
