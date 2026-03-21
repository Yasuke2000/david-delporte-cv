export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Delporte',
    jobTitle: 'IT Operations & Security Engineer',
    url: 'https://daviddelporte.com',
    email: 'contact@daviddelporte.com',
    telephone: '+32465893645',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'West-Vlaanderen',
      addressCountry: 'BE',
    },
    sameAs: [
      'https://github.com/Yasuke2000',
      'https://linkedin.com/in/david-delporte',
    ],
    knowsAbout: [
      'IT Security', 'Microsoft 365', 'Azure Virtual Desktop',
      'Kubernetes', 'Cybersecurity', 'System Engineering',
      'Network Infrastructure', 'SIEM/XDR', 'GDPR Compliance',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
