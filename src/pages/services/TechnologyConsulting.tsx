import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceConsulting() {
  useEffect(() => {
    document.title = "Technology Consulting | HackStone";
  }, []);

  const capabilities = [
    { name: "Audits", desc: "Comprehensive tech stack reviews, code audits, database checks, and security compliance assessments." },
    { name: "Roadmaps", desc: "Strategic architecture design mapping legacy modernization pipelines and scaling trajectories." },
    { name: "Optimization", desc: "Fine-tune queries, reduce infrastructure overhead, improve application speed, and calibrate operations." }
  ];

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ ROADMAP: PLANNED ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            Technology Consulting
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Strategic technical advice, code reviews, modernization blueprints, and architecture audits designed strictly for growing enterprises.
          </p>
        </div>
      </section>

      <section className="p-grid-margin border-b border-primary bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <span className="font-ui-label text-ui-label text-on-surface-variant uppercase">// STRATEGIC_blueprints</span>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold mt-2">Consulting Pillars</h2>
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
            CALIBRATE YOUR TECHNOLOGY
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Initialize an in-depth audit of your system architecture and databases.
          </p>
          <Link 
            to="/contact?service=consulting" 
            className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold inline-block"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
