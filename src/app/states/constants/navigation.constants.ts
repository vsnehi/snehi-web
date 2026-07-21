export interface NavItem {
  label: string;
  route?: string;
  external?: boolean;
  children?: NavItem[];
}

export const HEADER_MENU: NavItem[] = [
  {
    label: 'Products',
    children: [
      { label: 'Snehi Chat', route: '/platform', external: false },
      { label: 'Snehi Studio', route: 'https://www.youtube.com/@snehi.studio', external: true },
      { label: 'Snehi Vision', route: '/api', external: false },
      { label: 'Snehi Code', route: 'https://cude.in', external: true },
      { label: 'Snehi Voice', route: '/api', external: false }
    ]
  },
  {
    label: 'Solutions',
    children: [
      { label: 'For Business', route: '/for-business' },
      { label: 'For Developers', route: '/for-developers' },
      { label: 'For Startups', route: '/for-startups' },
      { label: 'Industry Solutions', route: '/industry-solutions' }
    ]
  },
  {
    label: 'Enterprise',
     children: [
      { label: 'Security', route: '/security' },
      { label: 'Integration', route: '/integration' },
      { label: 'Case Studies', route: '/case-studies' },
    ]
  },
  {
    label: 'Pricing',
    route: '/pricing'
  },
  {
    label: 'Company',
    children: [
      { label: 'About', route: '/about' },
      { label: 'Careers', route: '/careers' },
      { label: 'Blog', route: '/blog' },
      { label: 'Contact', route: '/contact' }
    ]
  }
];