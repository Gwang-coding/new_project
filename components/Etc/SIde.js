import styled from 'styled-components';

export default function Side() {
    return (
        <Div className="Rectangle">
            <Div className="SideTop">
                <Span className="beurri">BEURRI</Span>
                <Img src="/assets/images/icon-c-menu-gray.png" className="IconCMenuGray30"></Img>
            </Div>
            <Div className="SideBottom">
                <Div className="Mask">
                    <Img src="/assets/images/icon-user.png" className="iconuser44"></Img>
                </Div>
                <Span className="-admon5488">
                    <Span className="text-style-1">환영합니다</Span>admon5488님
                </Span>
                <Div className="UserInfo">
                    <Span className="InfoText">라이센스키</Span>
                    <Span className="InfoNum">213412414414123</Span>
                    <Span className="InfoText">남은기간</Span>
                    <Span className="InfoNum">2022.07.30</Span>
                    <Span className="InfoText">오픈</Span>
                    <Span className="InfoNum">2022.04.23</Span>
                    <Span className="InfoText">인증기기</Span>
                    <Span className="InfoNum">1555521323</Span>
                    <Input className="Rectangle-Copy-20" type="text" placeholder="라이센스입력" />
                    <Btn className="License">라이센스 연장</Btn>
                </Div>
                <Div className="PointInfo">
                    <Span className="InfoText">전체 회원 포인트</Span>
                    <Div className="Rectangle-Copy-21">
                        <Input className="Rectangle-Copy-21" type="text" />P
                    </Div>

                    <Div className="Rectangle-Copy-13">포인트 지급</Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle {
        background-color: #13171e;
        width: 15%;
    }

    &.SideTop {
        display: flex;
        justify-content: space-between;
        padding: 20px 30px;
        text-align: center;
        border-bottom: 1px solid #3d3f45;
    }
    &.SideBottom {
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        text-align: center;
        align-items: center;
    }
    &.Mask {
        width: 70px;
        height: 69px;
        padding: 16px 15px 7px 16px;
        border-radius: 50%;
        background-image: linear-gradient(to bottom, rgba(213, 251, 255, 0.8), rgba(163, 226, 234, 0.8));
    }
    &.UserInfo {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 392px;
        margin: 20px 0;
        padding: 21px 19px;
        border-radius: 20px;
        border: solid 1px #3d3f45;
        background-color: #20232a;
        text-align: start;
    }

    &.PointInfo {
        width: 100%;
        height: 184px;
        margin: 18px 8px 0 0;
        padding: 21px 19px;
        text-align: start;
        border-radius: 20px;
        border: solid 1px #3d3f45;
        background-color: #20232a;
    }
    &.Rectangle-Copy-21 {
        width: 100%;
        height: 46px;
        margin: 12px 0 16px;
        display: flex;
        align-items: center;
        justify-content: right;
        padding-right: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #fff;
    }

    &.Rectangle-Copy-13 {
        width: 100%;
        height: 44px;
        margin: 16px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 23px;
        background-color: #363c69;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        text-align: center;
        color: #e5e8ea;
    }
`;
const Span = styled.span`
    &.beurri {
        width: 90px;
        height: 36px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        text-align: right;
        color: white;
    }
    &.-admon5488 {
        width: 115px;
        height: 52px;
        margin: 10px 0px;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: center;
        color: #e5e8ea;
    }
    &.-admon5488 .text-style-1 {
        font-size: 15px;
    }
    &.InfoText {
        width: 65px;
        height: 24px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #979aa0;
    }
    &.InfoNum {
        margin: 0px 0px 10px 0;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-20 {
        width: 100%;
        height: 46px;
        margin: 5px 0 20px 0;
        padding-left: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-Copy-20:focus {
        outline: none;
    }
    &.Rectangle-Copy-21:focus {
        outline: none;
    }
    &.Rectangle-Copy-21 {
        width: 90%;
        height: 40px;
        padding-left: 10px;
        display: flex;
        border: none;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #fff;
    }
`;
const Btn = styled.button`
    &.License {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 23px;
        background-color: #f34a7e;
        font-family: Pretendard;
        font-size: 15px;
        line-height: 2.75;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Img = styled.img`
    &.IconCMenuGray30 {
        width: 30px;
        height: 30px;
        margin: 3px 0 0px 43px;
        object-fit: contain;
        cursor: pointer;
    }
    &.iconuser44 {
        width: 38px;
        height: 38px;

        object-fit: contain;
    }
`;
