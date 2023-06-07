import styled from 'styled-components';

export default function Login() {
    return (
        <Div className="Main">
            <Div className="Wrapper">
                <Div className="Box">
                    <Div className="Top">
                        <Div className="Login">
                            <Span className="Title">로그인</Span>
                        </Div>
                        <Div className="empty" />
                    </Div>
                    <Input placeholder="아이디 (6자 이상)" />
                    <Input placeholder="비밀번호 입력" type="password" />
                    <Btn className="Login">
                        <Span>로그인</Span>
                    </Btn>
                    <Btn className="Join">
                        <Span>회원가입</Span>
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
        width: 200px;
    }
    &.empty {
        width: 100%;
        border-bottom: 1px solid #f34a7e;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.56;
    font-weight: bold;
    font-size: 18px;

    &.Title {
        font-size: 24px;
        font-weight: bold;
    }
`;
const Input = styled.input`
    width: 100%;
    height: 46px;
    border: none;
    border-bottom: solid 1px #ffb9cf;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.73;
    background-color: transparent;
    color: #e5e8ea;
    margin: 18px 0;
    outline: none;
`;
const Btn = styled.button`
    &.Login {
        width: 100%;
        height: 60px;
        border-radius: 16px;
        background-color: #f34a7e;
        margin-top: 16px;
    }
    &.Join {
        width: 100%;
        height: 60px;
        border-radius: 16px;
        background-color: #363c69;
        margin-top: 16px;
    }
`;

const Img = styled.img``;
