# Architecture Design

## System Overview
Single-page React application with Supabase backend. The frontend handles routing, UI rendering, and SEO via react-helmet-async. Supabase provides authentication, PostgreSQL database, and edge functions for server-side logic. Static pre-rendering is used for SEO-critical pages.

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animation**: Framer Motion, Lenis.js (smooth scroll)
- **SEO**: react-helmet-async, JSON-LD schemas, static pre-rendering
- **Backend**: Supabase (Auth, PostgreSQL, Edge Functions)
- **Build**: Vite, pnpm
- **Linting**: ESLint

## Module Design
| Module | Responsibility | Key Files |
|--------|---------------|-----------|
| Pages | Route-level components for each service/section | src/pages/*.tsx |
| Components | Reusable UI elements (Header, Footer, FAQ, Reviews) | src/components/*.tsx |
| Hooks | Custom React hooks (smooth scroll, intersection) | src/hooks/*.ts |
| Lib | Utilities and Supabase client | src/lib/*.ts |
| Utils | SEO schemas, helper functions | src/utils/*.ts |
| Admin | Dashboard, user/ticket management | src/pages/Admin*.tsx |
| Supabase | Edge functions for server-side logic | supabase/functions/ |

## Tech Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| SPA Framework | React + Vite | Fast HMR, modern tooling, TypeScript support |
| CSS Framework | Tailwind + shadcn/ui | Utility-first with pre-built accessible components |
| Backend | Supabase | All-in-one BaaS with auth, DB, edge functions |
| Animations | Framer Motion | Declarative, performant React animations |
| Smooth Scroll | Lenis.js | Smooth, performant page scrolling |
| SEO | Pre-rendering + helmet | SPA SEO without SSR complexity |
| Package Manager | pnpm | Fast, disk-efficient |

## File Tree Plan
```
shadcn-ui/
├── index.html              # Entry HTML with SEO meta
├── src/
│   ├── App.tsx             # Router and layout
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles, animations
│   ├── pages/              # ~30 route-level pages
│   ├── components/         # Shared UI components
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Supabase client, utilities
│   └── utils/              # SEO schemas
├── public/                 # Static assets, sitemap, robots.txt
├── supabase/functions/     # Edge functions
└── dist/                   # Build output
```

## Implementation Guide
1. All pages follow dark theme with glass-effect cards (`backdrop-blur`, semi-transparent backgrounds)
2. Gradient accents use red/orange palette for CTAs and highlights
3. Each service page includes JSON-LD schema via react-helmet-async
4. Admin pages are protected by Supabase auth
5. Blog content is stored in Supabase and rendered with dynamic routes
6. Google Reviews fetched and displayed on contact/service pages
7. Smooth scrolling via Lenis.js hook applied globally
8. ScrollToTop component resets scroll position on route changes