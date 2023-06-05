import styled from 'styled-components';

export default function PurchasePopUp() {
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
                        <Span className="Text" size="22px" weight="bold" color="#e5e8ea">
                            [우디르]12시간
                        </Span>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" size="18px" weight="500" color="#e5e8ea">
                            가격
                        </Span>
                        <Div className="Input" width="120px">
                            <Input className="InputBox" />
                            <Span className="Text" size="15px" weight="normal" color="#7a7c85">
                                원
                            </Span>
                        </Div>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" size="18px" weight="500" color="#e5e8ea">
                            남은 재고 수
                        </Span>
                        <Div className="Input" width="120px">
                            <Input className="InputBox" />
                        </Div>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" size="18px" weight="500" color="#e5e8ea">
                            구매수량
                        </Span>
                        <Div className="InputBox">
                            <Div className="Input" width="62px">
                                <Input className="InputBox" />
                            </Div>
                            <Span className="Text" size="15px" weight="normal" color="#7a7c85">
                                /100개
                            </Span>
                        </Div>
                    </Div>
                    <Div className="Line" />
                </Div>
                <Div className="BtnBox">
                    <Btn color="#31333a">취소</Btn>
                    <Btn color="#1fa58c">확인</Btn>
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
        width: 360px;
        height: 506px;
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
        padding: 20px 30px 0;
    }
    &.BottomBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    &.Input {
        width: ${(props) => props.width};
        height: 52px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 0px 10px;
    }
    &.InputBox {
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.BtnBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        margin-top: 20px;
    }
    &.Line {
        width: 100%;
        height: 1px;
        background-color: #393b44;
    }
`;

const Span = styled.span`
    &.Text {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: ${(props) => props.color};
    }
`;
const Input = styled.input`
    &.InputBox {
        border: none;
        background-color: transparent;
        height: 52px;
        width: 100%;
        font-size: 18px;
        color: #e5e8ea;
    }
    &.InputBox:focus {
        outline: none;
    }
`;
const Btn = styled.button`
    width: 140px;
    height: 60px;
    border-radius: 35px;
    background-color: ${(props) => props.color};
    font-size: 18px;
    font-weight: bold;
    color: #e5e8ea;
`;

const Img = styled.img``;
