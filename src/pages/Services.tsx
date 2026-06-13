import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesIllustration from '../assets/services_illustration.png';

export default function Services() {
  useEffect(() => {
    document.title = "Services | HackStone - Technical Brutalist Solutions";
  }, []);

  return (

    <div className="bg-background text-primary font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative border-b border-primary overflow-hidden py-section-padding text-left">
        <div className="absolute inset-0 grid-bg -z-10 opacity-5"></div>
        <div className="max-w-[1440px] mx-auto px-grid-margin flex flex-col items-start gap-stack-md">
          <div className="inline-block border border-primary px-3 py-1 font-ui-label text-ui-label bg-syntax-lime text-primary uppercase font-bold">
            SYSTEM.STATUS: ACTIVE
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl text-primary leading-none uppercase">
            SERVICES: TECHNOLOGY <br /> FOR GROWTH
          </h1>
          <p className="font-code-sm text-code-sm max-w-xl text-on-surface-variant mt-stack-md uppercase font-bold">
            Engineering secure software, enterprise systems, and cloud infrastructure with operational precision.
          </p>
          <div className="mt-stack-lg flex gap-stack-md">
            <a 
              href="#capabilities" 
              className="bg-primary text-on-primary px-8 py-4 font-ui-label text-ui-label border border-primary hover:bg-syntax-lime hover:text-primary transition-all text-center"
            >
              EXPLORE CAPABILITIES
            </a>
            <Link 
              to="/contact" 
              className="border border-primary px-8 py-4 font-ui-label text-ui-label hover:bg-surface-container transition-all text-center bg-transparent text-primary"
            >
              REQUEST CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards Grid (Bento) */}
      <section id="capabilities" className="max-w-[1440px] mx-auto border-x border-primary min-h-screen text-left">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Header Column */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-primary p-grid-margin flex flex-col justify-between">
            <div>
              <h2 className="font-display-lg text-headline-md uppercase mb-stack-md font-bold">CORE_SERVICES</h2>
              <p className="font-code-sm text-code-sm text-on-surface-variant">
                Our engineering methodology is built on a foundation of brutalist transparency and mechanical rigor.
              </p>
            </div>
            <div className="mt-stack-lg">
              <img 
                alt="Technology Core" 
                className="w-full border border-primary" 
                src={servicesIllustration}
              />
            </div>
          </div>
          {/* Services Bento Grid */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2">
            {/* Cybersecurity */}
            <div 
              onClick={() => console.log('[HACKSTONE_SHELL]: Accessing specs for Cybersecurity...')}
              className="border-b md:border-r border-primary p-grid-margin group service-card transition-all cursor-pointer bg-background hover:bg-surface-container"
            >
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110 group-hover:text-syntax-lime">
                  shield
                </span>
                <span className="font-code-sm text-code-sm text-outline">01</span>
              </div>
              <h3 className="font-headline-md uppercase mb-stack-sm text-primary font-bold">Cybersecurity</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Security assessments, penetration testing, and zero-trust architecture implementation to protect sensitive assets.
              </p>
              <div className="border-t border-primary pt-stack-sm font-ui-label text-ui-label text-primary">
                -&gt; READ_SPECS
              </div>
            </div>

            {/* Software Engineering */}
            <div 
              onClick={() => console.log('[HACKSTONE_SHELL]: Accessing specs for Software Engineering...')}
              className="border-b border-primary p-grid-margin group service-card transition-all cursor-pointer bg-background hover:bg-surface-container"
            >
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110 group-hover:text-syntax-purple">
                  code
                </span>
                <span className="font-code-sm text-code-sm text-outline">02</span>
              </div>
              <h3 className="font-headline-md uppercase mb-stack-sm text-primary font-bold">Software Engineering</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Custom web applications engineered with modern stacks (React, Rust, Node) for maximum performance and scalability.
              </p>
              <div className="border-t border-primary pt-stack-sm font-ui-label text-ui-label text-primary">
                -&gt; READ_SPECS
              </div>
            </div>

            {/* ERP Systems */}
            <div 
              onClick={() => console.log('[HACKSTONE_SHELL]: Accessing specs for ERP Systems...')}
              className="border-b md:border-r border-primary p-grid-margin group service-card transition-all cursor-pointer bg-background hover:bg-surface-container"
            >
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110 group-hover:text-syntax-lime">
                  settings_applications
                </span>
                <span className="font-code-sm text-code-sm text-outline">03</span>
              </div>
              <h3 className="font-headline-md uppercase mb-stack-sm text-primary font-bold">ERP Systems</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Internal workflow systems and resource planning tools tailored to your unique operational logic.
              </p>
              <div className="border-t border-primary pt-stack-sm font-ui-label text-ui-label text-primary">
                -&gt; READ_SPECS
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div 
              onClick={() => console.log('[HACKSTONE_SHELL]: Accessing specs for Cloud & DevOps...')}
              className="border-b border-primary p-grid-margin group service-card transition-all cursor-pointer bg-background hover:bg-surface-container"
            >
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110 group-hover:text-syntax-purple">
                  cloud
                </span>
                <span className="font-code-sm text-code-sm text-outline">04</span>
              </div>
              <h3 className="font-headline-md uppercase mb-stack-sm text-primary font-bold">Cloud & DevOps</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Infrastructure as Code (IaC), AWS/GCP orchestration, and automated CI/CD pipeline deployments.
              </p>
              <div className="border-t border-primary pt-stack-sm font-ui-label text-ui-label text-primary">
                -&gt; READ_SPECS
              </div>
            </div>

            {/* Technology Consulting */}
            <div 
              onClick={() => console.log('[HACKSTONE_SHELL]: Accessing specs for Technology Consulting...')}
              className="md:col-span-2 border-b border-primary p-grid-margin group service-card transition-all cursor-pointer bg-surface-container-low hover:bg-surface-container"
            >
              <div className="flex justify-between items-start mb-stack-lg">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110 group-hover:text-syntax-lime">
                  analytics
                </span>
                <span className="font-code-sm text-code-sm text-outline">05</span>
              </div>
              <h3 className="font-headline-md uppercase mb-stack-sm text-primary font-bold">Technology Consulting</h3>
              <p className="font-body-md text-on-surface-variant mb-stack-md">
                Strategic technical roadmaps and digital transformation audits for growing enterprises requiring legacy modernization.
              </p>
              <div className="border-t border-primary pt-stack-sm font-ui-label text-ui-label text-primary">
                -&gt; READ_SPECS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Workflow Process Section */}
      <section className="border-b border-primary py-section-padding">
        <div className="max-w-[1440px] mx-auto px-grid-margin">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-stack-lg text-center text-primary">
            Operational_Workflow
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-stack-md border border-primary bg-white">
            {/* Step 1 */}
            <div className="flex-grow w-full md:w-auto p-8 text-center border-b md:border-b-0 md:border-r border-primary">
              <div className="font-code-sm text-syntax-purple mb-stack-sm font-bold">01.</div>
              <div className="font-ui-label text-ui-label uppercase font-bold mb-2 text-primary">Discover</div>
              <p className="text-xs text-on-surface-variant">Requirement gathering & initial audit.</p>
            </div>
            {/* Step 2 */}
            <div className="flex-grow w-full md:w-auto p-8 text-center border-b md:border-b-0 md:border-r border-primary">
              <div className="font-code-sm text-syntax-purple mb-stack-sm font-bold">02.</div>
              <div className="font-ui-label text-ui-label uppercase font-bold mb-2 text-primary">Plan</div>
              <p className="text-xs text-on-surface-variant">Architecture mapping & sprints definition.</p>
            </div>
            {/* Step 3 */}
            <div className="flex-grow w-full md:w-auto p-8 text-center border-b md:border-b-0 md:border-r border-primary">
              <div className="font-code-sm text-syntax-purple mb-stack-sm font-bold">03.</div>
              <div className="font-ui-label text-ui-label uppercase font-bold mb-2 text-primary">Build</div>
              <p className="text-xs text-on-surface-variant">Agile engineering with continuous feedback.</p>
            </div>
            {/* Step 4 */}
            <div className="flex-grow w-full md:w-auto p-8 text-center border-b md:border-b-0 md:border-r border-primary">
              <div className="font-code-sm text-syntax-purple mb-stack-sm font-bold">04.</div>
              <div className="font-ui-label text-ui-label uppercase font-bold mb-2 text-primary">Deploy</div>
              <p className="text-xs text-on-surface-variant">Automated testing & staging release.</p>
            </div>
            {/* Step 5 */}
            <div className="flex-grow w-full md:w-auto p-8 text-center">
              <div className="font-code-sm text-syntax-purple mb-stack-sm font-bold">05.</div>
              <div className="font-ui-label text-ui-label uppercase font-bold mb-2 text-primary">Support</div>
              <p className="text-xs text-on-surface-variant">24/7 maintenance & security updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-primary py-section-padding bg-surface-container-low text-left">
        <div className="max-w-[800px] mx-auto px-grid-margin">
          <h2 className="font-headline-md uppercase mb-stack-lg border-l-4 border-syntax-lime pl-4 text-primary font-bold">
            Technical_FAQ
          </h2>
          <div className="space-y-gutter">
            {/* Q1 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">How do you ensure data security?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                We implement AES-256 encryption at rest, end-to-end encryption in transit, and multi-factor authentication across all access points. Regular third-party audits and continuous monitoring are standard procedure.
              </div>
            </details>
            {/* Q2 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">Can you integrate with legacy ERP systems?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Yes. We specialize in developing custom middleware and API bridges to modernize legacy systems without disrupting ongoing business operations.
              </div>
            </details>
            {/* Q3 */}
            <details className="group bg-white border border-primary">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary">
                <span className="font-ui-label text-ui-label uppercase font-bold">What is your typical project timeline?</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 font-body-md text-on-surface-variant border-t border-primary pt-4 bg-surface-container-low">
                Most initial assessments take 2 weeks. Full-scale development cycles vary from 3 to 9 months depending on complexity, delivered in 2-week agile sprints.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-primary text-on-primary">
        <div className="max-w-[1440px] mx-auto px-grid-margin text-center flex flex-col items-center">
          <div className="w-16 h-1 bg-syntax-lime mb-stack-lg"></div>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-stack-md text-on-primary">
            READY_FOR_AUDIT?
          </h2>
          <p className="max-w-2xl font-code-sm text-on-primary-container mb-stack-lg uppercase font-bold">
            IDENTIFY VULNERABILITIES AND OPTIMIZATION OPPORTUNITIES WITHIN YOUR CURRENT TECH STACK. OUR TECHNICAL AUDITS PROVIDE ACTIONABLE INSIGHTS INTO YOUR SYSTEM'S ARCHITECTURE.
          </p>
          <Link 
            to="/contact" 
            className="bg-syntax-lime text-primary px-12 py-6 font-ui-label text-ui-label border-2 border-syntax-lime hover:bg-transparent hover:text-syntax-lime transition-all active:scale-95 uppercase font-bold text-center inline-block"
          >
            REQUEST TECHNICAL AUDIT
          </Link>
          <div className="mt-stack-lg font-code-sm text-syntax-purple font-bold">
            CMD: INIT_CONTACT_SEQUENCE
          </div>
        </div>
      </section>
    </div>
  );
}
