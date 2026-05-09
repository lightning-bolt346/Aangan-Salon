import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-deep-plum text-warm-ivory pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          <div>
            <h3 className="font-serif text-3xl mb-4 text-champagne">Aangan Salon</h3>
            <p className="text-warm-ivory/80 mb-6 italic">Salon care, ghar ke comfort mein.</p>
            <div className="space-y-2 text-sm text-warm-ivory/90">
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>WhatsApp: +91 XXXXX XXXXX</p>
              <p>Email: hello@aangansalon.com</p>
              <p>Instagram: @AanganSalon</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-champagne">Service Areas</h4>
            <ul className="space-y-3 text-sm text-warm-ivory/90">
              <li><Link to="/salon-at-home-in-noida" className="hover:text-soft-rose transition-colors">Noida</Link></li>
              <li><Link to="/salon-at-home-in-ghaziabad" className="hover:text-soft-rose transition-colors">Ghaziabad</Link></li>
              <li><Link to="/salon-at-home-in-indirapuram" className="hover:text-soft-rose transition-colors">Indirapuram</Link></li>
              <li><Link to="/home-salon-services-in-delhi-ncr" className="hover:text-soft-rose transition-colors">Delhi NCR</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-champagne">Quick Links</h4>
            <ul className="space-y-3 text-sm text-warm-ivory/90">
              <li><Link to="/" className="hover:text-soft-rose transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-soft-rose transition-colors">Services</Link></li>
              <li><Link to="/packages" className="hover:text-soft-rose transition-colors">Packages</Link></li>
              <li><Link to="/about" className="hover:text-soft-rose transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-soft-rose transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-champagne">Legal</h4>
            <ul className="space-y-3 text-sm text-warm-ivory/90">
              <li><Link to="/privacy-policy" className="hover:text-soft-rose transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-soft-rose transition-colors">Terms & Cancellation</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8 border-t border-warm-ivory/20 mb-8">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-champagne rounded-full"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-white">Trained Professionals</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-champagne rounded-full"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-white">Hygienic Kits</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-champagne rounded-full"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-white">Noida & Ghaziabad Only</span>
          </div>
        </div>
        
        <div className="pt-8 border-t border-warm-ivory/20 text-center text-sm text-warm-ivory/60">
          <p>&copy; {new Date().getFullYear()} Aangan Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
