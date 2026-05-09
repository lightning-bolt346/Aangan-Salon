import { ShieldCheck, CalendarClock, CreditCard, Sparkles } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    { icon: <ShieldCheck className="text-champagne w-8 h-8 md:w-10 md:h-10" />, text: "Trained Female Professionals" },
    { icon: <Sparkles className="text-champagne w-8 h-8 md:w-10 md:h-10" />, text: "Hygienic Kits" },
    { icon: <CreditCard className="text-champagne w-8 h-8 md:w-10 md:h-10" />, text: "Transparent Pricing" },
    { icon: <CalendarClock className="text-champagne w-8 h-8 md:w-10 md:h-10" />, text: "Same-Day Slots in Selected Areas" },
  ];

  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-sand">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {badges.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-full shadow-sm border border-sand/50">
              {badge.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-deep-plum leading-tight max-w-[120px]">
              {badge.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
