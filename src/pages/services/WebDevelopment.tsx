import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceWebDev() {
  useEffect(() => {
    document.title = "Web Development Services | HackStone";
  }, []);

  const sections = [
    { name: "Business Websites", desc: "Corporate and brand presence sites engineered with semantic HTML, rich typography, and layout architectures for fast load times." },
    { name: "Landing Pages", desc: "High-conversion product showcases and promotional web pages with clean layouts and responsive user interface flows." },
    { name: "Dashboards", desc: "Custom administrative and customer portal interfaces mapping complex data pipelines into intuitive, responsive dashboards." },
    { name: "Admin Panels", desc: "Secure back-office management interfaces supporting role-based authentication, user control, and resource logging." },
    { name: "Maintenance", desc: "Continuous performance audits, library updates, security patches, and SEO content optimizations." }
  ];

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary overflow-x-hidden text-left">
      <section className="border-b border-primary py-section-padding px-grid-margin bg-background">
        <div className="max-w-4xl">
          <div className="font-ui-label text-ui-label text-secondary mb-4 uppercase tracking-widest font-bold">
            [ SERVICE: ONLINE ]
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-[80px] leading-[0.9] uppercase mb-8 text-primary font-bold">
            WEB DEVELOPMENT
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl font-medium">
            Custom business websites, portals, dashboards, and modern web applications engineered for performance, responsive alignment, and global scalability.
          </p>
        </div>
      </section>

      <section className="p-grid-margin border-b border-primary bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-stack-lg">
            <span className="font-ui-label text-ui-label text-on-surface-variant uppercase">// WEB_COMPONENTS</span>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold mt-2">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((item) => (
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
            LAUNCH YOUR WEB PLATFORM
          </h2>
          <p className="font-code-sm text-on-primary-container mb-stack-lg font-medium">
            Deploy optimized, secure, and semantic websites aligned with your branding guidelines.
          </p>
          <Link 
            to="/contact?service=webdev" 
            className="bg-syntax-lime text-primary px-10 py-4 font-ui-label text-ui-label uppercase hover:bg-white hover:text-primary transition-colors font-bold inline-block"
          >
            REQUEST WEBSITE
          </Link>
        </div>
      </section>
    </div>
  );
}
