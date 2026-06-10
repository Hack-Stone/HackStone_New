import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SHIPCORE_LAYERS = [

  {
    name: "01. LOGISTICS_MGMT",
    uptime: "99.98%",
    status: "FLEET_ACTIVE",
    width1: "w-full",
    width2: "w-2/3",
    alerts: ["bg-syntax-lime", "bg-surface-variant", "bg-syntax-purple"]
  },
  {
    name: "02. OPS_DASHBOARD",
    uptime: "99.99%",
    status: "OPS_MONITORING",
    width1: "w-5/6",
    width2: "w-1/2",
    alerts: ["bg-syntax-purple", "bg-error", "bg-syntax-lime"]
  },
  {
    name: "03. ANALYTICS_ENGINE",
    uptime: "99.95%",
    status: "DATA_SYNTHESIS",
    width1: "w-3/4",
    width2: "w-4/5",
    alerts: ["bg-syntax-lime", "bg-syntax-purple", "bg-syntax-lime"]
  },
  {
    name: "04. WORKFLOW_AUTO",
    uptime: "100.00%",
    status: "AUTO_CALIBRATED",
    width1: "w-full",
    width2: "w-full",
    alerts: ["bg-syntax-lime", "bg-syntax-lime", "bg-syntax-purple"]
  }
];

