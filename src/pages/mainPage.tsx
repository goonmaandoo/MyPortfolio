import styles from './mainpage.module.css'

export default function MainPage() {

    return (
        <>
            <header />
            <main className={styles["main_container"]}>
                <div className={styles["main_body"]}>
                    <div className={styles["main_gap"]}>
                        <div className={styles["main_first"]}>
                            <div className={styles["main_title"]}>One's Portfolio.</div>
                        </div>
                        <div className={styles["main_box"]}>
                            <div className={styles["main_display"]}>
                                <div className={styles["main_img"]} />
                            </div>
                        </div>
                    </div>
                    <div className={styles["main_ABILITIES"]}>
                        <h2>Intro</h2>
                        <div className={styles["main_key"]}>"데이터와 사용자를 모두 이해하여 <br></br>문제를 해결하는 풀스택 개발자입니다."</div>
                        <div className={styles["main_sub"]}>사용자의 니즈를 깊이 파악하고, 기술로 실질적인 가치를 만듭니다. <br/>프론트엔드부터 백엔드까지 전체 과정을 아우르며 완성도 높은 서비스를 구현합니다.</div>
                    </div>
                    <div className={styles["main_profile"]}>
                        <div className={styles["main_profile_text"]}>
                            <hr />
                            <div>
                                <div className={styles["main_profile_title"]}>
                                    <h2>About</h2>
                                    <div className={styles["main_profile_content"]}>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</div>
                                </div>
                                <div className={styles["main_profile_detail_bo"]}>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ width : "100px" }}>생년월일</div>
                                        <div>2000.05.25</div>
                                    </div>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ letterSpacing: "0.5em", width : "100px" }}>연락처</div>
                                        <div>010-2260-4021</div>
                                    </div>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ letterSpacing: "0.5em", width : "100px" }}>이메일</div>
                                        <div>won020738@naver.com</div>
                                    </div>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ letterSpacing: "1.9rem", width : "100px"}}>학력</div>
                                        <div>2025.02 통계학과 졸업</div>
                                    </div>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ letterSpacing: "0.5em", width : "100px" }}>자격증</div>
                                        <div>SQL개발자(SQLD) / SQL전문가(SQLP) / 정보처리기사 / ADSP</div>
                                    </div>
                                    <hr/>
                                    <div className={styles["main_profile_detail"]}>
                                        <div className={styles["table_title"]} style={{ letterSpacing: "0.5em", width : "100px" }}>자격증</div>
                                        <div>SQL개발자(SQLD) / SQL전문가(SQLP) / 정보처리기사 / ADSP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={styles["main_profile_img"]} src="/KakaoTalk_20250711_173649900.jpg"/>
                    </div>
                    {/* <hr style={{ marginBottom: "20px"}}/> */}
                    <h2 className={styles["abil"]}>Abilities</h2>
                    <div className={styles["main_tool"]}>
                        <div className={styles["main_tools"]}>
                            <hr />
                            <h2>IDE & Dev Tools</h2>
                            <div className={styles["main_tool_img"]}>
                                <img src="/sqldeveloper.png" />
                                <img src="/devicon-plain_eclipse.png" />
                                <img src="/cib_visual-studio-code.png" />
                                <img src="/mdi_github.png" />
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
                                <img src="/simple-icons_spring.png" />
                                <img src="/apachetomcat.png" />
                                <img src="/supabase.png" />
                                <img src="/lineicons_aws.png" />
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
                                <img src="/react-outline.png" />
                                <img src="/simple-icons_vite.png" />
                                <img src="/figma-linear.png" />
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
                                <img src="/html.png" />
                                <img src="/css-solid.png" />
                                <img src="/raphael_js.png" />
                                <img src="/la_java.png" />
                                <img src="/mysql.png" />
                                <img src="/fontisto_oracle.png" />
                                <img src="/python.png" />
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
                            <div className={styles["main_tool_img_"]}>
                                <img src="/file-icons_sas.png" />
                                <img src="/devicon-plain_spss.png" />
                                <img src="/file-icons_rstudio.png" />
                                <img src="/simple-icons_anaconda.png" />
                                <img src="/devicon-plain_jupyter-wordmark.png" />
                            </div>
                            <div className={styles["main_tool_subtitle"]}>SAS / SPSS / R</div>
                            <div className={styles["main_tool_subtitle_detail"]}>통계 분석 및 데이터 전처리 경험 기반 툴</div>
                            <div className={styles["main_tool_subtitle"]}>Anaconda</div>
                            <div className={styles["main_tool_subtitle_detail"]}>Python/R 기반 데이터 분석 환경 관리 및 패키지 관리 툴</div>
                            <div className={styles["main_tool_subtitle"]}>Jupyter Notebook</div>
                            <div className={styles["main_tool_subtitle_detail"]}>Python 기반의 데이터 분석 및 시각화 환경</div>
                        </div>
                    </div>
                    <hr style={{ margin: "40px 0px"}}/>
                    <div className={styles["abil"]}>My Project</div>
                    <div></div>
                </div>
            </main>

        </>

    )
}