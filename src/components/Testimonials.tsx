import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Shruti Sharma",
      role: "Working professional, Noida",
      text: "The beautician arrived exactly on time and brought everything needed. The O3+ facial was incredibly relaxing, and I didn't have to step out of my apartment. Highly recommended!",
      rating: 5
    },
    {
      name: "Pooja Verma",
      role: "Homemaker, Indirapuram",
      text: "I was hesitant about home salons initially, but Aangan Salon's hygiene standards really surprised me. Fresh towels, sanitized tools, and a very polite professional. Will book again.",
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: "Mother, Ghaziabad",
      text: "Being a new mom, going to a salon is impossible. The Wax & Glow package was a lifesaver. Safe, affordable, and extremely convenient right in my living room.",
      rating: 5
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((review, idx) => (
        <div key={idx} className="bg-white/60 backdrop-blur-sm p-10 pt-12 rounded-[2.5rem] border border-sand shadow-lg hover:-translate-y-1 transition-transform duration-300 relative text-center flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md border border-sand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-champagne">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
            ))}
          </div>
          <p className="text-charcoal/80 italic mb-8 leading-relaxed flex-1">"{review.text}"</p>
          <div className="pt-6 border-t border-sand/50">
            <p className="font-serif text-lg text-deep-plum mb-1">{review.name}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-charcoal/50">{review.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
