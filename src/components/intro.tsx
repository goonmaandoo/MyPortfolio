import styles from './intro.module.css'

export default function Intro() {

    return (
        <>
            <h2>Intro</h2>
            <div className={styles["main_key"]}>"데이터와 사용자를 모두 이해하여 <span className={styles["line_break"]} />문제를 해결하는 풀스택 개발자입니다."</div>
            <div className={styles["main_sub"]}>사용자의 니즈를 깊이 파악하고, 기술로 실질적인 가치를 만듭니다. <br />프론트엔드부터 백엔드까지 전체 과정을 아우르며 완성도 높은 서비스를 구현합니다.</div>
        </>
    )

}