import { SP } from 'next/dist/shared/lib/utils';
import styled from 'styled-components';

export default function Join() {
    return (
        <Div className="Main">
            <Div className="Wrapper">
                <Div className="Center">
                    <Span className="Text" size="24px" weight="bold">
                        회원가입
                    </Span>
                </Div>
                <Div className="Middle">
                    <Div className="Box">
                        <Span className="Text">
                            아이디<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" placeholder="아이디 (6자 이상)" />
                            <Btn className="Rectangle-Copy-2">중복확인</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">
                            비밀번호<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" placeholder="비밀번호 (6자 이상)" />
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">
                            비밀번호 확인<Span className="PointText">*</Span>
                        </Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" placeholder="비밀번호 확인을 위해 한번 더 입력해주세요" />
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">휴대폰 번호</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" placeholder="휴대폰 번호를 정확히 입력해주세요" />
                            <Btn className="Rectangle-Copy-2">인증번호 발송</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">인증번호</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" placeholder="휴대폰 인증번호를 입력해주세요" />
                            <Btn className="Rectangle-Copy-2">인증</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">추천인(선택)</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                        </Div>
                    </Div>
                </Div>
                <Div className="Center">
                    <Span className="Text" size="15px">
                        이미 계정이 있으신가요? <Span className="PointText">로그인</Span>
                    </Span>
                </Div>
                <Div className="Center">
                    <Btn className="Rectangle-Copy-3">회원가입</Btn>
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
        width: 750px;
        height: 916px;
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(17, 17, 17, 0.5);
        border-radius: 16px;
    }
    &.Center {
        text-align: center;
    }
    &.Middle {
        height: 75%;
        width: 100%;
        border-top: 1px solid #3d3f45;
        border-bottom: 1px solid #3d3f45;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 40px 0px;
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
    &.Text {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.PointText {
        margin-left: 10px;
        color: #ff709c;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: 70%;

        border: none;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        background-color: transparent;
        color: #fff;
    }
    &.Rectangle-Copy-18 :focus {
        outline: none;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-2 {
        padding: 6px 15px;
        height: 40px;
        border-radius: 8px;
        background-color: #56586e;
        color: #e5e8ea;
        font-size: 18px;
    }
    &.Rectangle-Copy-3 {
        width: 482px;
        height: 60px;
        padding: 16px 209px 16px 210px;
        border-radius: 16px;
        background-color: #f34a7e;
        color: #e5e8ea;
        font-size: 18px;
    }
`;

const Img = styled.img``;
