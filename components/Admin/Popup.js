import styled from 'styled-components';

export default function Popup() {
    return (
        <Div className="Wrapper">
            <Div className="Box">
                <Span className="Title">팝업관리</Span>
                <Btn className="PlusBtn">
                    <Span className="BtnText">+ 추가하기</Span>
                </Btn>
            </Div>
            <Div className="PopBar">
                <Span className="TitleText">제목</Span>
            </Div>
            <Div className="Box">
                <Div className="PopWrapper">
                    <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    <Span>게좌변경되었습니다.</Span>
                </Div>
                <Div>
                    <Btn className="ModBtn">
                        <Span>수정</Span>
                    </Btn>
                    <Btn className="DelBtn">
                        <Span>삭제</Span>
                    </Btn>
                </Div>
            </Div>
            <Div className="Line" />
            <Div className="Box">
                <Div className="PopWrapper">
                    <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    <Span>게좌변경되었습니다.</Span>
                </Div>
                <Div>
                    <Btn className="ModBtn">
                        <Span>수정</Span>
                    </Btn>
                    <Btn className="DelBtn">
                        <Span>삭제</Span>
                    </Btn>
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
        padding-bottom: 5px;
    }
    &.Box {
        width: 100%;
        padding: 20px 40px;
        display: flex;
        justify-content: space-between;
    }
    &.PopBar {
        width: 100%;
        padding: 15px 0;
        text-align: center;
        background-color: #31333a;
    }
    &.Line {
        width: 100%;
        height: 1px;
        background-color: #393b44;
    }
    &.PopWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Span = styled.span`
    color: #e5e8ea;
    line-height: 1.46;
    font-weight: normal;
    font-size: 15px;

    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.BtnText {
        color: #fff;
        font-weight: 600;
    }
    &.TitleText {
        font-size: 16px;
        font-weight: bold;
    }
`;
const Btn = styled.button`
    &.PlusBtn {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
    }
    &.ModBtn {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: #00abbf;
    }
    &.DelBtn {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: #f34a7e;
        margin-left: 15px;
    }
`;

const Img = styled.img`
    padding-right: 10px;
`;
