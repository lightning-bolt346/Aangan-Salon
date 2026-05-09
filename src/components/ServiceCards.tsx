import { Link } from 'react-router-dom';
import { Sparkles, Scissors, HandMetal, Heart, Crown, PartyPopper } from 'lucide-react';
import { Button } from './ui/Button';

export function ServiceCards() {
  const services = [
    { icon: <Sparkles className="w-8 h-8 text-champagne" />, title: 'Facial & Cleanup', desc: 'Hydrating, brightening, and detan facials.' },
    { icon: <HandMetal className="w-8 h-8 text-champagne" />, title: 'Waxing', desc: 'Painless full body waxing with premium products.' },
    { icon: <Scissors className="w-8 h-8 text-champagne" />, title: 'Threading', desc: 'Precise threading for eyebrows and face.' },
    { icon: <Heart className="w-8 h-8 text-champagne" />, title: 'Manicure & Pedicure', desc: 'Relaxing spa mani-pedi for beautiful hands & feet.' },
    { icon: <Crown className="w-8 h-8 text-champagne" />, title: 'Hair Care', desc: 'Head massage, spa, and basic grooming.' },
    { icon: <PartyPopper className="w-8 h-8 text-champagne" />, title: 'Party Makeup', desc: 'Elegant looks for your special occasions.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((svc, idx) => (
        <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-t-[3rem] rounded-b-[1.5rem] p-8 md:p-10 border border-sand shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-soft-rose/10 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-champagne/10 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
          
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 border border-sand shadow-sm group-hover:scale-110 transition-transform duration-300">
            {svc.icon}
          </div>
          
          <h3 className="font-serif italic text-2xl text-deep-plum mb-3 relative z-10 group-hover:text-champagne transition-colors">{svc.title}</h3>
          <p className="text-charcoal/80 text-[13px] leading-relaxed mb-8 relative z-10 font-light flex-1">{svc.desc}</p>
          
          <Button 
            variant="outline" 
            size="sm" 
            href={`/contact?service=${encodeURIComponent(svc.title)}`}
            className="w-full max-w-[200px] relative z-10 bg-white"
          >
            Book This Service
          </Button>
        </div>
      ))}
    </div>
  );
}
