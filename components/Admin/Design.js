import styled from 'styled-components';

export default function Design() {
    return (
        <Div className="Wrapper">
            <Div className="DesignTop">
                <Span className="Title">디지인</Span>
                <Btn>
                    <Span className="BtnText"> 적용하기</Span>
                </Btn>
            </Div>
            <Div className="Line" />
            <Div className="DesignWrapper" flex="column">
                <Div className="DesignBox">
                    <Span className="UrlText">로그인 배경화면 이미지 URL</Span>
                    <Input className="UrlInput" placeholder="https://" />
                </Div>
                <Div className="DesignBox">
                    <Span className="UrlText">공지사항 URL</Span>
                    <Input className="UrlInput" placeholder="https://" />
                </Div>
                <Div className="DesignBox">
                    <Span className="UrlText">배경음악 URL</Span>
                    <Input className="UrlInput" placeholder="https://" />
                </Div>
                <Div className="DesignBox">
                    <Span className="UrlText">점검창로고 URL</Span>
                    <Input className="UrlInput" placeholder="https://" />
                </Div>
                <Div className="DesignBox">
                    <Span className="UrlText">프로필사진</Span>
                    <Input className="UrlInput" placeholder="https://" />
                </Div>
                <Div className="RGBBox" width="25%">
                    <Span className="UrlText">
                        RGB 사용
                        <br />
                        <Span className="RGBText">#00000000</Span>
                    </Span>
                    <Div className="Rectangle-Copy-2-on">
                        <Div className="Oval-Copy-2"></Div>
                    </Div>
                </Div>
            </Div>
            <Div className="Line" />
            <Div className="DesignWrapper">
                <Span className="SubTitle">메인</Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span className="GridText">배경</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">글자</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">긴급공지</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">카드</Span>
                        <Input className="MainInput" />
                    </Div>
                </Div>
            </Div>
            <Div className="Line" />
            <Div className="DesignWrapper">
                <Span className="SubTitle">카테고리</Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span className="GridText">배경</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼1</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼2</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">클릭시 글자</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">방문자수</Span>
                        <Input className="MainInput" />
                    </Div>
                </Div>
            </Div>
            <Div className="Line" />
            <Div className="DesignWrapper">
                <Span className="SubTitle">상점</Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span>배경</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>카드</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼1</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼2</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼3</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼1클릭</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼2클릭</Span>
                        <Input className="MainInput" />
                    </Div>
                    <Div className="PercentBox">
                        <Span>버튼3클릭</Span>
                        <Input className="MainInput" />
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.DesignTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &.DesignWrapper {
        width: 100%;
        padding: 25px 40px 10px 40px;
        display: flex;
        flex-direction: column;
    }
    &.DesignBox {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
    }
    &.RGBBox {
        width: 25%;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        justify-content: space-between;
    }
    &.Rectangle-Copy-2-on {
        width: 62px;
        height: 32px;
        padding: 4px 4px 4px 34px;
        border-radius: 100px;
        background-color: #00abbf;
        cursor: pointer;
    }
    &.Oval-Copy-2 {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
    }
    &.PercentWrapper {
        width: 100%;
        margin: 20px 0;
        display: grid;
        row-gap: 20px;
        column-gap: 4%;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    &.PercentBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &.Line {
        width: 100%;
        height: 1px;
        background-color: #393b44;
    }
`;
const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
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
    &.UrlText {
        font-size: 18px;
    }
    &.RGBText {
        font-size: 15px;
        font-weight: 500;
        color: #979aa0;
    }
`;
const Input = styled.input`
    &.UrlInput {
        width: 80%;
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-size: 15px;
        font-weight: normal;
        color: #e5e8ea;
        outline: none;
    }
    &.MainInput {
        width: 60%;
        height: 52px;
        background-color: #31333a;
        padding-left: 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        font-size: 15px;
        font-weight: normal;
        color: #e5e8ea;
        outline: none;
        margin-left: 10px;
    }
`;
const Btn = styled.button`
    height: 40px;
    padding: 8px 19px;
    border-radius: 23px;
    background-color: #00abbf;
`;
