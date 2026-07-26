import LegalPageLayout from './LegalPageLayout';

const sections = [
  {
    id: 'overview',
    icon: '📌',
    title: 'Overview',
    content: (
      <p>
        These Terms and Conditions govern your access to and use of Snehi Technologies digital products, services, and website content. By using our platform, you agree to follow these terms.
      </p>
    ),
  },
  {
    id: 'acceptance',
    icon: '✅',
    title: 'Acceptance of Terms',
    content: (
      <p>
        Your use of our website constitutes acceptance of these terms. If you do not agree, please discontinue use and contact us before proceeding with any engagement.
      </p>
    ),
  },
  {
    id: 'service-offering',
    icon: '🛠️',
    title: 'Service Offering',
    content: (
      <p>
        Snehi Technologies provides software consulting, product design, AI integration, and digital strategy services. Service scope is defined by individual project agreements and proposals.
      </p>
    ),
  },
  {
    id: 'user-responsibilities',
    icon: '🧭',
    title: 'User Responsibilities',
    content: (
      <p>
        You agree to use the website lawfully, provide accurate information, respect intellectual property, and not engage in activity that disrupts our systems or infringes on third-party rights.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    icon: '©️',
    title: 'Intellectual Property',
    content: (
      <p>
        All content, branding, code samples, and design assets on this site are owned by Snehi Technologies or our partners. Unauthorized use is prohibited except where explicitly permitted.
      </p>
    ),
  },
  {
    id: 'payments-and-fees',
    icon: '💳',
    title: 'Payments & Fees',
    content: (
      <p>
        Fees for services are specified in project proposals or contracts. Payment terms are determined per engagement and may include deposits, milestones, and final settlement.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    icon: '⚠️',
    title: 'Disclaimers',
    content: (
      <p>
        Our website and any shared materials are provided "as is." We make no warranties regarding the accuracy or availability of content, and we are not responsible for decisions made using information from this site.
      </p>
    ),
  },
  {
    id: 'limitation-of-liability',
    icon: '⚖️',
    title: 'Limitation of Liability',
    content: (
      <p>
        Snehi Technologies is not liable for indirect, consequential, or incidental damages arising from your use of our website or services, except where prohibited by law.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    icon: '🔗',
    title: 'Third-Party Links',
    content: (
      <p>
        Our site may include links to third-party websites or resources. These links are provided for convenience and do not imply endorsement of the content or privacy practices of external sites.
      </p>
    ),
  },
  {
    id: 'changes-to-terms',
    icon: '🛡️',
    title: 'Changes to Terms',
    content: (
      <p>
        We may update these terms periodically. Continued use of the website after changes indicates acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: 'governing-law',
    icon: '🌐',
    title: 'Governing Law',
    content: (
      <p>
        These terms are governed by the applicable laws of India. Any disputes will be resolved in accordance with those laws and local courts.
      </p>
    ),
  },
  {
    id: 'contact',
    icon: '📩',
    title: 'Contact',
    content: (
      <p>
        If you have questions about these Terms and Conditions, please contact us at <a href="mailto:hello@snehi.in">hello@snehi.in</a>.
      </p>
    ),
  },
];

const faqs = [
  {
    question: 'Do I need to sign a contract to work with Snehi Technologies?',
    answer: 'Yes. All engagements are confirmed through project proposals and contracts that define scope, timelines, and payment terms.',
  },
  {
    question: 'Can I reuse Snehi Technologies website content?',
    answer: 'No. Content on the website is protected by intellectual property rights and may not be reused without permission.',
  },
  {
    question: 'How will I be informed if these terms change?',
    answer: 'We will update the terms on this page and indicate the effective date of the latest revision.',
  },
];

const TermsAndConditions = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Terms that set clear expectations for using Snehi Technologies services, contacting our team, and engaging with our website." 
      lastUpdated="July 26, 2026"
      sections={sections}
      faqs={faqs}
      contactText="Our team is ready to answer questions or provide contract details for your next digital transformation project."
      contactLink="mailto:hello@snehi.in"
    />
  );
};

export default TermsAndConditions;
