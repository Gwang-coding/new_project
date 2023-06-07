import styled from 'styled-components';

export default function Setting() {
    return (
        <Div className="Wrapper">
            <Div className="SettingTop">
                <Span className="Title">설정</Span>
                <Btn className="Rectangle-Copy-6">
                    <Span className="InputText">적용하기</Span>
                </Btn>
            </Div>
            <Div className="SettingBottom">
                <Div className="SettingWrapper" flex="column">
                    <Div className="SettingBox" width="100%">
                        <Span>사이트명</Span>
                        <Input className="Input" width="83%" />
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span>사이트 설명</Span>
                        <Input className="Input" width="83%" />
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span>키워드 검색</Span>
                        <Input className="Input" width="83%" />
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span>휴대폰번호</Span>
                        <Input className="Input" width="83%" />
                    </Div>
                    <Div className="SettingBox" width="100%">
                        <Span>고유번호</Span>
                        <Input className="Input" width="83%" />
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span>계좌이체 이용</Span>
                            <Div className="Rectangle-Copy-2-on">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>카카오페이 이용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>문화상품권 이용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>1:1채팅 문의 이용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>텔레그램 알림받기</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>충전시 알림음</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                    </Div>
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span>긴급공지 사용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>방문자수 표시</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>인기순위 표시</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>구매로그 표시</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>재고수 표시</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>가입시 관리자 승인 필수 사용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                    </Div>
                    <Div className="SettingToggle">
                        <Div className="SettingBox">
                            <Span>사이트 점검중</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>첫 충전 문화상품권 이용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>회원가입 SMS인증</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Div className="SettingBox">
                            <Span>누적 충전금이상 계좌이체이용</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Input className="Input" width="100%" />
                        <Div className="SettingBox">
                            <Span>파일함 URL</Span>
                            <Div className="Rectangle-Copy-2-off">
                                <Div className="Oval-Copy-2" />
                            </Div>
                        </Div>
                        <Input className="Input" width="100%" />
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Div className="SettingBox" width="48%">
                        <Span>
                            텔레그램 chat id <br />
                            (알림받기용)
                        </Span>
                        <Input className="Input" width="65%" />
                    </Div>
                    <Div className="SettingBox" width="48%">
                        <Span>문의받기 chat id</Span>
                        <Input className="Input" width="65%" />
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Span>등급별 상승금액</Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="InputText">VIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">VVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">RVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Span className="SettingText" width="17%" size="18px">
                        충전혜택
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="InputText">해당금액 이상 충전시</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">비구매자</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">구매자</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">리셀러</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">VIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">VVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">RVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Span>문화상품권 수수료</Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="InputText">해당금액 이상 충전시</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">비구매자</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">구매자</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">리셀러</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">VIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">VVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">RVIP</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />%
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Span className="SettingText" width="17%" size="18px">
                        계좌 정보
                    </Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="InputText">은행</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">예금주</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">계좌번호</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper">
                    <Span>카카오페이 주소</Span>
                    <Input className="Input" width="83%"></Input>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span>기본 입금액</Span>
                    <Input className="Input" width="83%"></Input>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper" border="1px solid #3d3f45">
                    <Span>컬처랜드 인증</Span>
                    <Div className="PercentWrapper">
                        <Div className="PercentBox">
                            <Span className="InputText">컬처랜드 아이디</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                        <Div className="PercentBox">
                            <Span className="InputText">컬처랜드 비밀번호</Span>
                            <Div className="PercentInput">
                                <Input className="Input-noboder" />
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div className="Line" />
                <Div className="SettingWrapper" border="none">
                    <Span>구매로그 디스코드 웹훅</Span>
                    <Input className="Input" width="83%"></Input>
                </Div>
            </Div>
        </Div>
    );
}

const Div = styled.div`
    &.Wrapper {
        width: 100%;
        margin-top: 40px;
        border-radius: 16px;
        background-color: #272a31;
        padding-bottom: 20px;
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
        padding: 20px 0px;
        display: flex;
        flex-direction: ${(props) => props.flex};
        justify-content: space-between;
    }
    &.Line {
        width: 100%;
        height: 1px;
        background-color: #393b44;
    }
    &.SettingBox {
        width: ${(props) => props.width};
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        justify-content: space-between;
    }
    &.Rectangle-Copy-2-on {
        width: 62px;
        height: 32px;
        padding: 4px 4px 4px 34px;
        border-radius: 100px;
        background-color: #00abbf;
        cursor: pointer;
    }
    &.Rectangle-Copy-2-off {
        width: 62px;
        height: 32px;
        padding: 4px 34px 4px 4px;
        border-radius: 100px;
        background-color: #474950;
        cursor: pointer;
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
    &.PercentInput {
        height: 52px;
        padding-left: 10px;
        border-radius: 10px;
        margin: 10px 0px;
        border: solid 1px #3d3f45;
        background-color: #31333a;
        font-size: 17px;
        color: #fff;
    }
`;
const Span = styled.span`
    font-size: 18px;
    font-weight: normal;
    line-height: 1.56;
    color: #e5e8ea;
    display: flex;
    align-items: center;

    &.Title {
        font-size: 26px;
        font-weight: bold;
    }
    &.InputText {
        font-size: 15px;
    }
`;
const Input = styled.input`
    outline: none;
    background-color: #31333a;
    font-size: 15px;
    font-weight: normal;
    color: #e5e8ea;
    border-radius: 10px;
    height: 52px;
    width: ${(props) => props.width};

    &.Input-noboder {
        border: none;
        width: 90%;
    }
    &.Input {
        padding-left: 10px;
        border: solid 1px #3d3f45;
    }
`;
const Btn = styled.button`
    &.Rectangle-Copy-6 {
        height: 40px;
        padding: 8px 19px;
        border-radius: 23px;
        background-color: #00abbf;
    }
`;
