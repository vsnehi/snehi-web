import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import ContactForm from '../../components/ContactForm';
import styles from './ContactPage.module.scss';

const ContactPage: FC = () => {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Snehi Music — Contact</title>
        <meta name="description" content="Contact Snehi Music — reach out for collaborations, bookings, and support." />
      </Helmet>

      <section className={styles.hero}>
        <Container>
          <h1>Contact</h1>
          <p className={styles.lead}>Get in touch — bookings, partnerships, or general inquiries.</p>
        </Container>
      </section>

      <Container>
        <section className={styles.grid}>
          <div className={styles.col}>
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:connect@snehi.in">connect@snehi.in</a></p>
            <p>Phone: +91 79090 XXXXX</p>
            <p>Address: Bengaluru, Karnataka, India</p>
          </div>

          <div className={styles.col}>
            <h2>Send us a message</h2>
            <ContactForm />
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ContactPage;
