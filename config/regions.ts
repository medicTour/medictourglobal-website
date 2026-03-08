// config/regions.ts
export interface RegionConfig {
  slug: string;           // e.g., 'africa'
  name: string;           // Display name
  heroImage: string;      // Path to hero image
  overlayColor: string;   // CSS color for hero overlay
}

export const regions: RegionConfig[] = [
  {
    slug: 'africa',
    name: 'Africa',
    heroImage: '/images/regions/africa.png',
    overlayColor: 'rgba(14, 76, 90, 0.7)',
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    heroImage: '/images/regions/united-kingdom.png',
    overlayColor: 'rgba(0, 60, 80, 0.65)',
  },
  {
    slug: 'uae',
    name: 'United Arab Emirates',
    heroImage: '/images/regions/uae.png',
    overlayColor: 'rgba(155, 90, 40, 0.6)',
  },
  {
    slug: 'europe',
    name: 'Europe',
    heroImage: '/images/regions/europe-hero.jpg',
    overlayColor: 'rgba(14, 76, 90, 0.7)',
  },
];