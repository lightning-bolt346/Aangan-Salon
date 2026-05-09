import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-warm-ivory border-t border-sand shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center h-[72px] px-2 pb-safe">
      <a 
        href="tel:+91XXXXXXXXXX" 
        className="flex-1 flex flex-col items-center justify-center gap-1 text-charcoal hover:text-deep-plum transition-colors"
      >
        <Phone size={20} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
      </a>
      
      <Link 
        to="/contact" 
        className="flex-[2] mx-2 h-12 bg-deep-plum text-warm-ivory rounded-full flex items-center justify-center font-medium shadow-md active:bg-muted-maroon transition-colors"
      >
        Book Now
      </Link>
      
      <a 
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20salon-at-home%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-1 text-[#25D366] transition-colors"
      >
        <MessageCircle size={20} />
        <span className="text-[10px] font-medium uppercase text-charcoal tracking-wider">WhatsApp</span>
      </a>
    </div>
  );
}
