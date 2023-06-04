import styled from 'styled-components';

export default function BankPopUp() {
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
                        <Span className="Text" size="15px" weight="500" color="#e5e8ea">
                            아래 계좌로 입금후 확인버튼을 눌러주시면 신청이 완료됩니다.
                        </Span>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            은행
                        </Span>
                        <Div className="Input">
                            <Input className="InputBox" />
                        </Div>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            계좌번호
                        </Span>
                        <Div className="Input">
                            <Input className="InputBox" />
                        </Div>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            예금주
                        </Span>
                        <Div className="Input">
                            <Input className="InputBox" />
                        </Div>
                    </Div>
                    <Div className="Line" />
                    <Div className="Notice" margin="10px">
                        <Img className="NoticeIcon" src="/assets/images/icon-info-16.png" />
                        <Span className="Text" size="15px" weight="500" color="#e5e8ea">
                            주의사항
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            꼭 계좌번호를 확인후 이체가 완료되면 확인버튼을 눌러주세요.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            확인 버튼을 누를 시 계좌번호를 다시 할인할 수 없습니다.
                        </Span>
                    </Div>
                </Div>
                <Div className="BtnBox">
                    <Btn>확인</Btn>
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
        padding: 0px 30px;
    }
    &.BottomBox {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 30px;
    }
    &.Input {
        width: 300px;
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
    &.Line {
        width: 100%;
        height: 1px;
        background-color: #393b44;
        margin 10px 0 30px;
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
