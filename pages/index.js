import styled from 'styled-components';
import Side from '../components/Etc/SIde';
import Header from '../components/Static/Header';
import Menu from '../components/Admin/Menu';
import Main from '../components/Admin/Main';
import Setting from '../components/Admin/Setting';
import Notice from '../components/Admin/Notice';

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
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Setting />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Notice />
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
                            <Div className="LinkTop">
                                <Span className="LinkText" weight="bold" size="26px">
                                    하이퍼링크
                                </Span>
                            </Div>
                            <Div className="LinkPlusBox">
                                <Span className="LinkText" weight="bold" size="22px" width="77px">
                                    링크추가
                                </Span>
                                <Div className="LinkPlus">
                                    <Span className="LinkText" width="26px" weight="normal" size="15px">
                                        이름
                                    </Span>
                                    <Input placeholder="이름" className="Rectangle-Copy-10" width="220px"></Input>

                                    <Span className="LinkText" width="135px" weight="normal" size="15px">
                                        링크 URL(http://필수)
                                    </Span>
                                    <Input placeholder="링크 URL" className="Rectangle-Copy-10" width="600px"></Input>

                                    <Span className="LinkText" width="112px" weight="normal" size="15px">
                                        구매자 이상만 보기
                                    </Span>
                                    <Div className="Rectangle-Copy-10" width="220px">
                                        <p>아니요</p>
                                        <Img src="/assets/images/icon-a-right-gray.png" className="IconARightGray16"></Img>
                                    </Div>
                                    <Div className="LinkDropdown">
                                        <Span className="Dropdown_text">예</Span>
                                        <Span className="Dropdown_text">아니요</Span>
                                    </Div>
                                    <Btn className="Rectangle-Copy-6">+ 추가하기</Btn>
                                </Div>
                                <Span className="LinkText" weight="bold" size="22px" width="77px">
                                    링크관리
                                </Span>
                            </Div>
                            <Div className="LinkBar">
                                <Span className="LinkText" weight="bold" size="16px" width="50px">
                                    NO
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    이름
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="600px">
                                    링크
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    구매자이상 보이기
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="60px"></Span>
                            </Div>
                            <Div className="LinkInfo">
                                <Span className="LinkText" weight="bold" size="16px" width="50px">
                                    <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    텔레그램 공지방
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="600px">
                                    https://t.me.+GaJUth56dVKNFGI
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    아니오
                                </Span>
                                <Btn className="Rectangle-Copy-7">삭제</Btn>
                            </Div>
                            <Div className="LinkInfo">
                                <Span className="LinkText" weight="bold" size="16px" width="50px">
                                    <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    텔레그램 관리자문의
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="600px">
                                    https://t.me.+GaJUth56dVKNFGI
                                </Span>
                                <Span className="LinkText" weight="bold" size="16px" width="220px">
                                    아니오
                                </Span>
                                <Btn className="Rectangle-Copy-7">삭제</Btn>
                            </Div>
                        </Div>
                        <Div className="PageBox">
                            <Div className="PageBar">
                                <Div className="Rectangle-Copy-17">
                                    <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                                </Div>
                                <Div className="Rectangle-Copy-17">
                                    <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                                </Div>
                                <Div className="CheckedNum">
                                    <Div className="Rectangle-Copy-17" color="#fff">
                                        1
                                    </Div>
                                </Div>
                                <Div className="Rectangle-Copy-17" color="#7a7c85">
                                    2
                                </Div>
                                <Div className="Rectangle-Copy-17" color="#7a7c85">
                                    3
                                </Div>
                                <Div className="Rectangle-Copy-17" color="#7a7c85">
                                    4
                                </Div>
                                <Div className="Rectangle-Copy-17" color="#7a7c85">
                                    5
                                </Div>
                                <Div className="Rectangle-Copy-17" color="#7a7c85">
                                    <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                                </Div>
                                <Div className="Rectangle-Copy-17">
                                    <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
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
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        margin-top: 40px;
        padding-bottom: 15px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.LinkTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        border-bottom: 1px solid #3d3f45;
    }
    &.LinkPlusBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        flex-direction: column;
    }
    &.LinkPlus {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px 0;
        margin-bottom: 25px;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 15px;
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
    &.LinkDropdown {
        position: absolute;
        margin-left: 1213px;
        margin-top: 180px;
        width: 220px;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #31333a;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    &.LinkBar {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px 100px 10px 40px;
        background-color: #31333a;
    }
    &.LinkInfo {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px 100px 10px 40px;
        background-color: #272a31;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
    }
    &.PageBar {
        display: flex;
    }
    &.Rectangle-Copy-17 {
        width: 44px;
        height: 44px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        display: flex;
        letter-spacing: normal;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.color};
    }
    &.CheckedNum {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #00abbf;
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
    &.LinkText {
        width:${(props) => props.width};
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #e5e8ea;
        text-align:center;
    }


`;
const Input = styled.input`
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
        width: 104px;
        height: 40px;
        padding: 8px 19px;
        border-radius: 10px;
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
    &.Rectangle-Copy-7 {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: #f34a7e;
    }
`;

const Img = styled.img`
    &.IconARightGray16 {
        width: 20px;
        height: 16px;
        object-fit: contain;
    }
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
