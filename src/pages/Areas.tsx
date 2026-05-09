import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { Link } from 'react-router-dom';

export default function Areas() {
  const areas = [
    { name: "Noida", link: "/salon-at-home-noida", desc: "Serving Sectors 15-168, Noida Extension, and major societies." },
    { name: "Ghaziabad", link: "/salon-at-home-ghaziabad", desc: "Available in Raj Nagar, Kavi Nagar, Vaishali, Vasundhara, and more." },
    { name: "Indirapuram", link: "/salon-at-home-indirapuram", desc: "All khand/societies available for prompt service." },
    { name: "Delhi NCR", link: "/home-salon-delhi-ncr", desc: "Select areas in East and South Delhi. Message us to check." }
  ];

  return (
    <>
      <SEO 
        title="Service Areas | Aangan Salon at Home"
        description="Aangan Salon provides premium salon at home services across Noida, Ghaziabad, Indirapuram, and Delhi NCR."
        canonical="/areas"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-warm-ivory">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-deep-plum mb-6">Where We Serve</h1>
          <p className="text-lg text-charcoal/80 mb-8">
            We bring the salon to your doorstep in major residential areas across the National Capital Region.
          </p>
        </div>
      </Section>

      <Section className="bg-white" hasFloralCorners>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <Link 
              key={idx}
              to={area.link}
              className="bg-sand/20 rounded-3xl p-8 border border-sand hover:border-champagne hover:shadow-md transition-all group"
            >
              <h3 className="font-serif text-2xl text-deep-plum mb-3 group-hover:text-muted-maroon transition-colors">{area.name}</h3>
              <p className="text-charcoal/70 text-sm">{area.desc}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-charcoal italic">
            Not sure if we cover your exact society? Send us a quick WhatsApp message and we'll check immediately!
          </p>
        </div>
      </Section>
    </>
  );
}
