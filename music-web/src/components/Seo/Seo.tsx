import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
};

const defaultKeywords = [
  'Snehi',
  'SNEHI Studio',
  'Snehi Music',
  'snehi studio',
  'snehi music',
  'snehi',
  'snehi studio india',
  'snehimusic',
];

const Seo: React.FC<Props> = ({ title, description, keywords = [], canonical }) => {
  const siteTitle = title ? `${title} — SNEHI` : 'SNEHI Music & Studio';
  const seoKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SNEHI',
    alternateName: ['SNEHI Studio', 'Snehi Music', 'Snehi Studio'],
    url: canonical || (typeof window !== 'undefined' ? window.location.origin : '/'),
    logo: `${(typeof window !== 'undefined' && window.location.origin) || ''}/favicon.png`,
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || 'SNEHI — premium music studio and library.'} />
      <meta name="keywords" content={seoKeywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || 'SNEHI — premium music studio and library.'} />
      <meta property="og:image" content={canonical ? `${canonical}/hero.png` : '/hero.png'} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || 'SNEHI — premium music studio and library.'} />
      <meta name="twitter:image" content={canonical ? `${canonical}/hero.png` : '/hero.png'} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default Seo;
