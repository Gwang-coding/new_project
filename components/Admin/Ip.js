import styled from 'styled-components';

export default function IP() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="IpTopBox">
                    <Span className="Text" size="26px" weight="bold">
                        아이피 차단
                    </Span>
                </Div>
                <Div className="IpTopBox">
                    <Div className="IpTop">
                        <Span className="Text" size="15px" weight="normal">
                            아이피
                        </Span>
                        <Input className="Rectangle-Copy-18" width="100%" />
                    </Div>
                    <Div className="IpTop">
                        <Span className="Text" size="15px" weight="normal">
                            차단이유
                        </Span>
                        <Input className="Rectangle-Copy-18" width="100%" />
                        <Btn className="Rectangle-Copy-7" width="106px" color="#f34a7e">
                            차단하기
                        </Btn>
                    </Div>
                    <Div className="IpTop">
                        <Input className="Rectangle-Copy-18" width="90%" placeholder="아이피" />
                        <Input className="Rectangle-Copy-18" width="110%" />
                        <Btn className="Rectangle-Copy-7" width="80px" color="#00abbf">
                            검색
                        </Btn>
                    </Div>
                </Div>
                <Div className="IpTopBox">
                    <Span className="Text" size="22px" weight="bold">
                        아이피 차단 목록
                    </Span>
                </Div>
                <Div className="Bar">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        NO
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        아이피
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="600px">
                        차단이유
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        차단날짜
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="36px" />
                </Div>
                <Div className="Info" border="1px solid #3d3f45">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        1
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        559.295.456
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="600px">
                        욕설과 비속어 표현 자주 사용해서 너무 상처 받았습니다. 이 사람 차단하고 싶습니다.
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        2022.07.01
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="36px">
                        삭제
                    </Span>
                </Div>
                <Div className="Info" border="">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        1
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        559.295.456
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="600px">
                        욕설과 비속어 표현 자주 사용해서 너무 상처 받았습니다. 이 사람 차단하고 싶습니다.
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        2022.07.01
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="36px">
                        삭제
                    </Span>
                </Div>
            </Div>
            <Div className="PageBox">
                <Div className="PageBar">
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="CheckedNum">
                        <Div className="Rectangle-Copy-17" color="#fff">
                            1
                        </Div>
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        2
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        3
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        4
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        5
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
                    </Div>
                </Div>
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;

        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.IpTopBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.IpTop {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Bar {
        padding: 0px 40px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #31333a;
    }
    &.Info {
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: #272a31;
        border-bottom: ${(props) => props.border};
    }
    &.Wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.Rectangle-Copy-10 {
        cursor: pointer;
        width: ${(props) => props.width};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 15px;
        margin-left: 40px;
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
        color: #fff;
    }
    &.Rectangle-Copy-7 {
        margin: 0 37px;
        width: 76px;
        padding: 0 12px;
        opacity: 0.1;
        border-radius: 13px;
        background-color: ${(props) => props.color};
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
    }
    &.PageBar {
        display: flex;
    }
    &.Rectangle-Copy-17 {
        width: 44px;
        height: 44px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        display: flex;
        letter-spacing: normal;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.color};
    }
    &.CheckedNum {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #00abbf;
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
        text-align: center;
        letter-spacing: normal;
        color: #e5e8ea;
        padding-left: ${(props) => props.Lpadding};
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: ${(props) => props.width};
        height: 46px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        margin: 0 10px;
        padding-left: 10px;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-Copy-18 :focus {
        outline: none;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-7 {
        width: 100px;
        height: 46px;
        padding: 5px 20px;
        border-radius: 10px;
        background-color: ${(props) => props.color};
        color: #fff;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
