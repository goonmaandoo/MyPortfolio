import styles from './header.module.css';
import { useCallback, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

    return (
        <>
            <div className={styles["body_container"]}>
                <div className={styles["header_body"]}>
                    <div className={styles["project_title"]}>ChaeONE</div>
                    <nav className={styles["project_menu"]}>
                        {["Intro", "About", "Abilities", "MyProject"].map(item => (
                            <a key={item} href={`#${item}`}>{item}</a>
                        ))}
                    </nav>
                    <div className={styles["header_left"]}>
                    </div>
                </div>
                <div className={styles["header_body2"]}>
                    <div className={styles["project_title2"]}>ChaeONE</div>
                    <div className={styles["header_left"]}>
                        <button ref={btnRef} className={styles["hamburger_btn"]} onClick={toggleMenu}>
                            <img src="/black/Vector.png" className={styles["hamburger_img"]} />
                        </button>
                    </div>

                </div>
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                key="mobile-nav"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                style={{ originY: 0 }}   
                                ref={menuRef}
                                className={styles.small_menu}
                            >
                                <ul>
                                    {["Intro", "About", "Abilities", "MyProject"].map(item => (
                                        <>
                                            <li key={item}>
                                                <a href={`#${item}`}>{item}</a>
                                            </li>
                                        </>
                                    ))}
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>
            </div>
        </>
    );

}