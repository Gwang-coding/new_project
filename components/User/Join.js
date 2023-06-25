import { SP } from 'next/dist/shared/lib/utils';
import styled from 'styled-components';

export default function Join() {
    return (
        <Div className="Main">
            <Div className="Wrapper">
                <Span className="Title">회원가입</Span>
                <Div className="Middle">
                    <Div className="Box">
                        <Span>
                            아이디<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input placeholder="아이디 (6자 이상)" />
                            <Btn className="Check">
                                <Span className="BtnText">중복확인</Span>
                            </Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span>
                            비밀번호<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input type="password" placeholder="비밀번호 (6자 이상)" />
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span>
                            비밀번호 확인<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input type="password" placeholder="비밀번호 확인을 위해 한번 더 입력해주세요" />
                        </Div>
                    </Div>
                </Div>
                <Span className="Login">
                    이미 계정이 있으신가요? <Span className="PointText">로그인</Span>
                </Span>
                <Btn className="Join">
                    <Span className="BtnText">회원가입</Span>
                </Btn>
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
        width: 750px;
        height: 660px;
        padding: 50px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(17, 17, 17, 0.5);
        border-radius: 16px;
    }
    &.Middle {
        height: 75%;
        width: 100%;
        margin: 30px 0;
        border-top: 1px solid #3d3f45;
        border-bottom: 1px solid #3d3f45;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 50px 0px;
    }
    &.Box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.ID {
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px #3d3f45;
        width: 80%;
        align-items: end;
        padding: 10px 0;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.56;
    font-weight: normal;
    font-size: 18px;

    &.Title {
        font-size: 24px;
        font-weight: bold;
    }
    &.Login {
        font-size: 15px;
        font-weight: 500;
    }
    &.PointText {
        margin-left: 10px;
        color: #ff709c;
        cursor: pointer;
    }
    &.BtnText {
        font-weight: bold;
    }
`;
const Input = styled.input`
    width: 70%;
    border: none;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.73;
    background-color: transparent;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    &.Check {
        padding: 6px 15px;
        height: 40px;
        border-radius: 8px;
        background-color: #56586e;
    }
    &.Join {
        margin-top: 30px;
        width: 482px;
        height: 60px;
        padding: 16px 209px 16px 210px;
        border-radius: 16px;
        background-color: #f34a7e;
    }
`;

const Img = styled.img``;
