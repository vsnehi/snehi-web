import LegalPageLayout from './LegalPageLayout';

const sections = [
  {
    id: 'introduction',
    icon: '🧾',
    title: 'Introduction',
    content: (
      <p>
        Snehi Technologies is committed to protecting the privacy of visitors and clients who interact with our digital services. This policy explains how we collect, use, store, and safeguard information when you access our website, request a consultation, or engage with our AI and software services.
      </p>
    ),
  },
  {
    id: 'information-we-collect',
    icon: '🔍',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          We collect information that is necessary to provide our services, personalize your experience, and communicate effectively. This includes data you share directly with us and information collected automatically through our online systems.
        </p>
      </>
    ),
  },
  {
    id: 'personal-information',
    icon: '👤',
    title: 'Personal Information',
    content: (
      <p>
        Personal information may include your name, email address, phone number, company name, role, project details, and other contact details you provide when requesting services or subscribing to updates.
      </p>
    ),
  },
  {
    id: 'technical-information',
    icon: '💻',
    title: 'Technical Information',
    content: (
      <p>
        We automatically gather technical data such as IP address, browser type, device model, operating system, pages visited, and session duration. This information helps us improve performance and identify issues.
      </p>
    ),
  },
  {
    id: 'cookies-tracking',
    icon: '🍪',
    title: 'Cookies & Tracking Technologies',
    content: (
      <p>
        Our website uses cookies and similar technologies to support essential functions, analyze site usage, and enhance your experience. You can manage cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    id: 'how-we-use-information',
    icon: '⚙️',
    title: 'How We Use Information',
    content: (
      <p>
        We use collected data to deliver services, respond to inquiries, optimize our website, assess service performance, and tailor communication based on your interests and project needs.
      </p>
    ),
  },
  {
    id: 'data-security',
    icon: '🔐',
    title: 'Data Security',
    content: (
      <p>
        We implement modern security practices, including encryption, access controls, and secure hosting, to protect the confidentiality and integrity of information stored on our systems.
      </p>
    ),
  },
  {
    id: 'data-retention',
    icon: '🗄️',
    title: 'Data Retention',
    content: (
      <p>
        We retain information only as long as necessary to fulfill the purposes described in this policy or as required by law. We routinely review and delete data that is no longer needed.
      </p>
    ),
  },
  {
    id: 'third-party-services',
    icon: '🤝',
    title: 'Third-Party Services',
    content: (
      <p>
        We may share data with trusted service providers who assist us in operating our website, delivering projects, and analyzing user patterns. These providers are bound by confidentiality obligations.
      </p>
    ),
  },
  {
    id: 'international-transfers',
    icon: '🌍',
    title: 'International Data Transfers',
    content: (
      <p>
        Information may be transferred and processed in jurisdictions outside your country. We take steps to ensure that international transfers comply with applicable privacy regulations.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    icon: '🧒',
    title: "Children's Privacy",
    content: (
      <p>
        Our services are designed for businesses and professionals. We do not knowingly collect personal information from children under 16 years of age.
      </p>
    ),
  },
  {
    id: 'your-rights',
    icon: '✋',
    title: 'Your Rights',
    content: (
      <p>
        You may request access, correction, deletion, or export of your personal data, and you may withdraw consent to marketing communications at any time.
      </p>
    ),
  },
  {
    id: 'changes-to-this-policy',
    icon: '📝',
    title: 'Changes to this Policy',
    content: (
      <p>
        We may update this policy periodically. If material changes occur, we will highlight those changes and revise the last updated date.
      </p>
    ),
  },
  {
    id: 'contact-information',
    icon: '📬',
    title: 'Contact Information',
    content: (
      <p>
        For questions about this Privacy Policy, email us at <a href="mailto:hello@snehi.in">hello@snehi.in</a>.
      </p>
    ),
  },
];

const faqs = [
  {
    question: 'What information does Snehi Technologies collect?',
    answer: 'We collect contact details, project context, website usage data, and cookies necessary to improve service delivery and customer experience.',
  },
  {
    question: 'Can I request deletion of my personal data?',
    answer: 'Yes, you can request data deletion by contacting us at hello@snehi.in, and we will respond in accordance with applicable regulations.',
  },
  {
    question: 'How does Snehi Technologies protect my information?',
    answer: 'We protect information with secure hosting, encryption, and limited access controls designed for enterprise-grade privacy.',
  },
];

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="A clear statement of how Snehi Technologies handles personal data, cookies, and privacy for our AI and enterprise software services."
      lastUpdated="July 26, 2026"
      sections={sections}
      faqs={faqs}
      contactText="If you have questions or want to exercise your data rights, our privacy team is available to assist you."
      contactLink="mailto:hello@snehi.in"
    />
  );
};

export default PrivacyPolicy;
