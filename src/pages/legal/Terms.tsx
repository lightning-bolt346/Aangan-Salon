import { SEO } from '../../components/SEO';
import { Section } from '../../components/layout/Section';

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms & Cancellation Policy | Aangan Salon"
        description="Terms of service and cancellation policy for Aangan Salon bookings."
        canonical="/terms-and-conditions"
      />

      <Section className="pt-8 md:pt-16 pb-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-serif text-deep-plum mb-8">Terms & Cancellation Policy</h1>
          
          <div className="prose prose-lg text-charcoal/80 space-y-6">
            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">1. Booking Confirmation</h2>
            <p>
              Submitting a form on our website represents a "Booking Request". A booking is considered confirmed <strong>only after</strong> our team confirms it with you directly via WhatsApp or Phone call, establishing the exact slot and pricing.
            </p>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">2. Pricing Variations</h2>
            <p>
              Prices listed on the website as "Starting from" are indicative. Final prices may vary based on your selection of specific product brands (e.g., Rica wax vs. Honey wax, premium facial brands) and travel distance to your area.
            </p>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">3. Service Availability</h2>
            <p>
              Service availability strictly depends upon the availability of our trained beauty professionals in your specific NCR area at your requested time. We reserve the right to decline booking requests if our slots are full or your area is outside our current operational radius.
            </p>

            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">4. Cancellation & Rescheduling</h2>
            <p>
              Customers can easily reschedule or cancel their appointments by messaging our support number on WhatsApp. However, we request you to notify us at least 3-4 hours prior to your scheduled slot so our professionals do not travel unnecessarily.
            </p>
            
            <h2 className="text-2xl font-serif text-deep-plum mt-8 mb-4">5. Disclaimer of Claims</h2>
            <p>
              Aangan Salon provides cosmetic and grooming services. We do not make any medical or dermatological treatment claims. Clients with sensitive skin, allergies, or pre-existing conditions should inform the professional beforehand and consult a doctor if necessary.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
