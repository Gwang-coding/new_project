import styled from 'styled-components';
import { AdminSide, UserSide } from '../components/Etc/SIde';
import { Header, UserHeader } from '../components/Static/Header';
import Menu from '../components/Admin/Menu';
import Main from '../components/Admin/Main';
import Setting from '../components/Admin/Setting';
import Notice from '../components/Admin/Notice';
import Link from '../components/Admin/HyperLink';
import PopupManage from '../components/Admin/PopupManage';
import Popup from '../components/Admin/Popup';
import Design from '../components/Admin/Design';
import User from '../components/Admin/User';
import UserMange from '../components/Admin/UserMange';
import LogManage from '../components/Admin/LogManage';
import IP from '../components/Admin/Ip';
import ProdectManage from '../components/Admin/ProductManage';
import ProdectManageIn from '../components/Admin/ProductManageIn';
import Category from '../components/Admin/Category';
import ChargeManage from '../components/Admin/ChargeManage';
import ChargeRequest from '../components/Admin/ChargeRequest';
import SellLog from '../components/Admin/SellLog';
import Profit from '../components/Admin/Profit';
import Login from '../components/User/Login';
import Join from '../components/User/Join';
import UserMain from '../components/User/Main';
import BankModal from '../components/User/BankModal';
import BankPopUp from '../components/User/BankPopUp';
import Kakaopay from '../components/User/Kakaopay';
import Munsang from '../components/User/Munsang';
import KakaoQR from '../components/User/KakaoQR';
import Store from '../components/User/Store';
import PurchasePopUp from '../components/User/PurchasePopup';
import Nomoney from '../components/User/Nomoney';
import ChargeLog from '../components/User/ChargeLog';
import Userinfo from '../components/User/Userinfo';
import PurchaseLog from '../components/User/PurchaseLog';
import Purchase from '../components/Etc/Purchase';
import Check from '../components/Etc/Check';
import DelUser from '../components/Etc/DelUser';
import Charge from '../components/Etc/Charge';
import Point from '../components/Etc/Point';
import JoinPopup from '../components/Etc/Join';
import NoticePopup from '../components/Etc/Notice';
import IdError from '../components/Etc/IdError';
import PasswordError from '../components/Etc/PasswordError';
import SuccessJoin from '../components/Etc/SuccessJoin';
import Emergency from '../components/Etc/ Emergency';

export default function Home() {
    return (
        <>
            <Emergency />
            <SuccessJoin />
            <PasswordError />
            <IdError />
            <NoticePopup />
            <JoinPopup />
            <Point />
            <Charge />
            <DelUser />
            <Purchase />
            <Check />
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Main />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Setting />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Notice />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Link />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <PopupManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Popup />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Design />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <User />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <UserMange />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <LogManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <IP />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <ProdectManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <ProdectManageIn />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Category />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <ChargeManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <ChargeRequest />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <SellLog />
                    </Div>
                </Div>
            </Section>
            <Section>
                <AdminSide />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Profit />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Login />
            </Section>
            <Section>
                <Join />
            </Section>
            <Section>
                <UserSide />
                <Div className="Rectangle-Copy">
                    <UserHeader />
                    <Div className="UserMain">
                        <UserMain />
                    </Div>
                </Div>
            </Section>
            <BankModal />
            <BankPopUp />
            <Kakaopay />
            <Munsang />
            <KakaoQR />
            <Section>
                <UserSide />
                <Div className="Rectangle-Copy">
                    <UserHeader />
                    <Div className="UserMain">
                        <Store />
                    </Div>
                </Div>
            </Section>
            <PurchasePopUp />
            <Nomoney />
            <Section>
                <UserSide />
                <Div className="Rectangle-Copy">
                    <UserHeader />
                    <Div className="UserMain">
                        <PurchaseLog />
                    </Div>
                </Div>
            </Section>
            <Section>
                <UserSide />
                <Div className="Rectangle-Copy">
                    <UserHeader />
                    <Div className="UserMain">
                        <Userinfo />
                    </Div>
                </Div>
            </Section>
            <Section>
                <UserSide />
                <Div className="Rectangle-Copy">
                    <UserHeader />
                    <Div className="UserMain">
                        <ChargeLog />
                    </Div>
                </Div>
            </Section>
        </>
    );
}
const Section = styled.section`
    width: 1920px;

    display: flex;
`;

const Div = styled.div`
    &.Rectangle-Copy {
        width: 1620px;
        background-color: #1b1e24;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    &.Main {
        margin: 50px 0px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    &.UserMain {
        width: 100%;
        margin: 50px 0;
        display: flex;
        justify-content: center;
    }
`;

const Span = styled.span``;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img``;
