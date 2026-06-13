import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceERP() {
  useEffect(() => {
    document.title = "ERP Systems | HackStone";
  }, []);

  const capabilities = [
    { name: "Workflow Automation", desc: "Automate repetitive data transfers, task allocations, and logistics queues through optimized trigger systems." },
    { name: "Internal Systems", desc: "Dedicated, secure local and cloud-based applications designed strictly for managing internal corporate data and processes." },
    { name: "Business Operations", desc: "Centralized ledgers and analytics engines to verify real-time supply chain health, transit routing, and company metrics." }
  ];

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ STATUS: DEPLOYED ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            ERP Systems
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Internal workflow systems, ledgers, and resource planning engines tailored to your unique logistics, manufacturing, and operational requirements.
          </p>
        </div>
      </section>

      <section className="p-grid-margin border-b border-primary bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <span className="font-ui-label text-ui-label text-on-surface-variant uppercase">// OPERATIONAL_FLOW</span>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold mt-2">What We Cover</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div key={item.name} className="border border-primary bg-background p-6 brutalist-border">
                <h3 className="font-ui-label text-ui-label font-bold uppercase text-primary mb-2">{item.name}</h3>
                <p className="font-body-md text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding px-grid-margin bg-primary text-on-primary text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase mb-6 text-on-primary font-bold">
            OPTIMIZE BUSINESS SYSTEMS
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Schedule a technical consultation to map out your operational requirements and integrations.
          </p>
          <Link 
            to="/contact?service=erp" 
            className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold inline-block"
          >
            BOOK DISCOVERY
          </Link>
        </div>
      </section>
    </div>
  );
}
