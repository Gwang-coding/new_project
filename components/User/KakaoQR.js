import styled from 'styled-components';

export default function KakaoQR() {
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
                    <Span className="Text" size="28px" weight="500" color="#e5e8ea">
                        신청이 완료되었습니다
                        <br />
                        QR코드를 통해 송금후 완료 버튼을 눌러주세요
                    </Span>
                </Div>
                <Div className="Rectangle"></Div>
                <Span className="Text" size="15px" weight="500" color="#7a7c85">
                    <a>모바일인가요? 여기를 눌러 카카오톡으로 이동하세요.</a>
                </Span>
                <Div className="BtnBox">
                    <Btn>완료</Btn>
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
        text-align: center;
        display: flex;
        flex-direction: column;
        padding: 20px 30px 0;
    }
    &.Rectangle {
        width: 180px;
        height: 180px;
        margin: 57px 302px 80px 286px;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.8);
        background-color: #fff;
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
    }
`;
const Input = styled.input``;
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

const Img = styled.img``;
