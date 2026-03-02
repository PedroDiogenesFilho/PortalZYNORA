import { Promotion } from "@/types";

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Curso Completo de Python – Do Zero ao Avançado",
    description:
      "Domine Python com mais de 40 horas de conteúdo. Inclui projetos práticos com Django, Flask, Data Science e Machine Learning. Certificado reconhecido pelo mercado.",
    discount: "87% OFF",
    originalPrice: "R$ 399,90",
    promoPrice: "R$ 49,90",
    category: "Cursos",
    affiliateUrl: "#curso-python",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&auto=format&fit=crop",
    badge: "Mais Vendido",
    expiresAt: "2024-03-31",
  },
  {
    id: 2,
    title: "GitHub Copilot Individual – 3 Meses Grátis",
    description:
      "O assistente de IA da GitHub que escreve código por você. Use na sua IDE favorita (VS Code, JetBrains, Neovim) e aumente sua produtividade em até 55%.",
    discount: "3 Meses Grátis",
    originalPrice: "R$ 39,00/mês",
    promoPrice: "Grátis por 3 meses",
    category: "Ferramentas",
    affiliateUrl: "#github-copilot",
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&auto=format&fit=crop",
    badge: "Trial Gratuito",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect – Curso Preparatório",
    description:
      "Prepare-se para a certificação mais valorizada de cloud computing. Mais de 30 horas de conteúdo, simulados e laboratórios práticos na AWS.",
    discount: "75% OFF",
    originalPrice: "R$ 599,90",
    promoPrice: "R$ 149,90",
    category: "Certificações",
    affiliateUrl: "#aws-certification",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop",
    badge: "Alta Demanda",
    expiresAt: "2024-03-15",
  },
  {
    id: 4,
    title: "JetBrains All Products Pack – Desconto para Estudantes",
    description:
      "Acesso completo a todas as IDEs JetBrains: IntelliJ IDEA, PyCharm, WebStorm, DataGrip e muito mais. Licença gratuita para estudantes e professores.",
    discount: "100% Grátis",
    category: "Ferramentas",
    affiliateUrl: "#jetbrains-student",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop",
    badge: "Estudantes",
  },
  {
    id: 5,
    title: "Hostinger Web Hosting – Plano Premium",
    description:
      "Hospede seus projetos com o melhor custo-benefício do mercado. SSD de alta velocidade, SSL grátis, domínio grátis por 1 ano e suporte 24/7.",
    discount: "80% OFF",
    originalPrice: "R$ 29,99/mês",
    promoPrice: "R$ 5,99/mês",
    category: "Hospedagem",
    affiliateUrl: "#hostinger",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop",
    badge: "Melhor Custo-Benefício",
    expiresAt: "2024-04-30",
  },
  {
    id: 6,
    title: "Bootcamp Full Stack JavaScript – Turma Nova",
    description:
      "Torne-se um desenvolvedor full stack em 6 meses. Aprenda React, Node.js, bancos de dados e deploy. Suporte de mentores e acesso vitalício.",
    discount: "50% OFF",
    originalPrice: "R$ 1.800,00",
    promoPrice: "R$ 900,00",
    category: "Bootcamp",
    affiliateUrl: "#bootcamp-fullstack",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&auto=format&fit=crop",
    badge: "Vagas Limitadas",
    expiresAt: "2024-03-20",
  },
  {
    id: 7,
    title: "Figma Professional – Plano Anual com Desconto",
    description:
      "A ferramenta de design UI/UX mais usada no mundo. Colaboração em tempo real, plugins ilimitados, armazenamento na nuvem e recursos de prototipagem.",
    discount: "40% OFF",
    originalPrice: "R$ 720,00/ano",
    promoPrice: "R$ 432,00/ano",
    category: "Design",
    affiliateUrl: "#figma-pro",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "MongoDB Atlas – $200 em Créditos Grátis",
    description:
      "Comece com o banco de dados NoSQL mais popular na nuvem. $200 em créditos para novos usuários, suporte a múltiplas regiões e escalabilidade automática.",
    discount: "$200 em Créditos",
    category: "Banco de Dados",
    affiliateUrl: "#mongodb-atlas",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&auto=format&fit=crop",
    badge: "Novo Usuário",
  },
  {
    id: 9,
    title: "Curso DevOps com Docker e Kubernetes",
    description:
      "Aprenda a implementar pipelines CI/CD, orquestrar contêineres e trabalhar com infrastructure as code. Conteúdo atualizado para 2024.",
    discount: "70% OFF",
    originalPrice: "R$ 499,90",
    promoPrice: "R$ 149,90",
    category: "Cursos",
    affiliateUrl: "#curso-devops",
    imageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&auto=format&fit=crop",
    expiresAt: "2024-03-25",
  },
  {
    id: 10,
    title: "NordVPN – Plano 2 Anos com Desconto Especial",
    description:
      "Proteja sua privacidade online com a VPN mais confiável do mercado. 5.500+ servidores em 60 países, sem logs e kill switch automático.",
    discount: "68% OFF",
    originalPrice: "R$ 1.200,00",
    promoPrice: "R$ 384,00",
    category: "Segurança",
    affiliateUrl: "#nordvpn",
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&auto=format&fit=crop",
    badge: "Top VPN",
    expiresAt: "2024-04-15",
  },
  {
    id: 11,
    title: "Alura – Assinatura Plus com 30% OFF",
    description:
      "Acesso ilimitado a mais de 1.500 cursos de tecnologia em português. Front-end, back-end, data science, UX, mobile e muito mais. Certificados inclusos.",
    discount: "30% OFF",
    originalPrice: "R$ 1.200,00/ano",
    promoPrice: "R$ 840,00/ano",
    category: "Plataformas",
    affiliateUrl: "#alura",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop",
    badge: "Português",
  },
  {
    id: 12,
    title: "Vercel Pro – Deploy de Next.js sem Limites",
    description:
      "Faça deploy de suas aplicações Next.js, Nuxt e React com a plataforma oficial. Analytics integrado, Edge Functions e CDN global. Trial de 14 dias grátis.",
    discount: "14 Dias Grátis",
    originalPrice: "R$ 100,00/mês",
    category: "Hospedagem",
    affiliateUrl: "#vercel-pro",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop",
    badge: "Trial",
  },
];

export function getAllPromotions(): Promotion[] {
  return promotions;
}

export function getPromotionsByCategory(category: string): Promotion[] {
  return promotions.filter((promo) => promo.category === category);
}

export function getAllPromotionCategories(): string[] {
  return [...new Set(promotions.map((promo) => promo.category))];
}
