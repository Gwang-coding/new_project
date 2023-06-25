import styled from 'styled-components';
import dynamic from 'next/dynamic';
const PostEditor = dynamic(() => import('../Admin/PostEditor'), { ssr: false });

export default function ProdectManageIn() {
    return (
        <>
            <Div className="Container">
                <Div className="TopBox">
                    <Span className="Title">상품 [최강우디르] 관리</Span>
                    <Div>
                        <Btn className="DelBtn">
                            <Span className="BtnText">삭제하기</Span>
                        </Btn>
                        <Btn className="SaveBtn">
                            <Span className="BtnText">저장하기</Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="InfoBox">
                    <Div className="Info">
                        <Div className="WrapperBox" width="55%">
                            <Div className="Wrapper">
                                <Span>상품명</Span>
                                <Input className="ProductInput" />
                            </Div>
                            <Div className="Wrapper">
                                <Span>간략한 설명</Span>
                                <Input className="ProductInput" />
                            </Div>
                            <Div className="Wrapper">
                                <Span>카테고리</Span>
                                <Div className="InputBox">
                                    <Span className="InputText">카테고리</Span>
                                    <Img src="/assets/images/icon-a-right-gray.png" />
                                </Div>
                                <Div className="LinkDropdown">
                                    <Span className="InputText">비구매자</Span>
                                    <Span className="InputText">구매자</Span>
                                    <Span className="InputText">리셀러</Span>
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span>상품이미지 URL</Span>
                                <Input className="ProductInput" />
                            </Div>
                            <Div className="Wrapper">
                                <Span>소개영상 URL</Span>
                                <Input className="ProductInput" />
                            </Div>
                        </Div>
                        <Div className="WrapperBox" width="30%">
                            <Div className="Wrapper">
                                <Span>판매중지</Span>
                                <Div className="Rectangle-Copy-2-on">
                                    <Div className="Oval-Copy-2" />
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span>패치중</Span>
                                <Div className="Rectangle-Copy-2-off">
                                    <Div className="Oval-Copy-2" />
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span>리셀러에게만 판매</Span>
                                <Div className="Rectangle-Copy-2-off">
                                    <Div className="Oval-Copy-2" />
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Line" />
                    <Div className="Top">
                        <Span className="SubTitle">재고</Span>
                    </Div>
                    <Div className="Info">
                        <Div className="Wrapper">
                            <Div className="WrapperItem">
                                <Span>첫번째</Span>
                                <Textarea placeholder="재고넣는 칸입니다." />
                                <Input type="number" className="InvenInput" placeholder="가격(숫자만 입력)" />
                                <Input className="InvenInput" placeholder="단위" />
                                <Input className="InvenInput" placeholder="원가" />
                            </Div>
                            <Div className="WrapperItem">
                                <Span>두번째</Span>
                                <Textarea placeholder="재고넣는 칸입니다." />
                                <Input type="number" className="InvenInput" placeholder="가격(숫자만 입력)" />
                                <Input className="InvenInput" placeholder="단위" />
                                <Input className="InvenInput" placeholder="원가" />
                            </Div>
                            <Div className="WrapperItem">
                                <Span>세번째</Span>
                                <Textarea placeholder="재고넣는 칸입니다." />
                                <Input type="number" className="InvenInput" placeholder="가격(숫자만 입력)" />
                                <Input className="InvenInput" placeholder="단위" />
                                <Input className="InvenInput" placeholder="원가" />
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Top">
                        <Span>제품소개</Span>
                    </Div>
                    <Div className="EditorBox">
                        <PostEditor />
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
    }

    &.WrapperBox {
        margin-right: 5%;
        width: ${(props) => props.width};
    }
    &.InfoBox {
        width: 100%;
        padding: 0px 40px;
    }
    &.Info {
        display: flex;
        padding: 30px 0 10px 0;
        justify-content: space-between;
    }
    &.Wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    &.WrapperItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 500px;
        width: 30%;
    }
    &.EditorBox {
        margin: 25px 0;
    }
    &.InputBox {
        cursor: pointer;
        width: 633px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
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
    &.Line {
        height: 1px;
        width: 100%;
        background-color: #393b44;
    }
    &.LinkDropdown {
        position: absolute;
        top: 60px;
        left: 148px;
        width: 635px;
        display: grid;
        padding: 20px 13px;
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
`;
const Span = styled.span`
    font-size: 18px;
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
    &.InputText {
        font-size: 15px;
    }
    &.BtnText {
        font-size: 15px;
        font-weight: 600;
        color: #fff;
    }
`;
const Input = styled.input`
    &.ProductInput {
        height: 52px;
        width: 633px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 10px;
        font-size: 15px;
        font-weight: normal;
        color: #e5e8ea;
        outline: none;
    }
    &.InvenInput {
        height: 52px;
        width: 100%;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 10px;
        font-size: 15px;
        font-weight: normal;
        color: #e5e8ea;
        outline: none;
        webkit-appearance: none;
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
        &.LinkDropdown {
            position: absolute;
            margin: 320px 0 0 168px;
            width: 390px;
            display: grid;
            padding: 20px 13px;
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
    }
`;
const Textarea = styled.textarea`
    height: 250px;
    width: 100%;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    padding: 10px;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    outline: none;
    resize: none;
`;
const Btn = styled.button`
    &.DelBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #474950;
    }
    &.SaveBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
        margin-left: 10px;
    }
`;

const Img = styled.img``;
