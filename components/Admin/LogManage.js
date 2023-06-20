import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('../Admin/Calendar'), { ssr: false });

export default function LogManage() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="LogManageTopBox">
                    <Span className="Title">유저 [adascdasd] 로그</Span>
                    <Div className="LogManageTop">
                        <Calendar />
                        <Btn>
                            <Span className="BtnText">적용</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Bar">
                    <Span className="BarText">충전날짜</Span>
                    <Span className="BarText">아이피</Span>
                    <Span className="BarText">행동(보유금 부족)</Span>
                    <Span className="BarText">설명</Span>
                </Div>
                <Div className="Info">
                    <Span>2022-05-30 22:10:05</Span>
                    <Span>559.295.456</Span>
                    <Span>구입성공</Span>
                    <Span>[우디르 12시간 13,000원] Udyr-asdadawdasdqwdasd</Span>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>2022-05-30 22:10:05</Span>
                    <Span>559.295.456</Span>
                    <Span>구입성공</Span>
                    <Span>[우디르 12시간 13,000원] Udyr-asdadawdasdqwdasd</Span>
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
    &.LogManageTopBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.LogManageTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Bar {
        display: grid;
        grid-template-columns: 22fr 22fr 13fr 52fr;
        padding: 0px 40px;
        height: 50px;
        place-items: center;
        text-align: center;
        width: 100%;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        grid-template-columns: 22fr 22fr 13fr 52fr;
        width: 100%;
        margin: 1px 0;
        place-items: center;
        height: 74px;
        text-align: center;
        padding: 20px 40px;
        background-color: #272a31;
        border-radius: 16px;
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
        color: #fff;
        cursor: pointer;
        border-radius: 50%;
        background-color: #00abbf;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.46;
    color: #e5e8ea;
    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.BtnText {
        font-weight: 600;
        color: #fff;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
`;
const Input = styled.input``;
const Btn = styled.button`
    width: 150px;
    height: 46px;
    padding: 5px 20px;
    border-radius: 10px;
    background-color: #00abbf;
    margin-left: 10px;
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
        margin: 0 10px;
        cursor: pointer;
    }
`;
