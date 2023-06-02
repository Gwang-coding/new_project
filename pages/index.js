import styled from 'styled-components';
import Side from '../components/Etc/SIde';
import Header from '../components/Static/Header';
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

export default function Home() {
    return (
        <>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Main />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Setting />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Notice />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Link />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <PopupManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Popup />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <PopupManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <Design />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <User />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <UserMange />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <LogManage />
                    </Div>
                </Div>
            </Section>
            <Section>
                <Side />
                <Div className="Rectangle-Copy">
                    <Header />
                    <Div className="Main">
                        <Menu />
                        <IP />
                    </Div>
                </Div>
            </Section>
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
`;

const Span = styled.span``;
const Input = styled.input``;
const Btn = styled.button``;

const Img = styled.img``;
