import styled from 'styled-components';

export default function Userinfo() {
    return (
        <Div className="Wrapper">
            <Div className="Top">
                <Div className="NameBox">
                    <Span className="Text" size="28px" weight="bold" color="#e5e8ea">
                        Messi8090
                    </Span>
                    <Div className="Rectangle-Copy-11" bcolor="#0cbe9d">
                        <Span className="Text" size="14px" weight="600" color="#e5e8ea">
                            VIP
                        </Span>
                    </Div>
                </Div>
                <Div className="TopText">
                    <Img src="/assets/images/icon-chargemoney.png" className="point" />
                    <Span className="Text" size="15px" color="#fff" weight="normal">
                        총 충전 금액 : 320,400원
                    </Span>
                    <Span className="TextBox">|</Span>
                    <Img src="/assets/images/icon-purchasemoney.png" className="point" />
                    <Span className="Text" size="15px" color="#fff" weight="normal">
                        총 구매 금액 : 320,400원
                    </Span>
                </Div>
                <Div className="PickBox">
                    <Div className="Pick">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            구매내역
                        </Span>
                    </Div>
                    <Div className="Pick">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            충전내역
                        </Span>
                    </Div>
                    <Div className="Pick">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            파일함
                        </Span>
                    </Div>
                    <Div className="Pick" border="5px solid #25b499">
                        <Span className="Text" size="18px" weight="600" color="#16d8b4">
                            회원정보수정
                        </Span>
                    </Div>
                </Div>
            </Div>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="28px" weight="bold" color="#e5e8ea">
                        회원정보 수정
                    </Span>
                </Div>
                <Div className="BottomBox">
                    <Div className="InputBox">
                        <Div className="BottomText">
                            <Span className="Text" color="#e5e8ea" size="22px" weight="normal">
                                비밀번호 변경
                            </Span>
                        </Div>
                    </Div>
                    <Div className="InputBox">
                        <Span className="Text" width="115px" color="#e5e8ea" size="18px" weight="500">
                            현재 비밀번호
                        </Span>
                        <Input type="password" />
                    </Div>
                    <Div className="InputBox">
                        <Span className="Text" width="115px" color="#e5e8ea" size="18px" weight="500">
                            변경할 비밀번호
                        </Span>
                        <Input type="password" />
                    </Div>
                    <Div className="InputBox">
                        <Span className="Text" width="115px" color="#e5e8ea" size="18px" weight="500">
                            비밀번호 확인
                        </Span>
                        <Input type="password" />
                    </Div>
                </Div>
                <Div className="BtnBox">
                    <Btn>변경하기</Btn>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        display: flex;
        flex-direction: column;
    }
    &.Top {
        width: 1320px;
        height: 184px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 16px;
        padding: 30px 40px 0;
        background-color: #272a31;
    }
    &.Rectangle-Copy-11 {
        height: 22px;
        margin-left: 10px;
        padding: 0 8px;
        border-radius: 4px;
        background-color: ${(props) => props.bcolor};
    }
    &.Rectangle-Copy-15 {
        width: 1320px;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.NameBox {
        display: flex;
        align-items: center;
    }
    &.TopText {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    &.TopBox {
        width: 100%;
        padding: 25px 40px;
        border-bottom: 1px solid #3d3f45;
    }
    &.PickBox {
        display: flex;
        text-align: center;
    }
    &.Pick {
        width: 123px;
        border-bottom: ${(props) => props.border};
        padding: 10px 0;
    }
    &.BottomBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 25px 30px;
    }
    &.BtnBox {
        width: 100%;
        text-align: center;
    }
    &.InputBox {
        width: 100%;
        display: flex;
        padding: 20px 0px;
        align-items: center;
        border-bottom: 1px solid #393b44;
    }
    &.BottomText {
        padding: 5px 10px;
        border-left: 4px solid #25b499;
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
    &.TextBox {
        margin: 0 10px;
        color: #575a63;
    }
`;
const Input = styled.input`
     {
        width: 300px;
        height: 52px;
        margin-left: 50px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 10px;
        outline: none;
        font-size: 18px;
        color: #e5e8ea;
    }
`;
const Btn = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 35px;
    background-color: #1fa58c;
    font-size: 18px;
    font-weight: bold;
    color: #e5e8ea;
    margin: 10px 0px;
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
    &.point {
        margin-right: 5px;
    }
`;
