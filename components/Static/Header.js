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
                <Span className="admon5488">admon5488님</Span>
                <Div className="MenuMask">
                    <Img src="/assets/images/icon-user.png" className="iconuser24"></Img>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.MenuTop {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 30px;
        border-bottom: 1px solid #3d3f45;
        justify-content: flex-end;
    }
    &.UserMenuTop {
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
`;
