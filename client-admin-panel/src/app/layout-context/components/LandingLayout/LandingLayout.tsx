import { Layout } from "antd"
import "./LandingLayout.style.scss"
import { owlixLogo } from "../../../../common/assets"
import { Outlet } from "react-router-dom"

const { Header, Content } = Layout

export default function LandingLayout() {
  return (
    <div className="landing-layout-wrapper">
      <Layout className="landing-layout">
        <Header className="landing-layout__header">
          <img src={owlixLogo} className="landing-layout__logo" />
        </Header>
        <Content className="landing-layout__content">
          <Outlet />
        </Content>
      </Layout>
    </div>
  )
}
