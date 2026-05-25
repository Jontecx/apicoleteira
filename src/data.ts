export const NAVIGATION_ITEMS = [
  { id: "inicio", label: "Início" },
  { id: "sobre-nos", label: "História" },
  { id: "equipamentos", label: "Maquinários" },
  { id: "vantagens", label: "Vantagens" },
  { id: "contato", label: "Contato" }
];

export const COMPANY_DETAILS = {
  whatsapp: "5511942400271", // CNPJ/Phone contact format
  founder: "Aurélio Pelagio",
  quote: "Desenvolvemos maquinários robustos e fáceis de operar, garantindo que a qualidade e a cremosidade do sorvete artesanal de antigamente continuem vivas em cada negócio.",
  address: "Rua do Oratório, Mooca - São Paulo, SP",
  email: "comercial@apicoleteira.com.br"
};

export const PRODUCT_FEATURES = [
  {
    title: "Durabilidade Centenária",
    description: "Construção integral em aço inoxidável AISI 304, projetada para durar décadas sem ferrugem ou fadiga mecânica.",
    icon: "ShieldCheck"
  },
  {
    title: "Super Refrigeração",
    description: "Compressores de alta potência e gás ecológico que realizam o congelamento ultra-rápido do sorvete.",
    icon: "ThermometerSnowflake"
  },
  {
    title: "Operação Simplificada",
    description: "Painéis e comandos amigáveis feitos sob medida para que qualquer pessoa consiga operar com maestria.",
    icon: "Sliders"
  }
];

export interface InstagramPost {
  id: string;
  imageUrl: string;
  growth: string;
  likes: number;
  testimonial: string;
  username: string;
  location: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "post1",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=70&fm=webp",
    growth: "FATURAMENTO +300%",
    likes: 1240,
    testimonial: "A máquina da Apicoleteira mudou nosso patamar. Produção triplicada com a mesma equipe!",
    username: "sorveteriadosol",
    location: "Moema, SP"
  },
  {
    id: "post2",
    imageUrl: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=70&fm=webp",
    growth: "RETORNO EM 3 MESES",
    likes: 980,
    testimonial: "Cremosidade impecável que fidelizou a clientela. O investimento se pagou super rápido.",
    username: "gelatogourmet_br",
    location: "Santos, SP"
  },
  {
    id: "post3",
    imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=70&fm=webp",
    growth: "PRODUÇÃO 120L/H",
    likes: 2150,
    testimonial: "Picolés artesanais perfeitos e super consistentes. A melhor do mercado sem dúvidas.",
    username: "picoletropical",
    location: "Salvador, BA"
  },
  {
    id: "post4",
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=70&fm=webp",
    growth: "SUCESSO DE VENDAS",
    likes: 1845,
    testimonial: "O suporte técnico da família Pelagio nos deu segurança total para começar o negócio.",
    username: "bellagelato_mooca",
    location: "São Paulo, SP"
  },
  {
    id: "post5",
    imageUrl: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=400&q=70&fm=webp",
    growth: "QUALIDADE SUPREMA",
    likes: 1530,
    testimonial: "Todo em inox e muito robusto. Não quebra e aguenta o tranco do verão sem vacilar.",
    username: "artesanal_sorvetes",
    location: "Curitiba, PR"
  }
];
