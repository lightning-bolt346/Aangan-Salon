import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { PackageCards } from '../components/PackageCards';

export default function Packages() {
  return (
    <>
      <SEO 
        title="Home Salon Packages & Offers | Aangan Salon"
        description="Book complete grooming, waxing, and party makeup packages at home in NCR. Affordable and curated for your needs."
        canonical="/packages"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-warm-ivory">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-deep-plum mb-6">Curated Packages</h1>
          <p className="text-lg text-charcoal/80 mb-8">
            Bundle your favorite services together for a complete glow-up at better prices. 
            Perfect for your monthly grooming routine or a special occasion.
          </p>
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <PackageCards />
      </Section>
    </>
  );
}
