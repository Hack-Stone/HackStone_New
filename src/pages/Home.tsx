import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrutalistButton from '../components/BrutalistButton';

export default function Home() {
  useEffect(() => {
    document.title = "HackStone | Engineering Secure Infrastructure";
  }, []);

  return (

    <div className="bg-background text-on-background font-body-md overflow-x-hidden brutalist-grid">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-grid-margin py-section-padding border-b border-primary">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
          <div className="md:col-span-8 space-y-stack-md text-left">
            <span className="font-code-sm text-code-sm bg-syntax-lime px-2 py-1 border border-primary uppercase tracking-widest text-primary font-bold">
              Status: Ready
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none text-primary">
              ENGINEERING SECURE INFRASTRUCTURE
            </h1>
            <p className="font-body-md text-headline-md max-w-2xl text-on-surface-variant">
              Build Secure. Scale Faster. We help businesses build secure, scalable, and modern digital systems.
            </p>
            <div className="flex flex-wrap gap-stack-md pt-stack-md">
              <BrutalistButton 
                to="/contact" 
                variant="primary"
                size="lg"
                className="flex items-center gap-2 group"
              >
                Get Started
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </BrutalistButton>
              <BrutalistButton 
                to="/products" 
                variant="outline"
                size="lg"
              >
                Explore Products
              </BrutalistButton>
            </div>

          </div>
          <div className="md:col-span-4 border border-primary p-gutter bg-white relative aspect-square group overflow-hidden">
            <img 
              alt="Secure Server Infrastructure" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfWYDTlRqMEcrVGSFQyi3-2jlY9GcMLEOmaSK4wNuXrZBF4BFWaUCHyyKqLIpUlxL6Vw5cNSN1tzyeGx6N3fXwobhMTUgcfgc3MSFT-v2w45izrNBgWFd_JHaivC4Ti2HC4pHA0uobxfzHE1sNSua2YD4zQFH1-oUMvXuhj9DyDEc8QgT9PfFAz11igK5EPobCJQke9DrLFsWvb4-CeHG1JaGaTCpTG6etzBvdWw_K_X1WXXidkrtZC0GO_Ct-y54eDROUdFOSwL6I"
            />
            <div className="absolute inset-0 border-[20px] border-background pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-[1440px] mx-auto border-b border-primary bg-background text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary">
          <div className="p-grid-margin space-y-2">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase">Uptime Monitoring</div>
            <div className="font-display-lg text-headline-md font-extrabold text-primary">380,000+ Hours</div>
            <div className="w-full h-1 bg-surface-container overflow-hidden">
              <div className="h-full bg-syntax-lime w-3/4"></div>
            </div>
          </div>
          <div className="p-grid-margin space-y-2">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase">Global Infrastructure</div>
            <div className="font-display-lg text-headline-md font-extrabold text-primary">4,400+ Systems</div>
            <div className="w-full h-1 bg-surface-container overflow-hidden">
              <div className="h-full bg-syntax-purple w-1/2"></div>
            </div>
          </div>
          <div className="p-grid-margin space-y-2">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase">Verified Integrity</div>
            <div className="font-display-lg text-headline-md font-extrabold text-primary">5M+ Lines of Code</div>
            <div className="w-full h-1 bg-surface-container overflow-hidden">
              <div className="h-full bg-primary w-5/6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="max-w-[1440px] mx-auto px-grid-margin py-section-padding border-b border-primary bg-surface-container-low text-left">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <span className="font-ui-label text-ui-label uppercase text-on-primary-container">Capabilities</span>
            <h2 className="font-display-lg text-display-lg uppercase leading-none text-primary">Featured Services</h2>
          </div>
          <span className="material-symbols-outlined text-display-lg text-outline-variant">grid_view</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-primary bg-primary gap-px">
          {/* Service Card 1 */}
          <div className="bg-background p-stack-lg group hover:bg-primary transition-colors duration-300">
            <div className="mb-stack-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-syntax-lime">security</span>
            </div>
            <h3 className="font-headline-md uppercase mb-2 text-primary group-hover:text-on-primary">Cyber Security</h3>
            <p className="font-body-md text-on-surface-variant group-hover:text-on-primary-container mb-stack-md">
              Military-grade encryption and real-time threat detection protocols for critical assets.
            </p>
            <Link 
              to="/services" 
              className="font-ui-label text-ui-label uppercase text-primary group-hover:text-syntax-lime flex items-center gap-1 w-fit"
            >
              Initialize Audit 
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
          {/* Service Card 2 */}
          <div className="bg-background p-stack-lg group hover:bg-primary transition-colors duration-300">
            <div className="mb-stack-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-syntax-purple">terminal</span>
            </div>
            <h3 className="font-headline-md uppercase mb-2 text-primary group-hover:text-on-primary">Software Development</h3>
            <p className="font-body-md text-on-surface-variant group-hover:text-on-primary-container mb-stack-md">
              Custom high-performance applications built with modern frameworks and type-safe architecture.
            </p>
            <Link 
              to="/services" 
              className="font-ui-label text-ui-label uppercase text-primary group-hover:text-syntax-purple flex items-center gap-1 w-fit"
            >
              View Pipeline 
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
          {/* Service Card 3 */}
          <div className="bg-background p-stack-lg group hover:bg-primary transition-colors duration-300">
            <div className="mb-stack-lg">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-syntax-lime">database</span>
            </div>
            <h3 className="font-headline-md uppercase mb-2 text-primary group-hover:text-on-primary">ERP Solutions</h3>
            <p className="font-body-md text-on-surface-variant group-hover:text-on-primary-container mb-stack-md">
              Unified enterprise resource planning systems designed to streamline complex operations globally.
            </p>
            <Link 
              to="/products" 
              className="font-ui-label text-ui-label uppercase text-primary group-hover:text-syntax-lime flex items-center gap-1 w-fit"
            >
              Request Demo 
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="max-w-[1440px] mx-auto px-grid-margin py-section-padding border-b border-primary text-left bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
          <div className="md:col-span-5 flex flex-col justify-center space-y-stack-md">
            <span className="font-code-sm text-code-sm border border-primary px-2 py-1 w-fit bg-primary text-on-primary">
              v4.2.0-STABLE
            </span>
            <h2 className="font-display-lg text-display-lg uppercase leading-none text-primary">ShipCore ERP</h2>
            <p className="font-body-md text-on-surface-variant">
              Our flagship enterprise engine. Designed for companies that demand absolute reliability and real-time synchronization across continents.
            </p>
            <ul className="space-y-2 font-ui-label text-ui-label uppercase text-primary font-bold">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-syntax-lime border border-primary"></span> Cloud-Native Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-syntax-lime border border-primary"></span> Zero-Trust Security Model
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-syntax-lime border border-primary"></span> AI-Driven Inventory Logistics
              </li>
            </ul>
            <div className="pt-stack-md">
              <BrutalistButton 
                to="/products" 
                variant="primary"
                size="lg"
              >
                Configure Instance
              </BrutalistButton>
            </div>

          </div>
          <div className="md:col-span-7">
            <div className="border border-primary p-4 bg-surface-container relative">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-syntax-lime border border-primary"></div>
                <div className="w-3 h-3 rounded-full bg-syntax-purple border border-primary"></div>
                <div className="ml-auto font-code-sm text-code-sm">shipcore_dashboard.sh</div>
              </div>
              <img 
                alt="ShipCore Interface" 
                className="w-full border border-primary grayscale contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAje__iINqHef1IJLbkPwcCSbpmlyHG8M5SK4S73LyamVNWBIqfDml4yq1RxAp2dcljqrJBRL0BHeVVwykw2QKnPK-_dT4SS8zgogakBfIVOjsV1UOuNirNRf_trPbqnEKSzx1CQGtU4O6oiSShKTMMNvWQq9aqWA8mTv6IP4TUBRf98F5emEm7vVcvS7eMi8Y5O6Dl31bNhMmqio0zK2v3gBFX6EZZPTA-ZWAZRbO0CXyDOuFU6UqhP2ojNuETFJMBggAOazJY6AiY"
              />
              <div className="absolute -bottom-4 -right-4 bg-syntax-lime text-primary p-4 font-code-sm text-code-sm border border-primary font-bold">
                // SECURED BY HACKSTONE_SHIELD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="max-w-[1440px] mx-auto px-grid-margin py-section-padding border-b border-primary bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto text-center space-y-stack-lg flex flex-col items-center">
          <span className="material-symbols-outlined text-display-lg text-syntax-lime">format_quote</span>
          <blockquote className="font-display-lg text-headline-md md:text-display-lg italic leading-tight">
            "HackStone didn't just build our infrastructure; they engineered a fortress. Our deployment velocity increased by 40% while maintaining absolute security integrity."
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="font-headline-md font-bold text-on-primary">Marcus Thorne</div>
            <div className="font-ui-label text-ui-label uppercase text-syntax-purple">CTO, Vanguard Global Systems</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1440px] mx-auto px-grid-margin py-section-padding text-center bg-background">
        <div className="border-2 border-primary p-stack-lg md:p-section-padding space-y-stack-md relative overflow-hidden group">
          <div className="absolute inset-0 bg-syntax-lime opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
          <h2 className="font-display-lg text-display-lg uppercase text-primary">READY TO INITIALIZE?</h2>
          <p className="font-body-md text-headline-md max-w-xl mx-auto text-on-surface-variant">
            Secure your digital future with HackStone's expert engineering team.
          </p>
          <div className="flex justify-center gap-stack-md pt-stack-md">
            <BrutalistButton 
              to="/contact" 
              variant="primary"
              size="xl"
            >
              Launch Project
            </BrutalistButton>
          </div>

          <div className="mt-stack-lg font-code-sm text-code-sm flex justify-center items-center gap-4 text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Zero Down Time
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-primary">verified_user</span> ISO 27001 Certified
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
