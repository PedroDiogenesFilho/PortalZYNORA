# PortalZYNORA

Blog de tecnologia e divulgação de promoções de programas de afiliados.

## Funcionalidades

- **Blog de Tecnologia**: Artigos sobre programação, IA, cloud, front-end, segurança e DevOps
- **Promoções de Afiliados**: Ofertas exclusivas de cursos, ferramentas e serviços de tecnologia
- **Filtro por Categoria**: Navegação por categoria tanto no blog quanto nas promoções
- **Design Responsivo**: Interface moderna e responsiva com dark theme

## Tecnologias

- [Next.js 16](https://nextjs.org/) com App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do projeto

```
app/
├── page.tsx          # Homepage
├── blog/
│   ├── page.tsx      # Listagem de artigos
│   └── [slug]/
│       └── page.tsx  # Artigo individual
└── promocoes/
    └── page.tsx      # Promoções de afiliados
components/
├── Header.tsx
├── Footer.tsx
├── PostCard.tsx
└── PromotionCard.tsx
lib/
├── posts.ts          # Dados dos artigos
└── promotions.ts     # Dados das promoções
types/
└── index.ts          # Definições de tipos
```

## Disclosure de Afiliados

Este site contém links de afiliados. Podemos receber comissão por compras realizadas através desses links, sem custo adicional para o usuário.