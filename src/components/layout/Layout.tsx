import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ScrollToTop } from './ScrollToTop';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-warm-ivory font-sans relative">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full max-w-[100vw] overflow-x-hidden pt-20">
        {children}
      </main>
      <Footer />
      <MobileBottomBar />
      <FloatingWhatsApp />
    </div>
  );
}
