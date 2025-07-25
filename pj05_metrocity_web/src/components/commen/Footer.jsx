import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer1">
                <div className="foot-inner">
                    <div className="foot-menu">
                        <ul className="depth1">
                            <li>
                                <Link to="">METROCITY</Link>
                                <div className="sub">
                                    <ul>
                                        <li><Link to="">브랜드소개</Link></li>
                                        <li><Link to="">매장안내</Link></li>
                                        <li className="point"><Link to="">개인정보취급방침</Link></li>
                                        <li><Link to="">이용약관</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="">HELP</Link>
                                <div className="sub">
                                    <ul>
                                        <li><Link to="">고객센터</Link></li>
                                        <li><Link to="">1:1문의하기</Link></li>
                                        <li><Link to="">주문/배송 조회</Link></li>
                                        <li><Link to="">멤버십</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="">MY PAGE</Link>
                                <div className="sub">
                                    <ul>
                                        <li><Link to="">로그인</Link></li>
                                        <li><Link to="">회원가입</Link></li>
                                        <li><Link to="">아이디/비밀번호 찾기</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sns">
                                <Link to="">SNS</Link>
                                <div className="sub">
                                    <ul>
                                        <li><Link to=""><img src="/images/f-sns-1.jpg" alt="페이스북" /></Link></li>
                                        <li><Link to=""><img src="/images/f-sns-2.jpg" alt="인스타그램" /></Link></li>
                                        <li><Link to=""><img src="/images/f-sns-3.jpg" alt="유튜브" /></Link></li>
                                        <li><Link to=""><img src="/images/f-sns-4.jpg" alt="카카오 채널" /></Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="f-cs">
                        <h4>Online Cs Center</h4>
                        <div className="f-cs-content">
                            <p className="phone">1566-1165</p>
                            <p className="email">Webmaster@metrocity.co.kr</p>
                            <p className="time">
                                MON - THU 10:30 ~ 17:30<br />
                                (Lunch 12:30 ~ 13:30)<br />
                                EVERY Fri - Sun HOLIDAY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="foot-inner">
                    <div className="cols">
                        <h4>Company</h4>
                        <div className="cols-content">
                            (주)엠티콜렉션 <span className="bar">|</span> 대표이사 : 양지해<br />
                            06014 서울특별시 강남구 도산대로 417 (청담동) <span className="bar">|</span> 사업자등록번호 : 218-81-20703   <Link to="">사업자정보확인</Link><br />
                            통신판매업신고 : 제 2018-서울강남-00416 호 <span className="bar">|</span> 개인정보관리책임자 : 유종오<br />
                            COPYRIGHT METROCITY. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                    <div className="cols">
                        <h4>소비자피해보상 보상보험</h4>
                        <div className="cols-content">
                            고객님은 안전거래를 위해 현금 등으로 결제시 쇼핑몰에서 가입한 구매안전 서비스로<br />
                            소비자 피해보상보험 서비스를 이용할수 있습니다. <Link to="">서비스 가입사실확인</Link>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="go-top"><button><span>상단으로 바로가기</span></button></div>
        </footer>
    )
}

export default Footer;