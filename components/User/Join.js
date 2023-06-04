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
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                            <Btn>중복확인</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                            <Btn>중복확인</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                            <Btn>중복확인</Btn>
                        </Div>
                    </Div>
                    <Div className="Box">
                        <Span className="Text">아이디</Span>
                        <Div className="ID">
                            <Input className="Rectangle-Copy-18" />
                        </Div>
                    </Div>
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
        padding: 30px 10px;
        display: flex;
        flex-direction: column;
        background-color: rgba(17, 17, 17, 0.5);
        border-radius: 16px;
    }
    &.Center {
        text-align: center;
    }
    &.Middle {
        width: 100%;
        border-top: 1px solid #3d3f45;
        border-bottom: 1px solid #3d3f45;
        display: flex;
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
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: 80%;
        height: 46px;
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
    &.Rectangle-Copy-7 {
        width: 80%;
        height: 60px;
        border-radius: 16px;
        background-color: ${(props) => props.color};
        color: #e5e8ea;
        font-size: 18px;
        margin-top: 16px;
    }
`;

const Img = styled.img``;
