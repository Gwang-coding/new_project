import styled from 'styled-components';

export default function ProdectManage() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="TopBox">
                    <Span className="Title">상품관리</Span>
                    <Btn>
                        <Span className="BtnText">+ 추가하기</Span>
                    </Btn>
                </Div>
                <Div className="Bar">
                    <Span className="BarText" />
                    <Span className="BarText">상품명</Span>
                    <Span className="BarText">카테고리</Span>
                    <Span className="BarText">첫번째 가격</Span>
                    <Span className="BarText">두번째 가격</Span>
                    <Span className="BarText">세번째 가격</Span>
                    <Span className="BarText">첫번째 재고</Span>
                    <Span className="BarText">두번째 재고</Span>
                    <Span className="BarText">세번째 재고</Span>
                    <Span className="BarText">패치중</Span>
                    <Span className="BarText" />
                </Div>
                <Div className="Info">
                    <Span>
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    </Span>
                    <Span>최강 우디르</Span>
                    <Div className="InputBox">
                        <Div className="Input">
                            <Span>서든어택</Span>
                            <Img src="/assets/images/icon-a-right-gray.png"></Img>
                        </Div>
                    </Div>
                    <Span>6,000원</Span>
                    <Span>6,000원</Span>
                    <Span>6,000원</Span>
                    <Span>300개</Span>
                    <Span className="NostockText" size="15px" weight="bold" width="90px">
                        0개
                    </Span>
                    <Span>20개</Span>
                    <Div className="InputBox">
                        <Div className="Rectangle-Copy-2-on">
                            <Div className="Oval-Copy-2"></Div>
                        </Div>
                    </Div>
                    <Span>관리</Span>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    </Span>
                    <Span>최강 우디르</Span>
                    <Div className="InputBox">
                        <Div className="Input">
                            <Span>서든어택</Span>
                            <Img src="/assets/images/icon-a-right-gray.png"></Img>
                        </Div>
                    </Div>
                    <Span>6,000원</Span>
                    <Span>6,000원</Span>
                    <Span>6,000원</Span>
                    <Span>300개</Span>
                    <Span className="NostockText" size="15px" weight="bold" width="90px">
                        0개
                    </Span>
                    <Span>20개</Span>
                    <Div className="InputBox">
                        <Div className="Rectangle-Copy-2-on">
                            <Div className="Oval-Copy-2"></Div>
                        </Div>
                    </Div>
                    <Span>관리</Span>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    </Span>
                    <Span>최강 우디르</Span>
                    <Div className="InputBox">
                        <Div className="Input">
                            <Span>서든어택 - 서브카테고리2</Span>
                            <Img src="/assets/images/icon-a-right-gray.png"></Img>
                        </Div>
                        <Div className="Dropdown">
                            <Span>hi</Span>
                            <Span>hi</Span>
                        </Div>
                    </Div>
                    <Span>123,000원</Span>
                    <Span>123,000원</Span>
                    <Span>123,000원</Span>
                    <Span>20개</Span>
                    <Span>20개</Span>
                    <Span>20개</Span>
                    <Div className="InputBox">
                        <Div className="Rectangle-Copy-2-off">
                            <Div className="Oval-Copy-2"></Div>
                        </Div>
                    </Div>
                    <Span>관리</Span>
                </Div>
            </Div>
            <Div className="PageBox">
                <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                <Div className="CheckedText">1</Div>
                <Div className="PageText">2</Div>
                <Div className="PageText">3</Div>
                <Div className="PageText">4</Div>
                <Div className="PageText">5</Div>
                <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
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
    }
    &.Bar {
        display: grid;
        grid-template-columns: 2.4fr 13fr 23fr 13fr 13fr 13fr 9fr 9fr 9fr 9fr 2.6fr;
        padding: 15px 40px;
        width: 100%;
        text-align: center;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        grid-template-columns: 2.4fr 13fr 23fr 13fr 13fr 13fr 9fr 9fr 9fr 9fr 2.6fr;
        width: 100%;
        text-align: center;
        padding: 20px 40px;
    }
    &.InputBox {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    &.Input {
        cursor: pointer;
        width: 230px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
    }
    &.Dropdown {
        position: absolute;
        margin-top: 50px;
        width: 230px;
        padding: 20px 20px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
        text-align: start;
        border-radius: 10px;
        background-color: #31333a;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    &.Rectangle-Copy-2-on {
        width: 50px;
        height: 26px;
        margin: 0 20px;
        padding: 3px 4px 3px 26px;
        border-radius: 100px;
        background-color: #00abbf;
        cursor: pointer;
    }
    &.Rectangle-Copy-2-off {
        width: 50px;
        height: 26px;
        margin: 0 20px;
        padding: 3px 26px 3px 4px;
        border-radius: 100px;
        background-color: #474950;
        cursor: pointer;
    }

    &.Oval-Copy-2 {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
        align-items: center;
    }
    &.PageText {
        width: 44px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #7a7c85;
        cursor: pointer;
    }

    &.CheckedText {
        width: 44px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #00abbf;
        color: #fff;
        cursor: pointer;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.46;
    color: #e5e8ea;
    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.SubTitle {
        font-size: 22px;
        font-weight: bold;
    }
    &.BtnText {
        font-weight: 600;
        color: #fff;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
    }
`;
const Input = styled.input``;
const Btn = styled.button`
    height: 40px;
    padding: 8px 16px;
    border-radius: 23px;
    background-color: #00abbf;
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
        margin: 0 10px;
        cursor: pointer;
    }
`;
