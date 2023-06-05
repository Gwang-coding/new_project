import styled from 'styled-components';

export default function Popup() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="PopTop">
                <Span className="PopText" size="26px" weight="bold">
                    팝업관리
                </Span>
                <Btn className="Rectangle-Copy-6">+ 추가하기</Btn>
            </Div>
            <Div className="PopBar">
                <Span className="PopText" size="16px" weight="bold">
                    제목
                </Span>
            </Div>
            <Div className="PopInfo" border="1px solid #3d3f45">
                <Div className="PopWrapper">
                    <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    <Span className="PopText" weight="normal" size="15px" Lpadding="20px">
                        게좌변경되었습니다.
                    </Span>
                </Div>
                <Div>
                    <Btn className="Rectangle-Copy-7" color="#00abbf">
                        <Span className="PopText" weight="normal" size="15px">
                            수정
                        </Span>
                    </Btn>
                    <Btn className="Rectangle-Copy-7" color="#f34a7e">
                        <Span className="PopText" weight="normal" size="15px">
                            삭제
                        </Span>
                    </Btn>
                </Div>
            </Div>
            <Div className="PopInfo" border="">
                <Div className="PopWrapper">
                    <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    <Span className="PopText" weight="normal" size="15px" Lpadding="20px">
                        게좌변경되었습니다.
                    </Span>
                </Div>
                <Div>
                    <Btn className="Rectangle-Copy-7" color="#00abbf">
                        <Span className="PopText" weight="normal" size="15px">
                            수정
                        </Span>
                    </Btn>
                    <Btn className="Rectangle-Copy-7" color="#f34a7e">
                        <Span className="PopText" weight="normal" size="15px">
                            삭제
                        </Span>
                    </Btn>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Rectangle-Copy-15 {
        width: 100%;

        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 5px;
    }
    &.PopTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
    }
    &.PopBar {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #31333a;
    }
    &.PopInfo {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 20px 40px;
        background-color: #272a31;
        border-bottom: ${(props) => props.border};
    }
    &.PopWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
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
    &.Rectangle-Copy-7 {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: ${(props) => props.color};
        margin-left: 15px;
    }
`;

const Img = styled.img``;
