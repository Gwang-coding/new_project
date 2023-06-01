import styled from 'styled-components';
import dynamic from 'next/dynamic';
const PostEditor = dynamic(() => import('../Admin/PostEditor'), { ssr: false });

export default function Notice() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="EditorTop">
                <Span className="EditorTitle">공지사항</Span>
                <Span className="EditorText">
                    <p>메인공지 점검공지</p>
                    <Div className="Rectangle-Copy-2-off">
                        <Div className="Oval-Copy-2" />
                    </Div>
                    <Btn className="Rectangle-Copy-6">저장하기</Btn>
                </Span>
            </Div>

            <Div className="EditorBox">
                <PostEditor />
            </Div>
            <Span className="EditorText">긴급공지</Span>
            <Div className="EditorBox">
                <Input className="Rectangle-Copy-23"></Input>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;
        height: 100%;
        padding: 25px 40px;
        margin: 40px 0px;
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.EditorTop {
        width: 100%;
        padding-bottom: 25px;

        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.Rectangle-Copy-2-off {
        width: 62px;
        height: 32px;
        padding: 4px 34px 4px 4px;
        margin: 0px 40px 0px 16px;
        border-radius: 100px;
        background-color: #474950;
    }

    &.Oval-Copy-2 {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
    }
    &.EditorBox {
        margin: 25px 0;
    }
`;
const Span = styled.span`
    &.EditorTitle {
        font-family: Pretendard;
        font-size: 26px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.EditorText {
        display: flex;
        align-items: center;
        font-family: Pretendard;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;

const Input = styled.input`
    &.Rectangle-Copy-23 :focus {
        outline: none;
    }
    &.Rectangle-Copy-23 {
        width: 100%;
        height: 329px;
        padding: 10px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
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
const Btn = styled.button`
    &.Rectangle-Copy-6 {
        width: 90px;
        height: 40px;
        padding: 8px 19px;
        border-radius: 10px;
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
