import styled from 'styled-components';

export default function ChargeRequest() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="TopBox">
                    <Span className="Title">충전요청</Span>
                    <Div>
                        <Btn className="DelBtn">
                            <Span className="BtnText">삭제하기</Span>
                        </Btn>
                        <Btn className="SaveBtn">
                            <Span className="BtnText">저장하기</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="Box">
                    <Span className="SubTitle">링크관리</Span>
                    <Div className="Bar">
                        <Span className="BarText">NO</Span>
                        <Span className="BarText">이름</Span>
                        <Span className="BarText">링크</Span>
                        <Span className="BarText">구매자이상 보이기</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span className="InfoText">
                            <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                        </Span>
                        <Span className="InfoText">텔레그램 공지방</Span>
                        <Span className="InfoText">https://t.me.+GaJUth56dVKNFGI</Span>
                        <Span className="InfoText">아니오</Span>
                        <Btn className="Delete">
                            <Span>삭제</Span>
                        </Btn>
                    </Div>
                    <Div className="Line" />
                </Div>
                <Div className="Box">
                    <Span className="SubTitle">링크관리</Span>

                    <Div className="Bar">
                        <Span className="BarText">NO</Span>
                        <Span className="BarText">이름</Span>
                        <Span className="BarText">링크</Span>
                        <Span className="BarText">구매자이상 보이기</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span className="InfoText">
                            <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                        </Span>
                        <Span className="InfoText">텔레그램 공지방</Span>
                        <Span className="InfoText">https://t.me.+GaJUth56dVKNFGI</Span>
                        <Span className="InfoText">아니오</Span>
                        <Btn className="Delete">
                            <Span>삭제</Span>
                        </Btn>
                    </Div>
                    <Div className="Line" />
                </Div>
                <Div className="Box">
                    <Span className="SubTitle">링크관리</Span>

                    <Div className="Bar">
                        <Span className="BarText">NO</Span>
                        <Span className="BarText">이름</Span>
                        <Span className="BarText">링크</Span>
                        <Span className="BarText">구매자이상 보이기</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span className="InfoText">
                            <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                        </Span>
                        <Span className="InfoText">텔레그램 공지방</Span>
                        <Span className="InfoText">https://t.me.+GaJUth56dVKNFGI</Span>
                        <Span className="InfoText">아니오</Span>
                        <Btn className="Delete">
                            <Span>삭제</Span>
                        </Btn>
                    </Div>
                    <Div className="Line" />
                </Div>
            </Div>
            <Div className="PageBox">
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                </Div>
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                </Div>
                <Div className="CheckedNum">
                    <Div className="CheckedText">1</Div>
                </Div>
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
        </>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 100%;
        margin-top: 40px;
        padding-bottom: 15px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.TopBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.Box {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        flex-direction: column;
    }
    &.Bar {
        display: grid;
        grid-template-columns: 1fr 3fr 6fr 3fr 1fr;
        width: 100%;
        padding: 10px 40px;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        grid-template-columns: 1fr 3fr 6fr 3fr 1fr;
        padding: 10px 40px;
        background-color: #272a31;
        margin-top: 10px;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
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
    }
    &.CheckedNum {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #00abbf;
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
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.56;
    font-weight: normal;
    font-size: 15px;

    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.SubTitle {
        font-size: 22px;
        font-weight: bold;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }
    &.InfoText {
        text-align: center;
    }
`;

const Input = styled.input``;
const Btn = styled.button`
    &.DelBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #474950;
    }
    &.SaveBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
        margin-left: 10px;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
