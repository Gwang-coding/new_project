import styled from 'styled-components';

export default function BankModal() {
    return (
        <Div className="ModalBox">
            <Div className="ModalContent">
                <Div className="Top">
                    <Div className="TopTitle">
                        <Span className="Title">결제</Span>
                    </Div>
                    <Div className="CloseIcon">
                        <Img src="/assets/images/icon-close-white.png" />
                    </Div>
                </Div>
                <Div className="Bottom">
                    <Div className="CheckBox">
                        <Span className="SubTitle">결제 방식</Span>
                        <Div className="CheckText">
                            <Div className="CheckedOval" />
                            <Span>계좌이체</Span>
                            <Div className="Oval" />
                            <Span>카카오페이 송금</Span>
                            <Div className="Oval" />
                            <Span>문화 상품권 충전</Span>
                        </Div>
                    </Div>
                    <Div className="Line" />
                    <Div className="Box">
                        <Span className="SubTitle">입금자명</Span>
                        <Div className="Input">
                            <Input />
                        </Div>
                    </Div>
                    <Div className="Line" />
                    <Div className="Box">
                        <Span className="SubTitle">입금할 금액</Span>
                        <Div className="Input">
                            <Input />
                            <Span className="Info">원</Span>
                        </Div>
                    </Div>
                    <Div className="Line" />
                    <Div className="Notice">
                        <Img className="NoticeIcon" src="/assets/images/icon-info-16.png" />
                        <Span className="Warning">주의사항</Span>
                    </Div>
                    <Div className="Notice">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Info">입금자명은 한 번 지정시 변경이 불가능 합니다.</Span>
                    </Div>
                    <Div className="Notice">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Info">입금금액과 입금자 명이 정확하다면 1분내로 충전됩니다.</Span>
                    </Div>
                    <Div className="Notice">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Info">5분동안 입금확인이 되지 않을 경우 취소 처리 됩니다.</Span>
                    </Div>
                    <Div className="Notice">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Info">입금신청을 잘못하신 경우 5분 후 다시 시도해주세요.</Span>
                    </Div>
                </Div>
                <Btn>
                    <Span className="BtnText">다음</Span>
                </Btn>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.ModalBox {
        // position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &.ModalContent {
        align-items: center;
        width: 900px;
        height: 680px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #272a31;
        padding: 30px 0px;
    }
    &.Top {
        width: 100%;
        padding: 0px 25px 30px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.TopTitle {
        padding-left: 15px;
        heigth: 40px;
        border-left: 4px solid #25b499;
    }
    &.CloseIcon {
        width: 32px;
        height: 32px;
        padding: 8px;
        border-radius: 50%;
        background-color: #32333a;
    }
    &.Bottom {
        width: 100%;
        padding: 30px 30px 0;
    }
    &.CheckText {
        display: flex;
        width: 73%;
        align-items: center;
        justify-content: space-between;
    }
    &.CheckBox {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Box {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.CheckedOval {
        width: 20px;
        height: 20px;
        border: solid 6px #25b499;
        border-radius: 50%;
        margin-right: -20px;
        cursor: pointer;
    }
    &.Oval {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 1px #e5e8ea;
        margin-right: -20px;
        cursor: pointer;
    }
    &.Input {
        width: 180px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 0px 10px;
    }
    &.Notice {
        display: flex;
        align-items: center;
        margin: 5px 0;
    }
    &.Line {
        margin: 30px 0;
        height: 1px;
        width: 100%;
        background-color: #3d3f45;
    }
`;

const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.6;
    color: #e5e8ea;

    &.Title {
        font-size: 22px;
        font-weight: bold;
    }
    &.SubTitle {
        font-size: 18px;
        font-weight: 500;
    }
    &.Warning {
        font-weight: 500;
    }
    &.Info {
        font-size: 15px;
        font-weight: 500;
        color: #7a7c85;
    }
    &.BtnText {
        font-size: 18px;
        font-weight: bold;
    }
`;
const Input = styled.input`
    border: none;
    background-color: transparent;
    height: 52px;
    width: 140px;
    font-size: 18px;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    padding: 16px 84px;
    border-radius: 35px;
    background-color: #1fa58c;
    margin-top: 20px;
`;

const Img = styled.img`
    &.NoticeIcon {
        margin-right: 10px;
    }
`;
