import styled from 'styled-components';

export default function Menu() {
    return (
        <Div className="Rectangle-Copy-5">
            <Div className="MenuBox">
                <Span>홈</Span>
                <Div className="Menu">
                    <Span className="ClickedText">설정</Span>
                    {/* <Div className="Dropdown">
                        <Span className="DropClicked">공지사항</Span>
                        <Span className="Droptext">하이퍼링크</Span>
                        <Span className="Droptext">하이퍼링크</Span>
                    </Div> */}
                </Div>
                <Span>디자인</Span>
                <Div className="Menu">
                    <Span className="ClickedText">회원관리</Span>
                    {/* <Div className="Dropdown">
                        <Span className="Droptext">아이피 차단</Span>
                    </Div> */}
                </Div>
                <Div className="Menu">
                    <Span className="ClickedText">상품관리</Span>
                    {/* <Div className="Dropdown">
                        <Span className="Droptext">카테고리</Span>
                    </Div> */}
                </Div>
                <Div className="Menu">
                    <Span className="ClickedText">충전관리</Span>
                    {/* <Div className="Dropdown">
                        <Span className="Droptext">충전요청</Span>
                    </Div> */}
                </Div>
                <Span>판매내역</Span>
                <Span>수익통계</Span>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-5 {
        width: 1500px;
        height: 70px;
        border-radius: 16px;
        box-shadow: inset 0 1px 2px 0 #3dc5d6;
        background-image: radial-gradient(circle at 0 -42%, #12a7b8, #272a31 7%);
    }
    &.MenuBox {
        margin: 0px 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    &.Menu {
        display: flex;
        justify-content: center;
    }
    &.Dropdown {
        position: absolute;
        margin-top: 70px;
        width: 131px;
        padding: 20px 20px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
        border-radius: 6px;
        background-color: #35383f;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
`;
const Span = styled.span`
    padding: 19px 15px;
    margin: 0 20px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    color: #7a7c85;
    cursor: pointer;
    &.ClickedText {
        color: #3dc6d7;
        border-bottom: 4px solid #3dc5d6;
    }
    &.Droptext {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: #e5e8ea;
    }
    &.DropClicked {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
`;
