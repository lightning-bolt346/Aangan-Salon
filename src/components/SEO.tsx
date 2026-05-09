import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function SEO({ title, description, canonical, schema }: SEOProps) {
  const absoluteUrl = canonical ? `https://aangansalon.com${canonical}` : undefined;
  
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {absoluteUrl && <link rel="canonical" href={absoluteUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {absoluteUrl && <meta property="og:url" content={absoluteUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aangan Salon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {schemas.map((s, idx) => (
        <script type="application/ld+json" key={idx}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
