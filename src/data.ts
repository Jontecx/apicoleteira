/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem, ProductFeature, InstagramPost } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: "inicio", label: "Início", emoji: "🏠", href: "#inicio" },
  { id: "sobre-nos", label: "Quem Somos", emoji: "🏺", href: "#sobre-nos" },
  { id: "equipamentos", label: "Nossos Equipamentos", emoji: "🍦", href: "#equipamentos" },
  { id: "lucro", label: "Seu Negócio", emoji: "📈", href: "#lucro" },
];

export const FINAMAC_ABAS = [
  { label: "Máquinas", emoji: "🍨", desc: "Catálogo completo de equipamentos profissionais de sorvete de massa, gelato, picolé e extrusoras de chocolate." },
  { label: "Pacotes de Fábrica", emoji: "🏭", desc: "Soluções completas chave na mão para o novo produtor de sorvetes e picolés artesanais ou industriais." },
  { label: "Cursos & Instituto", emoji: "🎓", desc: "Capacitação completa em técnicas de fabricação, receitas exclusivas e gestão financeira de sorveterias." },
  { label: "Insumos & Acessórios", emoji: "🥥", desc: "Complementos de alta qualidade, bases importadas, embalagens personalizadas e palitos certificados." },
  { label: "Serviços & Suporte", emoji: "🛠️", desc: "Manutenção preventiva rápida, kits originais de reposição e engenharia especializada à sua disposição." },
];

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "durabilidade",
    title: "Construção 100% Aço Inox 304",
    description: "Equipamentos produzidos inteiramente em aço inoxidável e poliacetal injetado. Sem plásticos frágeis: design sofisticado e durabilidade extrema que atravessa gerações.",
    icon: "ShieldCheck"
  },
  {
    id: "capacidade",
    title: "Capacidade de Alta Refrigeração",
    description: "Refrigeração hermética dimensionada sob medida para aguentar as temperaturas mais extremas de cada região do Brasil. Rendimento consistente de Norte a Sul.",
    icon: "ThermometerSnowflake"
  },
  {
    id: "retro",
    title: "Modificações Retro-Estilo",
    description: "Trabalhamos com projetos personalizados e sob medida. Adaptamos o sistema e o visual vintage que traz a nostalgia do verdadeiro sorvete americano, com 1 ano de garantia de fábrica.",
    icon: "Sliders"
  },
  {
    id: "instrucoes",
    title: "Suporte Total & Receita Inclusa",
    description: "Fornecemos receitas completas originais e instruções minuciosas de uso. Suporte pós-venda garantido para você dar a largada e alavancar suas vendas no primeiro dia com a Empresa Apicoleteira.",
    icon: "BookOpen"
  },
  {
    id: "formula",
    title: "Fórmula de 50 Anos de Sucesso",
    description: "Desenvolvida por Aurélio Pelagio, nossa receita carrega o sabor autêntico da infância, combinando o melhor do sorvete estilo americano com alta cremosidade e picolés incomparáveis.",
    icon: "Sparkles"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post-1",
    username: "sorvetes_do_bosque",
    location: "São Paulo, SP",
    imageUrl: "/post-1.jpg",
    avifUrl: "/post-1.avif",
    webpUrl: "/post-1.webp",
    likes: 1245,
    testimonial: "Nossa produção triplicou e a máquina de sorvete retrô é a maior atração da loja! Clientes amam filmar o sorvete saindo cremoso.",
    growth: "+140% no faturamento"
  },
  {
    id: "post-2",
    username: "picoles_artesanais_sul",
    location: "Curitiba, PR",
    imageUrl: "/post-2.jpg",
    avifUrl: "/post-2.avif",
    webpUrl: "/post-2.webp",
    likes: 852,
    testimonial: "Fabricação robusta em aço inox. A refrigeração não falha mesmo nas semanas de pico. Os picolés saem perfeitos, sem bolhas de ar.",
    growth: "Retorno do investimento em 4 meses"
  },
  {
    id: "post-3",
    username: "retro_creams",
    location: "Salvador, BA",
    imageUrl: "/post-3.jpg",
    avifUrl: "/post-3.avif",
    webpUrl: "/post-3.webp",
    likes: 2130,
    testimonial: "A receita tradicional enviada pelo Sr. Aurélio virou o nosso campeão de vendas. O gosto do sorvete americano de antigamente é imbatível!",
    growth: "+300 litros diários"
  },
  {
    id: "post-4",
    username: "delicias_da_infancia",
    location: "Campinas, SP",
    imageUrl: "/post-4.jpg",
    avifUrl: "/post-4.avif",
    webpUrl: "/post-4.webp",
    likes: 981,
    testimonial: "Apicoleteira é sinônimo de resistência. Nossa máquina trabalha 12h por dia sem perder a constância de refrigeração. Nota dez!",
    growth: "Abriu 2ª filial"
  },
  {
    id: "post-5",
    username: "gelateria_aurora",
    location: "Belo Horizonte, MG",
    imageUrl: "/post-5.jpg",
    avifUrl: "/post-5.avif",
    webpUrl: "/post-5.webp",
    likes: 1540,
    testimonial: "Sorvete denso, brilhoso e muito lucrativo. O toque de nostalgia do picolé vintage atrai tanto crianças quanto adultos saudosistas.",
    growth: "80% de margem de lucro"
  }
];

export const COMPANY_DETAILS = {
  founded: 1972,
  founder: "Aurélio Pelagio",
  phone: "(11) 94340-0270",
  whatsapp: "5511943400270",
  address: "Rua do Oratório, 1450 - Mooca, São Paulo - SP, 03116-000",
  email: "contato@apicoleteira.com.br",
  ytInterviewUrl: "https://www.youtube.com/watch?v=IjmbX90_IFg&t=47s",
  quote: "Se você é por Deus, Deus é por você.",
  slogan: "Venda o sabor da infância"
};
