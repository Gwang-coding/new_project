import styled from 'styled-components';

export default function Main() {
    return (
        <>
            <Div className="UserBox">
                <Div className="user" shadow="#8c81ff" backgroundColor="#584cdb">
                    <Div className="user_wrapper">
                        <Div className="Rectangle-Copy-12" backgroundColor="#554ad1">
                            <Img src="/assets/images/icon-user-white.png" className="iconuserwhite30-copy-2"></Img>
                        </Div>
                        <Div className="main_textbox" margin="20px">
                            <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                                총 유저
                            </Span>
                            <Span className="user_info" size="22px" color="#e5e8ea" weight="500">
                                515명
                            </Span>
                        </Div>
                    </Div>
                </Div>
                <Div className="user" shadow="#3b7ee9" backgroundColor="#5f80b5">
                    <Div className="user_wrapper">
                        <Div className="Rectangle-Copy-12" backgroundColor="#5393f8">
                            <Img src="/assets/images/icon-user-white.png" className="iconuserwhite30-copy-2" />
                        </Div>
                        <Div className="main_textbox" margin="20px">
                            <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                                구매한 유저
                            </Span>
                            <Span className="user_info" size="22px" color="#e5e8ea" weight="500">
                                515명
                            </Span>
                        </Div>
                    </Div>
                </Div>
                <Div className="user" shadow="#8bf3ff" backgroundColor="#55848a">
                    <Div className="user_wrapper">
                        <Div className="Rectangle-Copy-12" backgroundColor="#22b4c6">
                            <Img src="/assets/images/icon-user-white.png" className="iconuserwhite30-copy-2" />
                        </Div>
                        <Div className="main_textbox" margin="20px">
                            <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                                신규 유저
                            </Span>
                            <Span className="user_info" size="22px" color="#e5e8ea" weight="500">
                                515명
                            </Span>
                        </Div>
                    </Div>
                </Div>
                <Div className="user" shadow="#ffb695" backgroundColor="#e18a62">
                    <Div className="user_wrapper">
                        <Div className="Rectangle-Copy-12" backgroundColor="#fc9d72">
                            <Img src="/assets/images/icon-user-white.png" className="iconuserwhite30-copy-2" />
                        </Div>
                        <Div className="main_textbox" margin="20px">
                            <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                                비구매 유저
                            </Span>
                            <Span className="user_info" size="22px" color="#e5e8ea" weight="500">
                                515명
                            </Span>
                        </Div>
                    </Div>
                </Div>
            </Div>
            <Div className="UserBox">
                <Div className="PriceBoxWrapper">
                    <Div className="main_textbox" margin="0px">
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            당일 충전금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            당일 구매금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            당일 구매차익
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            2,889,900원
                        </Span>
                    </Div>
                </Div>
                <Div className="PriceBoxWrapper">
                    <Div className="main_textbox" margin="0px">
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번주 충전금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번주 구매금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번주 구매차익
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            2,889,900원
                        </Span>
                    </Div>
                </Div>
                <Div className="PriceBoxWrapper">
                    <Div className="main_textbox" margin="0px">
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번달 충전금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번달 구매금액
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            3,471,300원
                        </Span>
                        <Div className="Rectangle-Copy-4" />
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="normal">
                            이번달 구매차익
                        </Span>
                        <Span className="user_info" size="24px" color="#3dc5d6" weight="500">
                            2,889,900원
                        </Span>
                    </Div>
                </Div>
                <Div className="RankingBoxWrapper">
                    <Div className="RankingBox">
                        <Span className="user_info" size="22px" color="#e5e8ea" weight="bold">
                            회원순위
                        </Span>
                    </Div>
                    <Div className="accuBar">
                        <Span className="user_info" size="18px" color="#e5e8ea" weight="bold">
                            누적
                        </Span>
                    </Div>
                    <Div className="RankingBox">
                        <Div className="Ranking">
                            <Span className="Ranking_text">Messi8090</Span>
                            <Span className="Ranking_text">2,800,000</Span>
                        </Div>
                        <Div className="Ranking">
                            <Span className="Ranking_text">Messi8090</Span>
                            <Span className="Ranking_text">2,300,000</Span>
                        </Div>
                        <Div className="Ranking">
                            <Span className="Ranking_text">Madsfdfessi8090</Span>
                            <Span className="Ranking_text">500,000</Span>
                        </Div>
                        <Div className="Ranking">
                            <Span className="Ranking_text">Messi8090</Span>
                            <Span className="Ranking_text">2,800,000</Span>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </>
    );
}
const Div = styled.div`
    &.UserBox {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    &.user {
        width: 351px;
        height: 130px;
        padding: 33px 175px 33px 40px;
        border-radius: 20px;
        box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.4), inset 0 1px 2px 0 ${(props) => props.shadow};
        background-image: radial-gradient(circle at 103% -9%, ${(props) => props.backgroundColor}, #272a31 34%);
    }
    &.Rectangle-Copy-12 {
        width: 56px;
        height: 56px;
        margin: 4px 0;
        padding: 13px;
        border-radius: 20px;
        background-color: ${(props) => props.backgroundColor};
    }
    &.user_wrapper {
        display: flex;
        width: 300px;
    }
    &.main_textbox {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: ${(props) => props.margin};
    }
    &.PriceBoxWrapper {
        width: 351px;
        display: flex;
        flex-direction: column;
        padding: 93px 40px;
        border-radius: 16px;
        background-color: #272a31;
    }
    &.Rectangle-Copy-4 {
        width: 271px;
        height: 1px;
        margin: 80px 0 80px;
        background-color: #3d3f45;
    }
    &.RankingBoxWrapper {
        width: 351px;

        padding: 30px 0 35px 0;
        border-radius: 20px;
        background-color: #272a31;
    }
    &.accuBar {
        width: 351px;
        height: 50px;
        margin: 1px 0 0;
        padding: 11px 26px 11px 25px;
        background-color: #31333a;
        text-align: center;
        margin-bottom: 20px;
    }
    &.RankingBox {
        display: flex;
        flex-direction: column;
        margin: 0 25px 15px 25px;
    }
    &.Ranking {
        display: flex;
        width: 100%;
    }
`;
const Span = styled.span`
    &.user_info {
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: ${(props) => props.weight};
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: ${(props) => props.color};
    }
    &.Ranking_text {
        width: 50%;
        text-align: center;
        font-family: Pretendard;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.73;
        letter-spacing: normal;
        text-align: center;
        color: #e5e8ea;
    }
`;
const Img = styled.img`
    iconuserwhite30-copy-2 {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
`;
