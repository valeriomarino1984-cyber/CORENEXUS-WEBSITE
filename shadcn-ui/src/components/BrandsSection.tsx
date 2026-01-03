import TiltCard from './TiltCard';
import MorphingSection from './MorphingSection';

export default function BrandsSection() {
  const brands = [
    {
      name: 'Zabbix',
      logo: '/assets/zabbix-logo.png',
      description: 'Monitoraggio infrastrutture',
    },
    {
      name: 'Proxmox',
      logo: '/assets/proxmox-logo.jpg',
      description: 'Virtualizzazione',
    },
    {
      name: 'Hikvision',
      logo: '/assets/hikvision-logo.png',
      description: 'Videosorveglianza',
    },
    {
      name: 'FreePBX',
      logo: '/assets/freepbx-logo.png',
      description: 'Centralini VoIP',
    },
    {
      name: 'pfSense',
      logo: '/assets/pfsense-logo.png',
      description: 'Firewall e routing',
    },
    {
      name: 'Cisco',
      logo: '/assets/cisco-logo.png',
      description: 'Networking e sicurezza',
    },
    {
      name: 'Wazuh',
      logo: '/assets/wazuh-logo.jpg',
      description: 'Security monitoring',
    },
    {
      name: 'VMware',
      logo: '/assets/vmware-logo.png',
      description: 'Virtualizzazione enterprise',
    },
    {
      name: 'Microsoft',
      logo: '/assets/microsoft-logo.png',
      description: 'Soluzioni enterprise',
    },
    {
      name: 'Azure',
      logo: '/assets/azure-logo.png',
      description: 'Cloud computing',
    },
    {
      name: 'Red Hat',
      logo: '/assets/redhat-logo.png',
      description: 'Enterprise Linux',
    },
    {
      name: 'Ubuntu Server',
      logo: '/assets/linux-logo.png',
      description: 'Server Linux',
    },
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <MorphingSection className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Tecnologie e Partner</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Lavoriamo con le migliori tecnologie del settore per garantire soluzioni affidabili e performanti
          </p>
        </MorphingSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <MorphingSection key={index} delay={index * 0.05}>
              <TiltCard tiltIntensity={6} glareEffect={false}>
                <div className="group relative p-8 rounded-3xl glass-effect border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-xl transition-all duration-500 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                    {/* Logo container with Apple-style effects */}
                    <div className="w-full h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                        style={{
                          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                        }}
                      />
                    </div>
                    
                    {/* Brand name and description */}
                    <div className="text-center space-y-1">
                      <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {brand.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                  </div>
                </div>
              </TiltCard>
            </MorphingSection>
          ))}
        </div>
      </div>
    </section>
  );
}