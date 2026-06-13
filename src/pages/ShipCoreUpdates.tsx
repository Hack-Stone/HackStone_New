import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShipCoreUpdates() {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    document.title = "ShipCore Product Updates | HackStone";
    const timer = setTimeout(() => {
      setAnimateHeader(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      
      {/* HEADER */}
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div 
          className={`max-w-4xl transition-all duration-1000 transform ${
            animateHeader ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ RELEASE_CHANNEL: ACTIVE ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            SHIPCORE PRODUCT UPDATES
          </h1>
          <div className="font-ui-label text-ui-label text-syntax-purple font-bold uppercase tracking-wider mb-6">
            Version history and upcoming improvements.
          </div>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Track ShipCore releases, improvements, and planned capabilities.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 border-b border-primary">
        {/* CURRENT RELEASE */}
        <section className="md:col-span-6 border-r border-primary bg-white p-grid-margin">
          <div className="mb-stack-lg border-b border-primary pb-4">
            <span className="font-ui-label text-xs uppercase font-bold text-on-surface-variant">// CURRENT RELEASE</span>
            <div className="flex items-baseline gap-4 mt-2">
              <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">v1.0.0</h2>
              <span className="bg-syntax-lime text-primary font-ui-label text-[10px] px-2 py-1 brutalist-border font-bold">
                ACTIVE
              </span>
            </div>
            <div className="font-code-sm text-xs text-on-surface-variant mt-2 font-bold">
              Release Type: Desktop / Offline
            </div>
          </div>

          <div className="space-y-4 font-body-md">
            <h3 className="font-ui-label text-sm uppercase font-bold text-primary">Included Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-code-sm text-sm font-bold text-primary">
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> CMR Management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> Billing System
              </li>
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> Zone-wise Pricing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> Shipment Tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> Operational Dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-syntax-lime font-bold">✓</span> Report Generation
              </li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-primary/20">
            <h3 className="font-ui-label text-xs uppercase font-bold text-on-surface-variant mb-4">// CHANGELOG</h3>
            <p className="font-code-sm text-sm font-bold text-primary">
              Initial public release.
            </p>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="md:col-span-6 bg-surface-container-low p-grid-margin">
          <div className="mb-stack-lg border-b border-primary pb-4">
            <span className="font-ui-label text-xs uppercase font-bold text-on-surface-variant">// FUTURE PATH</span>
            <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold mt-2">ROADMAP</h2>
          </div>

          <div className="space-y-8">
            {/* v1.1.0 */}
            <div className="border border-primary bg-background p-6 brutalist-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-ui-label text-headline-md uppercase font-bold text-primary">v1.1.0</h3>
                <span className="bg-syntax-purple text-primary font-ui-label text-[10px] px-2 py-1 brutalist-border font-bold">
                  PLANNED
                </span>
              </div>
              <ul className="space-y-2 font-code-sm text-xs font-bold text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Improved reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Better dashboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Workflow enhancements
                </li>
              </ul>
            </div>

            {/* v1.2.0 */}
            <div className="border border-primary bg-background p-6 brutalist-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-ui-label text-headline-md uppercase font-bold text-primary">v1.2.0</h3>
                <span className="bg-primary text-on-primary font-ui-label text-[10px] px-2 py-1 brutalist-border font-bold">
                  IN DEVELOPMENT
                </span>
              </div>
              <ul className="space-y-2 font-code-sm text-xs font-bold text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Backup improvements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Sync preparation
                </li>
              </ul>
            </div>

            {/* v2.0.0 */}
            <div className="border border-primary bg-background p-6 brutalist-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-ui-label text-headline-md uppercase font-bold text-primary">v2.0.0</h3>
                <span className="bg-outline-variant text-primary font-ui-label text-[10px] px-2 py-1 brutalist-border font-bold">
                  FUTURE
                </span>
              </div>
              <ul className="space-y-2 font-code-sm text-xs font-bold text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Cloud capabilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Remote access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">→</span> Collaboration support
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-section-padding px-grid-margin bg-primary text-on-primary text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact?service=shipcore&intent=demo" 
              className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold"
            >
              BOOK DEMO
            </Link>
            <Link 
              to="/products/shipcore" 
              className="border border-on-primary text-on-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-on-primary hover:text-primary transition-colors bg-transparent font-bold"
            >
              BACK TO PRODUCT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
