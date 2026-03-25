import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Prerenderer from '@prerenderer/prerenderer';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// All public routes to pre-render for SEO
const routes = [
  '/',
  '/servizi',
  '/networking-reti',
  '/sicurezza-informatica',
  '/assistenza-sistemistica',
  '/project-management',
  '/impianti-allarme-videosorveglianza',
  '/siti-web',
  '/contratti-manutenzione',
  '/centralini-voip',
  '/automazione-processi',
  '/tecnologie',
  '/assistenza-remota',
  '/blog',
  '/blog/migrazione-cloud-aziendale',
  '/blog/gdpr-protezione-dati-aziende',
  '/blog/manutenzione-preventiva-it',
  '/blog/smart-working-vpn-aziendale',
  '/blog/disaster-recovery-piano-aziendale',
  '/blog/backup-aziendali-strategie-2025',
  '/blog/cybersecurity-pmi-guida',
  '/blog/rete-aziendale-performante',
  '/blog/virtualizzazione-server-vantaggi',
  '/blog/voip-freepbx-centralino',
  '/blog/videosorveglianza-hikvision-guida',
  '/dove-siamo',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-of-service',
];

async function prerender() {
  console.log('🚀 Starting pre-rendering...');
  console.log(`📁 Static dir: ${distDir}`);
  console.log(`📄 Routes to pre-render: ${routes.length}`);

  const prerenderer = new Prerenderer({
    staticDir: distDir,
    renderer: new PuppeteerRenderer({
      headless: true,
      renderAfterTime: 3000,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    }),
  });

  try {
    await prerenderer.initialize();

    const renderedRoutes = await prerenderer.renderRoutes(routes);

    let successCount = 0;
    for (const renderedRoute of renderedRoutes) {
      const routePath = renderedRoute.route === '/' ? '/index' : renderedRoute.route;
      const outputDir = path.join(distDir, routePath);
      const outputFile = path.join(outputDir, 'index.html');

      // Clean up the HTML - remove data attributes from source locator
      let html = renderedRoute.html || '';
      html = html.replace(/\s*data-mgx-[a-z-]+="[^"]*"/g, '');

      // Create directory if it doesn't exist
      fs.mkdirSync(outputDir, { recursive: true });

      // Write the pre-rendered HTML
      if (renderedRoute.route === '/') {
        // For root, overwrite the existing index.html
        fs.writeFileSync(path.join(distDir, 'index.html'), html);
      } else {
        fs.writeFileSync(outputFile, html);
      }

      successCount++;
      console.log(`  ✅ ${renderedRoute.route}`);
    }

    console.log(`\n🎉 Pre-rendering complete! ${successCount}/${routes.length} routes rendered.`);
  } catch (error) {
    console.error('❌ Pre-rendering failed:', error);
    process.exit(1);
  } finally {
    await prerenderer.destroy();
  }
}

prerender();