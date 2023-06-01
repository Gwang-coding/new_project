import { SP } from 'next/dist/shared/lib/utils';
import styled from 'styled-components';

export default function UserMange() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="UserTopBox">
                <Div className="UserTop">
                    <Span className="UserMangeText" size="26px" weight="bold">
                        admon5488님의 회원관리
                    </Span>
                    <Div className="Rectangle-Copy-16">
                        <Span className="UserMangeText" size="13px" weight="normal">
                            미인증
                        </Span>
                    </Div>
                </Div>
                <Div className="UserTop">
                    <Btn className="Rectangle-Copy-7" width="106px" color="#474950;">
                        삭제하기
                    </Btn>
                    <Btn className="Rectangle-Copy-7" width="80px" color="#00abbf">
                        수정하기
                    </Btn>
                </Div>
            </Div>
            <Div className="PercentWrapper">
                <Div className="PercentBox">
                    <Span className="GridText">아이디</Span>
                    <Div className="FixedValue">admon5488</Div>
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">보유금액</Span>
                    <Input type="password" className="Rectangle-Copy-10" />
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">비밀번호</Span>
                    <Input type="password" className="Rectangle-Copy-10" />
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">총 구매금액</Span>
                    <Div className="FixedValue">450,000</Div>
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">입금자명</Span>
                    <Input className="Rectangle-Copy-10" />
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">등급</Span>
                    <Div className="Rectangle-Copy-10">
                        <Span className="UserMangeText" size="15px" weight="normal">
                            등급
                        </Span>
                        <Img src="/assets/images/icon-a-right-gray.png"></Img>
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">가입아이피</Span>
                    <Div className="FixedValue">
                        <Span className="UserMangeText" size="15px" weight="normal">
                            121.456.78.00
                        </Span>
                        <Btn className="BlockBtn">차단</Btn>
                    </Div>
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">메모</Span>
                    <Input className="Rectangle-Copy-10" />
                </Div>
                <Div className="PercentBox">
                    <Span className="GridText">휴대폰번호</Span>
                    <Div className="FixedValue">010-1234-5678</Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding: 25px 40px;
    }
    &.UserTopBox {
        width: 100%;
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.UserTop {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .Rectangle-Copy-16 {
        height: 26px;
        margin-left: 10px;
        padding: 2px 8px;
        border-radius: 13px;
        background-color: #515464;
    }
    &.PercentWrapper {
        width: 100%;
        padding: 20px 100px 20px 0;
        display: grid;
        row-gap: 20px;
        column-gap: 200px;
        grid-template-columns: 1fr 1fr;
    }
    &.PercentBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Rectangle-Copy-10 {
        width: 70%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        color: #e5e8ea;
    }
    &.FixedValue {
        width: 70%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #272a31;
        color: #e5e8ea;
    }
`;
const Span = styled.span`
    &.UserMangeText {
        width: ${(props) => props.width};
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        text-align: center;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.GridText {
        width: 83px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        margin-right: 10px;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-10 {
        width: 70%;
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.Rectangle-Copy-10 :focus {
        outline: none;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-7 {
        margin-left: 10px;
        width: 100px;
        height: 40px;
        padding: 8px 24px;
        border-radius: 23px;
        background-color: ${(props) => props.color};
        color: #fff;
    }
    &.BlockBtn {
        font-size: 15px;
        color: #3dc5d6;
        border: none;
        background: none;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
