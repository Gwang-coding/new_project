import styled from 'styled-components';

export function Header() {
    return (
        <Div className="MenuTop">
            <Img src="/assets/images/icon-c-notice.png" className="IconC"></Img>
            <Img src="/assets/images/icon-c-chat.png" className="IconC"></Img>
            <Img src="/assets/images/icon-c-setting.png" className="IconC"></Img>
            <Div className="IconSlash" />
            <Span className="admon5488">admon5488님</Span>
            <Div className="MenuMask">
                <Img src="/assets/images/icon-user.png" className="iconuser24"></Img>
            </Div>
        </Div>
    );
}
export function UserHeader() {
    return (
        <Div className="UserMenuTop">
            <Img src="/assets/images/icon-c-home.png" className="IconC"></Img>

            <Div className="UserMenu">
                <Img src="/assets/images/icon-c-notice.png" className="IconC"></Img>
                <Img src="/assets/images/icon-c-chat.png" className="IconC"></Img>
                <Img src="/assets/images/icon-c-setting.png" className="IconC"></Img>
                <Div className="IconSlash" />
                <Div>
                    <Span className="admon5488">admon5488님</Span>
                    <Div className="PopupImg">
                        <Img src="/assets/images/icon-tooltip-arrow.png" className="PopupImg" />
                        <Div className="LinkDropdown">
                            <Div className="NameBox">
                                <Span className="Text" size="18px" weight="normal" color="#e5e8ea">
                                    admon5488님
                                </Span>
                                <Div className="Rectangle-Copy-11" bcolor="#0cbe9d">
                                    <Span className="Text" size="14px" weight="600" color="#e5e8ea">
                                        VIP
                                    </Span>
                                </Div>
                            </Div>
                            <Div className="PointBox">
                                <Div className="PointText">
                                    <Img src="/assets/images/icon-point.png" />
                                    <Span className="TextBox">누적포인트</Span>
                                </Div>
                                <Span className="Text" size="15px" color="#fff">
                                    10,000원
                                </Span>
                            </Div>
                            <Div className="PointBox">
                                <Div className="PointText">
                                    <Img src="/assets/images/icon-point.png" />
                                    <Span className="TextBox">누적포인트</Span>
                                </Div>
                                <Span className="Text" size="15px" color="#fff">
                                    758,400원
                                </Span>
                            </Div>
                            <Div className="Rectangle-Copy-4" />
                            <Span className="Text" size="15px" color="#fff">
                                구매내역
                            </Span>
                            <Span className="Text" size="15px" color="#fff">
                                충전내역
                            </Span>
                            <Span className="Text" size="15px" color="#fff">
                                비밀번호 변경
                            </Span>
                            <Span className="Text" size="15px" color="#fff">
                                로그아웃
                            </Span>
                        </Div>
                    </Div>
                </Div>
                <Div className="MenuMask">
                    <Img src="/assets/images/icon-user.png" className="iconuser24"></Img>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.MenuTop {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 30px;
        border-bottom: 1px solid #3d3f45;
        justify-content: flex-end;
    }
    &.UserMenuTop {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 30px 18px 10px;
        border-bottom: 1px solid #3d3f45;
        justify-content: space-between;
    }
    &.UserMenu {
        display: flex;
        align-items: center;
    }
    &.IconSlash {
        width: 1px;
        height: 20px;
        margin: 8px 10px;
        background-color: #3d3f45;
    }
    &.MenuMask {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin: 0 0 0 12px;
        padding: 9px;
        background-image: linear-gradient(to bottom, rgba(213, 251, 255, 0.8), rgba(163, 226, 234, 0.8));
    }
    &.LinkDropdown {
        position: absolute;
        width: 280px;
        height: 330px;
        margin-left: -100px;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 16px;
        padding: 30px 30px;
        background-color: #35383f;
        z-index: 1;
        text-align: start;
    }
    &.PopupImg {
        width: 100%;
        text-align: center;
    }
    &.NameBox {
        display: flex;
    }
    &.Rectangle-Copy-11 {
        height: 22px;
        margin-left: 10px;
        padding: 0 8px;
        border-radius: 4px;
        background-color: #0cbe9d;
    }
    &.PointBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.PointText {
        display: flex;
        align-items: center;
    }
    .Rectangle-Copy-4 {
        width: 220px;
        height: 1px;
        background-color: #575a63;
    }
`;
const Span = styled.span`
    &.admon5488 {
        width: 103px;
        height: 28px;
        margin: 0px 12px 0px 20px;
        font-family: Pretendard;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.Text {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: ${(props) => props.color};
    }
    &.TextBox {
        margin: 0 5px;
        color: #e5e8ea;
        font-size: 15px;
        weight: normal;
    }
`;
const Img = styled.img`
    &.IconC {
        width: 30px;
        height: 30px;
        margin: 0px 14px;
        object-fit: contain;
        cursor: pointer;
    }
    &.iconuser24 {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
    &.PopupImg {
        position: absolute;
        z-index: 1;
        margin-top: 11px;
    }
`;
