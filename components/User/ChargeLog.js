import styled from 'styled-components';

export default function ChargeLog() {
    return (
        <Div className="Wrapper">
            <Div className="Top">
                <Div className="NameBox">
                    <Span className="ID">Messi8090</Span>
                    <Span className="Rank">VIP</Span>
                </Div>
                <Div className="TopText">
                    <Img src="/assets/images/icon-chargemoney.png" className="point" />
                    <Span className="Point">총 충전 금액 : 320,400원</Span>
                    <Img src="/assets/images/icon-purchasemoney.png" className="point" />
                    <Span className="Point">총 구매 금액 : 320,400원</Span>
                </Div>
                <Div className="BtnBox">
                    <Span className="Menu">구매내역</Span>
                    <Span className="Clicked">충전내역</Span>
                    <Span className="Menu">파일함</Span>
                    <Span className="Menu">회원정보수정</Span>
                </Div>
            </Div>
            <Div className="Box">
                <Div className="TopBox">
                    <Span className="Title">충전내역</Span>
                </Div>
                <Div className="Bar">
                    <Span className="BarText">NO</Span>
                    <Span className="BarText">충전날짜</Span>
                    <Span className="BarText">입금자명</Span>
                    <Span className="BarText">충전방법</Span>
                    <Span className="BarText">금액</Span>
                    <Span className="BarText">결과</Span>
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>2022-06-30 16:38:40</Span>
                    <Span>홍길동</Span>
                    <Span>
                        <Span className="Account">계좌이체</Span>
                    </Span>
                    <Span>6,000원</Span>
                    <Span>
                        <Span className="Success">성공</Span>
                    </Span>
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>2022-06-30 16:38:40</Span>
                    <Span>홍길동</Span>
                    <Span>
                        <Span className="Munsang">문화상품권</Span>
                    </Span>
                    <Span>6,000원</Span>
                    <Span>
                        <Span className="Fail">실패</Span>
                    </Span>
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>2022-06-30 16:38:40</Span>
                    <Span>홍길동</Span>
                    <Span>
                        <Span className="Kakao">카카오페이</Span>
                    </Span>
                    <Span>6,000원</Span>
                    <Span>
                        <Span className="Success">성공</Span>
                    </Span>
                </Div>
                <Div className="PageBox">
                    <Div className="PageText">
                        <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="PageText">
                        <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="CheckedText">1</Div>
                    <Div className="PageText">2</Div>
                    <Div className="PageText">3</Div>
                    <Div className="PageText">4</Div>
                    <Div className="PageText">5</Div>
                    <Div className="PageText">
                        <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="PageText">
                        <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        display: flex;
        flex-direction: column;
    }

    &.Box {
        width: 1320px;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.NameBox {
        display: flex;
        align-items: center;
    }
    &.TopText {
        display: flex;
        justify-content: space-between;
        width: 33%;
        align-items: center;
        margin-bottom: 10px;
    }
    &.TopBox {
        padding: 25px 40px;
    }
    &.BtnBox {
        display: flex;
        text-align: center;
    }
    &.Top {
        width: 1320px;
        height: 184px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 16px;
        padding: 30px 40px 0;
        background-color: #272a31;
    }
    &.Bar {
        display: grid;
        grid-template-columns: 9fr 18fr 26fr 13fr 13fr 9fr;
        padding: 15px 40px;
        text-align: center;
        width: 100%;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        grid-template-columns: 9fr 18fr 26fr 13fr 13fr 9fr;
        width: 100%;
        text-align: center;
        padding: 20px 40px;
        border-bottom: 1px solid #393b44;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
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
        border-radius: 6px;
        background-color: #1fa58c;
        cursor: pointer;
    }
`;

const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.46;
    color: #e5e8ea;
    &.ID {
        font-size: 22px;
        font-weight: bold;
    }
    &.Point {
        color: #fff;
    }
    &.Rank {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        background-color: #0cbe9d;
        padding: 1px 7px;
        border-radius: 3px;
        margin-left: 10px;
    }
    &.Menu {
        padding: 10px 0;
        width: 123px;
        font-size: 18px;
        font-weight: 500;
        color: #7a7c85;
        cursor: pointer;
    }
    &.Clicked {
        font-size: 18px;
        font-weight: 500;
        color: #16d8b4;
        width: 123px;
        padding: 10px 0;
        border-bottom: 5px solid #16d8b4;
        cursor: pointer;
    }
    &.Title {
        font-size: 28px;
        font-weight: bold;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
    &.Kakao {
        width: 76px;
        background-color: #3d372f;
        border-radius: 6px;
        padding: 0 8px;
        color: #cb9424;
    }
    &.Munsang {
        width: 76px;
        background-color: #3c3037;
        border-radius: 6px;
        padding: 1px 8px;
        color: #a35756;
    }
    &.Account {
        width: 76px;
        padding: 0 8px;
        border-radius: 6px;
        background-color: #34373d;
        color: #c0c1c2;
    }
    &.Success {
        width: 43px;
        padding: 3px 10px;
        border-radius: 6px;
        background-color: #0b8be9;
    }
    &.Fail {
        width: 43px;
        padding: 3px 10px;
        border-radius: 6px;
        background-color: #ff6136;
    }
`;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    &.point {
        margin-right: -25px;
    }
`;
