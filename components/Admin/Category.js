import styled from 'styled-components';

export default function Category() {
    return (
        <>
            <Div className="Container">
                <Div className="TopBox">
                    <Span className="Title">카테고리</Span>
                    <Btn>
                        <Span className="BtnText">저장하기</Span>
                    </Btn>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="SubTitle">카테고리 추가</Span>
                        <Img src="/assets/images/icon-piuscircle.png" />
                    </Div>
                    <Div className="Wrapper">
                        <Div className="FirstInfo">
                            <Img src="/assets/images/icon-control.png" />
                            <Div className="Oval">
                                <Span>1</Span>
                            </Div>
                            <Div className="FirstBox">
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-uparrow.png" />
                                </Div>
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-downarrow.png" />
                                </Div>
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="OtherInfo">
                            <Div className="OtherBox">
                                <Img src="/assets/images/icon-indentarrow.png" />
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="OtherInfo">
                            <Div className="OtherBox">
                                <Img src="/assets/images/icon-indentarrow.png" />
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Wrapper">
                        <Div className="FirstInfo" justify="space-between">
                            <Img src="/assets/images/icon-control.png"></Img>
                            <Div className="Oval">
                                <Span>2</Span>
                            </Div>
                            <Div className="FirstBox">
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-uparrow.png" />
                                </Div>
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-downarrow.png" />
                                </Div>
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="OtherInfo">
                            <Div className="OtherBox">
                                <Img src="/assets/images/icon-indentarrow.png" />
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="OtherInfo">
                            <Div className="OtherBox">
                                <Img src="/assets/images/icon-indentarrow.png" />
                                <Input />
                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}

const Div = styled.div`
    &.Container {
        width: 1500px;
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
    &.Wrapper {
        margin-top: 30px;
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.FirstInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 15px;
    }
    &.OtherInfo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-top: 15px;
    }
    &.Oval {
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #3a3b44;
        margin: 0 11px;
    }
    &.FirstBox {
        width: 1345px;
        height: 52px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    &.OtherBox {
        width: 1345px;
        height: 52px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        display: flex;
        justify-content: space-between;
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
    line-height: 1.46;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    &.Title {
        font-size: 26px;
        font-weight: bold;
        color: #e5e8ea;
    }
    &.SubTitle {
        margin-right: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #3dc6d7;
    }
    &.BtnText {
        font-size: 15px;
        font-weight: 600;
        color: #fff;
    }
`;
const Input = styled.input`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    border: none;
    background-color: #31333a;
    font-size: 18px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
    padding-left: 10px;
`;
const Btn = styled.button`
    height: 40px;
    padding: 8px 19px;
    border-radius: 23px;
    background-color: #00abbf;
`;

const Img = styled.img`
    cursor: pointer;
`;
