import styled from 'styled-components';

export default function Link() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="Link">
                    <Span className="Title">하이퍼링크</Span>
                </Div>
                <Div className="Line" />
                <Div className="Link">
                    <Span className="SubTitle">링크추가</Span>
                    <Div className="LinkPlus">
                        <Div className="LinkBox">
                            <Span>이름</Span>
                            <Input placeholder="이름" width="70%" />
                        </Div>
                        <Div className="LinkBox" width="50%">
                            <Span>링크 URL(http://필수)</Span>
                            <Input placeholder="링크 URL" width="65%" />
                        </Div>
                        <Div className="LinkBox" width="530px">
                            <Span>구매자 이상만 보기</Span>
                            <Div>
                                <Div className="DropdownBox">
                                    <Span>아니요</Span>
                                    <Img src="/assets/images/icon-a-right-gray.png" />
                                </Div>
                                <Div className="LinkDropdown">
                                    <Span>예</Span>
                                    <Span>아니요</Span>
                                </Div>
                            </Div>
                            <Btn className="PlusBtn">+ 추가하기</Btn>
                        </Div>
                    </Div>
                    <Span className="SubTitle">링크관리</Span>
                </Div>
                <Div className="LinkBar">
                    <Span className="BarText">NO</Span>
                    <Span className="BarText">이름</Span>
                    <Span className="BarText">링크</Span>
                    <Span className="BarText">구매자이상 보이기</Span>
                    <Span className="BarText" />
                </Div>
                <Div className="LinkInfo">
                    <Span className="LinkText">
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                    </Span>
                    <Span className="LinkText">텔레그램 공지방</Span>
                    <Span className="LinkText">https://t.me.+GaJUth56dVKNFGI</Span>
                    <Span className="LinkText">아니오</Span>
                    <Btn className="Delete">
                        <Span>삭제</Span>
                    </Btn>
                </Div>
                <Div className="Line" />
                <Div className="LinkInfo">
                    <Span className="LinkText">
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    </Span>
                    <Span className="LinkText">텔레그램 관리자문의</Span>
                    <Span className="LinkText">https://t.me.+GaJUth56dVKNFGI</Span>
                    <Span className="LinkText">아니오</Span>
                    <Btn className="Delete">
                        <Span>삭제</Span>
                    </Btn>
                </Div>
            </Div>
            <Div className="PageBox">
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                </Div>
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                </Div>
                <Div className="CheckedNum">
                    <Div className="CheckedText">1</Div>
                </Div>
                <Div className="PageText">2</Div>
                <Div className="PageText">3</Div>
                <Div className="PageText">4</Div>
                <Div className="PageText">5</Div>
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                </Div>
                <Div className="PageText">
                    <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
                </Div>
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 100%;
        margin-top: 40px;
        padding-bottom: 15px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.Link {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        flex-direction: column;
    }
    &.LinkPlus {
        width: 100%;
        display: flex;
        padding: 20px 0;
        margin-bottom: 25px;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.LinkBox {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &.DropdownBox {
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 15px;
        margin: 0 20px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
    }
    &.LinkDropdown {
        position: absolute;
        margin: 5px 20px 0;
        width: 200px;
        display: grid;
        padding: 20px;
        grid-template-columns: 1fr;
        border-radius: 10px;
        row-gap: 10px;
        border: solid 1px #3d3f45;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #31333a;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    &.LinkBar {
        display: grid;
        grid-template-columns: 1fr 3fr 6fr 3fr 1fr;
        width: 100%;
        padding: 10px 40px;
        background-color: #31333a;
    }
    &.LinkInfo {
        display: grid;
        grid-template-columns: 1fr 3fr 6fr 3fr 1fr;
        padding: 10px 40px;
        background-color: #272a31;
        margin-top: 10px;
    }
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
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
    }
    &.CheckedNum {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #00abbf;
    }
    &.CheckedText {
        width: 44px;
        height: 44px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.56;
    font-weight: normal;
    font-size: 15px;

    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.SubTitle {
        font-size: 22px;
        font-weight: bold;
    }
    &.BarText {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
    }
    &.LinkText {
        text-align: center;
    }
`;

const Input = styled.input`
    width: ${(props) => props.width};
    height: 52px;
    padding-left: 10px;
    margin: 0 20px;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    &.PlusBtn {
        height: 40px;
        padding: 10px 19px;
        border-radius: 10px;
        background-color: #00abbf;
        font-size: 15px;
        font-weight: 600;
        color: #fff;
    }
    &.Delete {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: #f34a7e;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
