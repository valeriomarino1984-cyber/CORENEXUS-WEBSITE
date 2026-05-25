const CDN = 'https://cdn.jsdelivr.net/gh/valeriomarino1984-cyber/CORENEXUS-WEBSITE@2847183/shadcn-ui/public/assets';

const brands = [
  { name: 'Zabbix', logo: `${CDN}/zabbix-logo.png`, description: 'Monitoraggio' },
  { name: 'Proxmox', logo: `${CDN}/Proxmox.jpg`, description: 'Virtualizzazione' },
  { name: 'Hikvision', logo: `${CDN}/hikvision-logo.png`, description: 'Videosorveglianza' },
  { name: 'FreePBX', logo: `${CDN}/freepbx-logo.png`, description: 'Centralini VoIP' },
  { name: 'pfSense', logo: `${CDN}/pfsense-logo.png`, description: 'Firewall' },
  { name: 'Cisco', logo: `${CDN}/cisco-logo.png`, description: 'Networking' },
  { name: 'Wazuh', logo: `${CDN}/Wazuh.jpg`, description: 'Security' },
  { name: 'VMware', logo: `${CDN}/vmware-logo.jpg`, description: 'Virtualizzazione' },
  { name: 'Microsoft', logo: `${CDN}/microsoft.jpg`, description: 'Enterprise' },
  { name: 'Azure', logo: `${CDN}/Azure.jpg`, description: 'Cloud' },
  { name: 'Red Hat', logo: `${CDN}/RedHat.svg`, description: 'Linux Enterprise' },
  { name: 'Ubuntu Server', logo: `${CDN}/ubuntu-logo6.png`, description: 'Server Linux' },
];

export default function BrandsSection() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center space-y-6 mb-16 reveal-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Tecnologie e Partner</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Lavoriamo con le migliori tecnologie del settore per garantire soluzioni affidabili e performanti
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden reveal-on-scroll" style={{ background: '#050505', padding: '32px' }}>

          <div className="brands-scanline pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="brands-card relative flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-300"
                style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-full h-16 flex items-center justify-center rounded-lg p-2"
                  style={{ background: '#161616' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-gray-200 text-sm font-semibold">{brand.name}</p>
                  <p className="text-gray-600 text-xs">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brands-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 200, 255, 0.0) 10%,
            rgba(0, 200, 255, 0.8) 40%,
            rgba(150, 255, 255, 1) 50%,
            rgba(0, 200, 255, 0.8) 60%,
            rgba(0, 200, 255, 0.0) 90%,
            transparent 100%
          );
          box-shadow:
            0 0 6px rgba(0, 200, 255, 0.9),
            0 0 20px rgba(0, 200, 255, 0.5),
            0 0 40px rgba(0, 200, 255, 0.2);
          z-index: 10;
          animation: brandsScan 3s ease-in-out infinite;
          top: 0;
        }

        @keyframes brandsScan {
          0%   { top: 0px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .brands-card:hover {
          border-color: rgba(0, 200, 255, 0.4) !important;
          box-shadow: 0 0 20px rgba(0, 200, 255, 0.15);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
