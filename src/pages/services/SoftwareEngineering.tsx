import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceSoftware() {
  useEffect(() => {
    document.title = "Software Engineering Services | HackStone";
  }, []);

  const capabilities = [
    { name: "Web Apps", desc: "Interactive web applications built using highly reliable modern tech stacks, custom UI layers, and optimized state management." },
    { name: "Desktop Software", desc: "Native, high-performance desktop applications designed for offline execution, ledger security, and raw local efficiency." },
    { name: "ERP Development", desc: "Resource management engines engineered for high operational complexity, custom routing constraints, and enterprise scheduling." },
    { name: "Custom Systems", desc: "Bespoke database systems, command line interfaces, and technical middlewares tailored to exact operational metrics." }
  ];

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ STATUS: COMPILING ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            Software Engineering
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Rigorous custom application engineering built on top of modern frameworks. We deliver systems tailored to execute complex enterprise workflows.
          </p>
        </div>
      </section>

      <section className="p-grid-margin border-b border-primary bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <span className="font-ui-label text-ui-label text-on-surface-variant uppercase">// SYSTEMS_CATALOG</span>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold mt-2">Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            ENGINEER YOUR PLATFORM
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Schedule a technical kickoff discussion with our development leads.
          </p>
          <Link 
            to="/contact?service=software" 
            className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold inline-block"
          >
            START PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
}
