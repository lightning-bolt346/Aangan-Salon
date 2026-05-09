import { SEO } from '../SEO';
import { Section } from './Section';
import { TrustBadges } from '../TrustBadges';
import { ServiceCards } from '../ServiceCards';
import { BookingForm } from '../BookingForm';
import { HowItWorks } from '../HowItWorks';
import { FAQ } from '../FAQ';

interface LocationProps {
  city: string;
  title: string;
  description: string;
  canonical: string;
  h1: string;
}

export function LocationTemplate({ city, title, description, canonical, h1 }: LocationProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": `Aangan Salon ${city}`,
    "image": "https://aangansalon.com/logo.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "telephone": "+91XXXXXXXXXX",
  };

  return (
    <>
      <SEO title={title} description={description} canonical={canonical} schema={schema} />

      <Section className="pt-10 md:pt-20 pb-16 bg-gradient-to-b from-warm-ivory to-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: "radial-gradient(#7A3045 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-soft-rose text-deep-plum text-[10px] font-bold uppercase tracking-[0.15em] mb-6 shadow-sm">
            “Salon care, ghar ke comfort mein.”
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deep-plum mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience premium, hygienic, and trusted salon services right at your home in {city} by our trained female professionals.
          </p>
          <TrustBadges />
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif text-deep-plum mb-6">Book Your Slot in {city}</h2>
            <p className="text-charcoal/80 mb-8">
              Fill out the form below to request a booking at your home. 
              Our team will verify availability in your specific area in {city} and confirm quickly on WhatsApp.
            </p>
            <HowItWorks />
          </div>
          <div>
            <BookingForm defaultArea={city === 'Delhi NCR' || city.includes('Beautician') ? 'Other' : city} />
          </div>
        </div>
      </Section>

      <Section className="bg-warm-ivory" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Top Services in {city}</h2>
        </div>
        <ServiceCards />
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </Section>
    </>
  );
}
