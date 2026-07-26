import LegalPageLayout from './LegalPageLayout';

const sections = [
  {
    id: 'what-are-cookies',
    icon: '🍪',
    title: 'What Are Cookies?',
    content: (
      <p>
        Cookies are small text files stored on your device by websites you visit. They help us remember preferences, support security, and analyze how visitors use our site.
      </p>
    ),
  },
  {
    id: 'cookies-we-use',
    icon: '🧾',
    title: 'Cookies We Use',
    content: (
      <>
        <p>
          We use a combination of essential, performance, and analytics cookies. Essential cookies power the website’s core functionality.
        </p>
      </>
    ),
  },
  {
    id: 'essential-cookies',
    icon: '⚡',
    title: 'Essential Cookies',
    content: (
      <p>
        These cookies are required for the website to function properly. They enable navigation, form submissions, and secure access to contact forms.
      </p>
    ),
  },
  {
    id: 'analytics-cookies',
    icon: '📊',
    title: 'Analytics Cookies',
    content: (
      <p>
        Analytics cookies help us understand visitor behavior, page performance, and interaction patterns so we can improve the site experience over time.
      </p>
    ),
  },
  {
    id: 'managing-cookies',
    icon: '🛠️',
    title: 'Managing Cookies',
    content: (
      <p>
        You can manage or disable cookies through your browser settings. Disabling certain cookies may affect features or site performance.
      </p>
    ),
  },
  {
    id: 'third-party-cookies',
    icon: '🌐',
    title: 'Third-Party Cookies',
    content: (
      <p>
        Our site may use third-party analytics and marketing services that set cookies through the website. We do not control those providers’ practices.
      </p>
    ),
  },
  {
    id: 'consent',
    icon: '📝',
    title: 'Consent',
    content: (
      <p>
        By using our website, you consent to the placement and use of cookies as described in this policy. You may revoke consent by changing browser settings or contacting us.
      </p>
    ),
  },
  {
    id: 'policy-updates',
    icon: '🔄',
    title: 'Policy Updates',
    content: (
      <p>
        We may revise this Cookie Policy as needed. When changes are made, the updated policy will appear on this page with the effective date.
      </p>
    ),
  },
  {
    id: 'contact-us',
    icon: '📬',
    title: 'Contact Us',
    content: (
      <p>
        For questions about cookies or data privacy, email us at <a href="mailto:hello@snehi.in">hello@snehi.in</a>.
      </p>
    ),
  },
];

const faqs = [
  {
    question: 'Can I opt out of non-essential cookies?',
    answer: 'Yes. You can opt out through your browser settings, although some features may be less effective when cookies are disabled.',
  },
  {
    question: 'Do cookies collect personal information?',
    answer: 'Cookies may store identifiers and preferences, but we do not use them to collect sensitive personal data without your consent.',
  },
  {
    question: 'Will this policy change?',
    answer: 'Yes. We periodically review cookie practices and update this policy as needed to reflect new technologies or regulatory requirements.',
  },
];

const CookiePolicy = () => {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="A concise explanation of how Snehi Technologies uses cookies and related tracking technologies on our website."
      lastUpdated="July 26, 2026"
      sections={sections}
      faqs={faqs}
      contactText="For any concerns or cookie-related questions, our team is happy to help."
      contactLink="mailto:hello@snehi.in"
    />
  );
};

export default CookiePolicy;