export default function Products() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    document.title = "Products | HackStone";
  }, []);

  return (

    <div className="bg-background text-primary font-body-md selection:bg-syntax-lime selection:text-primary">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-primary min-h-[614px] text-left">
        <div className="md:col-span-7 p-grid-margin flex flex-col justify-center border-r border-primary">
          <span className="font-ui-label text-ui-label text-on-surface-variant mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary"></span> TERMINAL_STATUS: ACTIVE
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase leading-none mb-stack-md text-primary">
            PRODUCTS: <br />BUILT FOR OPERATIONS
          </h1>
          <p className="font-body-md text-on-surface-variant max-w-xl mb-stack-lg">
            High-precision engineering for the backbone of your enterprise. From custom ERP frameworks to secure infrastructure monitoring, our tools are forged for technical rigor and absolute transparency.
          </p>
          <div className="flex gap-4">
            <a 
              href="#ecosystem" 
              className="bg-primary text-on-primary px-6 py-3 font-ui-label text-ui-label brutalist-border hover:bg-syntax-lime hover:text-primary transition-all text-center"
            >
              EXPLORE_ALL
            </a>
            <Link 
              to="/contact" 
              className="px-6 py-3 font-ui-label text-ui-label brutalist-border hover:bg-primary hover:text-white transition-all text-center bg-transparent text-primary"
            >
              VIEW_RELEASES
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 relative bg-surface-container overflow-hidden dashed-bg flex items-center justify-center p-8">
          <div className="relative w-full h-full brutalist-border bg-white p-4 shadow-[8px_8px_0px_0px_rgba(4,5,5,1)]">
            <img 
              className="w-full h-full object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMpbmUlbpzseFEEy-gnuX4C8zQWMBb9nGHReLmxESZrtsrl7NyRFJ8swRujOcAkdG6-A9mVDitmxEouvJNPa-hewDQ4s90UgPTNQgepw0p7m2k3hZIJnRnpkodgQQ-rNHMStefFUYa0B3Ycypjo3DIvh8Vi1owpsFfgOUlw29BZnjX4l0G-_T1SX0TVJPI_rmDq1Vp4IHEgo625C8JY4xXG74nnuLuatnhq6raiYjO26ZNClHz93ET_78eIwi1MkW0mvBaPRCcN9h"
              alt="Generative Technical Art"
            />
            <div className="absolute bottom-6 right-6 bg-primary text-on-primary font-ui-label text-[10px] px-2 py-1">
              FIG_01: INFRASTRUCTURE_NODES
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Grid */}
      <section id="ecosystem" className="p-grid-margin border-b border-primary text-left">
        <div className="flex justify-between items-end mb-stack-lg">
          <div>
            <h2 className="font-headline-md text-headline-md uppercase text-primary font-bold">Core Ecosystem</h2>
            <p className="font-ui-label text-ui-label text-on-surface-variant">SELECT_MODULE</p>
          </div>
          <div className="font-code-sm text-code-sm text-outline">01 / 04</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter bg-primary border border-primary">
          {/* ShipCore Flagship */}
          <div className="bg-background md:col-span-2 p-stack-lg flex flex-col justify-between group hover:bg-surface-container-high transition-colors">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-display-lg text-display-lg-mobile uppercase group-hover:text-syntax-purple transition-colors text-primary">
                  ShipCore ERP
                </h3>
                <span className="bg-syntax-lime text-primary font-ui-label text-[10px] px-2 py-1 brutalist-border font-bold">
                  FLAGSHIP
                </span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md mb-8">
                ShipCore ERP is designed to help logistics and operations teams manage workflows, assets, reporting, and enterprise processes through a secure and scalable platform.
              </p>
              {/* Product Metadata Area */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-primary pt-6 mt-6 mb-8 text-left">
                <div>
                  <div className="font-ui-label text-[10px] text-on-surface-variant uppercase font-bold mb-1">FEATURES</div>
                  <div className="font-code-sm text-xs text-primary font-bold">Fleet, Warehouse, Analytics, Automation</div>
                </div>
                <div>
                  <div className="font-ui-label text-[10px] text-on-surface-variant uppercase font-bold mb-1">USE CASES</div>
                  <div className="font-code-sm text-xs text-primary font-bold">Logistics, Manufacturing, Infrastructure</div>
                </div>
                <div>
                  <div className="font-ui-label text-[10px] text-on-surface-variant uppercase font-bold mb-1">INTEGRATIONS</div>
                  <div className="font-code-sm text-xs text-primary font-bold">APIs, Webhooks, Legacy ERPs</div>
                </div>
                <div>
                  <div className="font-ui-label text-[10px] text-on-surface-variant uppercase font-bold mb-1">DEPLOYMENT OPTIONS</div>
                  <div className="font-code-sm text-xs text-primary font-bold">Cloud, Hybrid, On-Premise</div>
                </div>
              </div>
            </div>
            <div className="flex gap-stack-md">
              <Link 
                to="/contact" 
                className="bg-primary text-on-primary px-4 py-2 font-ui-label text-ui-label brutalist-border hover:bg-syntax-purple text-center"
              >
                BOOK DEMO
              </Link>
              <a 
                href="#deepdive" 
                className="px-4 py-2 font-ui-label text-ui-label brutalist-border hover:bg-primary hover:text-white transition-all text-center bg-transparent text-primary"
              >
                VIEW PRODUCT
              </a>
            </div>
          </div>
          {/* VaultGate */}
          <div className="bg-background p-stack-lg flex flex-col justify-between hover:bg-surface-container-high transition-colors">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-headline-md uppercase text-primary font-bold">VaultGate</h3>
                <span className="material-symbols-outlined text-outline">lock</span>
              </div>
              <p className="font-body-md text-on-surface-variant mb-8">
                Identity access management with zero-trust protocols and biometric verification at the edge.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="font-ui-label text-ui-label border-b border-primary w-fit pb-1 hover:text-syntax-purple text-primary"
            >
              LEARN_MORE
            </Link>
          </div>
        </div>
      </section>

      {/* ShipCore Deep Dive */}
      <section id="deepdive" className="grid grid-cols-1 md:grid-cols-12 border-b border-primary text-left">
        <div className="md:col-span-4 p-grid-margin border-r border-primary bg-surface-container-lowest">
          <h2 className="font-headline-md text-headline-md uppercase mb-stack-md text-primary font-bold">
            ShipCore: <br />Functional Layers
          </h2>
          <div className="space-y-gutter bg-primary border border-primary">
            {SHIPCORE_LAYERS.map((layer, idx) => (
              <div
                key={layer.name}
                onClick={() => setActiveLayer(idx)}
                className={`p-4 flex items-center justify-between group cursor-pointer transition-colors ${
                  activeLayer === idx ? 'bg-syntax-lime text-primary' : 'bg-background hover:bg-syntax-lime text-primary'
                }`}
              >
                <span className="font-ui-label text-ui-label font-bold">{layer.name}</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-8 p-grid-margin relative overflow-hidden flex items-center justify-center bg-white">
          <div className="w-full max-w-2xl brutalist-border bg-background aspect-video flex flex-col relative">
            <div className="h-8 border-b border-primary flex items-center px-4 gap-2 bg-surface-container text-primary">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-outline"></div>
              <div className="w-2 h-2 rounded-full bg-outline"></div>
              <span className="ml-4 font-ui-label text-[10px] font-bold">
                SHIPCORE_DASHBOARD_PREVIEW_V2.04 // LAYER_0{activeLayer + 1}
              </span>
            </div>
            <div className="flex-grow p-4 grid grid-cols-2 gap-4">
              <div className="brutalist-border p-3 flex flex-col justify-between">
                <span className="font-ui-label text-[10px] text-outline font-bold">FLEET_STATUS</span>
                <div className="h-24 w-full bg-surface-container flex items-center justify-center">
                  <div className="w-full px-4">
                    <div className="h-1 bg-outline w-full mb-1"></div>
                    <div className={`h-1 bg-primary ${SHIPCORE_LAYERS[activeLayer].width2}`}></div>
                  </div>
                </div>
              </div>
              <div className="brutalist-border p-3 flex flex-col justify-between text-left">
                <span className="font-ui-label text-[10px] text-outline font-bold">UPTIME_METRIC</span>
                <div className="text-headline-md font-display-lg text-primary font-bold">
                  {SHIPCORE_LAYERS[activeLayer].uptime}
                </div>
              </div>
              <div className="brutalist-border md:col-span-2 p-3 bg-primary text-on-primary">
                <span className="font-ui-label text-[10px] opacity-60 font-bold block text-left">
                  ACTIVE_ALERTS // {SHIPCORE_LAYERS[activeLayer].status}
                </span>
                <div className="flex gap-4 mt-2">
                  <div className={`h-2 w-12 ${SHIPCORE_LAYERS[activeLayer].alerts[0]}`}></div>
                  <div className={`h-2 w-24 ${SHIPCORE_LAYERS[activeLayer].alerts[1]}`}></div>
                  <div className={`h-2 w-8 ${SHIPCORE_LAYERS[activeLayer].alerts[2]}`}></div>
                </div>
              </div>
            </div>
            {/* Abstract overlay for style */}
            <div className="absolute -right-12 -top-12 w-48 h-48 border border-primary rotate-12 opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="p-grid-margin border-b border-primary bg-surface-container-low text-left">
        <h2 className="font-headline-md text-headline-md uppercase mb-stack-lg border-l-4 border-primary pl-4 text-primary font-bold">
          System Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md">
          <div className="brutalist-border p-6 bg-background hover:translate-y-[-4px] transition-transform">
            <span className="material-symbols-outlined text-primary mb-4">dashboard_customize</span>
            <h4 className="font-ui-label text-ui-label mb-2 text-primary font-bold">Fleet Management</h4>
            <p className="font-code-sm text-on-surface-variant">Highly modular UI components for bespoke operational views.</p>
          </div>
          <div className="brutalist-border p-6 bg-background hover:translate-y-[-4px] transition-transform">
            <span className="material-symbols-outlined text-primary mb-4">location_on</span>
            <h4 className="font-ui-label text-ui-label mb-2 text-primary font-bold">Warehouse Operations</h4>
            <p className="font-code-sm text-on-surface-variant">Sub-second latency for global asset monitoring across all regions.</p>
          </div>
          <div className="brutalist-border p-6 bg-background hover:translate-y-[-4px] transition-transform">
            <span className="material-symbols-outlined text-primary mb-4">assessment</span>
            <h4 className="font-ui-label text-ui-label mb-2 text-primary font-bold">Analytics</h4>
            <p className="font-code-sm text-on-surface-variant">Daily PDF/JSON summaries of supply chain health and KPI metrics.</p>
          </div>
          <div className="brutalist-border p-6 bg-background hover:translate-y-[-4px] transition-transform">
            <span className="material-symbols-outlined text-primary mb-4">lan</span>
            <h4 className="font-ui-label text-ui-label mb-2 text-primary font-bold">Workflow Automation</h4>
            <p className="font-code-sm text-on-surface-variant">Containerized microservices designed for elastic load handling.</p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="p-section-padding text-center relative overflow-hidden dashed-bg">
        <div className="relative z-10 max-w-2xl mx-auto bg-background brutalist-border p-stack-lg shadow-[12px_12px_0px_0px_rgba(4,5,5,1)]">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md uppercase mb-stack-md text-primary font-bold">
            Ready to calibrate your operations?
          </h2>
          <p className="font-body-md text-on-surface-variant mb-stack-lg">
            Schedule a live demonstration of ShipCore ERP with our engineering leads. No sales fluff—just pure architecture and operational flow.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-primary text-on-primary px-12 py-4 font-ui-label text-headline-md brutalist-border hover:bg-syntax-lime hover:text-primary transition-all text-center inline-block"
            >
              REQUEST_DEMO
            </Link>
            <Link 
              to="/contact" 
              className="px-12 py-4 font-ui-label text-headline-md brutalist-border hover:bg-primary hover:text-white transition-all text-center bg-transparent text-primary"
            >
              VIEW_API_DOCS
            </Link>
          </div>
        </div>
        {/* Decorative Brutalist Elements */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
          <div className="text-[120px] font-display-lg leading-none select-none text-primary">HACK</div>
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
          <div className="text-[120px] font-display-lg leading-none select-none text-primary">STONE</div>
        </div>
      </section>
    </div>
  );
}
