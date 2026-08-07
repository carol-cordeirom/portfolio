export const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "sobre mim", href: "#sobre-mim" },
  { label: "cases", href: "#cases" },
  { label: "experiência", href: "#experiencia" },
  { label: "contato", href: "#contato" },
] as const;

export const KEYWORDS = [
  ["UX/UI", "Product design", "Design Systems"],
  ["Fintech", "artificial intelligence", "Data-Driven Strategy"],
  ["B2B & B2C", "SaaS"],
] as const;

export const ABOUT = {
  name: ["Carol", "cordeiro"],
  role: ["senior", "Product designer"],
  bio: [
    "Product Designer com mais de 12 anos de experiência em design e produtos digitais.",
    "Nos últimos 8 anos tenho atuado em Design de Produto de forma end-to-end, para clientes de diversos segmentos e de alta complexidade nos setores de fintech, educação e telecom.",
    "Experiência consolidada em gestão de stakeholders multiárea, Design Systems, discovery orientado a dado e aplicação de Inteligência Artificial no processo de design, criando experiências digitais mais intuitivas e eficientes.",
  ],
} as const;

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  color: string;
  colorClass: string;
  coverImage: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "vivo-app-redesign",
    title: "Vivo App Redesign",
    subtitle: "Case de estudo, 2026",
    color: "#a888e2",
    colorClass: "bg-card-vivo",
    coverImage: "/images/vivo-cover.png",
  },
  {
    slug: "praseg-redesign",
    title: "praseg Redesign",
    subtitle: "Case de estudo, 2025",
    color: "#516eeb",
    colorClass: "bg-card-praseg",
    coverImage: "/images/praseg-cover.png",
  },
  {
    slug: "twism-onboarding-redesign",
    title: "Twism onboarging Redesign",
    subtitle: "Case (Twism), 2025",
    color: "#0a006e",
    colorClass: "bg-card-twism",
    coverImage: "/images/twism-cover.png",
  },
];

export interface ExperienceRole {
  title: string[];
  company: string;
  period: string;
  bullets: { bold: string; text: string }[];
}

export const EXPERIENCE_MAIN: ExperienceRole[] = [
  {
    title: ["senior", "Product", "Designer"],
    company: "badaró",
    period: "Maio de 2025  //  Atualmente",
    bullets: [
      {
        bold: "Liderança de design end-to-end",
        text: ", com atuação em produtos de alta complexidade para clientes diversos (plataformas educacionais, sistemas bancário colombiano, rede de hotelaria nacional e internacional e app de gestão previdenciária). Na Nio (telecom), atuo como referência de design, traduzindo decisões em indicadores como churn, conversão, retenção e ARPU, com equilíbrio entre necessidades da empresa e do cliente.",
      },
      {
        bold: "Advocacia do cliente e cultura de design",
        text: ", como voz do usuário nas decisões de produto e embaixadora da metodologia de design junto a outros setores.",
      },
      {
        bold: "Discovery e validação de hipóteses",
        text: ", com entrevistas, benchmarking competitivo, desk research e análise de boas práticas de mercado e de design, embasando decisões de produto.",
      },
      {
        bold: "Facilitação de cerimônias e workshops estratégicos",
        text: ", conduzindo critiques com o time de design e times multidisciplinares, dinâmicas de OKR, e apresentação de racional de design para lideranças e stakeholders.",
      },
      {
        bold: "Condução, evolução e governança de design system",
        text: ", com documentação de handoff, que reduz retrabalho entre design e engenharia, e auditoria de design e bibliotecas garantindo consistência de produto.",
      },
    ],
  },
  {
    title: ["Product", "Designer"],
    company: "twism (califórnia)",
    period: "2021  //  2025",
    bullets: [
      {
        bold: "Redesenho do fluxo de onboarding, ",
        text: "com aumento de ~50% na taxa de conversão e ativação de novos usuários.",
      },
      {
        bold: "Definição de prioridades e roadmap de produto",
        text: " para a plataforma B2B (dashboard, pricing, portal), em parceria com squads e stakeholders de negócio, considerando também os reflexos no app B2C de carteira do consumidor final.",
      },
      {
        bold: "Condução de discovery estruturado",
        text: ", roteiros, entrevistas e testes de usabilidade, para validar hipóteses antes da implementação, bem como testes A/B.",
      },
      {
        bold: "Estruturação de documentação e handoff",
        text: " entre design e desenvolvimento, com validação técnica das entregas, reduzindo retrabalho.",
      },
      {
        bold: "Priorização de backlog",
        text: " com base em dados de acompanhamento contínuo, mantendo o roadmap conectado à estratégia de produto.",
      },
    ],
  },
];

export interface PreviousRole {
  role: string;
  company: string;
  period: string;
}

export const EXPERIENCE_PREVIOUS: PreviousRole[] = [
  { role: "UX|UI Designer", company: "Nodo", period: "2021" },
  {
    role: "designer",
    company: "universidade candido mendes",
    period: "2019 – 2021",
  },
  { role: "Designer", company: "1Clique Agência Web", period: "2016 – 2019" },
  { role: "designer", company: "f2w soluções", period: "2014 – 2015" },
];

export const CONTACT_LINKS = [
  {
    label: "whatsapp",
    value: "+55 22 9 9916 7700",
    href: "https://wa.me/5522999167700",
  },
  {
    label: "e-mail",
    value: "anacarolina.cmaciel@gmail.com",
    href: "mailto:anacarolina.cmaciel@gmail.com",
  },
  {
    label: "linkedin",
    value: "carol-cordeirom",
    href: "https://linkedin.com/in/carol-cordeirom",
  },
  {
    label: "dribbble",
    value: "carolcordeiro",
    href: "https://dribbble.com/carolcordeiro",
  },
] as const;
