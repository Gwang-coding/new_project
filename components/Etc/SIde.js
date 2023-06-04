import styled from 'styled-components';

export function AdminSide() {
    return (
        <Div className="Rectangle">
            <Div className="SideTop">
                <Span className="Text" size="26px" weight="bold" color="#fff">
                    BEURRI
                </Span>
                <Img src="/assets/images/icon-c-menu-gray.png" className="IconCMenuGray30"></Img>
            </Div>
            <Div className="SideBottom">
                <Div className="Mask" bcolor="#a8cad0">
                    <Img src="/assets/images/icon-user.png" className="iconuser44"></Img>
                    <Div className="Oval" bcolor="#049b62" />
                </Div>
                <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                    환영합니다
                </Span>
                <Div className="NameBox" left="50px">
                    <Span className="Text" size="18px" weight="normal" color="#e5e8ea">
                        admon5488님
                    </Span>
                    <Div className="Rectangle-Copy-11" bcolor="#1da7b7">
                        <Span className="Text" size="15px" weight="600" color="#e5e8ea">
                            관리자
                        </Span>
                    </Div>
                </Div>
                <Div className="Info">
                    <Div className="TextBox">
                        <Span className="Text" size="15px" color="#979aa0" weight="500">
                            라이센스키
                        </Span>
                        <Span className="Text" size="15px" color="#e5e8ea" weight="normal">
                            213412414414123
                        </Span>
                    </Div>
                    <Div className="TextBox">
                        <Span className="Text" size="15px" color="#979aa0" weight="500">
                            남은기간
                        </Span>
                        <Div className="NameBox" left="">
                            <Span className="Text" size="15px" color="#e5e8ea" weight="normal">
                                2022.07.30
                            </Span>
                            <Div className="Dday">
                                <Span className="Text" size="13px" color="#ff7ca5">
                                    D-28
                                </Span>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="TextBox">
                        <Span className="Text" size="15px" color="#979aa0" weight="500">
                            오픈
                        </Span>
                        <Span className="Text" size="15px" color="#e5e8ea" weight="normal">
                            2022.04.23
                        </Span>
                    </Div>
                    <Div className="TextBox">
                        <Span className="Text" size="15px" color="#979aa0" weight="500">
                            인증기기
                        </Span>
                        <Span className="Text" size="15px" color="#e5e8ea" weight="normal">
                            1555521323
                        </Span>
                    </Div>
                    <Input className="Rectangle-Copy-20" type="text" placeholder="라이센스입력" />
                    <Btn className="License" color="#f34a7e">
                        라이센스 연장
                    </Btn>
                </Div>
                <Div className="Info">
                    <Span className="Text" size="15px" color="#979aa0" weight="500">
                        전체 회원 포인트
                    </Span>
                    <Div className="Rectangle-Copy-21">
                        <Input className="Rectangle-Copy-21" type="text" />
                        <Span className="Text" size="15px" color="#fff" weight="normal">
                            P
                        </Span>
                    </Div>
                    <Btn className="License" color="#363c69">
                        포인트 지급
                    </Btn>
                </Div>
            </Div>
        </Div>
    );
}
export function UserSide() {
    return (
        <Div className="Rectangle">
            <Div className="SideTop">
                <Span className="Text" size="26px" weight="bold" color="#fff">
                    BEURRI
                </Span>
                <Img src="/assets/images/icon-c-menu-gray.png" className="IconCMenuGray30"></Img>
            </Div>
            <Div className="SideBottom">
                <Div className="Mask" bcolor="#272a31">
                    <Img src="/assets/images/icon-user-44.png" className="iconuser44"></Img>
                    <Div className="Oval" bcolor="#ffd700" />
                </Div>

                <Div className="NameBox" left="50px">
                    <Span className="Text" size="18px" weight="normal" color="#e5e8ea">
                        admon5488님
                    </Span>
                    <Div className="Rectangle-Copy-11" bcolor="#0cbe9d">
                        <Span className="Text" size="15px" weight="600" color="#e5e8ea">
                            VIP
                        </Span>
                    </Div>
                </Div>
                <Div className="UserInfo">
                    <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                        보유금액
                    </Span>
                    <Span className="Text" size="18px" weight="normal" color="#e5e8ea">
                        268,300원
                    </Span>
                    <Btn className="UserBtn" width="100%" bcolor="#1fa58c">
                        <Span className="Text" size="15px" weight="bold" color="#e5e8ea">
                            충전하기
                        </Span>
                    </Btn>
                    <Div className="BtnBox">
                        <Btn className="UserBtn" width="48%" bcolor="#1a8ac7">
                            <Span className="Text" size="15px" weight="bold" color="#e5e8ea">
                                구매내역
                            </Span>
                        </Btn>
                        <Btn className="UserBtn" width="48%" bcolor="#1a8ac7">
                            <Span className="Text" size="15px" weight="bold" color="#e5e8ea">
                                충전내역
                            </Span>
                        </Btn>
                    </Div>
                </Div>
                <Div className="MenuBox">
                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            메뉴1
                        </Span>
                        <Img className="IconARightGray" src="/assets/images/icon-a-right-gray-down.png" />
                    </Div>
                    <Div className="Menu" bcolor="#252931">
                        <Span className="Text" size="15px" weight="normal" color="#1ec9a9">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            메뉴2
                        </Span>
                        <Img className="IconARightGray" src="/assets/images/icon-a-right-gray-up.png" />
                    </Div>
                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#7a7c85">
                            ㄴ 상세 메뉴
                        </Span>
                    </Div>
                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#7a7c85">
                            ㄴ 상세 메뉴
                        </Span>
                    </Div>

                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            메뉴3
                        </Span>
                        <Img className="IconARightGray" src="/assets/images/icon-a-right-gray-down.png" />
                    </Div>
                </Div>
                <Div className="MenuBox">
                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            카카오톡 구매자방
                        </Span>
                    </Div>

                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            텔레그램 공지방
                        </Span>
                    </Div>
                    <Div className="Menu">
                        <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                            <Img src="/assets/images/icon-c-file-gray.png" />
                            파일함
                        </Span>
                    </Div>
                </Div>
                <Div className="TodayBox">
                    <Div className="Today">
                        <Span className="Text" size="14px" weight="bold" color="#fff">
                            Today
                        </Span>
                    </Div>
                    <Span className="Text" size="26px" color="#f06868" weight="normal">
                        21,587
                    </Span>
                </Div>
                <Div className="TodayBox">
                    <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                        이번주 방문자
                    </Span>

                    <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                        6,350
                    </Span>
                </Div>
                <Div className="TodayBox">
                    <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                        이번달 방문자
                    </Span>

                    <Span className="Text" size="15px" weight="normal" color="#e5e8ea">
                        105,350
                    </Span>
                </Div>
            </Div>
        </Div>
    );
}
const Div = styled.div`
    &.Rectangle {
        background-color: #13171e;
        width: 15%;
    }

    &.SideTop {
        display: flex;
        justify-content: space-between;
        padding: 20px 30px;
        text-align: center;
        border-bottom: 1px solid #3d3f45;
    }
    &.SideBottom {
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        text-align: center;
        align-items: center;
    }
    &.Mask {
        width: 70px;
        height: 69px;
        padding: 16px 15px 7px 16px;
        border-radius: 50%;
        background-color: ${(props) => props.bcolor};
        margin-bottom: 15px;
    }
    &.Info {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 20px 0;
        padding: 21px 19px;
        border-radius: 20px;
        border: solid 1px #3d3f45;
        background-color: #20232a;
        text-align: start;
    }
    &.UserInfo {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 20px 0 0;
        padding: 21px 19px;
        border-radius: 20px;
        border: solid 1px #3d3f45;
        background-color: #20232a;
        text-align: center;
    }
    &.TextBox {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    &.NameBox {
        display: flex;
        align-items: center;
        margin-left: ${(props) => props.left};
    }
    &.Oval {
        width: 10px;
        height: 10px;
        margin-left: 36px;
        border-radius: 50%;
        background-color: ${(props) => props.bcolor};
    }
    &.Rectangle-Copy-21 {
        width: 100%;
        height: 46px;
        margin: 12px 0 16px;
        display: flex;
        align-items: center;
        justify-content: right;
        padding-right: 15px;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
    }
    &.Dday {
        margin-left: 10px;
        display: flex;
        align-items: center;
        height: 22px;
        padding: 0 7px;
        opacity: 0.7;
        border-radius: 12px;
        border: solid 1px #f5739c;
    }
    &.Rectangle-Copy-11 {
        height: 22px;
        margin-left: 10px;
        padding: 0 8px;
        border-radius: 4px;
        background-color: ${(props) => props.bcolor};
    }
    &.BtnBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    &.MenuBox {
        width: 100%;
        border-bottom: 1px solid #3d3f45;
        padding: 20px 0px;
    }
    &.TodayBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
    }
    &.Today {
        width: 58px;
        height: 26px;
        background-color: #f06868;
        display: flex;
        justify-content: center;
        border-radius: 6px;
    }
    &.Menu {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 8px 10px;
        border-radius: 6px;
        justify-content: space-between;
        background-color: ${(props) => props.bcolor};
    }
`;
const Span = styled.span`
    &.Text {
        display: flex;
        align-items: center;
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: ${(props) => props.color};
    }
`;
const Input = styled.input`
    &.Rectangle-Copy-20 {
        width: 100%;
        height: 46px;
        margin: 5px 0 20px 0;
        padding-left: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        color: #fff;
    }
    &.Rectangle-Copy-20:focus {
        outline: none;
    }
    &.Rectangle-Copy-21:focus {
        outline: none;
    }
    &.Rectangle-Copy-21 {
        width: 90%;
        height: 40px;
        padding-left: 10px;
        display: flex;
        border: none;
        background-color: #31333a;
        font-family: Pretendard;
        font-size: 15px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        color: #fff;
    }
`;
const Btn = styled.button`
    &.License {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 23px;
        background-color: ${(props) => props.color};
        font-family: Pretendard;
        font-size: 15px;
        line-height: 2.75;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.UserBtn {
        margin-top: 10px;
        width: ${(props) => props.width};
        padding: 12px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: ${(props) => props.bcolor};
    }
`;
const Img = styled.img`
    &.IconCMenuGray30 {
        width: 30px;
        height: 30px;
        margin: 3px 0 0px 43px;
        object-fit: contain;
        cursor: pointer;
    }
    &.iconuser44 {
        width: 38px;
        height: 38px;
        object-fit: contain;
    }
    &.IconARightGray {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`;
