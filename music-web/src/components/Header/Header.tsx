import { Link, NavLink } from "react-router-dom";
import Container from "../common/Container";
import { NAVIGATION } from "../../constants/navigation";
import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logo}>
                        <img src={Logo} alt="Snehi Music" />
                    </Link>

                    <nav className={styles.navigation} aria-label="Primary navigation">
                        <ul className={styles.navList}>
                            {NAVIGATION.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `${styles.navLink} ${isActive ? styles.active : ""}`.trim()
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.actions}>
                        <Link to="/music" className={styles.listenButton}>
                            <span className={styles.buttonIcon} aria-hidden="true" />
                            Listen Now
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;