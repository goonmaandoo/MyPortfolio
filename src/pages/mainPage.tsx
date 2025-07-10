import styles from './mainpage.module.css'

export default function MainPage(){

    return (
        <>
            <header/>
            <main className={styles["main_container"]}>
                <div className={styles["main_body"]}>
                    <div className={styles["main_gap"]}>
                        <div className={styles["main_first"]}>
                            <div className={styles["main_title"]}>one's portfolio</div>
                        </div>
                        <div className={styles["main_box"]}>
                            <div className={styles["main_display"]}>
                                <img src="/" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>

        </>
        
    )
}