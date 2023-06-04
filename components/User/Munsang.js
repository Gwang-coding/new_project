import styled from 'styled-components';

export default function Munsang() {
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
                        <Div className="Oval" />
                        <Span className="TextBox">계좌이체</Span>
                        <Div className="Oval" />
                        <Span className="TextBox">카카오페이 송금</Span>
                        <Div className="CheckedOval" />
                        <Span className="TextBox">문화 상품권 충전</Span>
                    </Div>
                    <Div className="BottomBox">
                        <Span className="Text" width="85px" size="18px" weight="500" color="#e5e8ea">
                            입금자명
                        </Span>
                        <Div className="Input">
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
                            <Input placeholder="4자리" className="InputBox" />
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
                            문화상품권 충전 수수료는 10%입니다.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            문화상품권 핀번호가 정확하다면 1분내로 충전됩니다.
                        </Span>
                    </Div>
                    <Div className="Notice" margin="5px">
                        <Img className="NoticeIcon" src="/assets/images/icon-bullet.png" />
                        <Span className="Text" size="15px" weight="500" color="#7a7c85">
                            충전 오류가 있을 시 관리자에게 문의 주세요.
                        </Span>
                    </Div>
                </Div>
                <Div className="BtnBox">
                    <Btn>충전하기</Btn>
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
        padding: 20px 30px 0;
    }
    &.BottomBox {
        width: 100%;
        display: flex;
        align-items: center;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: 1px solid #3d3f45;
    }
    &.Input {
        height: 160px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        row-gap: 10px;
        column-gap: 10px;
        margin-bottom: 10px;
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
        border: solid 1px #3d3f45;
        background-color: #31333a;
        height: 52px;
        width: 150px;
        font-size: 18px;
        color: #e5e8ea;
        border-radius: 10px;
        padding: 10px;
    }
    &.InputBox:focus {
        outline: none;
    }
`;
const Btn = styled.button`
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
