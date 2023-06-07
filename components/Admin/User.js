import styled from 'styled-components';

export default function User() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="UserTopBox">
                    <Div className="UserTop" width="200px">
                        <Span className="Title">회원관리</Span>
                        <Span>총회원:309명</Span>
                    </Div>
                    <Div className="UserTop">
                        <Btn className="DelBtn">
                            <Span className="BtnText">비구매자삭제</Span>
                        </Btn>
                        <Div className="InputBox" width="180px">
                            <Span>아이디</Span>
                            <Img src="/assets/images/icon-a-right-gray.png" />
                        </Div>
                        <Input />
                        <Btn className="SearchBtn">
                            <Span className="BtnText">검색</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Bar">
                    <Span className="BarText">NO</Span>
                    <Span className="BarText">회원아이디</Span>
                    <Span className="BarText">입금자명</Span>
                    <Span className="BarText">등급</Span>
                    <Span className="BarText">가입일</Span>
                    <Span className="BarText">보유금액</Span>
                    <Span className="BarText">총 구매금액</Span>
                    <Span className="BarText" />
                    <Span className="BarText" />
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>dkasdkasd</Span>
                    <Span>김길동</Span>
                    <Span>
                        <Span className="ColorText" bcolor="#ffb621">
                            vip
                        </Span>
                    </Span>
                    <Span>2022.07.01</Span>
                    <Span>6,000</Span>
                    <Span>570,000</Span>
                    <Span>관리</Span>
                    <Span>로그</Span>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>1</Span>
                    <Span>dkasdkasd</Span>
                    <Span>김길동</Span>
                    <Span>
                        <Span className="ColorText" bcolor="#fc7772">
                            미승인
                        </Span>
                    </Span>
                    <Span>2022.07.01</Span>
                    <Span>6,000</Span>
                    <Span>570,000</Span>
                    <Span>관리</Span>
                    <Span>로그</Span>
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
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.UserTopBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
    }
    &.UserTop {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Bar {
        display: grid;
        padding: 15px 40px;
        width: 100%;
        text-align: center;
        grid-template-columns: 5fr 13fr 13fr 13fr 13fr 13fr 13fr 9fr 9fr;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        width: 100%;
        text-align: center;
        grid-template-columns: 5fr 13fr 13fr 13fr 13fr 13fr 13fr 9fr 9fr;
        padding: 20px 40px;
        background-color: #272a31;
    }

    &.InputBox {
        cursor: pointer;
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 15px;
        margin-left: 40px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
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
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    font-size: 15px;
    line-height: 1.46;
    font-weight: normal;
    color: #e5e8ea;
    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.BtnText {
        color: #fff;
        font-weight: 600;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
    &.ColorText {
        padding: 2px 10px;
        border-radius: 13px;
        background-color: ${(props) => props.bcolor};
    }
`;
const Input = styled.input`
    width: 250px;
    height: 46px;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    margin: 0 10px;
    padding-left: 10px;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    &.DelBtn {
        height: 46px;
        padding: 5px 17px;
        border-radius: 10px;
        background-color: #f34a7e;
    }
    &.SearchBtn {
        height: 46px;
        padding: 5px 17px;
        border-radius: 10px;
        background-color: #00abbf;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
