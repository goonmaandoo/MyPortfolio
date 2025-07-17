import styles from './mainpage.module.css'
import Intro from '../components/intro';
import About from '../components/about';
import Abilities from '../components/abilities';
import MyProject from '../components/myProject';

export default function MainPage() {

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
                                <div className={styles["main_img"]} />
                            </div>
                        </div>
                    </div>
                    <div id="Intro" className={styles["main_ABILITIES"]}>
                        <Intro/>
                    </div>
                    
                    <div id="About" className={styles["main_profile"]}>
                        <About/>
                    </div>
                    <h2 id="Abilities" className={styles["abil"]}>Abilities</h2>
                    <Abilities/>
                    <hr style={{ margin: "40px 0px" }} />
                    <div id="MyProject" className={styles["abil"]}>My Project</div>
                        <MyProject/>
                </div>
            </main>

        </>

    )
}