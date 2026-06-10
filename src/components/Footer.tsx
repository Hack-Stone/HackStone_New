import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary dark:border-outline mt-stack-lg bg-surface dark:bg-primary transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md px-grid-margin py-section-padding max-w-[1440px] mx-auto">
        {/* Info Column */}
        <div className="md:col-span-4 space-y-stack-md text-left">
          <div className="font-display-lg text-headline-md text-primary dark:text-on-primary uppercase tracking-tighter">
            HackStone
          </div>
          <p className="font-body-md text-on-surface-variant dark:text-on-primary-container max-w-xs">
            Specialized infrastructure engineering for the modern decentralized enterprise.
          </p>
        </div>

        {/* Solutions Links */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-ui-label text-ui-label uppercase mb-stack-md text-primary dark:text-on-primary font-bold">
            Solutions
          </h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/services" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Security Audit
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Custom ERP
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Infrastructure
              </Link>
            </li>
          </ul>
        </div>

        {/* Compliance / Resources Links */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-ui-label text-ui-label uppercase mb-stack-md text-primary dark:text-on-primary font-bold">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/testimonials" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                System Status
              </Link>
            </li>
            <li>
              <a 
                href="#privacy" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Icons & Copyright */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between">
          <div className="flex gap-stack-md">
            <span className="material-symbols-outlined text-primary dark:text-on-primary hover:opacity-85 cursor-pointer">terminal</span>
            <span className="material-symbols-outlined text-primary dark:text-on-primary hover:opacity-85 cursor-pointer">hub</span>
            <span className="material-symbols-outlined text-primary dark:text-on-primary hover:opacity-85 cursor-pointer">shield</span>
          </div>
          <div className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container mt-stack-lg">
            © {new Date().getFullYear()} HACKSTONE. TERMINAL_STATUS: SECURE
          </div>
        </div>
      </div>
    </footer>
  );
}
