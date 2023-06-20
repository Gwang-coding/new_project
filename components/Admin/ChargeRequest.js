import styled from 'styled-components';

export default function ChargeRequest() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="TopBox">
                    <Span className="Title">충전요청</Span>
                    <Div>
                        <Btn className="OtherBtn">
                            <Span className="BtnText">모두승인</Span>
                        </Btn>
                        <Btn className="OtherBtn">
                            <Span className="BtnText">모두거절</Span>
                        </Btn>
                        <Btn className="ReBtn">
                            <Span className="BtnText">새로고침</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="Box">
                    <Span className="SubTitle">계좌</Span>
                    <Div className="Bar">
                        <Span className="BarText">아이디</Span>
                        <Span className="BarText">입금자명</Span>
                        <Span className="BarText">금액</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span>AODWMMMMW12</Span>
                        <Span>김길동</Span>
                        <Span>15,000원</Span>
                        <Span>
                            <Btn className="OkBtn">
                                <Span className="BtnText">승인하다</Span>
                            </Btn>
                            <Btn className="RefuseBtn">
                                <Span className="BtnText">거절하다</Span>
                            </Btn>
                        </Span>
                    </Div>
                    <Div className="Line" />
                </Div>
                <Div className="Box">
                    <Span className="SubTitle">카카오페이</Span>
                    <Div className="Bar">
                        <Span className="BarText">아이디</Span>
                        <Span className="BarText">송금자명</Span>
                        <Span className="BarText">금액</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span>AODWMMMMW12</Span>
                        <Span>김길동</Span>
                        <Span>125,000원</Span>
                        <Span>
                            <Btn className="OkBtn">
                                <Span className="BtnText">승인하다</Span>
                            </Btn>
                            <Btn className="RefuseBtn">
                                <Span className="BtnText">거절하다</Span>
                            </Btn>
                        </Span>
                    </Div>
                    <Div className="Line" />
                </Div>
                <Div className="Box">
                    <Span className="SubTitle">문화상품권</Span>
                    <Div className="Bar">
                        <Span className="BarText">아이디</Span>
                        <Span className="BarText">Pin</Span>
                        <Span className="BarText">수수료포함금액</Span>
                        <Span className="BarText" />
                    </Div>
                    <Div className="Info">
                        <Span>AODWMMMMW12</Span>
                        <Span>3232-2323-1234-157512</Span>
                        <Span>15,000원</Span>
                        <Span>
                            <Btn className="OkBtn">
                                <Span className="BtnText">승인하다</Span>
                            </Btn>
                            <Btn className="RefuseBtn">
                                <Span className="BtnText">거절하다</Span>
                            </Btn>
                        </Span>
                    </Div>
                    <Div className="Line" />
                </Div>
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 1500px;
        margin-top: 40px;
        height: 893px;
        padding-bottom: 15px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.TopBox {
        width: 100%;
        padding: 24px 40px;
        display: flex;
        justify-content: space-between;
    }
    &.Box {
        width: 100%;
        padding: 23px 40px;
        display: flex;
        flex-direction: column;
    }
    &.Bar {
        display: grid;
        grid-template-columns: 22fr 22fr 15fr 18fr;
        width: 100%;
        place-items: center;
        height: 50px;
        padding: 0px 40px;
        background-color: #31333a;
        margin-top: 20px;
        text-align: center;
    }
    &.Info {
        display: grid;
        grid-template-columns: 22fr 22fr 15fr 18fr;
        padding: 0px 40px;
        place-items: center;
        height: 76px;
        background-color: #272a31;

        text-align: center;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.56;
    font-weight: normal;
    font-size: 15px;
    align-self: center;
    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.SubTitle {
        font-size: 22px;
        align-self: start;
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

const Input = styled.input``;
const Btn = styled.button`
    &.OtherBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #474950;
        margin-left: 10px;
    }
    &.ReBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
        margin-left: 10px;
    }
    &.OkBtn {
        height: 40px;
        padding: 8px 14px;
        margin-left: 140px;
        border-radius: 10px;
        background-color: #00abbf;
    }
    &.RefuseBtn {
        height: 40px;
        padding: 8px 14px;
        border-radius: 10px;
        background-color: #f34a7e;
        margin-left: 10px;
    }
`;

const Img = styled.img``;
