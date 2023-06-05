import styled from 'styled-components';

export default function PurchaseLog() {
    return (
        <Div className="Wrapper">
            <Div className="Top">
                <Div className="NameBox">
                    <Span className="Text" size="28px" weight="bold" color="#e5e8ea">
                        <Span className="NameBox">Messi8090</Span>
                    </Span>
                    <Div className="Rectangle-Copy-11" bcolor="#0cbe9d">
                        <Span className="ColorFont" size="14px" weight="600" color="#e5e8ea" bcolor="#0cbe9d">
                            VIP
                        </Span>
                    </Div>
                </Div>
                <Div className="TopText">
                    <Img src="/assets/images/icon-chargemoney.png" className="point" />
                    <Span className="Text" size="15px" color="#fff" weight="normal">
                        총 충전 금액 : 320,400원
                    </Span>
                    <Span className="TextBox">|</Span>
                    <Img src="/assets/images/icon-purchasemoney.png" className="point" />
                    <Span className="Text" size="15px" color="#fff" weight="normal">
                        총 구매 금액 : 320,400원
                    </Span>
                </Div>
                <Div className="BtnBox">
                    <Div className="Btn">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            구매내역
                        </Span>
                    </Div>
                    <Div className="Btn" border="5px solid #25b499">
                        <Span className="Text" size="18px" weight="600" color="#16d8b4">
                            충전내역
                        </Span>
                    </Div>
                    <Div className="Btn">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            파일함
                        </Span>
                    </Div>
                    <Div className="Btn">
                        <Span className="Text" size="18px" weight="600" color="#7a7c85">
                            회원정보수정
                        </Span>
                    </Div>
                </Div>
            </Div>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="28px" weight="bold" color="#e5e8ea">
                        충전내역
                    </Span>
                </Div>
                <Div className="Bar">
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            NO
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="180px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            충전날짜
                        </Span>
                    </Div>
                    <Span className="Text" size="15px" weight="normal" width="260px" color="#e5e8ea">
                        입금자명
                    </Span>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="ColorFont" color="#e5e8ea" width="81px">
                            충전방법
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            금액
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="ColorFont" color="#e5e8ea" width="43px">
                            결과
                        </Span>
                    </Div>
                </Div>
                <Div className="Info" border="1px solid #3d3f45">
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            1
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="180px">
                        <Span className="Text" size="15px" weight="normal" width="180px" color="#e5e8ea">
                            2022-06-30 16:38:40
                        </Span>
                    </Div>
                    <Span className="Text" size="15px" weight="normal" width="260px" color="#e5e8ea">
                        홍길동
                    </Span>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#ffb621" width="81px">
                            카카오페이
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            6,000원
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#0b8be9" width="43px">
                            성공
                        </Span>
                    </Div>
                </Div>
                <Div className="Info" border="1px solid #3d3f45">
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            1
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="180px">
                        <Span className="Text" size="15px" weight="normal" width="180px" color="#e5e8ea">
                            2022-06-30 16:38:40
                        </Span>
                    </Div>
                    <Span className="Text" size="15px" weight="normal" width="260px" color="#e5e8ea">
                        홍길동
                    </Span>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#fc7772" width="81px">
                            문화상품권
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="Text" size="15px" weight="normal" width="130px" color="#e5e8ea">
                            11,000원
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#ff6136" width="43px">
                            실패
                        </Span>
                    </Div>
                </Div>
                <Div className="Info" border="1px solid #3d3f45">
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            1
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="180px">
                        <Span className="Text" size="15px" weight="normal" width="180px" color="#e5e8ea">
                            2022-06-30 16:38:40
                        </Span>
                    </Div>
                    <Span className="Text" size="15px" weight="normal" width="260px" color="#e5e8ea">
                        홍길동
                    </Span>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#b6b6b6" width="81px">
                            계좌이체
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="130px">
                        <Span className="Text" size="15px" weight="normal" width="130px" color="#e5e8ea">
                            123,000원
                        </Span>
                    </Div>
                    <Div className="Rectangle-Copy-11" width="90px">
                        <Span className="ColorFont" color="#e5e8ea" bcolor="#56586e" width="43px">
                            대기
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
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        display: flex;
        flex-direction: column;
    }

    &.Rectangle-Copy-11 {
        width: ${(props) => props.width};
    }
    &.Rectangle-Copy-15 {
        width: 1320px;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
    }
    &.NameBox {
        display: flex;
        align-items: center;
    }
    &.TopText {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    &.TopBox {
        width: 100%;
        padding: 25px 40px;
    }
    &.BtnBox {
        display: flex;
        text-align: center;
    }
    &.Btn {
        width: 123px;
        border-bottom: ${(props) => props.border};
        padding: 10px 0;
    }
    &.Top {
        width: 1320px;
        height: 184px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 16px;
        padding: 30px 40px 0;
        background-color: #272a31;
    }
    &.Bar {
        display: flex;
        width: 100%;
        height: 50px;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        padding: 0px 50px 0;
        background-color: #31333a;
    }
    &.Info {
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: space-between;
        padding: 20px 50px;
        background-color: #272a31;
        border-bottom: ${(props) => props.border};
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding-top: 30px;
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
        border-radius: 6px;
        background-color: #1fa58c;
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
        color: ${(props) => props.color};
    }
    &.TextBox {
        margin: 0 10px;
        color: #575a63;
    }
    &.NameBox {
        margin-right: 10px;
    }
    &.ColorFont {
        width: ${(props) => props.width};
        color: ${(props) => props.color};
        background-color: ${(props) => props.bcolor};
        font-size: 15px;
        font-weight: normal;
        font-family: Pretendard;
        padding: 2px 10px;
        border-radius: 6px;
    }
`;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
    &.point {
        margin-right: 5px;
    }
`;
