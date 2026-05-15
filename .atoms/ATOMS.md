# Project Context

## Project Overview
CoreNexus Technology Solution is an IT support platform for businesses in Rome, offering comprehensive services including network management, cybersecurity (SOC as a Service, Wazuh SIEM, Zabbix), IT process automation, VoIP, Kubernetes, and alarm systems. The platform features a ticket management system, admin dashboard, blog, and client area with Supabase backend integration.

## Key Decisions
| Date | Decision | By | Rationale |
|------|----------|-----|-----------|
| 2026-02-09 | React + Vite + Tailwind + shadcn/ui stack | Team | Modern, fast development with component library |
| 2026-02-09 | Supabase as backend | Team | Auth, database, edge functions in one platform |
| 2026-03-09 | Brand rename to CoreNexus | Team | Rebranding initiative |
| 2026-03-25 | Multi-tenant architecture | Team | Support multiple client companies |
| 2026-03-25 | Static pre-rendering | Team | SEO optimization for service pages |
| 2026-04-09 | JSON-LD Schema for FAQ sections | Team | Structured data for better search visibility |
| 2026-04-13 | Cursor follower effect | Team | Enhanced visual interactivity |
| 2026-05-11 | Google Reviews integration | Team | Build trust with real customer reviews |
| 2026-05-11 | SOC as a Service page | Team | New service offering with glass-effect design |

## Constraints
- Dark theme with glass-effect cards, gradient accents in red/orange
- Italian language for all user-facing content
- SEO-optimized with JSON-LD schemas, sitemap, robots.txt
- Responsive design for mobile and desktop
- Supabase for auth, database, and edge functions
- Lenis.js for smooth scrolling
- Framer Motion for animations
- react-helmet-async for SEO meta tags