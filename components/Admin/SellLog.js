import styled from 'styled-components';
import dynamic from 'next/dynamic';
const Calendar = dynamic(() => import('../Admin/Calendar'), { ssr: false });

export default function SellLog() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="TopBox">
                    <Span className="Text" size="26px" weight="bold">
                        판매내역
                    </Span>
                    <Div className="Top">
                        <Div className="Rectangle-Copy-10">
                            <Span className="Text" size="15px" weight="normal">
                                아이디
                            </Span>
                            <Img src="/assets/images/icon-a-right-gray.png"></Img>
                        </Div>
                        <Div className="LinkDropdown">
                            <Span className="Dropdown_text">아이디</Span>
                            <Span className="Dropdown_text">상품명</Span>
                            <Span className="Dropdown_text">상품</Span>
                        </Div>
                        <Input className="Rectangle-Copy-18" />
                        <Btn className="Rectangle-Copy-7" color="#f34a7e">
                            <Span className="Text" size="15px" weight="normal">
                                검색
                            </Span>
                        </Btn>
                    </Div>
                    <Div className="Top">
                        <Calendar />
                        <Btn className="Rectangle-Copy-7" color="#00abbf" width="150px">
                            적용
                        </Btn>
                    </Div>
                </Div>
                <Div className="Bar">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        NO
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        판매날짜
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        유저아이디
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        상품명
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="90px">
                        단위
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        금액
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        상품
                    </Span>
                </Div>
                <Div className="Info" border="1px solid #3d3f45">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        1
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        2022-05-30 22:10:05
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        김길동
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        우디르
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="90px">
                        1일
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        6,000원
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        Udyr-dasdqwdasddas
                    </Span>
                </Div>
                <Div className="Info" border="">
                    <Span className="Text" size="16px" weight="bold" width="50px">
                        1
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        2022-05-30 22:10:05
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        김길동
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        우디르
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="90px">
                        1일
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="130px">
                        6,000원
                    </Span>
                    <Span className="Text" size="16px" weight="bold" width="220px">
                        Udyr-dasdqwdasddas
                    </Span>
                </Div>
            </Div>
            <Div className="PageBox">
                <Div className="PageBar">
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-left-2.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-left.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="CheckedNum">
                        <Div className="Rectangle-Copy-17" color="#fff">
                            1
                        </Div>
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        2
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        3
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        4
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        5
                    </Div>
                    <Div className="Rectangle-Copy-17" color="#7a7c85">
                        <Img src="/assets/images/icon-pagnagtion-right.png" className="iconpagnagtion" />
                    </Div>
                    <Div className="Rectangle-Copy-17">
                        <Img src="/assets/images/icon-pagnagtion-right-2.png" className="iconpagnagtion" />
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
        align-items: center;
        justify-content: space-between;
    }
    &.Top {
        display: flex;
        align-items: center;
    }
    &.Bar {
        padding: 0px 110px 0 40px;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #31333a;
    }
    &.Info {
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: space-between;
        padding: 20px 110px 20px 40px;
        background-color: #272a31;
        border-bottom: ${(props) => props.border};
    }
    &.Rectangle-Copy-10 {
        cursor: pointer;
        width: 180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 46px;
        padding: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
    }
    &.PageBox {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 30px 0;
    }
    &.PageBar {
        display: flex;
    }
    &.Rectangle-Copy-17 {
        width: 44px;
        height: 44px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        display: flex;
        letter-spacing: normal;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.color};
    }
    &.CheckedNum {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #00abbf;
    }
    &.LinkDropdown {
        position: absolute;
        margin-top: 220px;
        width: 180px;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #31333a;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 1;
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
        text-align: center;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.Dropdown_text {
        margin: 14px 0;
        font-family: Pretendard;
        font-size: 16px;
        opecity:0
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-18 {
        width: 250px;
        height: 46px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        padding: 10px;
        margin: 0 20px;
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
        width: ${(props) => props.width};
        height: 46px;
        padding: 11px 27px;
        border-radius: 10px;
        background-color: ${(props) => props.color};
        margin-left: 10px;
        color: #fff;
        font-size: 15px;
    }
`;

const Img = styled.img`
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
