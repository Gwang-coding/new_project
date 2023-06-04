import styled from 'styled-components';

export default function Login() {
    return (
        <Div className="Main">
            <Div className="Wrapper">
                <Div className="Box">
                    <Div className="Top">
                        <Div className="Login">
                            <Span className="Text" size="24px" weight="bold" width="63px">
                                로그인
                            </Span>
                        </Div>
                        <Div className="empty"></Div>
                    </Div>
                    <Input placeholder="아이디 (6자 이상)" className="Rectangle-Copy-18" />
                    <Input placeholder="비밀번호 입력" className="Rectangle-Copy-18" />
                    <Btn className="Rectangle-Copy-7" color="#f34a7e">
                        로그인
                    </Btn>
                    <Btn className="Rectangle-Copy-7" color="#363c69">
                        회원가입
                    </Btn>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Main {
        width: 100%;
        height: 100vh;
        background-image: url('/assets/images/green.png'), url('/assets/images/white.png'), url('/assets/images/blue.png');
        background-repeat: no-repeat, no-repeat, no-repeat;
        background-size: auto, contain, auto;
        background-position: top left, bottom left, bottom right;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1b1e24;
    }
    &.Wrapper {
        width: 482px;
    }
    &.Top {
        display: flex;
    }
    &.Login {
        border: 1px solid #f34a7e;
        border-radius: 8px 8px 0 0;
        border-bottom: none;
        display: flex;
        text-align: center;
        padding: 13px 50px;
    }
    &.empty {
        width: 100%;
        border-bottom: 1px solid #f34a7e;
    }
`;
const Span = styled.span`
    &.Text {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        width: ${(props) => props.width};
        line-height: 1.46;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: 100%;
        height: 46px;
        border: none;
        border-bottom: solid 1px #ffb9cf;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        background-color: transparent;
        color: #fff;
        margin: 18px 0;
    }
    &.Rectangle-Copy-18 :focus {
        outline: none;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-7 {
        width: 100%;
        height: 60px;
        border-radius: 16px;
        background-color: ${(props) => props.color};
        color: #e5e8ea;
        font-size: 18px;
        margin-top: 16px;
    }
`;

const Img = styled.img``;
