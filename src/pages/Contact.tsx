import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { BookingForm } from '../components/BookingForm';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultService = searchParams.get('service') || '';

  return (
    <>
      <SEO 
        title="Contact & Book Appointment | Aangan Salon"
        description="Book your salon at home service with Aangan Salon. Fill out the form or WhatsApp us for instant confirmation in Noida, Ghaziabad and NCR."
        canonical="/contact"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-warm-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-deep-plum mb-6">Book an Appointment</h1>
          <p className="text-lg text-charcoal/80 mb-8">
            Tell us where and when you need us. We'll check availability and confirm your slot instantly on WhatsApp.
          </p>
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          
          <div className="md:col-span-1 space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-deep-plum mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon" className="flex items-start gap-4 group">
                  <div className="bg-white p-4 rounded-full border border-sand shadow-sm group-hover:border-champagne group-hover:shadow-md transition-all">
                    <MessageCircle className="w-6 h-6 text-champagne" />
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-lg text-deep-plum mb-1">WhatsApp</p>
                    <p className="text-sm text-charcoal/70 tracking-wide">+91 XXXXX XXXXX</p>
                  </div>
                </a>

                <a href="tel:+91XXXXXXXXXX" className="flex items-start gap-4 group">
                  <div className="bg-white p-4 rounded-full border border-sand shadow-sm group-hover:border-champagne group-hover:shadow-md transition-all">
                    <Phone className="w-6 h-6 text-champagne" />
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-lg text-deep-plum mb-1">Call Us</p>
                    <p className="text-sm text-charcoal/70 tracking-wide">+91 XXXXX XXXXX</p>
                  </div>
                </a>

                <a href="mailto:hello@aangansalon.com" className="flex items-start gap-4 group">
                  <div className="bg-white p-4 rounded-full border border-sand shadow-sm group-hover:border-champagne group-hover:shadow-md transition-all">
                    <Mail className="w-6 h-6 text-champagne" />
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-lg text-deep-plum mb-1">Email</p>
                    <p className="text-sm text-charcoal/70">hello@aangansalon.com</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="pt-8 border-t border-sand">
              <h3 className="font-serif text-2xl mb-6 text-deep-plum">Operating Hours</h3>
              <ul className="space-y-4 text-sm font-light text-charcoal/80">
                <li className="flex justify-between items-center bg-white/50 p-4 rounded-2xl border border-sand/50">
                  <span className="font-medium">Monday - Sunday</span> 
                  <span className="font-semibold text-deep-plum tracking-wider">9:00 AM - 7:00 PM</span>
                </li>
                <li className="text-center text-muted-maroon/80 text-[13px] italic pt-2">
                  Appointments require advance booking.
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <BookingForm defaultService={defaultService === 'Package' ? 'Package Booking' : defaultService} />
          </div>

        </div>
      </Section>
    </>
  );
}
