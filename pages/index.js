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
        </>
    );
}
const Section = styled.section`
    width: 100%;
    height: 100vh;
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
        height: 400px;
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
`;
const Img = styled.img``;
