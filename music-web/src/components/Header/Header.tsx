import { Link } from "react-router-dom";
import Container from "../common/Container";
import { NAVIGATION } from "../../constants/navigation";
import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>

                    {/* Logo */}
                    <Link to="/" className={styles.logo}>
                        <img src={Logo} alt="Snehi Music" />
                    </Link>

                    {/* Navigation */}
                    <nav className={styles.navigation}>
                        <ul className={styles.navList}>
                            {NAVIGATION.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA */}
                    <div className={styles.actions}>
                        <button className={styles.listenButton}>
                            Listen Now
                        </button>
                    </div>

                </div>
            </Container>
        </header>
    );
};

export default Header;