import styled from 'styled-components';
import Side from '../components/Etc/SIde';
import Header from '../components/Static/Header';
import Menu from '../components/Admin/Menu';
import Main from '../components/Admin/Main';

export default function Home() {
    return (
        <>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Main />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Div className="Rectangle-Copy-5">
                            <Div className="MenuBox">
                                <Span className="MenuHomeText">홈</Span>
                                <Span className="MenuText" border="4px solid #3dc5d6" color="#3dc6d7">
                                    설정
                                </Span>
                                <Div className="Dropdown">
                                    <Span className="Dropdown_text">공지사항</Span>
                                    <Span className="Dropdown_text">하이퍼링크</Span>
                                    <Span className="Dropdown_text">하이퍼링크</Span>
                                </Div>
                                <Span className="MenuText" color="#7a7c85">
                                    디자인
                                </Span>
                                <Span className="MenuText" border="4px solid #3dc5d6" color="#3dc6d7">
                                    회원관리
                                </Span>
                                <Span className="MenuText" border="4px solid #3dc5d6" color="#3dc6d7">
                                    상품관리
                                </Span>
                                <Span className="MenuText" border="4px solid #3dc5d6" color="#3dc6d7">
                                    충전관리
                                </Span>
                                <Span className="MenuText" color="#7a7c85">
                                    판매내역
                                </Span>
                                <Span className="MenuText" color="#7a7c85">
                                    수익통계
                                </Span>
                            </Div>
                        </Div>
                        <Div className="Rectangle-Copy-15"></Div>
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Div className="Rectangle-Copy-15">
                            <Div className="SettingTop">
                                <Span className="SettingTitle">설정</Span>
                                <Btn className="Rectangle-Copy-6"> 적용하기</Btn>
                            </Div>
                            <Div className="SettingBottom">
                                <Div className="SettingWrapper" border="1px solid #3d3f45" flex="column">
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            사이트명
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            사이트 설명
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            키워드 검색
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            휴대폰번호
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            고유번호
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Div className="SettingToggle">
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                계좌이체 이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-on">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                카카오페이 이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                문화상품권 이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                1:1채팅 문의 이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                텔레그램 알림받기
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                충전시 알림음
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                    <Div className="SettingToggle">
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                긴급공지 사용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                방문자수 표시
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                인기순위 표시
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                구매로그 표시
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                재고수 표시
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                가입시 관리자 승인 필수 사용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                    </Div>
                                    <Div className="SettingToggle">
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                사이트 점검중
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                첫 충전 문화상품권 이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                회원가입 SMS인증
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                누적 충전금이상 계좌이체이용
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Input className="Rectangle-Copy-10" width="100%"></Input>
                                        <Div className="SettingBox">
                                            <Span className="SettingText" size="18px">
                                                파일함 URL
                                            </Span>
                                            <Div className="Rectangle-Copy-2-off">
                                                <Div className="Oval-Copy-2"></Div>
                                            </Div>
                                        </Div>
                                        <Input className="Rectangle-Copy-10" width="100%"></Input>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Div className="SettingBox" width="48%">
                                        <Span className="SettingText" width="30%" size="18px">
                                            텔레그램 chat id <br />
                                            (알림받기용)
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="65%"></Input>
                                    </Div>
                                    <Div className="SettingBox" width="48%">
                                        <Span className="SettingText" width="30%" size="18px">
                                            문의받기 chat id
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="65%"></Input>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Span className="SettingText" width="17%" size="18px">
                                        등급별 상승금액
                                    </Span>
                                    <Div className="PercentWrapper">
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                RVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Span className="SettingText" width="17%" size="18px">
                                        충전혜택
                                    </Span>
                                    <Div className="PercentWrapper">
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                해당금액 이상 충전시
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                비구매자
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                구매자
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                리셀러
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                RVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Span className="SettingText" width="17%" size="18px">
                                        문화상품권 수수료
                                    </Span>
                                    <Div className="PercentWrapper">
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                해당금액 이상 충전시
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                비구매자
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                구매자
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                리셀러
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                VVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                RVIP
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />%
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Span className="SettingText" width="17%" size="18px">
                                        계좌 정보
                                    </Span>
                                    <Div className="PercentWrapper">
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                은행
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                예금주
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                계좌번호
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="215%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            카카오페이 주소
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            기본 입금액
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="1px solid #3d3f45">
                                    <Span className="SettingText" width="17%" size="18px">
                                        컬처랜드 인증
                                    </Span>
                                    <Div className="PercentWrapper">
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                컬처랜드 아이디
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                        <Div className="PercentBox">
                                            <Span className="SettingText" size="15px">
                                                컬처랜드 비밀번호
                                            </Span>
                                            <Div className="Rectangle-Copy-10" width="100%">
                                                <Input className="Rectangle-noboder" width="90%" />
                                            </Div>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="SettingWrapper" border="none">
                                    <Div className="SettingBox" width="100%">
                                        <Span className="SettingText" width="17%" size="18px">
                                            구매로그 디스코드 웹훅
                                        </Span>
                                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Section>
        </>
    );
}
const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Div = styled.div`
    &.Rectangle-Copy {
        width: 85%;
        background-color: #1b1e24;
    }
    &.Main {
        margin: 50px 80px;
    }
    &.Rectangle-Copy-5 {
        width: 100%;
        border-radius: 16px;
        box-shadow: inset 0 1px 2px 0 #3dc5d6;
        background-image: radial-gradient(circle at 0 -42%, #12a7b8, #272a31 7%);
    }
    &.MenuBox {
        margin: 0px 25px;
        padding: 15px 0px;
    }
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.Dropdown {
        position: absolute;
        margin: 15px 0px 0px 85px;
        width: 131px;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #35383f;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    &.SettingTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.SettingBottom {
        width: 100%;
        padding: 0px 40px;
    }
    &.SettingWrapper {
        width: 100%;
        padding: 25px 0px 10px 0px;
        border-bottom: ${(props) => props.border};
        display: flex;
        flex-direction: ${(props) => props.flex};
        justify-content: space-between;
    }
    &.SettingBox {
        width: ${(props) => props.width};
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
    }
    &.Rectangle-Copy-2-on {
        width: 62px;
        height: 32px;
        padding: 4px 4px 4px 34px;
        border-radius: 100px;
        background-color: #00abbf;
    }
    .Rectangle-Copy-2-off {
        width: 62px;
        height: 32px;

        padding: 4px 34px 4px 4px;
        border-radius: 100px;
        background-color: #474950;
    }

    &.Oval-Copy-2 {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
    }
    &.SettingToggle {
        width: 21%;
        display: flex;
        flex-direction: column;
    }
    &.PercentWrapper {
        width: 83%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &.PercentBox {
        width: 90%;
    }
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;
        margin: 10px 0px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
`;

const Span = styled.span`
    &.MenuHomeText {
        padding: 16px 15px;
        margin: 0 25px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #7a7c85;
    }
    &.MenuText {
        padding: 16px 15px;
        margin: 0 25px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: ${(props) => props.color};
        border-bottom: ${(props) => props.border};
    }
    &.Dropdown_text {
        margin: 14px 0;
        font-family: Pretendard;
        font-size: 16px;
        opecity:0
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.SettingTitle{
      width: 45px;
      font-family: Pretendard;
      font-size: 26px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.46;
      letter-spacing: normal;
      color: #e5e8ea;
    }
    &.SettingText{
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #e5e8ea;
    }

`;
const Input = styled.input`
    &.Rectangle-noboder {
        width: ${(props) => props.width};
        height: 50px;

        border-radius: 10px;
        margin-bottom: 10px;
        border: none;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-noboder :focus {
        outline: none;
    }
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;

        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-Copy-10 :focus {
        outline: none;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-6 {
        width: 90px;
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #fff;
    }
`;
const Img = styled.img``;
