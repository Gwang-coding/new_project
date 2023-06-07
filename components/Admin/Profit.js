import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('../Admin/Calendar'), { ssr: false });

export default function Profit() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="TopBox">
                    <Div className="Top">
                        <Span className="Title">수익 통계</Span>
                        <Span>구매된 모든 경우를 산출합니다.</Span>
                    </Div>
                    <Div className="Top">
                        <Calendar />
                        <Btn>
                            <Span className="BtnText">적용</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Notice">
                    <Img src="/assets/images/icon-info.png" />
                    <Span>모든문의는 텔레그램을 통해 주세요. (Telegram : @ supd3sk)</Span>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="SubTitle">상품 구매</Span>
                    </Div>
                    <Div className="Buy_firstBar">
                        <Span className="BarText">이름</Span>
                        <Span className="BarText">단위</Span>
                        <Span className="BarText">가격</Span>
                        <Span className="BarText">원가</Span>
                        <Span className="BarText">개수</Span>
                        <Span className="BarText">금액 합</Span>
                        <Span className="BarText">차익 합</Span>
                    </Div>
                    <Div className="Buy_firstInfo">
                        <Span />
                        <Span />
                        <Span>구매 기록이 없습니다.</Span>
                        <Span />
                    </Div>
                    <Div className="Line" />
                    <Div className="Buy_secondBar">
                        <Span className="BarText">총 구매 금액</Span>
                        <Span className="BarText">총 구매 차익</Span>
                        <Span className="BarText">총 구매 횟수</Span>
                        <Span className="BarText">순 이익률</Span>
                    </Div>
                    <Div className="Buy_secondInfo">
                        <Span>0원</Span>
                        <Span>0원</Span>
                        <Span>0회</Span>
                        <Span>0%</Span>
                    </Div>
                    <Div className="Line" />
                </Div>

                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="SubTitle">입금 충전</Span>
                    </Div>
                    <Div className="Charge_Bar">
                        <Span className="BarText">충전 시도 횟수</Span>
                        <Span className="BarText">충전 시도 금액</Span>
                        <Span className="BarText">충전 성공 횟수</Span>
                        <Span className="BarText">충전 성공 금액</Span>
                        <Span className="BarText">충전 성공률</Span>
                    </Div>
                    <Div className="Charge_Info">
                        <Span>1회</Span>
                        <Span>10,000원</Span>
                        <Span>0회</Span>
                        <Span>0원</Span>
                        <Span>0%</Span>
                    </Div>
                    <Div className="Line" />
                </Div>

                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="SubTitle">문화상품권 충전</Span>
                    </Div>
                    <Div className="Munsang_Bar">
                        <Span className="BarText">충전 성공 횟수</Span>
                        <Span className="BarText">충전 성공 금액</Span>
                    </Div>
                    <Div className="Munsang_Info">
                        <Span>0회</Span>
                        <Span>0원</Span>
                    </Div>
                </Div>
                <Div className="Line" />
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 100%;
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
        align-items: center;
    }
    &.Top {
        display: flex;
        align-items: center;
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.Buy_firstBar {
        margin-top: 30px;
        display: grid;
        width: 100%;
        grid-template-columns: 22fr 18fr 13fr 13fr 13fr 13fr 13fr;
        text-align: center;
        padding: 20px 40px;
        background-color: #31333a;
    }
    &.Buy_secondBar {
        margin-top: 30px;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: center;
        padding: 20px 40px;
        background-color: #31333a;
    }
    &.Charge_Bar {
        margin-top: 30px;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        text-align: center;
        padding: 20px 40px;
        background-color: #31333a;
    }
    &.Munsang_Bar {
        margin-top: 30px;
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        padding: 20px 40px;
        background-color: #31333a;
    }
    &.Buy_firstInfo {
        display: grid;
        width: 100%;
        grid-template-columns: 22fr 18fr 13fr 13fr 13fr 13fr 13fr;
        text-align: center;
        padding: 20px 40px;
    }
    &.Buy_secondInfo {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: center;

        padding: 20px 40px;
    }
    &.Charge_Info {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        text-align: center;

        padding: 20px 40px;
    }
    &.Munsang_Info {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        padding: 20px 40px;
    }
    &.Notice {
        width: 95%;
        height: 50px;
        margin: 24px 40px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: rgba(181, 224, 229, 0.14);
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
        margin-bottom: 30px;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.46;
    font-weight: normal;
    font-size: 15px;

    &.Title {
        font-size: 26px;
        font-weight: bold;
        margin-right: 20px;
    }
    &.SubTitle {
        font-size: 22px;
        font-weight: bold;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
    &.BtnText {
        color: #fff;
        weight: 600;
    }
`;

const Btn = styled.button`
    width: 140px;
    height: 46px;
    padding: 11px 27px;
    border-radius: 10px;
    margin-left: 20px;
    background-color: #00abbf;
`;
const Img = styled.img`
    margin-right: 10px;
`;
