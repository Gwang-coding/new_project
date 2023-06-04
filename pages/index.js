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

export default function Home() {
    return (
        <>
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
        </>
    );
}
const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Div = styled.div`
    &.Rectangle-Copy {
        width: 85%;
        background-color: #1b1e24;
    }
    &.Main {
        margin: 50px 80px;
    }
    &.UserMain {
        margin: 50px 90px;
    }
`;

const Span = styled.span``;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img``;
