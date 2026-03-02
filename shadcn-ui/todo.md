# CoreNexus - 3 Pagine Servizi Dedicate

## Struttura (ispirata a ITquadro.com/networking-e-reti-3)

Ogni pagina segue questa struttura:
1. **Hero Section** — Titolo servizio + sottotitolo + bullet points vantaggi + CTA
2. **Pacchetti Consulenza** — 3 card (Base, Professional, Enterprise) con dettagli
3. **Sezione Descrittiva** — Testo approfondito + lista tecnologie/servizi specifici
4. **CTA Contatto** — Rimando al form contatto in homepage

## Pagine da creare

1. `/networking-reti` → `src/pages/NetworkingReti.tsx`
   - Gestione reti aziendali, firewall, VPN, switch, VLAN, Wi-Fi, cablaggio
   
2. `/sicurezza-informatica` → `src/pages/SicurezzaInformatica.tsx`
   - Cybersecurity, antivirus, firewall, monitoraggio Wazuh, penetration test
   
3. `/assistenza-sistemistica` → `src/pages/AssistenzaSistemistica.tsx`
   - Supporto IT completo, manutenzione server, help desk, backup

## File da modificare

4. `src/App.tsx` — Aggiungere le 3 nuove route
5. `src/components/Header.tsx` — Aggiungere dropdown "Servizi" con link alle 3 pagine
6. `src/pages/Servizi.tsx` — Aggiungere link alle pagine dedicate nelle card servizi

## Design
- Stile coerente con il sito: dark theme, glass-effect, gradient-text
- Animazioni con MorphingSection e TiltCard
- Responsive mobile-first