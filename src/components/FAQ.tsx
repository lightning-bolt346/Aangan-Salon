import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Which areas do you serve?", a: "We currently provide salon at home services across Noida, Ghaziabad, Indirapuram, and major parts of Delhi NCR. Please share your sector/society name on WhatsApp to confirm availability." },
    { q: "Are your beauticians female?", a: "Yes, absolutely. All our trained beauty professionals are female, ensuring a safe and comfortable environment for our women clients." },
    { q: "Can I book same-day?", a: "Yes, we often accommodate same-day bookings depending on slot availability in your specific area. We recommend booking a few hours in advance." },
    { q: "Are products and tools hygienic?", a: "Hygiene is our top priority. Our professionals carry clean tools, sanitize their setup, and use fresh or disposable essentials where required." },
    { q: "How is pricing confirmed?", a: "Since pricing can vary based on the specific product brand (e.g., Rica vs. Normal wax) and your precise location, our team confirms the final pricing with you on WhatsApp before confirming the appointment." },
    { q: "Can I cancel or reschedule?", a: "Yes, you can easily reschedule or cancel by messaging our support number on WhatsApp. We request you to notify us at least a few hours prior to the slot." },
    { q: "Do you provide bridal makeup?", a: "While we specialize in party makeup and pre-bridal grooming packages at home, please contact us directly to discuss extensive bridal makeup requirements." },
    { q: "How do I contact support?", a: "You can reach us directly anytime via WhatsApp or Call using the buttons on our website, or email us at hello@aangansalon.com." }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl border border-sand hover:border-champagne/50 transition-colors overflow-hidden shadow-sm">
          <button 
            className="w-full px-8 py-5 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <span className="font-serif italic text-xl text-deep-plum pr-4">{faq.q}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${openIdx === idx ? 'bg-champagne border-champagne text-white' : 'bg-transparent border-sand text-champagne'}`}>
              <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", openIdx === idx ? "rotate-180" : "")} />
            </div>
          </button>
          
          <div className={cn("px-8 overflow-hidden transition-all duration-300", openIdx === idx ? "max-h-96 pb-6 pt-2 opacity-100" : "max-h-0 opacity-0")}>
            <p className="text-charcoal/80 text-[13px] leading-relaxed font-light">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
