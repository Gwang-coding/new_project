import styled from 'styled-components';

export default function Menu() {
    return (
        <Div className="Rectangle-Copy-5">
            <Div className="MenuBox">
                <Span className="MenuHomeText">홈</Span>
                <Span className="MenuText">설정</Span>
                <Span className="MenuText">디자인</Span>
                <Span className="MenuText">회원관리</Span>
                <Span className="MenuText">상품관리</Span>
                <Span className="MenuText">충전관리</Span>
                <Span className="MenuText">판매내역</Span>
                <Span className="MenuText">수익통계</Span>
            </Div>
        </Div>
    );
}

const Div = styled.div`
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
        color: #3dc6d7;
        border-bottom: 4px solid #3dc5d6;
        cursor: pointer;
    }
    &.MenuText {
        margin: 0 25px;
        padding: 16px 15px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #7a7c85;
        cursor: pointer;
    }
`;
