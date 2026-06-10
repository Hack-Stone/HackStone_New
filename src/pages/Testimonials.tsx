import { useState, useEffect } from 'react';

const INITIAL_LOGS = [
  { date: "2024-05-12", tag: "SOLUTIONS", msg: "Optimized ERP database queries by 60%. Performance is now linear with data growth.", stars: 5 },
  { date: "2024-04-29", tag: "SECURITY", msg: "Hardened kernel configurations and implemented zero-trust architecture. Robust.", stars: 4 },
  { date: "2024-03-15", tag: "DEVOPS", msg: "Automated the entire staging environment teardown. Saved approx 14 man-hours/week.", stars: 5 },
  { date: "2024-02-08", tag: "RESOURCES", msg: "The documentation provided is unparalleled. Every edge case is mapped and handled.", stars: 5 }
];

const MORE_LOGS = [
  { date: "2024-01-20", tag: "INFRA", msg: "Transitioned global routes to edge caches. DNS resolution latency cut down to 12ms.", stars: 5 },
  { date: "2023-12-14", tag: "COMPLIANCE", msg: "Completed SOC2 Type II prep audit in record time. Zero anomalies reported.", stars: 5 },
  { date: "2023-11-05", tag: "SECURITY", msg: "Impenetrable DDoS shielding tested under synthetic 500k rps load. Stable.", stars: 4 },
  { date: "2023-10-18", tag: "ERP", msg: "Real-time ledger updates synchronizing globally under 180ms latency window.", stars: 5 }
];

