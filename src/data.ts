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
    username: "cliente_satisfeito",
    location: "São Paulo, SP",
    imageUrl: "/post-1.jpg",
    avifUrl: "/post-1.avif",
    webpUrl: "/post-1.webp",
    likes: 1245,
    testimonial: "A Apicoleteira transformou o nosso negócio local! A equipe explicou com todo carinho e paciência o funcionamento da máquina, abrindo uma nova perspectiva de vendas para a nossa loja.",
    growth: "Nova perspectiva de vendas"
  },
  {
    id: "post-2",
    username: "parceiro_local",
    location: "Curitiba, PR",
    imageUrl: "/post-2.jpg",
    avifUrl: "/post-2.avif",
    webpUrl: "/post-2.webp",
    likes: 852,
    testimonial: "Um agradecimento especial ao suporte via WhatsApp, que é impecável e sempre muito rápido para nos atender e tirar qualquer dúvida no dia a dia.",
    growth: "Suporte via WhatsApp nota 10"
  },
  {
    id: "post-3",
    username: "comercio_do_bairro",
    location: "Salvador, BA",
    imageUrl: "/post-3.jpg",
    avifUrl: "/post-3.avif",
    webpUrl: "/post-3.webp",
    likes: 2130,
    testimonial: "Atendimento atencioso do começo ao fim. Nos ensinaram a manusear tudo passo a passo. Trouxe um diferencial enorme para a nossa loja e fortaleceu nossas vendas.",
    growth: "Negócio local fortalecido"
  },
  {
    id: "post-4",
    username: "empreendedor_satisfeito",
    location: "Campinas, SP",
    imageUrl: "/post-4.jpg",
    avifUrl: "/post-4.avif",
    webpUrl: "/post-4.webp",
    likes: 981,
    testimonial: "Incrível como a equipe se dedica a explicar cada detalhe de operação. O suporte sempre presente pelo WhatsApp nos deu total tranquilidade e confiança.",
    growth: "Atendimento diferenciado"
  },
  {
    id: "post-5",
    username: "sorveteria_de_bairro",
    location: "Belo Horizonte, MG",
    imageUrl: "/post-5.jpg",
    avifUrl: "/post-5.avif",
    webpUrl: "/post-5.webp",
    likes: 1540,
    testimonial: "Só temos a agradecer a toda a equipe da Apicoleteira! A máquina trouxe uma nova movimentação para o nosso comércio e o acompanhamento é espetacular.",
    growth: "Sucesso de vendas local"
  }
];

export const MACHINE_SLIDES = [
  {
    id: "maquina-1",
    label: "Máquina de Sorvete Americano & Picolé",
    avifUrl: "/maquina.avif",
    webpUrl: "/maquina.webp",
    imageUrl: "/maquina.jpg",
    alt: "Aço Inox Apicoleteira - Máquina 1"
  },
  {
    id: "maquina-2",
    label: "Estrutura Industrial em Aço Inox",
    avifUrl: "/maquina2.avif",
    webpUrl: "/maquina2.webp",
    imageUrl: "/maquina2.jpg",
    alt: "Aço Inox Apicoleteira - Máquina 2"
  }
];

export const COMPANY_DETAILS = {
  founded: 1972,
  founder: "Aurélio Pelagio",
  phone: "(11) 94340-0270",
  whatsapp: "5511943400270",
  address: "R. Carolina Soares, 944 - Vila Diva, São Paulo - SP, 02554-000",
  email: "contato@apicoleteira.com.br",
  ytInterviewUrl: "https://www.youtube.com/watch?v=IjmbX90_IFg&t=47s",
  instagramUrl: "https://www.instagram.com/apicoleteiraoficial/",
  quote: "Se você é por Deus, Deus é por você.",
  slogan: "Venda o sabor da infância"
};
