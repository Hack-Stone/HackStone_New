import { useState, useEffect } from 'react';

export default function Contact() {
  const [identity, setIdentity] = useState('');
  const [email, setEmail] = useState('');
  const [protocol, setProtocol] = useState('SYSTEM_SECURITY_AUDIT');
  const [payload, setPayload] = useState('');
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact HackStone | Systems Connectivity";
  }, []);

  // UTC clock sync

  const [timeStr, setTimeStr] = useState('12:00:00 UTC');
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const time = now.toISOString().split('T')[1].split('.')[0] + ' UTC';
      setTimeStr(time);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identity || !email || !payload) {
      setStatusMsg('VALIDATION_ERROR: Missing required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setStatusMsg(null);

    // Mock transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMsg('TRANSMISSION_SUCCESS: Data payload successfully synchronized with core servers.');
      // Reset form
      setIdentity('');
      setEmail('');
      setPayload('');
    }, 1500);
  };

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen technical-grid text-left">
      {/* Hero Section */}
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ STATUS: READY_TO_INITIATE ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            Connect With <br />
            <span className="text-syntax-purple">Systems</span>
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Bridge the gap between vision and infrastructure. Reach out to our technical architecture team to deploy secure, high-performance solutions.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-primary">
        {/* Contact Form Section */}
        <section className="md:col-span-7 border-r border-primary bg-white p-grid-margin">
          <div className="mb-stack-lg">
            <h2 className="font-headline-md text-headline-md uppercase mb-2 text-primary font-bold">
              Initialize Contact
            </h2>
            <p className="font-code-sm text-code-sm text-on-surface-variant">
              Fields marked * are required for system validation.
            </p>
          </div>

          <form className="space-y-stack-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="space-y-1">
                <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                  User_Identity*
                </label>
                <input 
                  type="text" 
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="NAME_ENTRY"
                  className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                  Communication_Node*
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL@DOMAIN.SYS"
                  className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                Protocol_Type
              </label>
              <select 
                value={protocol}
                onChange={(e) => setProtocol(e.target.value)}
                className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none appearance-none text-primary font-medium"
              >
                <option value="SYSTEM_SECURITY_AUDIT">SYSTEM_SECURITY_AUDIT</option>
                <option value="CUSTOM_ERP_INTEGRATION">CUSTOM_ERP_INTEGRATION</option>
                <option value="INFRASTRUCTURE_SCALING">INFRASTRUCTURE_SCALING</option>
                <option value="GENERAL_QUERY">GENERAL_QUERY</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-ui-label text-ui-label uppercase block text-primary font-bold">
                Data_Payload*
              </label>
              <textarea 
                value={payload}
                onChange={(e) => setPayload(e.target.value)}
                placeholder="ENTER_MESSAGE_PARAMETERS..." 
                rows={6}
                className="w-full bg-background border border-primary p-3 font-code-sm focus:ring-0 focus:border-syntax-lime outline-none text-primary"
                required
              ></textarea>
            </div>

            {statusMsg && (
              <div className={`p-4 border font-code-sm text-code-sm font-bold ${
                statusMsg.startsWith('TRANSMISSION_SUCCESS') 
                  ? 'bg-syntax-lime/20 border-syntax-lime text-secondary' 
                  : 'bg-error-container border-error text-error'
              }`}>
                {statusMsg}
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center justify-between w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-ui-label text-ui-label uppercase hover:bg-syntax-lime hover:text-primary transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'TRANSMITTING...' : 'Transmit Data'}
              <span className="material-symbols-outlined ml-4 group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
        </section>

        {/* Details Section */}
        <section className="md:col-span-5 bg-surface-container-high p-grid-margin flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <h3 className="font-ui-label text-ui-label text-secondary mb-4 uppercase font-bold">[ NODES ]</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Network_Mail</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">CORE@HACKSTONE.IO</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Physical_Core</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">12 TECHNICAL WAY, TECH CITY, LONDON, UK</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Secure_Line</div>
                    <div className="font-code-sm text-code-sm font-bold text-primary">+44 20 7946 0123</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary bg-background overflow-hidden relative">
              <img 
                className="w-full h-48 object-cover grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTiNeSXNKBc4NMc5mUmbitUQwDvq6lHhTFqOSxXzHtOfsSt58aEA-j4QvKX7ltcbkGGIdmovuUzZ0oT14NpqD6ItVlmL3HzRcQOx9xAugpMlFoMGX-4V3QFHilqGluKCkIFR_qwrxMPMq1UbZ4RLOAAyUOhAB8hO7CIirVXlT5qavIMv7LAp7uKDSYsAPSYOkgQVKhXTt69yOS3goLihebVPX7vCgbmj8Zv4_3sf4Ur1okBOB9Znp6rpGeqIYlChTnQq5rpOdkh3d"
                alt="Motherboard circuitry location map"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-on-primary p-2 font-code-sm text-center font-bold">
                LOCATION_MAP: LONDON_UK_EST_2024
              </div>
            </div>
          </div>
          <div className="mt-stack-lg pt-stack-lg border-t border-primary/20">
            <div className="font-ui-label text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">
              Time_Sync: <span className="text-primary font-bold">{timeStr}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-section-padding px-grid-margin bg-primary text-on-primary overflow-hidden relative text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none technical-grid invert"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6 tracking-tight text-on-primary font-bold">
            Let's create something <br />
            <span className="text-syntax-lime">secure and reliable</span>.
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg max-w-2xl mx-auto font-medium">
            The architecture of tomorrow is built on the foundations of precision today. Our systems are standing by for your requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold">
              Start Integration
            </button>
            <button className="border border-on-primary text-on-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-on-primary hover:text-primary transition-colors bg-transparent font-bold">
              View Security Protocols
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
