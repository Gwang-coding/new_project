import styled from 'styled-components';
import dynamic from 'next/dynamic';
const PostEditor = dynamic(() => import('../Admin/PostEditor'), { ssr: false });

export default function PopupManage() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="PopTop">
                <Span className="PopText" size="26px" weight="bold">
                    팝업관리
                </Span>
                <Btn className="Rectangle-Copy-6">+ 추가하기</Btn>
            </Div>
            <Div className="PopBottom">
                <Span className="PopText" size="18px" weight="normal">
                    제목
                </Span>
                <Input className="Rectangle-Copy-10" width="100%"></Input>
                <Span className="PopText" size="18px" weight="normal">
                    내용
                </Span>
                <Div className="EditorBox">
                    <PostEditor />
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 5px;
    }
    &.PopBottom {
        padding: 30px 40px;
    }
    &.PopTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.EditorBox {
        margin: 25px 0;
    }
`;
const Span = styled.span`
    &.PopText {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        text-align: center;
        letter-spacing: normal;
        color: #e5e8ea;
        padding-left: ${(props) => props.Lpadding};
    }
`;
const Input = styled.input`
&.Rectangle-Copy-10 {
    width: ${(props) => props.width};
    height: 52px;
    margin 20px 0;
    border-radius: 10px;
    border: solid 1px #3d3f45;
    background-color: #31333a;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    color: #fff;
}
&.Rectangle-Copy-10 :focus {
    outline: none;
}
`;
const Btn = styled.button`
    &.Rectangle-Copy-6 {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #fff;
    }
`;

const Img = styled.img``;
