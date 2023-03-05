import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import s from "./index.module.less";
const { Header, Content, Footer, Sider } = Layout;

const LayoutPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <div className={s.logo} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            // VideoCameraOutlined,
            // UploadOutlined,
            // UserOutlined,
          ].map((icon, index) => ({
            key: ["/"][index],
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
          onSelect={(e) => {
            navigate(e.key);
            // console.log("🚀 ~ file: index.tsx:33 ~ e", e.key);
          }}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: "24px 16px 0", height: "100vh" }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
