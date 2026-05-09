import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Aangan Salon"
        description="Learn about Aangan Salon. We bring the safety, hygiene, and luxury of a premium salon to the comfort of your Indian home in NCR."
        canonical="/about"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-warm-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-deep-plum mb-6">Our Story</h1>
          <p className="text-xl text-charcoal/80 mb-8 italic font-serif">
            "Aangan" means the warm, safe, familiar space of an Indian home.
          </p>
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-charcoal/80">
            <p className="mb-6">
              Aangan Salon was born out of a simple observation: modern women in NCR—whether working professionals, homemakers, or new mothers—often struggle to find the time to visit a premium salon. And when they do, traffic and waiting times ruin the relaxing experience.
            </p>
            <p className="mb-6">
              We realized that the safest, most comfortable place for self-care is your own home—your <em>Aangan</em>.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-sand/30 p-8 rounded-[2.5rem] rounded-tl-2xl">
                <Heart className="w-8 h-8 text-muted-maroon mb-4" />
                <h3 className="font-serif text-2xl text-deep-plum mb-3">Our Mission</h3>
                <p className="text-sm">
                  To provide premium, trustworthy, and hygienic salon services at home that feel completely relatable and accessible for Indian families.
                </p>
              </div>
              <div className="bg-sand/30 p-8 rounded-[2.5rem] rounded-tr-2xl">
                <ShieldCheck className="w-8 h-8 text-muted-maroon mb-4" />
                <h3 className="font-serif text-2xl text-deep-plum mb-3">Safety First</h3>
                <p className="text-sm">
                  We exclusively employ trained female beauty professionals. Every service partner follows a strict hygiene checklist, carrying sanitized tools and fresh sheets.
                </p>
              </div>
            </div>

            <p className="mb-6">
              From a quick eyebrow threading to a full body Rica wax, from detan facials to pre-bridal grooming packages—we bring the complete salon setup to you. 
              No hidden charges, no fake "live availability" tricks. Just real people, transparent communication via WhatsApp, and reliable service.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
