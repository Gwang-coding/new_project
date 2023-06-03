import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('../Admin/Calendar'), { ssr: false });

export default function Profit() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Div className="Top">
                        <Span className="Text" size="26px" weight="bold">
                            수익 통계
                        </Span>
                        <Span className="Text" size="15px" weight="normal" margin="10px">
                            구매된 모든 경우를 산출합니다.
                        </Span>
                    </Div>

                    <Div className="Top">
                        <Calendar />
                        <Btn className="Rectangle-Copy-7" width="250px">
                            적용
                        </Btn>
                    </Div>
                </Div>
                <Div className="Rectangle">
                    <Img src="/assets/images/icon-info.png" />

                    <Span className="Text" size="15px" weight="normal" margin="10px">
                        모든문의는 텔레그램을 통해 주세요. (Telegram : @ supd3sk)
                    </Span>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            상품 구매
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            이름
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="180px">
                            단위
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px">
                            가격
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px">
                            원가
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px">
                            개수
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px">
                            금액 합
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px">
                            차익 합
                        </Span>
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="130px" />

                        <Span className="Text" size="16px" weight="bold" width="180px">
                            구매 기록이 없습니다.
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="130px" />
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            총 구매 금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            총 구매 차익
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            총 구매 횟수
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            순 이익률
                        </Span>
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0회
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0%
                        </Span>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            입금 충전
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 시도 횟수
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 시도 금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 성공 횟수
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 성공 금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 성공률
                        </Span>
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            1회
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            10,000원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0회
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0%
                        </Span>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold" color="#3dc6d7">
                            문화상품권 충전
                        </Span>
                    </Div>
                    <Div className="Bar">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 성공 횟수
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            충전 성공 금액
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px" />
                    </Div>
                    <Div className="Info" border="">
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0회
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px">
                            0원
                        </Span>
                        <Span className="Text" size="16px" weight="bold" width="220px" />
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
        display: flex;
        align-items: center;
        margin-top: 40px;
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.Bar {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: #31333a;
    }
    &.Info {
        display: flex;
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px 20px 40px;
        background-color: #272a31;
        border-bottom: 1px solid #3d3f45;
    }

    &.Rectangle {
        width: 95%;
        height: 50px;
        margin: 24px 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: rgba(181, 224, 229, 0.14);
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
        color: #e5e8ea;
        margin-left: ${(props) => props.margin};
    }
`;
const Input = styled.input``;
const Btn = styled.button`
    &.Rectangle-Copy-7 {
        width: 180px;
        height: 46px;
        padding: 5px 17px;
        border-radius: 10px;
        background-color: #00abbf;
        color: #fff;
        margin-left: 10px;
        font-size: 15px;
    }
`;

const Img = styled.img``;
