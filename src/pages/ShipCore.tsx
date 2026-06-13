import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shipcoreIllustration from '../assets/shipcore_illustration.png';

export default function ShipCore() {
  const [activeTab, setActiveTab] = useState<'shipments' | 'billing' | 'tracking'>('shipments');
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    document.title = "ShipCore ERP | HackStone - Logistics ERP Platform";
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      
      {/* SECTION 01 — PRODUCT HERO */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-primary md:min-h-[614px]">
        <div 
          className={`md:col-span-7 p-grid-margin flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary transition-all duration-1000 transform ${
            animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-ui-label text-ui-label text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary"></span> [ PRODUCT: V1.0.0 ACTIVE ]
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none mb-2 text-primary font-bold">
            SHIPCORE ERP
          </h1>
          <div className="font-ui-label text-ui-label text-syntax-purple font-bold uppercase tracking-wider mb-6">
            Logistics ERP. Built for Operations.
          </div>
          <p className="font-body-md text-headline-md max-w-xl text-on-surface-variant mb-8 font-medium">
            ShipCore helps logistics teams manage CMR workflows, billing, shipment operations, pricing management, and shipment tracking through a unified desktop platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="bg-primary text-on-primary px-8 py-4 font-ui-label text-ui-label brutalist-border hover:bg-syntax-lime hover:text-primary transition-all text-center font-bold"
            >
              BOOK DEMO
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 font-ui-label text-ui-label brutalist-border hover:bg-primary hover:text-white transition-all text-center bg-transparent text-primary font-bold"
            >
              VERSION NOTES
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 relative bg-surface-container overflow-hidden dashed-bg flex items-center justify-center p-8">
          <div 
            className={`relative w-full h-full brutalist-border bg-white p-4 shadow-[8px_8px_0px_0px_rgba(4,5,5,1)] transition-all duration-1000 delay-300 transform ${
              animateHero ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <img 
              className="w-full h-full object-cover" 
              src={shipcoreIllustration}
              alt="ShipCore Logistics Dashboard"
            />
            <div className="absolute bottom-6 right-6 bg-primary text-on-primary font-ui-label text-[10px] px-2 py-1 font-bold">
              FIG_02: SHIPCORE_SYSTEM_METRICS
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHAT SHIPCORE DOES */}
      <section className="p-grid-margin border-b border-primary text-left bg-surface-cream">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase mb-2">// WORKFLOWS</div>
            <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">System Features</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="brutalist-border p-6 bg-background transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">description</span>
                <h3 className="font-ui-label text-ui-label uppercase font-bold text-primary mb-2">CMR MANAGEMENT</h3>
                <p className="font-code-sm text-xs text-on-surface-variant">Create, organize, and manage shipment and transport documentation from a centralized workflow.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="brutalist-border p-6 bg-background transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">receipt_long</span>
                <h3 className="font-ui-label text-ui-label uppercase font-bold text-primary mb-2">BILLING & INVOICING</h3>
                <p className="font-code-sm text-xs text-on-surface-variant">Generate operational billing records and maintain financial visibility.</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="brutalist-border p-6 bg-background transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">map</span>
                <h3 className="font-ui-label text-ui-label uppercase font-bold text-primary mb-2">ZONE-WISE PRICING</h3>
                <p className="font-code-sm text-xs text-on-surface-variant">Configure pricing logic based on routes, service regions, and operational zones.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="brutalist-border p-6 bg-background transition-transform duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">share_location</span>
                <h3 className="font-ui-label text-ui-label uppercase font-bold text-primary mb-2">SHIPMENT TRACKING</h3>
                <p className="font-code-sm text-xs text-on-surface-variant">Monitor shipment movement and operational progress from dispatch to completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PRODUCT PREVIEW */}
      <section id="preview" className="p-grid-margin border-b border-primary bg-background">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase mb-2">// LIVE_INTERFACE</div>
            <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">OPERATIONAL CONSOLE</h2>
          </div>

          <div className="flex border-b border-primary mb-6 bg-surface-container">
            {(['shipments', 'billing', 'tracking'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-ui-label text-ui-label uppercase border-r border-primary transition-colors font-bold ${
                  activeTab === tab ? 'bg-syntax-lime text-primary' : 'bg-transparent text-primary hover:bg-surface-container-high'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="border border-primary bg-white p-6 brutalist-border relative min-h-[400px] flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(4,5,5,1)]">
            <div className="flex items-center gap-2 mb-6 border-b border-primary pb-3">
              <span className="w-3 h-3 bg-error rounded-full"></span>
              <span className="w-3 h-3 bg-syntax-lime rounded-full border border-primary"></span>
              <span className="w-3 h-3 bg-syntax-purple rounded-full border border-primary"></span>
              <span className="ml-4 font-ui-label text-xs uppercase font-bold text-on-surface-variant">
                CONSOLE: SHIPCORE_DESKTOP_CLIENT // VIEW_{activeTab.toUpperCase()}
              </span>
            </div>

            {activeTab === 'shipments' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in text-left">
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">ACTIVE_SHIPMENTS</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">124</div>
                  <div className="h-2 bg-surface-container w-full">
                    <div className="h-full bg-syntax-lime w-[85%]"></div>
                  </div>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">Pending Dispatches</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">18 Queue</div>
                  <div className="font-code-sm text-xs text-on-surface-variant font-bold">// Operational locks check: ok</div>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">SYSTEM_VERSION</span>
                  <div className="font-display-lg text-headline-md font-bold text-syntax-purple mb-2">v1.0.0</div>
                  <div className="font-code-sm text-xs text-on-surface-variant font-bold">// Stable Release build</div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in text-left">
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">GENERATED_BILLS</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">48</div>
                  <div className="h-2 bg-surface-container w-full">
                    <div className="h-full bg-syntax-lime w-[60%]"></div>
                  </div>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">Total Invoiced</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">$14,250.00</div>
                  <p className="font-code-sm text-xs text-on-surface-variant font-bold">// Zone-wise parameters synced</p>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">SYSTEM_VERSION</span>
                  <div className="font-display-lg text-headline-md font-bold text-syntax-purple mb-2">v1.0.0</div>
                  <div className="font-code-sm text-xs text-on-surface-variant font-bold">// Ledger operations verification</div>
                </div>
              </div>
            )}

            {activeTab === 'tracking' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in text-left">
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">IN_TRANSIT</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">96</div>
                  <div className="h-2 bg-surface-container w-full">
                    <div className="h-full bg-syntax-lime w-[90%]"></div>
                  </div>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">Completed Tracking</span>
                  <div className="font-display-lg text-headline-md font-bold text-primary mb-2">28 Completed</div>
                  <p className="font-code-sm text-xs text-on-surface-variant font-bold">// Dispatched routing update verified</p>
                </div>
                <div className="brutalist-border p-4 bg-background">
                  <span className="font-ui-label text-[10px] text-outline font-bold uppercase block mb-1">SYSTEM_VERSION</span>
                  <div className="font-display-lg text-headline-md font-bold text-syntax-purple mb-2">v1.0.0</div>
                  <div className="font-code-sm text-xs text-on-surface-variant font-bold">// Offline client tracking enabled</div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-primary/20 text-right font-code-sm text-[10px] text-on-surface-variant font-bold">
              Current release operates as desktop software with future expansion planned.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SUPPORTED OPERATIONS */}
      <section className="p-grid-margin border-b border-primary bg-surface-container-low text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase mb-2">// CAPABILITIES</div>
            <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">Supported Operations</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border border-primary bg-background p-6 brutalist-border">
              <h3 className="font-headline-md font-bold uppercase text-primary mb-2">TRANSPORT</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Manage vehicle routing, transport records, and driver dispatch workflows offline.
              </p>
            </div>
            <div className="border border-primary bg-background p-6 brutalist-border">
              <h3 className="font-headline-md font-bold uppercase text-primary mb-2">WAREHOUSE</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Track storage layout records, intake schedules, and inventory movement data.
              </p>
            </div>
            <div className="border border-primary bg-background p-6 brutalist-border">
              <h3 className="font-headline-md font-bold uppercase text-primary mb-2">DISTRIBUTION</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Manage delivery routes, regional distribution points, and dispatch completion.
              </p>
            </div>
            <div className="border border-primary bg-background p-6 brutalist-border">
              <h3 className="font-headline-md font-bold uppercase text-primary mb-2">LOGISTICS</h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                Coordinate shipment tracking, zone-wise pricing logic, and overall logistic processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — INTEGRATIONS */}
      <section className="p-grid-margin border-b border-primary bg-background text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4">
            <div>
              <div className="font-ui-label text-ui-label text-on-surface-variant uppercase mb-2">// INTEROPERABILITY</div>
              <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">Integrations</h2>
            </div>
            <div className="font-body-md text-sm text-on-surface-variant max-w-lg">
              Current release prioritizes reliable offline logistics workflows. Additional synchronization and cloud capabilities planned in future versions.
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">description</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">CMR</span>
            </div>
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">receipt_long</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">BILLING</span>
            </div>
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">map</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">PRICING</span>
            </div>
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">analytics</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">REPORTS</span>
            </div>
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">file_export</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">EXPORT</span>
            </div>
            <div className="brutalist-border p-4 bg-surface-cream text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-3xl mb-2 text-primary">cloud_sync</span>
              <span className="font-ui-label text-xs font-bold uppercase text-primary">FUTURE CLOUD</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — DEPLOYMENT */}
      <section className="p-grid-margin border-b border-primary bg-surface-cream text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <div className="font-ui-label text-ui-label text-on-surface-variant uppercase mb-2">// HOSTING_NODES</div>
            <h2 className="font-display-lg text-headline-md uppercase text-primary font-bold">Deployment Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Desktop (Current) */}
            <div className="brutalist-border p-6 bg-background flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md font-bold uppercase text-primary">DESKTOP (CURRENT)</h3>
                  <span className="material-symbols-outlined text-primary text-3xl">desktop_windows</span>
                </div>
                <ul className="space-y-4 font-code-sm text-xs font-bold text-on-surface-variant text-left">
                  <li><span className="text-primary uppercase">Status:</span> Active</li>
                  <li><span className="text-primary uppercase">Mode:</span> Offline</li>
                  <li><span className="text-primary uppercase">Updates:</span> Version Releases</li>
                </ul>
              </div>
            </div>
            {/* Hybrid */}
            <div className="brutalist-border p-6 bg-background flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md font-bold uppercase text-primary">HYBRID (ROADMAP)</h3>
                  <span className="material-symbols-outlined text-primary text-3xl">dns</span>
                </div>
                <ul className="space-y-4 font-code-sm text-xs font-bold text-on-surface-variant text-left">
                  <li><span className="text-primary uppercase">Status:</span> Planned</li>
                </ul>
              </div>
            </div>
            {/* Cloud */}
            <div className="brutalist-border p-6 bg-background flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md font-bold uppercase text-primary">CLOUD (FUTURE)</h3>
                  <span className="material-symbols-outlined text-primary text-3xl">cloud</span>
                </div>
                <ul className="space-y-4 font-code-sm text-xs font-bold text-on-surface-variant text-left">
                  <li><span className="text-primary uppercase">Status:</span> Under Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — METRICS */}
      <section className="p-grid-margin border-b border-primary bg-background text-left">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-primary border-t border-b border-primary py-8">
            <div className="flex flex-col items-start p-4 space-y-2">
              <div className="font-display-lg text-[48px] md:text-[60px] font-extrabold text-primary leading-none">v1.0.0</div>
              <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Current Version</div>
            </div>
            <div className="flex flex-col items-start p-4 md:pl-12 space-y-2">
              <div className="font-display-lg text-[48px] md:text-[60px] font-extrabold text-primary leading-none">Offline Desktop</div>
              <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Mode</div>
            </div>
            <div className="flex flex-col items-start p-4 md:pl-12 space-y-2">
              <div className="font-display-lg text-[48px] md:text-[60px] font-extrabold text-primary leading-none">Continuous Releases</div>
              <div className="font-ui-label text-ui-label text-on-surface-variant uppercase font-bold">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — FAQ */}
      <section className="p-grid-margin border-b border-primary bg-surface-container-low text-left">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-headline-md uppercase mb-stack-lg border-l-4 border-syntax-lime pl-4 text-primary font-bold">
            Technical_FAQ
          </h2>
          <div className="space-y-4">
            {/* Q1 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">What is ShipCore?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                ShipCore is a logistics ERP platform.
              </div>
            </details>
            {/* Q2 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Does ShipCore support CMR?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Yes.
              </div>
            </details>
            {/* Q3 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Can pricing vary by zone?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Yes, pricing rules can be configured.
              </div>
            </details>
            {/* Q4 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Does ShipCore support billing?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Yes.
              </div>
            </details>
            {/* Q5 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Is tracking available?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Yes.
              </div>
            </details>
            {/* Q6 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Will cloud features come later?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-sm text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Planned for future versions.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FINAL CTA */}
      <section className="py-section-padding px-grid-margin bg-primary text-on-primary text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase mb-6 text-on-primary font-bold">
            READY TO OPTIMIZE OPERATIONS?
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Schedule a walkthrough of ShipCore logistics workflows.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold"
            >
              BOOK DEMO
            </Link>
            <Link 
              to="/contact" 
              className="border border-on-primary text-on-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-on-primary hover:text-primary transition-colors bg-transparent font-bold"
            >
              CONTACT TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
