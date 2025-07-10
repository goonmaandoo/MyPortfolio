import styles from './header.module.css';
import { useState } from 'react';

export default function header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <div className={styles["body_container"]}>
            <div className={styles["header_body"]}>
                <div className={styles["project_title"]}>ChaeONE</div>
                <ul className={styles["project_menu"]}>
                    <li>Benefits</li>
                    <li>Specifications</li>
                    <li>How-to</li>
                    <li>Contact Me</li>
                </ul>
                <button className={styles["project_btn"]}>더보기</button>

                {/* <button className={styles["hamburger_btn"]}>
                    <img src="/Vector.png" className={styles["hamburger_img"]}/>
                </button> */}
            </div>
        </div>
    );

}