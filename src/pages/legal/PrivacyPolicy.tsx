import { SEO } from '../../components/SEO';
import { Section } from '../../components/layout/Section';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy | Aangan Salon"
        description="Privacy policy and data handling guidelines for Aangan Salon."
        canonical="/privacy-policy"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif text-deep-plum mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg text-charcoal/80 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">1. Information We Collect</h2>
            <p>
              When you request a booking on Aangan Salon, we collect the following personal information: Full Name, Phone Number, WhatsApp Number, Address/Area/Society Name, City, Service Preferences, and Booking Notes.
            </p>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">2. How We Use Your Data</h2>
            <p>
              The data collected is strictly used for operational purposes only:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To confirm your booking slots and service pricing.</li>
              <li>To coordinate the service visit and share your address securely with our verified female beauticians.</li>
              <li>For customer support, feedback collection, and follow-ups.</li>
            </ul>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">3. Data Protection & Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. Your address and contact details are only shared internally with the assigned professional for the specific date of service.
            </p>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">4. Data Deletion Requests</h2>
            <p>
              Users hold the right to request deletion of their personal data from our systems post-service. You can request deletion by contacting Aangan Salon support via email at hello@aangansalon.com or via WhatsApp.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
