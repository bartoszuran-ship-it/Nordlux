import { ADRESSE, EMAIL, FIRMENNAME, REGION, SITE_URL, TELEFONNUMMER } from '@/config/site';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: FIRMENNAME,
    image: `${SITE_URL}/images/hero-dach.webp`,
    url: SITE_URL,
    telephone: TELEFONNUMMER,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADRESSE.strasse,
      postalCode: ADRESSE.plz,
      addressLocality: ADRESSE.ort,
      addressCountry: 'DE',
    },
    areaServed: REGION,
    priceRange: '€€',
  };
}
