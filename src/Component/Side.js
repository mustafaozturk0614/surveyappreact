import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Component } from 'react';
import zIndex from '@material-ui/core/styles/zIndex';
import './Navbar.css'
import { padding } from '@mui/system';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Side extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ height: '1000px', width: '50px', background: 'none', position: 'fixed', marginTop: 36 }}>
                <Sider style={{ backgroundImage: 'linear-gradient(to right top, #7fccd6,#1b7e85,#1674cc,#2bc3d9,#38c3dc,#5cd4d7,#74c5cf,#abf1ce,#92e9ff)' }} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>

                    <Menu style={{ marginTop: 10, backgroundColor: 'inherit' }} defaultSelectedKeys={['1']} mode="inline">


                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Templates
                        </Menu.Item>

                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <Link to='/survey' >   Surveys</Link>
                        </Menu.Item>


                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout >
        );
    }
}