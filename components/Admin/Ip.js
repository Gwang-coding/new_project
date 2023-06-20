import styled from 'styled-components';

export default function IP() {
    return (
        <>
            <Div className="Wrapper">
                <Div className="IpTopBox">
                    <Span className="Title">아이피 차단</Span>
                </Div>
                <Div className="Line" />
                <Div className="IpTopBox">
                    <Div className="IpTop">
                        <Span>아이피</Span>
                        <Input width="220px" />
                    </Div>
                    <Div className="IpTop">
                        <Span>차단이유</Span>
                        <Input width="300px" />
                        <Btn className="BlockBtn">
                            <Span className="BtnText">차단하기</Span>
                        </Btn>
                    </Div>
                    <Div className="IpTop">
                        <Input placeholder="아이피" width="180px" />
                        <Input width="250px" />
                        <Btn className="SearchBtn">
                            <Span>검색</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="IpTopBox">
                    <Span className="SubTitle">아이피 차단 목록</Span>
                </Div>
                <Div className="Bar">
                    <Span className="BarText">NO</Span>
                    <Span className="BarText">아이피</Span>
                    <Span className="BarText">차단이유</Span>
                    <Span className="BarText">차단날짜</Span>
                    <Span className="BarText" />
                </Div>
                <Div className="Info">
                    <Span>1</Span>
                    <Span>559.295.456</Span>
                    <Span>욕설과 비속어 표현 자주 사용해서 너무 상처 받았습니다. 이 사람 차단하고 싶습니다.</Span>
                    <Span>2022.07.01</Span>
                    <Btn className="DelBtn">삭제</Btn>
                </Div>
                <Div className="Line" />
                <Div className="Info">
                    <Span>1</Span>
                    <Span>559.295.456</Span>
                    <Span>욕설과 비속어 표현 자주 사용해서 너무 상처 받았습니다. 이 사람 차단하고 싶습니다.</Span>
                    <Span>2022.07.01</Span>
                    <Btn className="DelBtn">삭제</Btn>
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
        width: 1500px;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.IpTopBox {
        width: 100%;
        display: flex;
        padding: 25px 40px;
        justify-content: space-between;
    }
    &.IpTop {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
    }
    &.Bar {
        display: grid;
        grid-template-columns: 5fr 22fr 52fr 13fr 3.6fr;
        text-align: center;
        padding: 15px 40px;
        width: 100%;
        border-radius: 16px;
        background-color: #31333a;
    }
    &.Info {
        display: grid;
        grid-template-columns: 5fr 22fr 52fr 13fr 3.6fr;
        text-align: center;
        height: 76px;
        place-items: center;
        width: 100%;
        padding: 0px 40px;
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
        color: #fff;
        border-radius: 50%;
        background-color: #00abbf;
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
const Input = styled.input`
    width: ${(props) => props.width};
    height: 46px;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    margin-left: 15px;
    padding-left: 10px;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
`;
const Btn = styled.button`
    &.BlockBtn {
        height: 46px;
        padding: 11px 27px;
        border-radius: 10px;
        background-color: #f34a7e;
        margin-left: 15px;
    }
    &.SearchBtn {
        height: 46px;
        padding: 11px 27px;
        border-radius: 10px;
        background-color: #00abbf;
        margin-left: 15px;
    }
    &.DelBtn {
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
        margin: 0 10px;
        cursor: pointer;
    }
`;
