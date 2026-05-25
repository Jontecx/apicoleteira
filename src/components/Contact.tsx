import React, { useState } from "react";
import { COMPANY_DETAILS } from "../data";
import { MapPin, Clock, Mail } from "./Icons";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactModel, setContactModel] = useState("Máquina de sorvete de Massa");
  const [contactState, setContactState] = useState("");

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
              className="w-full bg-[#ff1e42] hover:bg-rose-700 text-white py-3 px-4 rounded-xl font-mono text-xs font-extrabold uppercase tracking-wider transition-all block text-center mt-3 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              Enviar para o WhatsApp
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
