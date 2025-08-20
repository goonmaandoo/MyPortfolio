import styles from './mainpage.module.css'
import Intro from '../components/intro';
import About from '../components/about';
import Abilities from '../components/abilities';
import MyProject from '../components/myProject';
import { useState, useEffect } from 'react';

export default function MainPage() {
    const [imgUrl, setImgUrl] = useState<string>("1280mainpage.jpeg");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth; 
            
            if (width <= 660) {
                setImgUrl("660mainpage.jpeg");
            } else if (width<=960) {
                setImgUrl("960mainpage.jpeg");
            } else {
                setImgUrl("1280mainpage.jpeg");
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);

    return (
        <>
            <header />
            <main className={styles["main_container"]}>
                <div className={styles["main_body"]}>
                    <div className={styles["main_gap"]}>
                        <div className={styles["main_first"]}>
                            <h1 className={styles["main_title"]}>One's Portfolio.</h1>
                        </div>
                        <div className={styles["main_box"]}>
                            <div className={styles["main_display"]}>
                                <img className={styles["main_img"]} src={imgUrl}/>
                            </div>
                        </div>
                    </div>
                    <div id="Intro" className={styles["main_ABILITIES"]}>
                        <Intro/>
                    </div> 
                    <div id="About" className={styles["main_profile"]}>
                        <About/>
                    </div>
                    
                    <div id="Abilities" className={styles["abil"]}>Abilities</div>
                    <Abilities/>
                    
                    <hr style={{ margin: "2.5rem 0" }} />
                    <div id="MyProject" className={styles["abil"]}>My Project</div>
                        <MyProject/>
                </div>
            </main>

        </>

    )
}