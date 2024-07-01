import React, { PropsWithChildren, useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Layout, Menu, Button, theme } from "antd"
import { useTranslation } from "react-i18next"
import { Outlet, useNavigate } from "react-router-dom"
import { ROUTES } from "../../../routing-context/domain/router-context"
import { Link } from "../../../../common/components"
import "./AdminAppLayout.style.scss"

const { Header, Sider, Content } = Layout

export default function AdminAppLayout({ children }: PropsWithChildren<{}>) {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const navigate = useNavigate()
  console.log("rerender")
  const { t } = useTranslation()

  return (
    <Layout style={{ width: "100vw" }} className="admin-app-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className="kindergarten-nav"
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.dashboard}`}>{t("navigation.dashboard-link")}</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.products}`}>{t("navigation.products-link")}</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.customers}`}>{t("navigation.customers-link")}</Link>,
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.orders}`}>{t("navigation.orders-link")}</Link>,
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.categories}`}>{t("navigation.categories-link")}</Link>,
            },
            {
              key: "6",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.chat}`}>{t("navigation.chat-link")}</Link>,
            },
            {
              key: "7",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.invoices}`}>{t("navigation.invoices-link")}</Link>,
            },
            {
              key: "8",
              icon: <UploadOutlined />,
              label: <Link to={`/${ROUTES.app}/${ROUTES.costs}`}>{t("navigation.costs-link")}</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
