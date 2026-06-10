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
            Specialized infrastructure engineering for secure and scalable digital systems.
          </p>
        </div>

        {/* Solutions & Info Links */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-ui-label text-ui-label uppercase mb-stack-md text-primary dark:text-on-primary font-bold">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/contact" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Contact
              </Link>
            </li>
            <li>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-ui-label text-ui-label uppercase mb-stack-md text-primary dark:text-on-primary font-bold">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <a 
                href="#terms" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Terms
              </a>
            </li>
            <li>
              <a 
                href="#privacy" 
                className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container hover:text-syntax-purple transition-colors block hover:translate-x-1 transition-transform"
              >
                Privacy
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
          <div className="font-code-sm text-code-sm text-on-surface-variant dark:text-on-primary-container mt-stack-lg text-left md:text-right">
            <div>© 2026 HackStone Technologies</div>
            <div>Built in India</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
