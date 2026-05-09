import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Areas', href: '/areas' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-ivory/90 backdrop-blur-md border-b border-sand">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-baseline space-x-2">
            <span className="text-3xl font-serif font-bold italic text-deep-plum tracking-tight">Aangan</span>
            <span className="text-sm uppercase tracking-[0.2em] text-muted-maroon font-semibold">Salon</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8 text-xs font-semibold uppercase tracking-[0.1em]">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="hover:text-champagne transition-colors py-2"
                onClick={(e) => {
                  if (link.href.startsWith('/#') && window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById(link.href.substring(2))?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', link.href);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button 
              variant="outline" 
              size="sm"
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20salon-at-home%20service."
              className="bg-white hidden lg:inline-flex"
            >
              WhatsApp
            </Button>
            <Button size="sm" href="/contact">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-deep-plum"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-warm-ivory z-50 overflow-y-auto border-t border-sand">
          <div className="px-6 py-8 flex flex-col min-h-full">
            <div className="space-y-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-2xl font-serif italic text-deep-plum py-4 border-b border-sand/50 last:border-0"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.href.startsWith('/#') && window.location.pathname === '/') {
                      e.preventDefault();
                      setTimeout(() => {
                        document.getElementById(link.href.substring(2))?.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.href);
                      }, 100);
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="pt-8 flex flex-col gap-4 mt-8 pb-10">
              <Button 
                variant="outline" 
                className="w-full bg-white"
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20salon-at-home%20service."
              >
                WhatsApp Now
              </Button>
              <Button href="/contact" className="w-full">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
