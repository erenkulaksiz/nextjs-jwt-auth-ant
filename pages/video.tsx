import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useCurrentUser } from "../src/hooks/auth/useCurrentUser";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;

import { route } from "../src/router/route";
import { navigateToPath } from "../src/utils/navigateToPath";
import { getActiveComponent } from "../src/utils/getActiveComponent";

export default function Video() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const { user: currentUser } = useCurrentUser();

  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => navigateToPath({ key: Number(e.key), router })}
          items={route}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {getActiveComponent(1)}
        </Content>
      </Layout>
    </Layout>
  );
}
