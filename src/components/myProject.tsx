import styles from './myProject.module.css'

export default function MyProject() {

    return (
        <div className={styles["myProject_container"]}>
            <div className={styles["myProject_list"]}>
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>01</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://github.com/goonmaandoo/FinalProjectReact#readme' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/V09ILMAQtjde4BJue4d4IW/%EB%B0%B0%EB%8B%AC%EB%AA%A8%EC%95%84-%EC%B5%9C%EC%A2%85%EB%B0%9C%ED%91%9C-%EC%B5%9C%EC%A2%85%EB%B3%B8?node-id=1-447&t=fLzGQTJAIZmtZIBD-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                        <a href='https://delivery-moa.github.io/delivery-moa/' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/line-md_link.png' /><div>사이트</div>
                        </a>
                    </div>
                </div>
                <div className={styles["project_img_container"]}>
                    <div className={styles["project_img_box"]}></div>
                    <img src="/MyPortfolio/videos/image.png" className={styles["project_img_cover"]} />
                </div>
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>배달모아(리뉴얼)</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술스택</div>
                        <div className={styles["main_skill_img_box"]}>
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/raphael_js.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/html.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/css-solid.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/la_java.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/fontisto_oracle.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/sqldeveloper.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/mysql.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/lineicons_aws.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/mdi_github.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/simple-icons_spring.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/simple-icons_vite.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/cib_visual-studio-code.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/simple-icons_vite.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/mdi_github.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/intellij.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/lineicons_aws.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/docker.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/react-outline.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/nodejs.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/figma-linear.png' />
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>주요 기능</div>
                        <div className={styles["main_skill_explain"]}>
                            <ul>
                                <li>- 위치 기반 공구방 개설 및 참여</li>
                                <li>- 최소 주문 금액 충족을 위한 공동 주문 기능</li>
                                <li>- 카카오 주소 검색 및 지도 연동</li>
                                <li>- 사용자 평가 시스템</li>
                                <li>- 마이페이지, 공구방 관리</li>
                                <li>- 사장님 페이지를 통한 실시간 주문 관리</li>
                                <li>- 관리자 페이지 및 서비스 모니터링</li>
                                <li>- AWS 기반 클라우드 인프라 운영</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2025.07 ~ 2025.08</div>
                    </div>
                    <div className={styles["main_skill2"]}>
                        <div className={styles["main_skill_name"]}>설명</div>
                        <div className={styles["main_skill_explain"]}>
                        기존 배달모아 프로젝트의 한계점을 개선한 Spring Boot 기반 풀스택 리뉴얼 버전입니다.
                        Supabase에서 Oracle DB + Docker 컨테이너로 데이터베이스 환경을 전환하여 개발 환경을 표준화하고,
                        AWS S3를 활용한 이미지 파일 관리로 서버 부하를 분산했습니다.
                        사장님 페이지와 관리자 페이지를 신규 개발하여 기존 타이머 기반 자동 상태 변경에서 사장님이 직접 조리 상태와 배송 현황을 관리할 수 있도록 개선했습니다.
                        AWS EC2를 통한 배포 및 Docker 컨테이너 환경으로 실제 서비스 운영에 적합한 인프라를 구축했습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["myProject_list"]}>
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>02</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://github.com/delivery-moa/delivery-moa#readme' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/ubGucjKKdp6SW8nUKuf5D6/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%88%ED%8D%BC%EB%B2%A0%EC%9D%B4%EC%8A%A4-PPT?node-id=247-448&t=fLzGQTJAIZmtZIBD-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                        <a href='https://delivery-moa.github.io/delivery-moa/' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/line-md_link.png' /><div>사이트</div>
                        </a>
                    </div>
                </div>
                <img src="delivery_moa_purple.png" className={styles["project_img"]} />
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
                                <li>- 위치 기반 공구방 개설 및 참여</li>
                                <li>- 최소 주문 금액 충족을 위한 공동 주문 기능</li>
                                <li>- 카카오 주소 검색 및 지도 연동</li>
                                <li>- 사용자 평가 시스템</li>
                                <li>- 마이페이지, 공구방 관리</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2025.05 ~ 2025.06</div>
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
                    <div className={styles["main_skill_number"]}>03</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://github.com/rlaksl/RocketBookstore' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/DQraRyPtjLTLtwZEr1dncc/Rocket-Bookstore?node-id=6-37&t=1wYngmK6tiPRcNSV-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                    </div>
                </div>
                <img src="/MyPortfolio/videos/Rocket-Bookstore.gif" className={styles["project_img"]} />
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>로켓북스토어 (1:1 실시간 배송 서점)</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술 스택</div>
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
                        <div className={styles["main_skill_name"]}>기술 구현</div>
                        <div className={styles["main_skill_explain"]}>JSP프로젝트</div>
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
                        <div className={styles["main_skill_explain"]}>2025.03</div>
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
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>04</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://github.com/goonmaandoo/miniPrject' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img1"]} src='/MyPortfolio/black/mdi_github.png' /><div>Github</div>
                        </a>
                        <a href='https://www.figma.com/deck/ut6G5uChWLPaJqexIZMxGK/%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=1-374&t=IRNjA1JBQCAAmEQM-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                    </div>
                </div>
                <img src="miniProject.png" className={styles["project_img"]} />
                <div className={styles["main_skill_text"]}>
                    <div className={styles["main_skill_title"]}>미니 프로젝트 - 영화예매 시스템</div>
                    <hr />
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술스택</div>
                        <div className={styles["main_skill_img_box"]}>
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/devicon-plain_eclipse.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/sqldeveloper.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/la_java.png' />
                            <img className={styles["main_skill_img"]} src='/MyPortfolio/black/fontisto_oracle.png' />
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>기술 구현</div>
                        <div className={styles["main_skill_explain"]}>JDBC프로젝트</div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>주요 기능</div>
                        <div className={styles["main_skill_explain"]}>
                            <ul>
                                <li> - 고객 추가 , 수정 및 삭제 :  새로운 고객을 추가하거나 기존 고객의 정보 (name, phone) 을 수정하거나 삭제할수 있다.</li>
                                <li> - 영화 예매  : 고객은 원하는 영화를 예매할 수 있다. </li>
                                <li> - 예매 조회  :  고객 id로 영화 예매 내역을 조회할 수 있다.</li>
                                <li> - 예매 정보 수정  :  예매번호로 상영시간, 좌석을 수정할 수 있다.</li>
                                <li> - 예매 취소 : 예매번호로 예매한 영화를 취소할 수 있다</li>
                                <li> - 관리자 모드  :  관리자는 영화 및 예매 내역을 관리할 수 있다. </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["main_skill"]}>
                        <div className={styles["main_skill_name"]}>참여 시기</div>
                        <div className={styles["main_skill_explain"]}>2025.02</div>
                    </div>
                    <div className={styles["main_skill2"]}>
                        <div className={styles["main_skill_name"]}>설명</div>
                        <div className={styles["main_skill_explain"]}>이 프로젝트는 데이터베이스를 연결하여 고객 관리 및 영화 예매 관리를 할 수 있는 프로그램입니다.
                            고객 추가, 수정, 영화 예매 및 다양한 영화 관련 기능을 가지고 있습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["myProject_list"]}>
                <div className={styles["main_skill_link"]}>
                    <div className={styles["main_skill_number"]}>05</div>
                    <div className={styles["main_about_a_list"]}>
                        <a href='https://www.figma.com/proto/IxN1wVlsIjldP6F8vRcsLO/Untitled?node-id=0-1&t=vWUavoM4HNY7fV0S-1' target="_blank" className={styles["main_about_a"]}>
                            <img className={styles["main_skill_img2"]} src='/MyPortfolio/color/logos_figma.png' /><div>PPT</div>
                        </a>
                    </div>
                </div>
                <video
                    className={styles["videoPlayer"]}
                    preload="metadata"
                    poster="/MyPortfolio/2023contest-01.png"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/MyPortfolio/videos/2023contest2.mp4" type="video/mp4" />
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