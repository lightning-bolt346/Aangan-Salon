import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found | Aangan Salon"
        description="The page you are looking for does not exist."
      />

      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center bg-warm-ivory">
        <h1 className="text-8xl font-serif text-champagne mb-6">404</h1>
        <h2 className="text-3xl font-serif text-deep-plum mb-4">Page Not Found</h2>
        <p className="text-charcoal/70 mb-8 max-w-md">
          Oops! It seems we can't find the page you're looking for. Let's get you back to the home page.
        </p>
        <Button href="/">Return Home</Button>
      </Section>
    </>
  );
}
