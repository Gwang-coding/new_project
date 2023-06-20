import styled from 'styled-components';

export function Header() {
    return (
        <Div className="MenuTop">
            <Img src="/assets/images/icon-c-notice.png" className="IconC"></Img>
            <Img src="/assets/images/icon-c-chat.png" className="IconC"></Img>
            <Img src="/assets/images/icon-c-setting.png" className="IconC"></Img>
            <Div className="IconSlash" />
            <Span className="ID">admon5488님</Span>
            <Div className="MenuMask">
                <Img src="/assets/images/icon-user-24.png" className="iconuser24"></Img>
            </Div>
        </Div>
    );
}
export function UserHeader() {
    return (
        <Div className="UserMenuTop">
            <Img src="/assets/images/icon-c-home.png" className="IconC"></Img>
            <Div className="UserMenu">
                <Img src="/assets/images/icon-c-notice.png" className="IconC" />
                <Img src="/assets/images/icon-c-chat.png" className="IconC" />
                <Img src="/assets/images/icon-c-setting.png" className="IconC" />
                <Div className="IconSlash" />
                <Div>
                    <Span className="ID">admon5488님</Span>
                    {/* <Div className="ClickedBox">
                        <Img src="/assets/images/icon-tooltip-arrow.png" className="PopupImg" />
                        <Div className="LinkDropdown">
                            <Div className="NameBox">
                                <Span className="DropID">admon5488님</Span>
                                <Div className="ColorBox">
                                    <Span className="IdRank">VIP</Span>
                                </Div>
                            </Div>
                            <Div className="PointBox">
                                <Div className="PointText">
                                    <Img src="/assets/images/icon-point.png" />
                                    <Span className="TextBox">누적포인트</Span>
                                </Div>
                                <Span className="DropText">10,000원</Span>
                            </Div>
                            <Div className="PointBox">
                                <Div className="PointText">
                                    <Img src="/assets/images/icon-point.png" />
                                    <Span className="TextBox">누적포인트</Span>
                                </Div>
                                <Span className="DropText">758,400원</Span>
                            </Div>
                            <Div className="Line" />
                            <Span className="DropText">구매내역</Span>
                            <Span className="DropText">충전내역</Span>
                            <Span className="DropText">비밀번호 변경</Span>
                            <Span className="DropText">로그아웃</Span>
                        </Div>
                    </Div> */}
                </Div>
                <Div className="UserMask">
                    <Img src="/assets/images/icon-user-24-black.png" className="iconuser24" />
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.MenuTop {
        width: 100%;
        height: 76px;
        display: flex;
        align-items: center;
        padding: 17px 30px;
        justify-content: center;
        border-bottom: 1px solid #3d3f45;
        justify-content: flex-end;
    }
    &.UserMenuTop {
        width: 1620px;
        height: 70px;
        display: flex;
        padding: 17px 30px 17px 8px;
        align-items: center;
        justify-content: center;
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
        margin: 0px 20px 0px 6px;
        background-color: #3d3f45;
    }
    &.MenuMask {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin: 0 0 0 12px;
        padding: 9px;
        background-image: linear-gradient(to bottom, rgba(213, 251, 255, 0.8), rgba(163, 226, 234, 0.8));
        cursor: pointer;
    }
    &.UserMask {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        margin: 0 0 0 12px;
        padding: 9px;
        background-color: #272a31;
        cursor: pointer;
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
    &.ClickedBox {
        text-align: center;
    }
    &.NameBox {
        display: flex;
        align-items: center;
    }
    &.ColorBox {
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
    &.Line {
        width: 220px;
        height: 1px;
        background-color: #575a63;
    }
`;
const Span = styled.span`
    font-size: 15px;
    font-weight: normal;
    line-height: 1.75;
    color: #e5e8ea;
    &.ID {
        height: 28px;
        cursor: pointer;
        font-size: 16px;
    }
    &.DropID {
        font-size: 18px;
    }
    &.IdRank {
        font-size: 14px;
        font-weight: 600;
    }
    &.TextBox {
        margin: 0 5px;
    }
    &.DropText {
        color: #fff;
        cursor: pointer;
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
