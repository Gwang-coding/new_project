import styled from 'styled-components';

export default function UserMange() {
    return (
        <Div className="Wrapper">
            <Div className="UserTopBox">
                <Div className="UserTop">
                    <Span className="Title">admon5488님의 회원관리</Span>
                    <Div className="RankBox">
                        <Span className="RankText">미인증</Span>
                    </Div>
                </Div>
                <Div className="UserTop">
                    <Btn className="DelBtn">
                        <Span className="BtnText">삭제하기</Span>
                    </Btn>
                    <Btn className="ModBtn">
                        <Span className="BtnText">수정하기</Span>
                    </Btn>
                </Div>
            </Div>
            <Div className="PercentWrapper">
                <Div className="PercentBox">
                    <Span>아이디</Span>
                    <Div className="FixedValue">
                        <Span className="InputText">admon5488</Span>
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span>보유금액</Span>
                    <Input type="password" />
                </Div>
                <Div className="PercentBox">
                    <Span>비밀번호</Span>
                    <Input type="password" />
                </Div>
                <Div className="PercentBox">
                    <Span>총 구매금액</Span>
                    <Div className="FixedValue">
                        <Span className="InputText">450,000</Span>
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span>입금자명</Span>
                    <Input />
                </Div>
                <Div className="PercentBox">
                    <Span>등급</Span>
                    <Div className="InputBox">
                        <Span className="InputText">등급</Span>
                        <Img src="/assets/images/icon-a-right-gray.png" />
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span>가입아이피</Span>
                    <Div className="FixedValue">
                        <Span className="InputText">121.456.78.00</Span>
                        <Btn className="BlockBtn">차단</Btn>
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span>메모</Span>
                    <Input />
                </Div>
                <Div className="PercentBox">
                    <Span>휴대폰번호</Span>
                    <Div className="FixedValue">
                        <Span className="InputText">010-1234-5678</Span>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 1500px;
        margin-top: 40px;
        height: 893px;
        border-radius: 16px;
        background-color: #272a31;
        padding: 25px 40px;
    }
    &.UserTopBox {
        width: 100%;
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.UserTop {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.RankBox {
        height: 26px;
        margin-left: 10px;
        padding: 2px 8px;
        border-radius: 13px;
        background-color: #515464;
    }
    &.PercentWrapper {
        width: 100%;
        padding: 26px 100px 20px 0;
        display: grid;
        row-gap: 20px;
        column-gap: 200px;
        grid-template-columns: 1fr 1fr;
    }
    &.PercentBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.InputBox {
        width: 70%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        cursor: pointer;
    }
    &.FixedValue {
        width: 70%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #272a31;
    }
`;
const Span = styled.span`
    font-size: 18px;
    font-weight: normal;
    line-height: 1.46;
    color: #e5e8ea;

    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.InputText {
        font-size: 15px;
    }
    &.BtnText {
        font-size: 15px;
        font-weight: 600;
        color: #fff;
    }
    &.RankText {
        font-size: 13px;
    }
`;
const Input = styled.input`
    width: 70%;
    height: 52px;
    padding-left: 10px;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    &.DelBtn {
        margin-left: 10px;
        height: 40px;
        padding: 8px 24px;
        border-radius: 23px;
        background-color: #474950;
    }
    &.ModBtn {
        margin-left: 10px;
        height: 40px;
        padding: 8px 24px;
        border-radius: 23px;
        background-color: #00abbf;
    }
    &.BlockBtn {
        font-size: 15px;
        color: #3dc5d6;
        border: none;
        background: none;
    }
`;

const Img = styled.img``;
