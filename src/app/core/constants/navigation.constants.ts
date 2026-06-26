export interface NavItem {
  label: string;
  route?: string;
  children?: NavItem[];
}

export const HEADER_MENU: NavItem[] = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Products',
    children: [
      { label: 'Snehi Chat', route: '/platform' },
      { label: 'Snehi Studio', route: '/agents' },
      { label: 'Snehi Vision', route: '/api' },
      { label: 'Snehi Code', route: 'https://cude.in' },
      { label: 'Snehi Voice', route: '/api' }
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