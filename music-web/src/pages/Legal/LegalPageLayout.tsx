import type { ReactNode } from "react";
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import styles from './LegalPage.module.scss';

interface SectionItem {
  id: string;
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: SectionItem[];
  faqs: FaqItem[];
  contactText: string;
  contactLink: string;
}

const LegalPageLayout = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  faqs,
  contactText,
  contactLink,
}: LegalPageLayoutProps) => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.heroLabel}>Legal · Snehi Technologies</span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={styles.heroTitle}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className={styles.heroSubtitle}
            >
              {subtitle}
            </motion.p>
            <div className={styles.heroMeta}>
              <span>Last updated {lastUpdated}</span>
            </div>
          </div>
        </Container>
      </section>

      <Container className={styles.contentGrid}>
        <aside className={styles.sidebar} aria-label="Page table of contents">
          <div className={styles.tocCard}>
            <p className={styles.tocLabel}>On this page</p>
            <nav>
              <ul className={styles.tocList}>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div className={styles.mainContent}>
          {sections.map((section) => (
            <motion.article
              key={section.id}
              id={section.id}
              className={styles.sectionCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>{section.icon}</div>
                <div>
                  <h2>{section.title}</h2>
                </div>
              </div>
              <div className={styles.sectionBody}>{section.content}</div>
            </motion.article>
          ))}

          <section id="faq" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionIcon}>❓</div>
              <div>
                <h2>Frequently asked questions</h2>
              </div>
            </div>
            <div className={styles.sectionBody}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div id="contact" className={styles.ctaCard}>
            <div>
              <h2>Need help with policy questions?</h2>
              <p>{contactText}</p>
            </div>
            <a className={styles.ctaButton} href={contactLink}>
              Contact Snehi Technologies
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default LegalPageLayout;
