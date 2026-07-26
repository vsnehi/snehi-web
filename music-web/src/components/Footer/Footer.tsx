import { Link } from 'react-router-dom';
import Container from '../common/Container';
import styles from './Footer.module.scss';
import Logo from '../../assets/favicon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.topSection}>
        <div className={styles.brandSection}>
          <div className={styles.brandLogo}>
            <img src={Logo} alt="Snehi Technologies" />
            <div>
              <p className={styles.brandName}>Snehi Technologies</p>
              <p className={styles.brandTag}>AI software, cloud solutions, and enterprise systems.</p>
            </div>
          </div>
          <p className={styles.description}>
            Building AI-powered software, cloud solutions, enterprise applications, and digital products for startups and enterprises.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.linkTitle}>Quick Links</p>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles.linkGroup}>
          <p className={styles.linkTitle}>Services</p>
          <ul>
            <li><a href="#">AI Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">DevOps</a></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <p className={styles.linkTitle}>Contact</p>
          <address>
            <p>📍 Bengaluru, Karnataka, India</p>
            <p>✉ <a href="mailto:connect@snehi.in">connect@snehi.in</a></p>
            <p>📞 +91 79090 XXXXX</p>
          </address>

          <div className={styles.socialGroup}>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </Container>

      <div className={styles.bottomBar}>
        <Container className={styles.bottomInner}>
          <p>© 2026 Snehi Technologies Pvt. Ltd. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              Terms of Service
            </Link>
            <Link to="/cookie-policy" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              Cookies
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
