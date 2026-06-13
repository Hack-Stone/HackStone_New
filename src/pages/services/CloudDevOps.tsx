import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCloud() {
  useEffect(() => {
    document.title = "Cloud & DevOps Services | HackStone";
  }, []);

  const capabilities = [
    { name: "Deployments", desc: "Automated, zero-downtime application deployments using containerized clusters (Docker, Kubernetes) and serverless setups." },
    { name: "Automation", desc: "CI/CD pipelines configured for continuous validation, lint checks, automated testing, and secure staging releases." },
    { name: "Infrastructure", desc: "Infrastructure as Code (IaC) architectures on AWS/GCP designed for load balancing, network isolation, and reliability." }
  ];

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ INFRASTRUCTURE: OPTIMIZED ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            Cloud & DevOps
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Automating deployments, pipeline orchestrations, and configuring highly secure, containerized cloud infrastructure for high-traffic environments.
          </p>
        </div>
      </section>

      <section className="p-grid-margin border-b border-primary bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <span className="font-ui-label text-ui-label text-on-surface-variant uppercase">// CLOUD_ENGINEERING</span>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold mt-2">Services</h2>
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
            SCALABLE CLOUD PLATFORMS
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Optimize your deployment pipelines and secure your AWS/GCP clusters with automation.
          </p>
          <Link 
            to="/contact?service=devops" 
            className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold inline-block"
          >
            REQUEST ARCHITECTURE
          </Link>
        </div>
      </section>
    </div>
  );
}
