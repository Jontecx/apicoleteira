/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ChevronUp, ChevronDown } from "./components/Icons";
import { COMPANY_DETAILS } from "./data";

// Lazy loading below-the-fold sections for maximum initial paint speed
const About = lazy(() => import("./components/About"));
const Equipment = lazy(() => import("./components/Equipment"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Render placeholder for smooth lazy loading transits
const SectionLoader = () => (
  <div className="h-48 w-full flex items-center justify-center bg-slate-50 border-t border-slate-100">
    <div className="w-5 h-5 border-2 border-[#ff1e42] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  // Extremely throttled scroll listener to avoid redundant component re-renders
  useEffect(() => {
    let lastState = false;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY > 120;
      if (currentScroll !== lastState) {
        setScrolledPastHero(currentScroll);
        lastState = currentScroll;
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
    const baseText = customText || `Olá! Vim através do site da Apicoleteira e gostaria de saber mais informações sobre as Máquinas de Sorvete.`;
    return `https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#ff1e42] selection:text-white overflow-x-hidden">
      
      {/* 1. Header component loaded directly (critical navigation) */}
      <Header scrolledPastHero={scrolledPastHero} />

      {/* 2. Hero Component loaded directly (critical above-the-fold content) */}
      <Hero getWhatsAppLink={getWhatsAppLink} />

      {/* 3. Non-critical sections lazy-loaded asynchronously with lightweight Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Equipment getWhatsAppLink={getWhatsAppLink} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      {/* Mobile navigation floating assistance widget */}
      <div className="fixed right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 md:hidden pointer-events-none">
        <button
          onClick={() => navigateSection("up")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#222222] active:bg-[#ff1e42] active:text-white shadow-md active:scale-95 transition-all cursor-pointer"
          aria-label="Subir"
          title="Subir"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigateSection("down")}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-slate-200 flex items-center justify-center text-[#222222] active:bg-[#ff1e42] active:text-white shadow-md active:scale-95 transition-all cursor-pointer"
          aria-label="Descer"
          title="Descer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
