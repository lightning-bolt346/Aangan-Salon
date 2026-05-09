import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { ServiceCards } from '../components/ServiceCards';
import { Button } from '../components/ui/Button';

export default function Services() {
  return (
    <>
      <SEO 
        title="Beauty & Salon Services at Home | Aangan Salon"
        description="Explore our range of home salon services including facial, waxing, threading, manicure, pedicure, and party makeup in Noida & NCR."
        canonical="/services"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-warm-ivory">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-deep-plum mb-6">Our Services</h1>
          <p className="text-lg text-charcoal/80 mb-8">
            Experience premium, hygienic, and professional salon care without stepping out of your home. Select a service to request a booking.
          </p>
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <ServiceCards />
        
        <div className="mt-16 bg-sand/30 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-deep-plum mb-4">Looking for something specific?</h2>
          <p className="text-charcoal/80 mb-8">
            Tell us exactly what you need on WhatsApp and we'll customize a service session for you.
          </p>
          <Button href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20know%20more%20about%20a%20specific%20service.">
            Chat with us
          </Button>
        </div>
      </Section>
    </>
  );
}
