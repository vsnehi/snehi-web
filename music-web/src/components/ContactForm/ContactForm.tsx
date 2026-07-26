import type { FC } from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm: FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className={styles.row}>
        <input name="name" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your email" required />
      </div>
      <input name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Message" rows={6} required />

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          {sent ? 'Sent' : 'Send message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
