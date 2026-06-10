import { useEffect, type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      document.body.style.backgroundPositionY = `${-(scrolled * 0.1)}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}

