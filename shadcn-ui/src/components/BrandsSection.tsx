import TiltCard from './TiltCard';
import MorphingSection from './MorphingSection';

export default function BrandsSection() {
  const brands = [
    {
      name: 'Zabbix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Zabbix_logo.svg/320px-Zabbix_logo.svg.png',
      description: 'Monitoraggio infrastrutture',
    },
    {
      name: 'Proxmox',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Proxmox-VE-logo.svg/320px-Proxmox-VE-logo.svg.png',
      description: 'Virtualizzazione',
    },
    {
      name: 'Hikvision',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hikvision_logo.svg/320px-Hikvision_logo.svg.png',
      description: 'Videosorveglianza',
    },
    {
      name: 'FreePBX',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/FreePBX_Logo.png/320px-FreePBX_Logo.png',
      description: 'Centralini VoIP',
    },
    {
      name: 'pfSense',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/PfSense_logo.svg/320px-PfSense_logo.svg.png',
      description: 'Firewall e routing',
    },
    {
      name: 'Cisco',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/320px-Cisco_logo_blue_2016.svg.png',
      description: 'Networking e sicurezza',
    },
    {
      name: 'Wazuh',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Wazuh_Logo.svg/320px-Wazuh_Logo.svg.png',
      description: 'Security monitoring',
    },
    {
      name: 'VMware',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/240px-Vmware_workstation_16_icon.svg.png',
      description: 'Virtualizzazione enterprise',
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
      description: 'Soluzioni enterprise',
    },
    {
      name: 'Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/240px-Microsoft_Azure.svg.png',
      description: 'Cloud computing',
    },
    {
      name: 'Red Hat',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/320px-Red_Hat_logo.svg.png',
      description: 'Enterprise Linux',
    },
    {
      name: 'Ubuntu Server',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/240px-Logo-ubuntu_cof-orange-hex.svg.png',
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
                <div className="group relative p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full" style={{ background: '#111827' }}>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                  <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                    <div className="w-full h-24 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-500" style={{ background: '#1f2937', padding: '12px' }}>
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain group-hover:brightness-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="text-center space-y-1">
                      <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{brand.description}</p>
                    </div>
                  </div>

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
