import styled from 'styled-components';
import dynamic from 'next/dynamic';
const PostEditor = dynamic(() => import('../Admin/PostEditor'), { ssr: false });

export default function ProdectManageIn() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="26px" weight="bold">
                        상품 [최강우디르] 관리
                    </Span>
                    <Span>
                        <Btn className="Rectangle-Copy-7" color="#474950">
                            삭제하기
                        </Btn>
                        <Btn className="Rectangle-Copy-7" color="#00abbf">
                            저장하기
                        </Btn>
                    </Span>
                </Div>
                <Div className="InfoBox">
                    <Div className="Info" border="1px solid #3d3f45">
                        <Div className="WrapperBox" width="60%">
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal" width="130px">
                                    상품명
                                </Span>
                                <Input className="Rectangle-Copy-18" height="52px" width="633px" />
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal" width="130px">
                                    간략한 설명
                                </Span>
                                <Input className="Rectangle-Copy-18" height="52px" width="633px" />
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal" width="130px">
                                    카테고리
                                </Span>
                                <Div className="Rectangle-Copy-10">
                                    <Span className="Text" size="15px" weight="normal">
                                        카테고리
                                    </Span>
                                    <Img src="/assets/images/icon-a-right-gray.png"></Img>
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal" width="130px">
                                    상품이미지 URL
                                </Span>
                                <Input className="Rectangle-Copy-18" height="52px" width="633px" />
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal" width="130px">
                                    소개영상 URL
                                </Span>
                                <Input className="Rectangle-Copy-18" height="52px" width="633px" />
                            </Div>
                        </Div>
                        <Div className="WrapperBox" width="30%">
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal">
                                    판매중지
                                </Span>
                                <Div className="Rectangle-Copy-2-on">
                                    <Div className="Oval-Copy-2"></Div>
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal">
                                    패치중
                                </Span>
                                <Div className="Rectangle-Copy-2-off">
                                    <Div className="Oval-Copy-2"></Div>
                                </Div>
                            </Div>
                            <Div className="Wrapper">
                                <Span className="Text" size="18px" weight="normal">
                                    리셀러에게만 판매
                                </Span>
                                <Div className="Rectangle-Copy-2-off">
                                    <Div className="Oval-Copy-2"></Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Top">
                        <Span className="Text" size="22px" weight="bold">
                            재고
                        </Span>
                    </Div>
                    <Div className="Info">
                        <Div className="Wrapper">
                            <Div className="WrapperItem">
                                <Span className="Text" size="18px" weight="normal">
                                    첫번째
                                </Span>
                                <Input className="Rectangle-Copy-18" height="250px" width="100%" placeholder="재고넣는 칸입니다." />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="가격(숫자만 입력)" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="단위" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="원가" />
                            </Div>
                            <Div className="WrapperItem">
                                <Span className="Text" size="18px" weight="normal">
                                    두번째
                                </Span>
                                <Input className="Rectangle-Copy-18" height="250px" width="100%" placeholder="재고넣는 칸입니다." />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="가격(숫자만 입력)" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="단위" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="원가" />
                            </Div>
                            <Div className="WrapperItem">
                                <Span className="Text" size="18px" weight="normal">
                                    세번째
                                </Span>
                                <Input className="Rectangle-Copy-18" height="250px" width="100%" placeholder="재고넣는 칸입니다." />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="가격(숫자만 입력)" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="단위" />
                                <Input className="Rectangle-Copy-18" height="52px" width="100%" placeholder="원가" />
                            </Div>
                        </Div>
                    </Div>
                    <Div className="Top">
                        <Span className="Text" size="18px" weight="normal">
                            제품소개
                        </Span>
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
    &.Rectangle-Copy-15 {
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
        padding-top: 25px;
        border-bottom: ${(props) => props.border};
    }
    &.Wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
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
    &.Rectangle-Copy-10 {
        cursor: pointer;
        width: 633px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
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
    }
    &.Rectangle-Copy-2-off {
        width: 50px;
        height: 26px;
        margin: 0 20px;
        padding: 3px 26px 3px 4px;
        border-radius: 100px;
        background-color: #474950;
    }

    &.Oval-Copy-2 {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
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
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 10px;
        font-family: Pretendard;
        font-size: 17px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-Copy-18 :focus {
        outline: none;
    }
`;
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

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
