import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About HackStone | Technical Brutalist UI";
  }, []);

  return (

    <div className="w-full max-w-[1440px] mx-auto blueprint-pattern border-x border-primary min-h-screen text-left">
      {/* Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-primary">
        <div className="md:col-span-8 p-grid-margin bg-background border-r border-primary">
          <div className="mb-stack-lg">
            <span className="font-code-sm text-code-sm uppercase tracking-widest text-on-surface-variant font-bold">
              [ 01_MISSION_STATEMENT ]
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md leading-none text-primary">
            SECURE BY DESIGN.
          </h1>
          <p className="font-body-md text-body-md max-w-xl text-on-surface-variant font-medium">
            At HackStone, we treat security not as a layer, but as the fundamental substrate of every line of code we ship. We build digital fortresses for the modern enterprise, ensuring that scalability never comes at the cost of integrity.
          </p>
        </div>
        <div className="md:col-span-4 bg-primary text-on-primary p-grid-margin flex flex-col justify-end relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-20 text-on-primary">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
          </div>
          <div className="relative z-10 text-left">
            <div className="font-code-sm text-code-sm mb-2 opacity-60 font-bold">SYSTEM_AUTH_LEVEL</div>
            <div className="font-display-lg text-headline-md leading-tight text-on-primary font-bold">
              HARDENED INFRASTRUCTURE SINCE 2018
            </div>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="border-b border-primary text-left">
        <div className="p-4 border-b border-primary bg-surface-container-high text-primary font-bold">
          <span className="font-code-sm text-code-sm">[ 02_CORE_VALUES ]</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter bg-primary">
          <div className="bg-background p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">Security First</h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              Deep audit methodologies baked into every development sprint.
            </p>
          </div>
          <div className="bg-background p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">Scalable Architecture</h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              Built to handle hyper-growth without structural degradation.
            </p>
          </div>
          <div className="bg-background p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">Fast Execution</h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              Rapid deployment pipelines that don't bypass critical checks.
            </p>
          </div>
          <div className="bg-background p-stack-lg flex flex-col gap-stack-md hover:bg-surface-container transition-colors group">
            <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">Long-Term Support</h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-medium">
              We maintain the integrity of our systems through the entire lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-primary text-left bg-background">
        <div className="md:col-span-4 p-grid-margin border-r border-primary bg-background sticky top-16 h-fit">
          <span className="font-code-sm text-code-sm block mb-stack-md text-primary font-bold">[ 03_EVOLUTION_LOG ]</span>
          <h2 className="font-display-lg text-headline-md mb-stack-md text-primary font-bold">THE HACKSTONE STORY</h2>
          <div className="w-full h-[200px] bg-surface-container-highest border border-primary relative overflow-hidden">
            <img 
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA25zU3yuJeEjWH1xjJe3-3umqpzhzU2sTotjZrJ7Zj6ZKMJGBfgTyz7d5VaoZhen2UdmOcPCJ8a8qbg10A6-pb6PxhXbL7BhocP65CYg67cBcLG6NGItFGtYzJrGjb-l3DT1_QkuwUGwaFlmau2XuWwsfFhz3_oWz6fZoEZYh7Jd0ogCs1labdXvGthopRhck-RwiXnhjM8wRY4YmrEhLSY8IS6ygAS6PKnTaDCu8I0EZJXkRit2ByOxIVa-VRyT7TXfr__48dxN3X"
              alt="Server hardware background"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="flex flex-col">
            <div className="p-grid-margin border-b border-primary hover:bg-surface-container transition-colors">
              <div className="flex items-start gap-stack-md">
                <span className="font-ui-label text-headline-md text-primary font-bold">2018</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-primary font-bold">GENESIS</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                    Founded by a team of ethical hackers and systems architects frustrated with "fast-and-loose" development cultures.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-grid-margin border-b border-primary hover:bg-surface-container transition-colors">
              <div className="flex items-start gap-stack-md">
                <span className="font-ui-label text-headline-md text-primary font-bold">2020</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-primary font-bold">KERNEL RELEASE</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                    Launch of our proprietary ERP security kernel, setting new industry benchmarks for zero-trust architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-grid-margin border-b border-primary hover:bg-surface-container transition-colors">
              <div className="flex items-start gap-stack-md">
                <span className="font-ui-label text-headline-md text-primary font-bold">2022</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-primary font-bold">GLOBAL NODE EXPANSION</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                    Expansion into distributed cloud security, providing hardened DevOps pipelines to Fortune 500 partners.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-grid-margin hover:bg-surface-container transition-colors">
              <div className="flex items-start gap-stack-md">
                <span className="font-ui-label text-headline-md text-primary font-bold">PRESENT</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2 text-primary font-bold">SYSTEM STABILITY</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                    Continuously evolving to counter emerging threat vectors with proactive, AI-driven defense mechanisms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HackStone Differentiators */}
      <section className="p-grid-margin bg-background text-left">
        <div className="mb-stack-lg flex justify-between items-end border-b border-primary pb-stack-sm">
          <div>
            <span className="font-code-sm text-code-sm block text-primary font-bold">[ 04_DIFFERENTIATORS ]</span>
            <h2 className="font-display-lg text-headline-md mt-2 text-primary font-bold">TECHNICAL EDGE</h2>
          </div>
          <div className="font-ui-label text-code-sm text-outline font-bold">V.2.4.0_STABLE</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <ul className="space-y-stack-md">
            <li className="flex items-start gap-stack-md p-4 border border-primary hover:bg-syntax-lime hover:text-primary transition-all cursor-default group">
              <span className="font-ui-label text-primary group-hover:text-primary font-bold">-&gt;</span>
              <div>
                <span className="font-ui-label text-ui-label block font-bold mb-1 text-primary">ZERO-TRUST PROTOCOLS</span>
                <p className="font-body-md text-code-sm opacity-80 font-medium">
                  Strict identity verification for every user, device, and application attempt to access the network.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-stack-md p-4 border border-primary hover:bg-syntax-lime hover:text-primary transition-all cursor-default group">
              <span className="font-ui-label text-primary group-hover:text-primary font-bold">-&gt;</span>
              <div>
                <span className="font-ui-label text-ui-label block font-bold mb-1 text-primary">ATOMIC DEPLOYMENTS</span>
                <p className="font-body-md text-code-sm opacity-80 font-medium">
                  Indivisible deployment units that ensure system state consistency even during catastrophic failures.
                </p>
              </div>
            </li>
          </ul>
          <ul className="space-y-stack-md">
            <li className="flex items-start gap-stack-md p-4 border border-primary hover:bg-syntax-lime hover:text-primary transition-all cursor-default group">
              <span className="font-ui-label text-primary group-hover:text-primary font-bold">-&gt;</span>
              <div>
                <span className="font-ui-label text-ui-label block font-bold mb-1 text-primary">PROACTIVE THREAT HUNTING</span>
                <p className="font-body-md text-code-sm opacity-80 font-medium">
                  Automated systems that scan for vulnerabilities in real-time, long before they can be exploited.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-stack-md p-4 border border-primary hover:bg-syntax-lime hover:text-primary transition-all cursor-default group">
              <span className="font-ui-label text-primary group-hover:text-primary font-bold">-&gt;</span>
              <div>
                <span className="font-ui-label text-ui-label block font-bold mb-1 text-primary">IMMUTABLE LOGGING</span>
                <p className="font-body-md text-code-sm opacity-80 font-medium">
                  Tamper-proof audit trails stored on decentralized ledgers for absolute transparency.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