export default function Testimonials() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "HackStone | SYSTEM VALIDATION";
  }, []);

  const handleLoadMore = () => {

    setLogs([...logs, ...MORE_LOGS]);
    setHasMore(false);
  };

  return (
    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-primary grid-blueprint py-section-padding text-left">
        <div className="scanline"></div>
        <div className="max-w-[1440px] mx-auto px-grid-margin grid grid-cols-1 md:grid-cols-12 gap-stack-lg relative z-10">
          <div className="md:col-span-8 flex flex-col justify-center">
            <div className="inline-block bg-primary text-on-primary font-ui-label text-ui-label px-2 py-1 mb-stack-md w-fit font-bold">
              LOG_FILE: TESTIMONIALS_04.BAK
            </div>
            <h1 className="font-display-lg text-[64px] md:text-[120px] uppercase leading-[0.9] tracking-tighter terminal-cursor mb-stack-lg text-primary">
              SYSTEM<br />VALIDATION
            </h1>
            <p className="font-ui-label text-headline-md max-w-xl text-on-surface-variant font-bold">
              Verified performance metrics and architectural feedback from our high-throughput deployment partners.
            </p>
          </div>
          <div className="md:col-span-4 border-l border-primary p-stack-lg flex items-end">
            <div className="font-code-sm text-code-sm text-on-surface-variant font-bold leading-relaxed">
              [STATUS] EXTERNAL REVIEWS LOADED<br />
              [SOURCE] VERIFIED PRODUCTION ENVIRONMENTS<br />
              [INTEGRITY] 100% CRYPTOGRAPHICALLY SIGNED
            </div>
          </div>
        </div>
      </header>

      {/* Success Metrics */}
      <section className="border-b border-primary bg-primary text-on-primary text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline">
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">DEPL_CYCLE_OPTIMIZATION</div>
            <div className="font-display-lg text-display-lg font-extrabold">-40%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">CI/CD pipeline latency reduction observed across enterprise sectors.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">UPTIME_AVAILABILITY</div>
            <div className="font-display-lg text-display-lg font-extrabold">99.998%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Guaranteed infrastructure resilience under peak synthetic load.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">THREAT_MITIGATION</div>
            <div className="font-display-lg text-display-lg font-extrabold">100%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Zero bypasses recorded during Q3 independent security audits.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">RESOURCE_OVERHEAD</div>
            <div className="font-display-lg text-display-lg font-extrabold">-22%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Reduction in unnecessary compute allocation via ERP logic.</div>
          </div>
        </div>
      </section>

      {/* Client Cards Bento Grid */}
      <section className="py-section-padding max-w-[1440px] mx-auto px-grid-margin text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-primary border border-primary overflow-hidden">
          {/* Large Featured Card */}
          <div className="md:col-span-8 bg-background p-stack-lg flex flex-col justify-between border-b md:border-b-0">
            <div>
              <span className="material-symbols-outlined text-[48px] text-syntax-lime mb-stack-md">format_quote</span>
              <h3 className="font-display-lg text-headline-md md:text-[36px] italic leading-tight mb-stack-lg text-primary">
                "HackStone redefined our ERP structure from the ground up. Their Technical Brutalist approach isn't just aesthetic; it’s a functional philosophy that eliminates bloat."
              </h3>
            </div>
            <div className="flex items-center gap-stack-md border-t border-primary pt-stack-md">
              <img 
                alt="CTO Profile" 
                className="w-16 h-16 grayscale border border-primary object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJk_1FxQp-NhH8SbHCQ8ZSIX2NmejPiWruaKjq-e5C9UKpfftdAkpxZniZc-09Pvj56OWE0VC9NTDbvMg8OuJwTW1pNLNtCVhe_w3S44KhU3lPF0ZW6T8OlcQJS20sza_muQCe4trkGY4mPtAxnykpsUpqkZaEyv49z_DsGS3y2_tLT8DFpTp8e0VT2vsKZJ-TZD3kprPZ_JwJu_hia167eP0BpYXHpWa3Z9AQF86aqg4tDWXOenb8qDuQUaFV7ouSmJFoAQ7Lu68"
              />
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">MARCUS VANCE</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">CTO, NEXUS INFRASTRUCTURE</p>
              </div>
            </div>
          </div>

          {/* Side Card 1 */}
          <div className="md:col-span-4 bg-surface-container p-stack-lg flex flex-col justify-between border-l border-primary">
            <p className="font-body-md text-on-surface mb-stack-lg text-primary">
              "The security audit was brutal, in the best way. They found vulnerabilities our previous three partners missed."
            </p>
            <div className="flex items-center gap-stack-md">
              <img 
                alt="Lead Dev" 
                className="w-12 h-12 grayscale border border-primary object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6-eoKGwhDmKURmh1opmq4qXRafliD-IGyB-6VkAt6AWZeXts3QSl0QdTFyyp7QuLlcLseBJp4XZCUj_9oNqKW1rm6-GVwhb0W5DGaNHUgWgidRdFKinTZSbbt3PFzhyC_MXrV4ZbNljw55p1u2GuRDsGpUmfVYr6mTjWsx2t0mHLCgqcvwPDnbdk7CCOYC8jTxNvTklJLK_8vKgYNxAkmCzlNCVcZpXOG_FQuUhOvfrTNgWQBqgCKcEzAwyQpU2TWOpybXGdLpMbW"
              />
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">SARAH CHEN</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">LEAD SECURITY ENGINEER</p>
              </div>
            </div>
          </div>

          {/* Bottom Row Card 1 */}
          <div className="md:col-span-4 bg-background p-stack-lg border-t border-primary">
            <p className="font-body-md text-on-surface mb-stack-lg text-primary">
              "Infrastructure migration was seamless. No downtime, just pure efficiency."
            </p>
            <div className="flex items-center gap-stack-md">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary">terminal</span>
              </div>
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">DEVOPS TEAM</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">GLOBEX CORP</p>
              </div>
            </div>
          </div>

          {/* Bottom Row Card 2 */}
          <div className="md:col-span-8 bg-surface-container-high p-stack-lg border-t border-l border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <p className="font-body-md text-on-surface italic text-primary">
                "If you want fluff, go elsewhere. If you want a system that survives a DDoS while processing a million transactions, you hire HackStone."
              </p>
              <div className="flex flex-col justify-end">
                <p className="font-ui-label text-ui-label font-bold text-primary">ALEXEI VOLKOV</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">SYSTEMS ARCHITECT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Logs */}
      <section className="py-section-padding bg-background border-t border-primary text-left">
        <div className="max-w-[1440px] mx-auto px-grid-margin">
          <div className="flex justify-between items-end mb-stack-lg border-b border-primary pb-stack-sm">
            <h2 className="font-display-lg text-headline-md uppercase tracking-tight text-primary font-bold">
              VERIFIED_LOGS
            </h2>
            <div className="font-ui-label text-ui-label text-on-surface-variant mb-1 font-bold">
              TOTAL_COUNT: {hasMore ? '248' : '252'}
            </div>
          </div>
          <div className="flex flex-col divide-y divide-primary">
            {logs.map((log, index) => (
              <div 
                key={`${log.date}-${index}`}
                className="py-stack-md grid grid-cols-1 md:grid-cols-12 gap-stack-md items-center group cursor-crosshair hover:bg-surface-container/30 transition-colors"
              >
                <div className="md:col-span-2 font-code-sm text-on-surface-variant font-bold">{log.date}</div>
                <div className="md:col-span-2 font-ui-label font-bold text-primary">{log.tag}</div>
                <div className="md:col-span-6 font-body-md text-primary font-medium">{log.msg}</div>
                <div className="md:col-span-2 text-right">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={`material-symbols-outlined ${i < log.stars ? 'text-syntax-lime' : 'text-primary'}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="mt-stack-lg flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="font-ui-label text-ui-label border border-primary px-8 py-3 hover:bg-primary hover:text-on-primary transition-all font-bold"
              >
                LOAD_MORE_RECORDS.EXE
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
