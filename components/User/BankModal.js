import styled from 'styled-components';

export default function BankModal() {
    return (
        <Div className="ModalBox">
            <Div className="ModalContent">
                <Div className="Top">
                    <Div className="TopTitle">
                        <Span className="Text" size="22px" weigth="bold" color="#e5e8ea">
                            결제
                        </Span>
                    </Div>
                    <Div className="CloseIcon">
                        <Img src="/assets/images/icon-close-white.png" />
                    </Div>
                </Div>
                <Div className="Bottom">
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            결제 방식
                        </Span>
                        <Div className="CheckedOval" />
                        <Span className="TextBox">계좌이체</Span>
                        <Div className="Oval" />
                        <Span className="TextBox">카카오페이 송금</Span>
                        <Div className="Oval" />
                        <Span className="TextBox">문화 상품권 충전</Span>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            입금자명
                        </Span>
                        <Div className="Input">
                            <Input className="InputBox" />
                        </Div>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            입금할 금액
                        </Span>
                        <Div className="Input">
                            <Input className="InputBox" />
                            <Span className="Text" size="18px" weight="normal" color="#7a7c85">
                                원
                            </Span>
                        </Div>
                    </Div>
                    <Div className="Notice" margin="10px">
                        <Img className="NoticeIcon" src="/assets/images/icon-info-16.png" />
                        <Span className="Text" size="15px" weight="500" color="#e5e8ea">
                            주의사항
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            입금자명은 한 번 지정시 변경이 불가능 합니다.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            입금금액과 입금자 명이 정확하다면 1분내로 충전됩니다.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            5분동안 입금확인이 되지 않을 경우 취소 처리 됩니다.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            입금신청을 잘못하신 경우 5분 후 다시 시도해주세요.
                        </Span>
                    </Div>
                </Div>
                <Div className="BtnBox">
                    <Btn>다음</Btn>
                </Div>
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
    &.BottomBox {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #3d3f45;
    }
    &.CheckedOval {
        width: 20px;
        height: 20px;
        border: solid 6px #25b499;
        border-radius: 50%;
    }
    &.Oval {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: solid 1px #e5e8ea;
    }
    &.Input {
        width: 180px;
        height: 52px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 0px 10px;
    }
    &.Notice {
        display: flex;
        align-items: center;
        margin: ${(props) => props.margin} 0;
    }
    &.BtnBox {
        width: 100%;
        text-align: center;
    }
`;

const Span = styled.span`
    &.Text {
        width: ${(props) => props.width};
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: ${(props) => props.color};
        margin-right: 100px;
    }
    &.TextBox {
        margin: 0 50px 0 10px;
        color: #e5e8ea;
        font-size: 15px;
        weight: normal;
    }
`;
const Input = styled.input`
    &.InputBox {
        border: none;
        background-color: transparent;
        height: 52px;
        width: 140px;
        font-size: 18px;
        color: #e5e8ea;
    }
    &.InputBox:focus {
        outline: none;
    }
`;
const Btn = styled.button`
    width: 200px;
    height: 60px;
    padding: 16px 84px;
    border-radius: 35px;
    background-color: #1fa58c;
    font-size: 18px;
    font-weight: bold;
    color: #e5e8ea;
    margin-top: 20px;
`;

const Img = styled.img`
    &.NoticeIcon {
        margin-right: 10px;
    }
`;
