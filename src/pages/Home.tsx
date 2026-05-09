import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { TrustBadges } from '../components/TrustBadges';
import { ServiceCards } from '../components/ServiceCards';
import { PackageCards } from '../components/PackageCards';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { BookingForm } from '../components/BookingForm';
import { CheckCircle2, ShieldPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Aangan Salon",
    "image": "https://aangansalon.com/logo.png",
    "description": "Trusted salon services at home in Noida, Ghaziabad, Indirapuram and Delhi NCR by trained female beauty professionals.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "telephone": "+91XXXXXXXXXX",
    "priceRange": "â¹â¹"
  };

  return (
    <>
      <SEO 
        title="Salon Services at Home in Noida & NCR | Aangan Salon"
        description="Book trained female beauty professionals for facial, waxing, threading, manicure, pedicure and grooming services at your home in Noida, Ghaziabad and NCR."
        canonical="/"
        schema={schema}
      />

      {/* Hero Section */}
      <Section className="pt-10 md:pt-20 pb-16 bg-gradient-to-b from-warm-ivory to-white relative overflow-hidden" containerClass="max-w-[1200px]">
        {/* Subtle decorative grid/arch background from Editorial styling */}
        <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage: "radial-gradient(#7A3045 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>

        <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
            <div className="absolute -top-10 -left-10 opacity-20 pointer-events-none hidden md:block">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#7A3045" strokeWidth="0.5">
                <path d="M10 90 Q50 10 90 90" />
                <circle cx="50" cy="40" r="2" fill="#7A3045"/>
              </svg>
            </div>
            
            <div className="self-start">
              <span className="inline-block px-4 py-1.5 rounded-full bg-soft-rose text-deep-plum text-[10px] font-bold uppercase tracking-[0.15em] mb-6 shadow-sm">
                “Salon care, ghar ke comfort mein.”
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-deep-plum mb-6 leading-[1.05]">
              Salon Services at Home in <br className="hidden lg:block"/> <span className="italic underline decoration-champagne decoration-4">Noida</span> & NCR
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-md leading-relaxed">
              Book trained female beauty professionals for facials, waxing, and grooming in the warm sanctuary of your own home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-16">
              <Button size="lg" className="w-full sm:w-auto" href="/contact">Book Appointment</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20want%20to%20book%20a%20salon-at-home%20service.">
                WhatsApp Now
              </Button>
            </div>
            
            <TrustBadges />
          </div>

          {/* Right Column: Imagery */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center p-4 sm:p-10">
            <div className="relative w-full max-w-[320px] aspect-[2/3] flex flex-col items-center justify-center">
              <div className="w-full h-full bg-sand rounded-t-[160px] rounded-b-3xl relative overflow-hidden shadow-2xl border-4 border-white ring-1 ring-muted-maroon/10">
                <div className="absolute inset-0 bg-gradient-to-b from-muted-maroon/20 to-transparent z-10"></div>
                <div className="absolute bottom-10 left-0 right-0 p-8 text-white z-20">
                  <p className="font-serif italic text-2xl">Trust our Experts.</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2 opacity-80">Hygienic & Professional Service</p>
                </div>
                <div 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  style={{
                    background: "linear-gradient(rgba(75, 30, 50, 0.2), rgba(75, 30, 50, 0.1)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800') center/cover"
                  }}
                ></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 sm:-left-12 grid grid-cols-2 gap-3 z-30">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-sand w-[140px] transform -rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-10 h-10 bg-soft-rose/20 rounded-full flex items-center justify-center mb-3 text-muted-maroon">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-tighter text-deep-plum">Facial & Cleanup</p>
                  <p className="text-[9px] text-charcoal/60 mt-1">Premium products for your skin.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-sand w-[140px] transform rotate-6 hover:rotate-0 transition-transform">
                  <div className="w-10 h-10 bg-champagne/20 rounded-full flex items-center justify-center mb-3 text-champagne">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-tighter text-deep-plum">Spa Waxing</p>
                  <p className="text-[9px] text-charcoal/60 mt-1">Mess-free & painless hair removal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Popular Services */}
      <Section className="bg-warm-ivory" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Our Popular Services</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Expert care brought right to your doorstep.</p>
        </div>
        <ServiceCards />
        <div className="text-center mt-12">
          <Button variant="secondary" href="/services">View All Services</Button>
        </div>
      </Section>

      {/* Packages */}
      <Section className="bg-white" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Curated Grooming Packages</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Bundle your favorite services for a complete glow-up at better prices.</p>
        </div>
        <PackageCards />
      </Section>

      {/* Hygiene & Safety - Split Layout */}
      <Section className="bg-warm-ivory border-y border-sand/50 overflow-hidden relative" id="why-us">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-rose/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-xl border border-sand z-20">
              <div className="text-center">
                <span className="block text-xl font-serif text-deep-plum">100%</span>
                <span className="block text-[8px] uppercase tracking-widest text-charcoal/60">Hygienic</span>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" 
              alt="Clean towels and premium products" 
              className="w-full aspect-[4/5] object-cover rounded-t-[4rem] rounded-b-[2rem] shadow-2xl border-4 border-white"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-6 leading-tight">
              Our Hygiene & <br/><span className="italic text-muted-maroon">Safety Promise</span>
            </h2>
            <p className="text-charcoal/80 text-lg mb-10 leading-relaxed font-light">
              At Aangan Salon, every home visit is handled with utmost care. Our professionals follow a strict hygiene checklist to ensure your sanctuary remains safe and clean.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Sanitized Tools', desc: 'Disinfected before & after use' },
                { title: 'Clean Setup', desc: 'Fresh towels & sheets provided' },
                { title: 'Disposable Kits', desc: 'Single-use essentials used' },
                { title: 'Expert Care', desc: 'Trained & verified professionals' }
              ].map((item, i) => (
                <div key={i} className="bg-white/50 p-5 rounded-2xl border border-sand">
                  <ShieldPlus className="w-6 h-6 text-champagne mb-3" />
                  <h4 className="font-serif text-deep-plum mb-1">{item.title}</h4>
                  <p className="text-xs text-charcoal/70">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <Button variant="outline" href="/contact" className="bg-white">Book a Safe Visit</Button>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-sand/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">How It Works</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Your salon experience at home in four easy steps.</p>
        </div>
        <HowItWorks />
      </Section>

      {/* Service Areas */}
      <Section className="bg-white" id="areas">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Service Areas</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto mb-8">
            Currently accepting bookings in selected sectors and societies. Share your area on WhatsApp to check availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Noida', 'Indirapuram', 'Ghaziabad', 'Delhi NCR'].map(area => (
              <Link 
                key={area}
                to={`/salon-at-home-in-${area.toLowerCase().replace(' ', '-')}`}
                className="px-6 py-3 bg-warm-ivory font-serif text-deep-plum rounded-full border border-sand hover:border-champagne transition-colors"
               >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-warm-ivory" id="reviews" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Loved by Women in NCR</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Real experiences from our beautiful customers.</p>
        </div>
        <Testimonials />
      </Section>

      {/* Booking Form Layout */}
      <Section className="bg-gradient-to-b from-white to-warm-ivory" id="book">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-6">Book Your Appointment</h2>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Fill in your details and preferred slot. Our team will verify availability in your society/sector and confirm the appointment instantly via WhatsApp.
            </p>
            <div className="space-y-4">
              <div className="bg-sand/30 p-4 rounded-2xl flex items-center gap-4">
                <div className="bg-champagne/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-serif text-deep-plum text-xl">1</span>
                </div>
                <p className="text-sm font-medium text-charcoal">Submit Request Form</p>
              </div>
              <div className="bg-sand/30 p-4 rounded-2xl flex items-center gap-4">
                <div className="bg-champagne/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-serif text-deep-plum text-xl">2</span>
                </div>
                <p className="text-sm font-medium text-charcoal">Get price & slot confirmation</p>
              </div>
              <div className="bg-sand/30 p-4 rounded-2xl flex items-center gap-4">
                <div className="bg-champagne/20 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-serif text-deep-plum text-xl">3</span>
                </div>
                <p className="text-sm font-medium text-charcoal">Relax at home</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <BookingForm />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white" id="faq" hasFloralCorners>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-deep-plum mb-4">Frequently Asked Questions</h2>
        </div>
        <FAQ />
      </Section>

    </>
  );
}
