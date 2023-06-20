import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('../Admin/Calendar'), { ssr: false });

export default function SellLog() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="TopBox">
                    <Span className="Title">판매내역</Span>
                    <Div className="Top">
                        <Div className="InputBox">
                            <Span>아이디</Span>
                            <Img src="/assets/images/icon-a-right-gray.png" />
                        </Div>
                        <Div className="LinkDropdown">
                            <Span>아이디</Span>
                            <Span>상품명</Span>
                            <Span>상품</Span>
                        </Div>
                        <Input />
                        <Btn className="SearchBtn">
                            <Span className="BtnText">검색</Span>
                        </Btn>
                    </Div>
                    <Div className="Top">
                        <Calendar />
                        <Btn className="ApplyBtn">
                            <Span className="BarText">적용</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Bar">
                    <Span className="BarText">NO</Span>
                    <Span className="BarText">판매날짜</Span>
                    <Span className="BarText">유저아이디</Span>
                    <Span className="BarText">상품명</Span>
                    <Span className="BarText">단위</Span>
                    <Span className="BarText">금액</Span>
                    <Span className="BarText">상품</Span>
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>2022-05-30 22:10:05</Span>
                    <Span>김길동</Span>
                    <Span>우디르</Span>
                    <Span>1일</Span>
                    <Span>6,000원</Span>
                    <Span>Udyr-dasdqwdasddas</Span>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>1</Span>
                    <Span>2022-05-30 22:10:05</Span>
                    <Span>김길동</Span>
                    <Span>우디르</Span>
                    <Span>1일</Span>
                    <Span>6,000원</Span>
                    <Span>Udyr-dasdqwdasddas</Span>
                </Div>
            </Div>
            <Div className="PageBox">
                <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                <Div className="CheckedText">1</Div>
                <Div className="PageText">2</Div>
                <Div className="PageText">3</Div>
                <Div className="PageText">4</Div>
                <Div className="PageText">5</Div>
                <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 1500px;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.TopBox {
        width: 100%;
        padding: 21px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Top {
        display: flex;
        align-items: center;
    }
    &.Bar {
        display: grid;
        padding: 0px 40px;
        place-items: center;
        height: 50px;
        width: 100%;
        grid-template-columns: 5fr 22fr 13fr 13fr 9fr 13fr 22fr;
        background-color: #31333a;
        text-align: center;
    }
    &.Info {
        display: grid;
        width: 100%;
        grid-template-columns: 5fr 22fr 13fr 13fr 9fr 13fr 22fr;
        text-align: center;
        padding: 0px 40px;
        place-items: center;
        height: 76px;
        border-radius: 16px;
    }
    &.InputBox {
        cursor: pointer;
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        cursor: pointer;
    }
    &.LinkDropdown {
        position: absolute;
        margin-top: 210px;
        width: 180px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
        padding: 20px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
        cursor: pointer;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
        align-items: center;
    }
    &.PageText {
        width: 44px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #7a7c85;
        cursor: pointer;
    }
    &.CheckedText {
        width: 44px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #00abbf;
        color: #fff;
        cursor: pointer;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.46;
    font-weight: normal;
    font-size: 15px;
    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
    &.BtnText {
        color: #fff;
        weight: 600;
    }
`;
const Input = styled.input`
    height: 46px;
    width: 250px;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    padding: 10px;
    margin: 0 14px;
    font-size: 17px;
    font-weight: normal;
    color: #fff;
    outline: none;
`;
const Btn = styled.button`
    &.ApplyBtn {
        width: 140px;
        height: 46px;
        padding: 11px 27px;
        border-radius: 10px;
        margin-left: 20px;
        background-color: #00abbf;
    }
    &.SearchBtn {
        height: 46px;
        padding: 11px 27px;
        border-radius: 10px;
        background-color: #f34a7e;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
        margin: 0 10px;
        cursor: pointer;
    }
`;
