import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { cn } from '@/src/lib/utils';
import { Loader2 } from 'lucide-react';

interface BookingFormProps {
  className?: string;
  defaultService?: string;
  defaultArea?: string;
}

export function BookingForm({ className, defaultService, defaultArea }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [urlParams, setUrlParams] = useState({ source: '', medium: '', campaign: '' });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setUrlParams({
      source: searchParams.get('utm_source') || '',
      medium: searchParams.get('utm_medium') || '',
      campaign: searchParams.get('utm_campaign') || ''
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get('website_url')) {
      return;
    }
    
    setStatus('loading');
    
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('https://script.google.com/macros/s/PASTE_WEB_APP_ID/exec', {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={cn("bg-white p-10 md:p-12 rounded-[2rem] shadow-lg border border-sand max-w-2xl mx-auto text-center", className)}>
        <h3 className="text-3xl font-serif text-deep-plum mb-4">Request Received!</h3>
        <p className="text-charcoal mb-8 text-lg font-light leading-relaxed">
          Thank you! Your booking request has been received. Our team will confirm your slot shortly on WhatsApp or call.
        </p>
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-maroon mb-6">
          Message us on WhatsApp for faster confirmation
        </p>
        <Button size="lg" href="https://wa.me/91XXXXXXXXXX?text=Hi%20Aangan%20Salon%2C%20I%20have%20submitted%20a%20booking%20request%20on%20your%20website.">
          WhatsApp Us
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("bg-white/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-sand relative overflow-hidden", className)}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-3xl pointer-events-none"></div>

      {status === 'error' && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 text-sm">
          Something went wrong. Please try again or message us on WhatsApp.
        </div>
      )}
      
      {/* Hidden Fields for Tracking */}
      <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="source" value="website" />
      <input type="hidden" name="pageUrl" value={typeof window !== 'undefined' ? window.location.href : ''} />
      <input type="hidden" name="utmSource" value={urlParams.source} />
      <input type="hidden" name="utmMedium" value={urlParams.medium} />
      <input type="hidden" name="utmCampaign" value={urlParams.campaign} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
        <label className="block">
          <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Full Name</span>
          <input required type="text" name="fullName" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all shadow-sm" placeholder="Enter your name" />
        </label>
        
        <label className="block">
          <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Phone Number</span>
          <input required type="tel" name="phone" pattern="^\+?[0-9\s\-]{10,15}$" title="Please enter a valid phone number" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all shadow-sm" placeholder="+91 XXXXX XXXXX" />
        </label>

        <label className="block">
          <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">WhatsApp Number</span>
          <input type="tel" name="whatsapp" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne focus:border-transparent transition-all shadow-sm" placeholder="For faster updates" />
        </label>

        <label className="block">
          <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">City</span>
          <select required name="city" defaultValue={defaultArea || ""} className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm">
            <option value="" disabled>Select City</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Indirapuram">Indirapuram</option>
            <option value="Delhi">Delhi</option>
            <option value="Other">Other NCR (Specify in notes)</option>
          </select>
        </label>

        <div className="md:col-span-2">
          <label className="block">
            <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Area / Sector / Society</span>
            <input required type="text" name="area" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm" placeholder="e.g. Sector 137, Supertech Ecociti" />
          </label>
        </div>

        <label className="block">
           <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Service Category</span>
           <select required name="serviceCategory" defaultValue={defaultService || ""} className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm">
             <option value="" disabled>Select Category</option>
             <option value="Facial & Cleanup">Facial & Cleanup</option>
             <option value="Waxing">Waxing</option>
             <option value="Threading">Threading</option>
             <option value="Manicure & Pedicure">Manicure & Pedicure</option>
             <option value="Hair Care">Hair Care</option>
             <option value="Party Makeup">Party Makeup</option>
             <option value="Package Booking">Package Booking</option>
           </select>
        </label>

        <label className="block">
          <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Specific Service (Optional)</span>
          <input type="text" name="specificService" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm" placeholder="e.g. O3+ Facial, Full Body Waxing" />
        </label>

        <label className="block">
           <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Preferred Date</span>
           <input required type="date" name="preferredDate" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm" />
        </label>

        <label className="block">
           <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Preferred Time Slot</span>
           <select required name="preferredSlot" className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm">
             <option value="" disabled>Select Time</option>
             <option value="Morning: 9 AM - 12 PM">Morning: 9 AM – 12 PM</option>
             <option value="Afternoon: 12 PM - 3 PM">Afternoon: 12 PM – 3 PM</option>
             <option value="Evening: 3 PM - 7 PM">Evening: 3 PM – 7 PM</option>
           </select>
        </label>

        <div className="md:col-span-2">
          <label className="block">
            <span className="block text-sm font-semibold tracking-wide text-deep-plum mb-2">Additional Notes</span>
            <textarea name="notes" rows={3} className="w-full rounded-xl border-sand border bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-champagne transition-all shadow-sm" placeholder="Any specific requirements or queries?"></textarea>
          </label>
        </div>

      </div>

      <div className="mb-8 flex items-start gap-3 relative z-10">
        <input required type="checkbox" id="consent" name="consent" value="yes" className="mt-1 w-4 h-4 text-deep-plum rounded border-sand focus:ring-champagne" />
        <label htmlFor="consent" className="text-[13px] text-charcoal/70 leading-relaxed font-light">
          I consent to being contacted by Aangan Salon for booking confirmation. I understand prices and slots are subject to final confirmation.
        </label>
      </div>

      <Button type="submit" className="w-full relative z-10" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={20} /> Submitting...</span>
        ) : (
          "Request Booking"
        )}
      </Button>

      <div className="mt-8 pt-6 border-t border-sand/50 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-charcoal/60 relative z-10">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <span className="text-[11px] uppercase tracking-[0.1em] font-bold">100% Secure</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-champagne"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span className="text-[11px] uppercase tracking-[0.1em] font-bold">No Upfront Payment</span>
        </div>
      </div>
    </form>
  );
}
