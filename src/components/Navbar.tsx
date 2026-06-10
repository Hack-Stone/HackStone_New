import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BrutalistButton from './BrutalistButton';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const activeLinkClass = "font-ui-label text-ui-label text-primary dark:text-syntax-lime border-b border-primary dark:border-syntax-lime pb-1 hover:text-secondary dark:hover:text-syntax-lime transition-colors duration-150";
  const inactiveLinkClass = "font-ui-label text-ui-label text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-syntax-lime transition-colors duration-150";

  return (
    <header className="w-full top-0 sticky border-b border-primary dark:border-outline bg-background dark:bg-primary z-50 transition-colors duration-200">
      <nav className="flex justify-between items-center px-grid-margin h-16 w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-stack-md">
          <Link to="/" className="font-display-lg text-headline-md tracking-tighter text-primary dark:text-on-primary hover:opacity-80 transition-opacity">
            HackStone
          </Link>
          <span className="hidden md:block font-code-sm text-code-sm border border-primary dark:border-outline px-2 py-0.5 text-primary dark:text-on-primary bg-background dark:bg-primary">
            STATUS: SECURE
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <NavLink
            to="/services"
            className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
          >
            Products
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
          >
            Testimonial
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
          >
            About
          </NavLink>
        </div>

        {/* Right side CTA & Icons */}
        <div className="flex items-center gap-stack-md">
          {/* Search Button */}
          <div className="relative flex items-center">
            {searchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="SEARCH_SYSTEMS..."
                className="bg-surface-container-low dark:bg-primary-container border border-primary dark:border-outline px-4 py-1 font-ui-label text-ui-label w-48 focus:outline-none text-primary dark:text-on-primary"
                autoFocus
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="material-symbols-outlined text-primary dark:text-on-primary p-1 hover:opacity-80 transition-opacity"
            >
              search
            </button>
          </div>

          {/* Get Started CTA */}
          <BrutalistButton
            to="/contact"
            variant="nav-cta"
            size="sm"
            className="hidden sm:inline-block"
          >
            Get Started
          </BrutalistButton>
        </div>
      </nav>
    </header>
  );
}
