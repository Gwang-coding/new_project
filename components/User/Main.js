import styled from 'styled-components';

export default function UserMain() {
    return (
        <Div className="Wrapper">
            <Div className="Notice">
                <Div className="NoticeIcon">
                    <Img src="/assets/images/icon-c-bell-blue.png" />
                </Div>
                <Div className="NoticeTextBox">
                    <Div className="TextTop">
                        <Span className="Notice">긴급공지</Span>
                        <Div>
                            <Img src="/assets/images/icon-close-blue.png" className="Close" />
                        </Div>
                    </Div>
                    <Span className="NoticeText">
                        이 웹 자판기는 “조커” 자판기입니다. 이곳은 조커에서 운영하는 샘플 데모 페이지입니다. 조커 이외의에 전부 사칭이므로
                        조심하길 바랍니다.
                    </Span>
                </Div>
            </Div>
            <Div className="Middle">
                <Img src="/assets/images/1320px.png" className="Img" />
            </Div>
            <Div className="Bottom">
                <Div className="BottomWrapper">
                    <Div className="TitleBox">
                        <Span className="Title">실시간 인기순위</Span>
                    </Div>
                    <Div className="BottomBox">
                        <Div className="RankingBox">
                            <Span className="Num">1</Span>
                            <Span>유라가) 카스테라고물턱</Span>
                            <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                        </Div>
                        <Div className="RankingBox">
                            <Span className="Num">2</Span>
                            <Span>삼립) 쿠키런벨벳케잌</Span>
                            <Span className="Contents">사녹 롤백 및 신규 7탄 무기 ACE32 업데이트 안내</Span>
                        </Div>
                        <Div className="RankingBox">
                            <Span className="Num">3</Span>
                            <Span>유라가) 카스테라고물턱</Span>
                            <Span className="Contents">5월 특별보급/프라임 게이밍 연동 이벤트 (수정)</Span>
                        </Div>
                        <Div className="RankingBox">
                            <Span className="Num">4</Span>
                            <Span>삼립) 쿠키런벨벳케잌</Span>
                            <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                        </Div>
                        <Div className="RankingBox">
                            <Span className="Num">5</Span>
                            <Span>유라가) 카스테라고물턱</Span>
                            <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                        </Div>
                    </Div>
                </Div>
                <Div className="BottomWrapper">
                    <Div className="TitleBox">
                        <Span className="Title">실시간 구매로그</Span>
                    </Div>
                    <Div className="BottomBox">
                        <Div className="ContentBox">
                            <Div>
                                <Span className="ID">Kos****</Span>
                                <Span>유라가) 카스테라고물턱</Span>
                                <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                            </Div>
                            <Span className="Contents">06:03</Span>
                        </Div>
                        <Div className="ContentBox">
                            <Div>
                                <Span className="ID">Kos****</Span>
                                <Span>삼립) 쿠키런벨벳케잌</Span>
                                <Span className="Contents">사녹 롤백 및 신규 7탄 무기 ACE32 업데이트 안내</Span>
                            </Div>
                            <Span className="Contents">06:03</Span>
                        </Div>
                        <Div className="ContentBox">
                            <Div>
                                <Span className="ID">al***</Span>
                                <Span>유라가) 카스테라고물턱</Span>
                                <Span className="Contents">5월 특별보급/프라임 게이밍 연동 이벤트 (수정)</Span>
                            </Div>
                            <Span className="Contents">06:03</Span>
                        </Div>
                        <Div className="ContentBox">
                            <Div>
                                <Span className="ID">K***</Span>
                                <Span>삼립) 쿠키런벨벳케잌</Span>
                                <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                            </Div>
                            <Span className="Contents">06:03</Span>
                        </Div>
                        <Div className="ContentBox">
                            <Div>
                                <Span className="ID">Kos****</Span>
                                <Span>유라가) 카스테라고물턱</Span>
                                <Span className="Contents">6월 배틀그라운드 상점 업데이트 안내</Span>
                            </Div>
                            <Span className="Contents">06:03</Span>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 1320px;
        display: flex;
        flex-direction: column;
    }
    &.Notice {
        width: 100%;
        height: 90px;
        display: flex;
        border-radius: 16px;
        border: solid 1px #1996da;
        background-color: rgba(25, 150, 218, 0.04);
    }
    &.NoticeIcon {
        width: 60px;
        heigth: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1996da;
        border-radius: 16px 0 0 16px;
        margin: -1px;
        border: 1px solid #1996da;
    }
    &.NoticeTextBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    &.TextTop {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    &.Middle {
        width: 100%;
        height: 530px;
        border-radius: 16px;
        margin: 30px 0px 40px 0;
    }
    &.Bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    &.BottomWrapper {
        width: 650px;
        height: 281px;
        border-radius: 16px;
        box-shadow: inset 0 1px 6px 0 rgba(255, 255, 255, 0.12);
        border: solid 1px rgba(61, 63, 69, 0.6);
        background-color: #20232a;
    }
    &.TitleBox {
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
        border-bottom: 1px solid #3d3f45;
    }
    &.BottomBox {
        display: flex;
        flex-direction: column;
        padding: 20px 30px;
    }
    &.RankingBox {
        width: 100%;
        display: flex;
        margin: 3px 0px;
        align-items: center;
        cursor: pointer;
    }
    &.ContentBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 5px 0px;
        cursor: pointer;
    }
`;

const Span = styled.span`
    line-height: 1.5;
    color: #e5e8ea;
    font-weight: normal;
    font-size: 15px;
    &.Notice {
        font-size: 16px;
        font-weight: bold;
        color: #1996da;
    }
    &.NoticeText {
        font-size: 16px;
    }
    &.Title {
        font-size: 18px;
        font-weight: bold;
    }
    &.Contents {
        font-weight: 500;
        color: #7a7c85;
        margin-left: 10px;
    }
    &.Num {
        font-size: 18px;
        color: #1fa58c;
        margin-right: 10px;
    }
    &.ID {
        margin-right: 10px;
        color: #1fa58c;
        background-color: #2d323d;
        border-radius: 4px;
        padding: 1px 5px;
        text-align: center;
    }
`;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img`
    &.Close {
        cursor: pointer;
    }
    &.Img {
        border-radius: 16px;
    }
`;
