import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20salon-at-home%20service."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:bg-[#20BE5A] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
