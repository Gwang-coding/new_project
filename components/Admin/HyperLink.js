import styled from 'styled-components';

export default function Link() {
    return (
        <>
            <Div className="Rectangle-Copy-15">
                <Div className="LinkTop">
                    <Span className="LinkText" weight="bold" size="26px">
                        하이퍼링크
                    </Span>
                </Div>
                <Div className="LinkPlusBox">
                    <Span className="LinkText" weight="bold" size="22px" width="77px">
                        링크추가
                    </Span>
                    <Div className="LinkPlus">
                        <Span className="LinkText" width="26px" weight="normal" size="15px">
                            이름
                        </Span>
                        <Input placeholder="이름" className="Rectangle-Copy-10" width="13%"></Input>

                        <Span className="LinkText" width="135px" weight="normal" size="15px">
                            링크 URL(http://필수)
                        </Span>
                        <Input placeholder="링크 URL" className="Rectangle-Copy-10" width="30%"></Input>

                        <Span className="LinkText" width="112px" weight="normal" size="15px">
                            구매자 이상만 보기
                        </Span>
                        <Div>
                            <Div className="Rectangle-Copy-10" width="220px">
                                <p>아니요</p>
                                <Img src="/assets/images/icon-a-right-gray.png" className="IconARightGray16"></Img>
                            </Div>
                            <Div className="LinkDropdown">
                                <Span className="Dropdown_text">예</Span>
                                <Span className="Dropdown_text">아니요</Span>
                            </Div>
                        </Div>

                        <Btn className="Rectangle-Copy-6">+ 추가하기</Btn>
                    </Div>
                    <Span className="LinkText" weight="bold" size="22px" width="77px">
                        링크관리
                    </Span>
                </Div>
                <Div className="LinkBar">
                    <Span className="LinkText" weight="bold" size="16px" width="50px">
                        NO
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        이름
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="600px">
                        링크
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        구매자이상 보이기
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="60px"></Span>
                </Div>
                <Div className="LinkInfo" border="1px solid #3d3f45">
                    <Span className="LinkText" weight="bold" size="16px" width="50px">
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png"></Img>
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        텔레그램 공지방
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="600px">
                        https://t.me.+GaJUth56dVKNFGI
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        아니오
                    </Span>
                    <Btn className="Rectangle-Copy-7">삭제</Btn>
                </Div>
                <Div className="LinkInfo" border="">
                    <Span className="LinkText" weight="bold" size="16px" width="50px">
                        <Img src="/assets/images/icon-a-updowncotrol-gray.png" />
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        텔레그램 관리자문의
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="600px">
                        https://t.me.+GaJUth56dVKNFGI
                    </Span>
                    <Span className="LinkText" weight="bold" size="16px" width="220px">
                        아니오
                    </Span>
                    <Btn className="Rectangle-Copy-7">삭제</Btn>
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

        margin-top: 40px;
        padding-bottom: 15px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.LinkTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        border-bottom: 1px solid #3d3f45;
    }
    &.LinkPlusBox {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        flex-direction: column;
    }
    &.LinkPlus {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 20px 0;
        margin-bottom: 25px;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        padding: 15px;
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
    &.LinkDropdown {
        position: absolute;
        margin-top: 5px;
        width: 220px;
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
    &.LinkBar {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px 100px 10px 40px;
        background-color: #31333a;
    }
    &.LinkInfo {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 10px 100px 10px 40px;
        background-color: #272a31;
        border-bottom: ${(props) => props.border};
        margin-top: 10px;
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
`;
const Span = styled.span`
&.LinkText {
    width:${(props) => props.width};
    font-family: Pretendard;
    font-size: ${(props) => props.size};
    font-weight: ${(props) => props.weight};
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    color: #e5e8ea;
    text-align:center;
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
        width: 104px;
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
    &.Rectangle-Copy-7 {
        width: 60px;
        height: 34px;
        padding: 5px 17px;
        border-radius: 6px;
        background-color: #f34a7e;
    }
`;

const Img = styled.img`
    &.IconARightGray16 {
        width: 20px;
        height: 16px;
        object-fit: contain;
    }
    &.iconpagnagtion {
        width: 24px;
        height: 24px;
    }
`;
