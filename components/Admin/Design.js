import styled from 'styled-components';

export default function Design() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="DesignTop">
                <Span className="DesignText" size="26px" weight="bold">
                    디지인
                </Span>
                <Btn className="Rectangle-Copy-6"> 적용하기</Btn>
            </Div>

            <Div className="DesignWrapper" border="1px solid #3d3f45" flex="column">
                <Div className="DesignBox" width="100%">
                    <Span className="DesignText" weight="normal" size="18px">
                        로그인 배경화면 이미지 URL
                    </Span>
                    <Input className="Rectangle-Copy-10" width="80%" placeholder="https://"></Input>
                </Div>
                <Div className="DesignBox" width="100%">
                    <Span className="DesignText" weight="normal" size="18px">
                        공지사항 URL
                    </Span>
                    <Input className="Rectangle-Copy-10" width="80%" placeholder="https://"></Input>
                </Div>
                <Div className="DesignBox" width="100%">
                    <Span className="DesignText" weight="normal" size="18px">
                        배경음악 URL
                    </Span>
                    <Input className="Rectangle-Copy-10" width="80%" placeholder="https://"></Input>
                </Div>
                <Div className="DesignBox" width="100%">
                    <Span className="DesignText" weight="normal" size="18px">
                        점검창로고 URL
                    </Span>
                    <Input className="Rectangle-Copy-10" width="80%" placeholder="https://"></Input>
                </Div>
                <Div className="DesignBox" width="100%">
                    <Span className="DesignText" weight="normal" size="18px">
                        프로필사진
                    </Span>
                    <Input className="Rectangle-Copy-10" width="80%" placeholder="https://"></Input>
                </Div>
                <Div className="DesignBox" width="25%">
                    <Span className="DesignText" weight="normal" size="18px">
                        RGB 사용
                        <br />
                        <Span className="RGBText">#00000000</Span>
                    </Span>
                    <Div className="Rectangle-Copy-2-on">
                        <Div className="Oval-Copy-2"></Div>
                    </Div>
                </Div>
            </Div>
            <Div className="DesignWrapper" border="1px solid #3d3f45">
                <Span className="DesignText" size="22px" weight="bold">
                    메인
                </Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span className="GridText">배경</Span>

                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">글자</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">긴급공지</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">카드</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                </Div>
            </Div>
            <Div className="DesignWrapper" border="1px solid #3d3f45">
                <Span className="DesignText" size="22px" weight="bold">
                    카테고리
                </Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span className="GridText">배경</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼1</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼2</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">클릭시 글자</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">방문자수</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                </Div>
            </Div>
            <Div className="DesignWrapper">
                <Span className="DesignText" size="22px" weight="bold">
                    상점
                </Span>
                <Div className="PercentWrapper">
                    <Div className="PercentBox">
                        <Span className="GridText">배경</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">카드</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼1</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼2</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼3</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼1클릭</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼2클릭</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
                    <Div className="PercentBox">
                        <Span className="GridText">버튼3클릭</Span>
                        <Input className="Rectangle-Copy-10" width="70%"></Input>
                    </Div>
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
    }
    &.DesignTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }

    &.DesignWrapper {
        width: 100%;
        padding: 25px 40px 10px 40px;
        border-bottom: ${(props) => props.border};
        display: flex;
        flex-direction: column;
    }
    &.DesignBox {
        width: ${(props) => props.width};
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
        column-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    &.PercentBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
const Span = styled.span`
    &.DesignText {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        margin-right: 10px;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.GridText {
        width: 80px;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        margin-right: 10px;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.RGBText {
        width: 65px;
        height: 24px;
        margin: 2px 6px 0 0;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #979aa0;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        height: 52px;
        padding-left: 10px;
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
        width: 90px;
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
