import styles from './myProject.module.css'

export default function MyProject() {

    return (
        <div className={styles["myProject_container"]}>
            <div className={styles["myProject_list"]}>
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>01</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://github.com/delivery-moa/delivery-moa#readme' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/ubGucjKKdp6SW8nUKuf5D6/Delivery-moA?t=SjyZBHwkrOI1eFqt-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                        <a href='https://delivery-moa.github.io/delivery-moa/' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/line-md_link.png' /><div>사이트</div>
                        </a>
                    </div>
                </div>
                <img src="/videos/image.png" className={styles["project_img"]} />
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>배달모아 (위치기반 배달 공구 플랫폼)</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술스택</div>
                        <div className={styles["main_skill_img_box"]}>
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/raphael_js.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/html.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/css-solid.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/supabase.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/mdi_github.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/simple-icons_vite.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/cib_visual-studio-code.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/react-outline.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/postgresql.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/figma-linear.png' />
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>주요 기능</div>
                        <div className={styles["main_skill_explain"]}>
                            <ul>
                                <li>위치 기반 공구방 개설 및 참여</li>
                                <li>최소 주문 금액 충족을 위한 공동 주문 기능</li>
                                <li>카카오 주소 검색 및 지도 연동</li>
                                <li>사용자 평가 시스템</li>
                                <li>마이페이지, 공구방 관리</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2025.05</div>
                    </div>
                    <div className={styles["main_skill2"]}>
                        <div className={styles["main_skill_name"]}>설명</div>
                        <div className={styles["main_skill_explain"]}>
                            배달비 부담과 최소 주문 금액 문제를 해결하기 위해, 인근 사용자들과 배달 음식을 공동 주문할 수 있는 플랫폼을 개발했습니다.
                            Supabase를 활용해 실시간 데이터베이스, 인증, 공구방 참여 내역 등을 효율적으로 관리하고,
                            React 기반으로 사용자가 공구방을 쉽게 개설하고 참여할 수 있도록 직관적인 UI를 구현했습니다.
                            카카오 주소 API를 연동하여 위치 기반 필터링과 지도 시각화 기능을 제공했습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["myProject_list"]}>
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>02</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='/' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/DQraRyPtjLTLtwZEr1dncc/Rocket-Bookstore?node-id=6-37&t=1wYngmK6tiPRcNSV-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                        <a href='/' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/line-md_link.png' /><div>사이트</div>
                        </a>
                    </div>
                </div>
                <img src="/videos/Rocket-Bookstore.gif" className={styles["project_img"]} />
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>로켓북스토어 (1:1 실시간 배송 서점)</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술스택</div>
                        <div className={styles["main_skill_img_box"]}>
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/raphael_js.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/html.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/css-solid.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/devicon-plain_eclipse.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/sqldeveloper.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/la_java.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/apachetomcat.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/fontisto_oracle.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/figma-linear.png' />
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>주요 기능</div>
                        <div className={styles["main_skill_explain"]}>
                            <ul>
                                <li>고객이 주문한 도서를 배송원이 직접 1:1로 신속하게 배송</li>
                                <li>카테고리 및 키워드 기반 도서 검색</li>
                                <li>관리자 페이지 : 주문/배송 상태 관리, 도서 등록 및 재고 관리</li>
                                <li>로그인/회원가입/마이페이지/장바구니/주문내역 등 기본 이커머스 기능</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2025.02</div>
                    </div>
                    <div className={styles["main_skill2"]}>
                        <div className={styles["main_skill_name"]}>설명</div>
                        <div className={styles["main_skill_explain"]}>사용자가 주문한 도서를 쿠방이나 배달 앱처럼 배송원이 직접 1:1로 빠르게 전달하는 배송 시스템을 구현했습니다.
                            JSP와 Java Servlet 기반으로 백엔드를 구성했으며, 주문 처리와 배송 상태 관리를 효율적으로 처리하도록 설계했습니다.
                            관리자 페이지에서는 실시간으로 주문 내역을 확인하고, 배송 진행 상황을 업데이트할 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["myProject_list"]}>
                <video
                    className={styles["videoPlayer"]}
                    preload="metadata"
                    poster="/2023contest-01.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/2023contest2.mp4" type="video/mp4" />
                </video>
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>감지센서블럭을 활용한 불법주청차 단속 효율화</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술스택</div>
                        <div className={styles["main_skill_img_box"]}>
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/file-icons_rstudio.png' />
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>공모전</div>
                        <div className={styles["main_skill_explain"]}>2023년 광진구 빅데이터 활용 공모전</div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2023.05</div>
                    </div>
                    <div className={styles["main_skill2"]}>
                        <div className={styles["main_skill_name"]}>설명</div>
                        <div className={styles["main_skill_explain"]}>민원 1위인 불법주정차 문제 해결을 위해 감지 센서블럭 도입을 제안했습니다.
                            R을 활용한 빅데이터 분석을 통해 다발 지역과 CCTV 설치 필요 지역을 도출하고,
                            지도 시각화와 포인트 적립형 자원봉사 시스템을 도입하여 시민 참여를 유도했습니다.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}