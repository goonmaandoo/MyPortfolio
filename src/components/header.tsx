import styles from './header.module.css';
import { useCallback, useState, useRef } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const menuRef = useRef<HTMLElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);
    const clickHambuger = (e) => {
        toggleMenu(e);
    }

    return (
        <div className={styles["body_container"]}>
            <div className={styles["header_body"]}>
                <div className={styles["project_title"]}>ChaeONE</div>
                <ul className={styles["project_menu"]}>
                    <li>Intro</li>
                    <li>About</li>
                    <li>Abilities</li>
                    <li>MyProject</li>
                </ul>
                <div className={styles["header_left"]}>
                    <button ref={btnRef} className={styles["hamburger_btn"]} onClick={clickHambuger}>
                        <img src="/black/Vector.png" className={styles["hamburger_img"]}/>
                    </button>
                </div>

                {menuOpen && (
                    <nav ref={menuRef} className={styles["small_menu"]}>
                        <li>Intro</li>
                        <li>About</li>
                        <li>Abilities</li>
                        <li>MyProject</li>
                    </nav>
                )}
            </div>
        </div>
    );

}