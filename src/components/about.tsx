import styles from './about.module.css'

export default function About() {

    return (
        <>
            <div className={styles["main_profile_text"]}>
                <hr />
                <div>
                    <div className={styles["main_profile_title"]}>
                        <h2>About</h2>
                        <div className={styles["main_profile_content"]}>
                            <a href='/' target="_blank" className={styles["main_about_a"]}>
                                <img className={styles["main_skill_img"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                            </a>
                            <a href='/' target="_blank" className={styles["main_about_a"]}>
                                <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/naver_blog.png' /><div>blog</div>
                            </a>
                        </div>
                        {/* <div className={styles["main_profile_content"]}>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</div> */}
                    </div>
                    <div className={styles["main_profile_detail_bo"]}>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ width: "100px" }}>생년월일</div>
                            <div>2000.05.24</div>
                        </div>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ letterSpacing: "0.5rem", width: "6.25rem" }}>연락처</div>
                            <div>010-2260-4021</div>
                        </div>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ letterSpacing: "0.5rem", width: "6.25rem" }}>이메일</div>
                            <div>won020738@naver.com</div>
                        </div>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ letterSpacing: "1.9rem", width: "6.25rem" }}>학력</div>
                            <div>2025.02 통계학과 졸업</div>
                        </div>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ letterSpacing: "0.5rem", width: "6.25rem" }}>자격증</div>
                            <div>SQL개발자(SQLD) / 정보처리기사 / ADSP</div>
                        </div>
                        <hr />
                        <div className={styles["main_profile_detail"]}>
                            <div className={styles["table_title"]} style={{ letterSpacing: "1.9rem", width: "6.25rem" }}>경력</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles["main_profile_img"]} src="/MyPortfolio/KakaoTalk_20250711_173649900.jpg" />
        </>
    )

}