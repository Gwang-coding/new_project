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
                            <Input placeholder="이름" width="220px" />
                        </Div>
                        <Div className="LinkBox">
                            <Span>링크 URL(http://필수)</Span>
                            <Input placeholder="링크 URL" width="450px" />
                        </Div>
                        <Div className="LinkBox">
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
                <Div className="CheckedText">1</Div>
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
        width: 1500px;
        margin-top: 40px;

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
        width: 220px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 15px;
        margin: 0 20px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        cursor: pointer;
    }
    &.LinkDropdown {
        position: absolute;
        margin: 5px 20px 0;
        width: 220px;
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
        cursor: pointer;
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
        padding: 0px 40px;
        place-items: center;
        height: 76px;
        border-radius: 16px;
        background-color: #272a31;
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
        color: #fff;
        cursor: pointer;
        border-radius: 50%;
        background-color: #00abbf;
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
    height: 46px;
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
        width: 104px;
        height: 46px;
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
        margin-left: 40px;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
    cursor: pointer;
`;
