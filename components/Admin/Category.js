import styled from 'styled-components';

export default function Category() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="26px" weight="bold" color="#e5e8ea">
                        카테고리
                    </Span>

                    <Btn className="Rectangle-Copy-7" color="#00abbf">
                        저장하기
                    </Btn>
                </Div>
                <Div className="InfoBox">
                    <Div className="Top">
                        <Span className="Text" size="18px" weight="normal" color="#3dc6d7">
                            카테고리 추가
                        </Span>
                        <Img src="/assets/images/icon-piuscircle.png"></Img>
                    </Div>
                    <Div className="Wrapper">
                        <Div className="Info" justify="space-between">
                            <Img src="/assets/images/icon-control.png"></Img>
                            <Div className="Oval">
                                <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                                    1
                                </Span>
                            </Div>
                            <Div className="Rectangle-Copy-18" justify="flex-end">
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
                        <Div className="Info" justify="flex-end">
                            <Div className="Rectangle-Copy-18" justify="space-between">
                                <Img src="/assets/images/icon-indentarrow.png" />

                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="Info" justify="flex-end">
                            <Div className="Rectangle-Copy-18" justify="space-between">
                                <Img src="/assets/images/icon-indentarrow.png" />

                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Wrapper">
                        <Div className="Info" justify="space-between">
                            <Img src="/assets/images/icon-control.png"></Img>
                            <Div className="Oval">
                                <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                                    2
                                </Span>
                            </Div>
                            <Div className="Rectangle-Copy-18" justify="flex-end">
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
                        <Div className="Info" justify="flex-end">
                            <Div className="Rectangle-Copy-18" justify="space-between">
                                <Img src="/assets/images/icon-indentarrow.png" />

                                <Div className="ImgBox">
                                    <Img src="/assets/images/icon-pius.png" />
                                </Div>
                            </Div>
                        </Div>
                        <Div className="Info" justify="flex-end">
                            <Div className="Rectangle-Copy-18" justify="space-between">
                                <Img src="/assets/images/icon-indentarrow.png" />

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
    &.Wrapper {
        margin-top: 30px;
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.Info {
        display: flex;
        justify-content: ${(props) => props.justify};
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
        letter-spacing: normal;
        color: ${(props) => props.color};
    }
`;
const Input = styled.input``;
const Btn = styled.button`
    &.Rectangle-Copy-7 {
        width: 105px;
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
