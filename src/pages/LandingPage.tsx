import React from 'react';
import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { ServiceCards } from '../components/ServiceCards';
import { HowItWorks } from '../components/HowItWorks';
import { FAQ, faqs } from '../components/FAQ';
import { BookingForm } from '../components/BookingForm';
import { ShieldPlus, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LandingPageProps {
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  area: string;
  intent: string;
  intro: string;
  relatedPages: { path: string; name: string; }[];
}

export default function LandingPage({ pageContent }: { pageContent: LandingPageProps }) {
  const { metaTitle, metaDescription, h1, area, intro, relatedPages } = pageContent;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Aangan Salon",
    "description": metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area,
      "addressCountry": "IN"
    },
    "telephone": "+91XXXXXXXXXX",
    "priceRange": "₹₹"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title={metaTitle}
        description={metaDescription}
        canonical={pageContent.path}
        schema={[schema, faqSchema]}
      />

      {/* Hero Section */}
      <Section className="pt-20 pb-16 bg-gradient-to-b from-warm-ivory to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deep-plum mb-6 leading-tight">
            {h1}
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 mb-10 leading-relaxed font-light">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" href="#book" className="w-full sm:w-auto">Book Now</Button>
            <Button size="lg" variant="outline" href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20service." className="w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Our Services in {area}</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Explore our range of premium at-home beauty treatments.</p>
        </div>
        <ServiceCards />
        <div className="text-center mt-12">
          <Button variant="secondary" href="/services">View All Services</Button>
        </div>
      </Section>

      {/* Hygiene & Safety Promise */}
      <Section className="bg-sand/30 border-y border-sand/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-6">
              Our Hygiene & Safety Promise
            </h2>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed font-light">
              Your safety is our top priority. We ensure every service is delivered complying with strict hygiene protocols, so you can relax completely.
            </p>
            <ul className="space-y-4">
              {[
                'Sanitized and sterilized tools for every booking.',
                'Disposable kits and fresh towels provided.',
                'Trained & verified female beauty professionals.',
                'Mess-free cleanup post-service.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldPlus className="w-6 h-6 text-champagne shrink-0" />
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-sand shadow-lg flex flex-col items-center text-center">
             <div className="w-20 h-20 bg-champagne/10 rounded-full flex items-center justify-center mb-6">
               <MapPin className="w-10 h-10 text-champagne" />
             </div>
             <h3 className="text-2xl font-serif text-deep-plum mb-4">Area Availability Note</h3>
             <p className="text-charcoal/80 mb-6 font-light">
               We currently serve selected sectors and societies in <strong>{area}</strong>. Please fill out the booking form with your exact location or reach out to us via WhatsApp to confirm service availability in your area.
             </p>
             <Button variant="outline" href="#book" className="w-full">Check Availability</Button>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">How Booking Works</h2>
        </div>
        <HowItWorks />
      </Section>

      {/* Booking Form Layout */}
      <Section className="bg-gradient-to-b from-warm-ivory to-white" id="book">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Book Your Service in {area}</h2>
            <p className="text-charcoal/80 font-light">Fill out the simple form below. No upfront payment required.</p>
          </div>
          <BookingForm defaultArea={area === 'Delhi NCR' ? '' : area} />
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </Section>

      {/* Related Pages & Contact Info */}
      <Section className="bg-sand/30 text-center py-12">
        <h3 className="font-serif text-2xl text-deep-plum mb-6">More Areas & Services</h3>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4 mb-8">
          {relatedPages.map(page => (
            <Link key={page.path} to={page.path} className="text-sm underline decoration-champagne underline-offset-4 hover:text-champagne transition-colors">
              {page.name}
            </Link>
          ))}
        </div>
        <p className="text-charcoal/70">
          Have more questions? <Link to="/contact" className="font-semibold text-deep-plum hover:text-champagne transition-colors">Contact Us</Link>
        </p>
      </Section>
    </>
  );
}
