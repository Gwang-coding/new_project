import styled from 'styled-components';

export default function Setting() {
    return (
        <Div className="Rectangle-Copy-15">
            <Div className="SettingTop">
                <Span className="SettingTitle">설정</Span>
                <Btn className="Rectangle-Copy-6"> 적용하기</Btn>
            </Div>
            <Div className="SettingBottom">
                <Div className="SettingWrapper" border="1px solid #3d3f45" flex="column">
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            사이트명
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            사이트 설명
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            키워드 검색
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            휴대폰번호
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            고유번호
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                계좌이체 이용
                            </Span>
                            <Div className="Rectangle-Copy-2-on">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                카카오페이 이용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                문화상품권 이용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                1:1채팅 문의 이용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                텔레그램 알림받기
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                충전시 알림음
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                긴급공지 사용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                방문자수 표시
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                인기순위 표시
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                구매로그 표시
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                재고수 표시
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                가입시 관리자 승인 필수 사용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                사이트 점검중
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                첫 충전 문화상품권 이용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                회원가입 SMS인증
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                누적 충전금이상 계좌이체이용
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Input className="Rectangle-Copy-10" width="100%"></Input>
                        <Div className="SettingBox">
                            <Span className="SettingText" size="18px">
                                파일함 URL
                            </Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2"></Div>
                            </Div>
                        </Div>
                        <Input className="Rectangle-Copy-10" width="100%"></Input>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Div className="SettingBox" width="48%">
                        <Span className="SettingText" width="30%" size="18px">
                            텔레그램 chat id <br />
                            (알림받기용)
                        </Span>
                        <Input className="Rectangle-Copy-10" width="65%"></Input>
                    </Div>
                    <Div className="SettingBox" width="48%">
                        <Span className="SettingText" width="30%" size="18px">
                            문의받기 chat id
                        </Span>
                        <Input className="Rectangle-Copy-10" width="65%"></Input>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span className="SettingText" width="17%" size="18px">
                        등급별 상승금액
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                RVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span className="SettingText" width="17%" size="18px">
                        충전혜택
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                해당금액 이상 충전시
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                비구매자
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                구매자
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                리셀러
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                RVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span className="SettingText" width="17%" size="18px">
                        문화상품권 수수료
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                해당금액 이상 충전시
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                비구매자
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                구매자
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                리셀러
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                VVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                RVIP
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span className="SettingText" width="17%" size="18px">
                        계좌 정보
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                은행
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                예금주
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                계좌번호
                            </Span>
                            <Div className="Rectangle-Copy-10" width="215%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            카카오페이 주소
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            기본 입금액
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span className="SettingText" width="17%" size="18px">
                        컬처랜드 인증
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                컬처랜드 아이디
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="SettingText" size="15px">
                                컬처랜드 비밀번호
                            </Span>
                            <Div className="Rectangle-Copy-10" width="100%">
                                <Input className="Rectangle-noboder" width="90%" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="SettingWrapper" border="none">
                    <Div className="SettingBox" width="100%">
                        <Span className="SettingText" width="17%" size="18px">
                            구매로그 디스코드 웹훅
                        </Span>
                        <Input className="Rectangle-Copy-10" width="83%"></Input>
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
    &.SettingTop {
        width: 100%;
        padding: 25px 40px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #3d3f45;
    }
    &.SettingBottom {
        width: 100%;
        padding: 0px 40px;
    }
    &.SettingWrapper {
        width: 100%;
        padding: 25px 0px 10px 0px;
        border-bottom: ${(props) => props.border};
        display: flex;
        flex-direction: ${(props) => props.flex};
        justify-content: space-between;
    }
    &.SettingBox {
        width: ${(props) => props.width};
        display: flex;
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
    &.Rectangle-Copy-2-off {
        width: 62px;
        height: 32px;
        padding: 4px 34px 4px 4px;
        border-radius: 100px;
        background-color: #474950;
    }

    &.Oval-Copy-2 {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(17, 17, 17, 0.5);
        background-color: #e5e8ea;
    }
    &.SettingToggle {
        width: 21%;
        display: flex;
        flex-direction: column;
    }
    &.PercentWrapper {
        width: 83%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &.PercentBox {
        width: 90%;
    }
    &.Rectangle-Copy-10 {
        width: ${(props) => props.width};
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;
        margin: 10px 0px;
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
`;
const Span = styled.span`
    &.SettingTitle {
        width: 45px;
        font-family: Pretendard;
        font-size: 26px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #e5e8ea;
    }
    &.SettingText {
        width: ${(props) => props.width};
        display: flex;
        align-items: center;
        font-family: Pretendard;
        font-size: ${(props) => props.size};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.56;
        letter-spacing: normal;
        color: #e5e8ea;
    }
`;
const Input = styled.input`
    &.Rectangle-noboder {
        width: ${(props) => props.width};
        height: 50px;

        border-radius: 10px;
        margin-bottom: 10px;
        border: none;
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
    &.Rectangle-noboder :focus {
        outline: none;
    }
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
