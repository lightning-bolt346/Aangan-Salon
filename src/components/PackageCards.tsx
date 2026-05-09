import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export function PackageCards() {
  const packages = [
    { 
      title: 'Quick Glow Package', 
      price: 'Starting from ₹999', 
      features: ['Basic Facial / Face Cleanup', 'Eyebrow Threading', 'Upper Lip Threading'],
      isPopular: false
    },
    { 
      title: 'Monthly Grooming Package', 
      price: 'Starting from ₹1,499', 
      features: ['Full Arms Waxing', 'Half Legs Waxing', 'Eyebrow & Upper Lip', 'Basic Pedicure'],
      isPopular: true
    },
    { 
      title: 'Wax & Glow Package', 
      price: 'Starting from ₹1,999', 
      features: ['Full Body Waxing (Rica/Chocolate)', 'O3+ / Premium Facial', 'Threading'],
      isPopular: false
    },
    { 
      title: 'Party Ready Package', 
      price: 'Starting from ₹2,499', 
      features: ['Light Party Makeup', 'Hair Styling', 'Saree Draping', 'Nail Paint Application'],
      isPopular: false
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className={`rounded-t-[3rem] rounded-b-2xl p-8 border flex flex-col transition-all duration-300 ${pkg.isPopular ? 'border-champagne bg-gradient-to-b from-warm-ivory to-white shadow-xl relative scale-100 lg:scale-105 z-10' : 'border-sand bg-white/60 backdrop-blur-sm shadow-md hover:shadow-lg hover:-translate-y-1'}`}>
            {pkg.isPopular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne text-deep-plum text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-sm">
                Most Popular
              </span>
            )}
            
            <div className="text-center mb-8 mt-2">
              <h3 className="font-serif italic text-2xl text-deep-plum mb-3">{pkg.title}</h3>
              <p className="text-muted-maroon font-bold text-sm tracking-wide">{pkg.price}</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-charcoal/80">
                  <Check className="w-5 h-5 text-champagne shrink-0" />
                  <span className="pt-0.5 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant={pkg.isPopular ? 'primary' : 'outline'} 
              className={`w-full ${!pkg.isPopular ? 'bg-white' : ''}`}
              href={`/contact?service=Package&specificService=${encodeURIComponent(pkg.title)}`}
            >
              Book Package
            </Button>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-charcoal/60 mt-8 italic">
        * Final pricing is confirmed on WhatsApp based on selected services, product variants, and area.
      </p>
    </>
  );
}
