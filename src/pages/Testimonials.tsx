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
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">INCIDENT_RESPONSE</div>
            <div className="font-display-lg text-display-lg font-extrabold">&lt;1 Hour</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Incident response time for critical production environment alerts.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">SYSTEM_AVAILABILITY</div>
            <div className="font-display-lg text-display-lg font-extrabold">99.9%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Service availability across all client production infrastructures.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">DEPLOYMENT_EFFICIENCY</div>
            <div className="font-display-lg text-display-lg font-extrabold">40%</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Increase in deployment velocity and integration testing cycle speed.</div>
          </div>
          <div className="p-stack-lg group hover:bg-syntax-lime hover:text-primary transition-colors cursor-default">
            <div className="font-ui-label text-ui-label mb-stack-sm font-bold">INFRASTRUCTURE_COMPLEXITY</div>
            <div className="font-display-lg text-display-lg font-extrabold">REDUCED</div>
            <div className="font-code-sm text-code-sm opacity-70 font-medium">Elimination of redundant server nodes and network configurations.</div>
          </div>
        </div>
      </section>

      {/* Client Cards Bento Grid */}
      <section className="py-section-padding max-w-[1440px] mx-auto px-grid-margin text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-primary border border-primary overflow-hidden">
          {/* Case Study #01 */}
          <div className="md:col-span-8 bg-background p-stack-lg flex flex-col justify-between border-b md:border-b-0">
            <div>
              <span className="material-symbols-outlined text-[48px] text-syntax-lime mb-stack-md">format_quote</span>
              <h3 className="font-display-lg text-headline-md md:text-[36px] italic leading-tight mb-stack-lg text-primary">
                "HackStone improved our operational workflow and deployment process."
              </h3>
            </div>
            <div className="flex items-center gap-stack-md border-t border-primary pt-stack-md">
              <div className="w-16 h-16 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-3xl">local_shipping</span>
              </div>
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">CASE STUDY #01</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">Client — Logistics</p>
              </div>
            </div>
          </div>

          {/* Case Study #02 */}
          <div className="md:col-span-4 bg-surface-container p-stack-lg flex flex-col justify-between border-t md:border-t-0 md:border-l border-primary">
            <div>
              <span className="material-symbols-outlined text-[48px] text-syntax-purple mb-stack-md">format_quote</span>
              <p className="font-body-md text-on-surface mb-stack-lg text-primary italic font-medium">
                "Migration execution was smooth with minimal operational interruption."
              </p>
            </div>
            <div className="flex items-center gap-stack-md border-t border-primary pt-stack-md">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-xl">precision_manufacturing</span>
              </div>
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">CASE STUDY #02</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">Client — Manufacturing</p>
              </div>
            </div>
          </div>

          {/* Case Study #03 */}
          <div className="md:col-span-12 bg-background p-stack-lg flex flex-col justify-between border-t border-primary">
            <div>
              <span className="material-symbols-outlined text-[48px] text-syntax-lime mb-stack-md">format_quote</span>
              <h3 className="font-display-lg text-headline-md md:text-[36px] italic leading-tight mb-stack-lg text-primary">
                "HackStone redefined our ERP structure from the ground up. Their Technical Brutalist approach isn't just aesthetic; it’s a functional philosophy that eliminates bloat."
              </h3>
            </div>
            <div className="flex items-center gap-stack-md border-t border-primary pt-stack-md">
              <div className="w-16 h-16 bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-3xl">domain</span>
              </div>
              <div>
                <p className="font-ui-label text-ui-label font-bold text-primary">CASE STUDY #03</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant font-bold">Client — Infrastructure</p>
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
