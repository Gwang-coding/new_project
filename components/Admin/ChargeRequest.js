import styled from 'styled-components';

export default function ChargeRequest() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="26px" weight="bold" color="#e5e8ea">
                        충전요청
                    </Span>
                    <Div>
                        <Btn className="Rectangle-Copy-7" color="#474950">
                            모두승인
                        </Btn>
                        <Btn className="Rectangle-Copy-7" color="#474950">
                            모두거절
                        </Btn>
                        <Btn className="Rectangle-Copy-7" color="#00abbf">
                            새로고침
                        </Btn>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            계좌
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            아이디
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            입금자명
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px" />
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            AODWMMMMW12
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            김길동
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            15,000원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px">
                            <Btn className="Rectangle-Copy-6" color="#00abbf">
                                승인하기
                            </Btn>
                            <Btn className="Rectangle-Copy-6" color="#f34a7e">
                                거절하기
                            </Btn>
                        </Span>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            카카오페이
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            아이디
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            송금자명
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px" />
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            AODWMMMMW12
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            김길동
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            125,000원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px">
                            <Btn className="Rectangle-Copy-6" color="#00abbf">
                                승인하기
                            </Btn>
                            <Btn className="Rectangle-Copy-6" color="#f34a7e">
                                거절하기
                            </Btn>
                        </Span>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            문화상품권
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            아이디
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            Pin
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px" />
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            assjdjkekkddk
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            3232-2323-1234-157512
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="150px">
                            15,000원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px">
                            <Btn className="Rectangle-Copy-6" color="#00abbf">
                                승인하기
                            </Btn>
                            <Btn className="Rectangle-Copy-6" color="#f34a7e">
                                거절하기
                            </Btn>
                        </Span>
                    </Div>
                </Div>
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.TopBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.Top {
        width: 100%;
        padding-top: 25px;
        display: flex;
        align-items: center;
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.Bar {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 110px 20px 40px;
        background-color: #31333a;
    }
    &.Info {
        display: flex;
        width: 100%;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        padding: 20px 110px 20px 40px;
        background-color: #272a31;
        border-bottom: 1px solid #3d3f45;
    }

    &.Rectangle-Copy-18 {
        width: 95%;
        height: 52px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        display: flex;
        justify-content: ${(props) => props.justify};
        align-items: center;
        padding-left: 15px;
    }
    &.ImgBox {
        width: 50px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #3d3f45;
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
    }
`;
const Input = styled.input``;
const Btn = styled.button`
    &.Rectangle-Copy-6 {
        width: 80px;
        height: 40px;
        padding: 8px 14px;
        border-radius: 10px;
        background-color: ${(props) => props.color};
        color: #fff;
        font-size: 15px;
        margin-left: 10px;
    }
    &.Rectangle-Copy-7 {
        width: 180px;
        height: 40px;
        padding: 5px 17px;
        border-radius: 23px;
        background-color: ${(props) => props.color};
        color: #fff;
        margin-left: 10px;
        font-size: 15px;
    }
`;

const Img = styled.img``;
