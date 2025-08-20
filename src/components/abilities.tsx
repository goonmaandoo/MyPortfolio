import styles from './abilities.module.css';

export default function Abilities() {

    return (
        <div className={styles["main_tool"]}>
            <div className={styles["main_tools"]}>
                <hr />
                <h2>IDE & Dev Tools</h2>
                <div className={styles["main_tool_img"]}>
                    <img src="/MyPortfolio/black/sqldeveloper.png" />
                    <img src="/MyPortfolio/black/devicon-plain_eclipse.png" />
                    <img src="/MyPortfolio/black/cib_visual-studio-code.png" />
                    <img src="/MyPortfolio/black/mdi_github.png" />
                </div>
                <div className={styles["main_tool_img"]}>
                </div>
                <div className={styles["main_tool_subtitle"]}>Oracle SQL Developer</div>
                <div className={styles["main_tool_subtitle_detail"]}>Oracle DB 관리 및 쿼리 작성 도구</div>
                <div className={styles["main_tool_subtitle"]}>Eclipse / Visual Studio Code</div>
                <div className={styles["main_tool_subtitle_detail"]}>Java 및 프론트엔드 개발을 위한 통합 개발 환경</div>
                <div className={styles["main_tool_subtitle"]}>Git / GitHub</div>
                <div className={styles["main_tool_subtitle_detail"]}>버전 관리 및 협업</div>

            </div>
            <div className={styles["main_tools"]}>
                <hr />
                <h2>Backend & Infra</h2>
                <div className={styles["main_tool_img"]}>
                    <img src="/MyPortfolio/black/simple-icons_spring.png" />
                    <img src="/MyPortfolio/black/apachetomcat.png" />
                    <img src="/MyPortfolio/black/supabase.png" />
                    <img src="/MyPortfolio/black/lineicons_aws.png" />
                </div>
                <div className={styles["main_tool_subtitle"]}>Spring Boot / Spring Legacy</div>
                <div className={styles["main_tool_subtitle_detail"]}>Java 기반 웹 애플리케이션 프레임워크</div>
                <div className={styles["main_tool_subtitle"]}>Tomcat</div>
                <div className={styles["main_tool_subtitle_detail"]}>Java 웹 서버 환경 구성</div>
                <div className={styles["main_tool_subtitle"]}>Supabase</div>
                <div className={styles["main_tool_subtitle_detail"]}>인증, 실시간 데이터베이스 제공 BaaS</div>
                <div className={styles["main_tool_subtitle"]}>AWS</div>
                <div className={styles["main_tool_subtitle_detail"]}>배포, 데이터베이스, 저장소 등 클라우드 인프라 구성</div>

            </div>
            <div className={styles["main_tools"]}>
                <hr />
                <h2>Frontend Tools</h2>
                <div className={styles["main_tool_img"]}>
                    <img src="/MyPortfolio/black/react-outline.png" />
                    <img src="/MyPortfolio/black/simple-icons_vite.png" />
                    <img src="/MyPortfolio/black/figma-linear.png" />
                </div>

                <div className={styles["main_tool_subtitle"]}>React / Vite</div>
                <div className={styles["main_tool_subtitle_detail"]}>컴포넌트 기반 SPA 개발 및 빠른 개발 환경 구성</div>
                <div className={styles["main_tool_subtitle"]}>Figma</div>
                <div className={styles["main_tool_subtitle_detail"]}>UI/UX 설계 및 와이어프레임 제작</div>
            </div>
            <div className={styles["main_tools"]}>
                <hr />
                <h2>Languages</h2>
                <div className={styles["main_tool_img"]}>
                    <img src="/MyPortfolio/black/html.png" />
                    <img src="/MyPortfolio/black/css-solid.png" />
                    <img src="/MyPortfolio/black/raphael_js.png" />
                    <img src="/MyPortfolio/black/la_java.png" />
                    <img src="/MyPortfolio/black/mysql.png" />
                    <img src="/MyPortfolio/black/fontisto_oracle.png" />
                    <img src="/MyPortfolio/black/python.png" />
                </div>
                <div className={styles["main_tool_subtitle"]}>HTML / CSS / JavaScript</div>
                <div className={styles["main_tool_subtitle_detail"]}>웹 페이지 구조, 스타일링 및 사용자 인터페이스 구현</div>
                <div className={styles["main_tool_subtitle"]}>java</div>
                <div className={styles["main_tool_subtitle_detail"]}>객체지향 기반의 백엔드 로직 및 서버 개발</div>
                <div className={styles["main_tool_subtitle"]}>SQL (MySQL / PostgreSQL / Oracle SQL)</div>
                <div className={styles["main_tool_subtitle_detail"]}>관계형 데이터베이스 설계 및 SQL 기반 데이터 조작</div>
                <div className={styles["main_tool_subtitle"]}>Python</div>
                <div className={styles["main_tool_subtitle_detail"]}>데이터 처리 및 분석 자동화 (Jupyter, SageMaker 활용 기반)</div>
            </div>
            <div className={styles["main_tools"]}>
                <hr />
                <h2>Data & Analytics Tools</h2>
                <div className={styles["main_tool_img"]}>
                    <img src="/MyPortfolio/black/file-icons_sas.png" />
                    <img src="/MyPortfolio/black/devicon-plain_spss.png" />
                    <img src="/MyPortfolio/black/file-icons_rstudio.png" />
                    <img src="/MyPortfolio/black/simple-icons_anaconda.png" />
                    <img src="/MyPortfolio/black/devicon-plain_jupyter-wordmark.png" />
                </div>
                <div className={styles["main_tool_subtitle"]}>SAS / SPSS / R</div>
                <div className={styles["main_tool_subtitle_detail"]}>통계 분석 및 데이터 전처리 경험 기반 툴</div>
                <div className={styles["main_tool_subtitle"]}>Anaconda</div>
                <div className={styles["main_tool_subtitle_detail"]}>Python/R 기반 데이터 분석 환경 관리 및 패키지 관리 툴</div>
                <div className={styles["main_tool_subtitle"]}>Jupyter Notebook</div>
                <div className={styles["main_tool_subtitle_detail"]}>Python 기반의 데이터 분석 및 시각화 환경</div>
            </div>
        </div>
    )
}