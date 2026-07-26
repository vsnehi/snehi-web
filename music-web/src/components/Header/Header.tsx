import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import { NAVIGATION } from "../../constants/navigation";
import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const drawerRef = useRef<HTMLDivElement | null>(null);

    // Close drawer on navigation change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    // Close on outside click
    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!open) return;
            if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);

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

                    <button
                        className={styles.hamburger}
                        aria-label="Open navigation"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <div
                        ref={drawerRef}
                        className={`${styles.drawer} ${open ? styles.open : ""}`}
                        role="dialog"
                        aria-hidden={!open}
                    >
                        <ul>
                            {NAVIGATION.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `${styles.drawerLink} ${isActive ? styles.active : ""}`.trim()
                                        }
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}

                            <li>
                                <Link to="/music" className={styles.drawerListen} onClick={() => setOpen(false)}>
                                    Listen Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;