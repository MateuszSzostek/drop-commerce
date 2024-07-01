import LoginView from "../../views/SignIn/SignInView"
import SignUpView from "../../views/SignUp/SignUpView"
import NewPasswordView from "../../views/NewPasswordView/NewPasswordView"
import ResetPasswordView from "../../views/ResetPassword/ResetPasswordView"
import DashboardView from "../../views/DashboardView/DashboardView"
import useAuth from "../../../../common/hooks/useAuth"
import { ROUTES } from "../../domain/router-context"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import ChatView from "../../views/ChatView/ChatView"
import RootLayout from "../../../layout-context/components/RootLayout/RootLayout"
import LandingLayout from "../../../layout-context/components/LandingLayout/LandingLayout"
import AdminAppLayout from "../../../layout-context/components/AdminAppLayout/AdminAppLayout"

import ProductsView from "../../views/ProductsView/ProductsView"
import CustomersView from "../../views/CustomersView/CustomersView"
import CustomerView from "../../views/CustomerView/CustomerView"
import OrdersView from "../../views/OrdersView/OrdersView"
import CategoriesView from "../../views/CategoriesView/CategoriesView"
import InvoicesView from "../../views/InvoicesView/InvoicesView"
import CostsView from "../../views/CostsView/CostsView"
import ProductView from "../../views/ProductView/ProductView"
import OrderView from "../../views/OrderView/OrderView"

export default function AppRouter() {
  const { isAuthenticated } = useAuth()

  console.warn(isAuthenticated)

  return (
    <Router>
      <Routes>
        {/*routes for all users*/}
        <Route path="/" element={<RootLayout />}>
          <Route path={ROUTES.auth} element={<LandingLayout />}>
            <Route path={ROUTES.login} element={<LoginView />} />
            <Route path={ROUTES.register} element={<SignUpView />} />
            <Route path={ROUTES.resetPassword} element={<ResetPasswordView />} />
            <Route path={ROUTES.newPassword} element={<NewPasswordView />} />
          </Route>
          <Route path={ROUTES.app} element={<AdminAppLayout />}>
            <Route path={ROUTES.dashboard} element={<DashboardView />} />
            <Route path={ROUTES.products} element={<ProductsView />} />
            <Route path={ROUTES.product} element={<ProductView />} />
            <Route path={ROUTES.categories} element={<CategoriesView />} />
            <Route path={ROUTES.customers} element={<CustomersView />} />
            <Route path={ROUTES.customer} element={<CustomerView />} />
            <Route path={ROUTES.orders} element={<OrdersView />} />
            <Route path={ROUTES.order} element={<OrderView />} />
            <Route path={ROUTES.categories} element={<CategoriesView />} />
            <Route path={ROUTES.chat} element={<ChatView />} />
            <Route path={ROUTES.invoices} element={<InvoicesView />} />
            <Route path={ROUTES.costs} element={<CostsView />} />
          </Route>
        </Route>
        <Route path="/" element={isAuthenticated ? <Navigate to={ROUTES.dashboard} replace /> : <Navigate to={ROUTES.login} replace />} />
        <Route path="*" element={isAuthenticated ? <Navigate to={ROUTES.dashboard} replace /> : <Navigate to={ROUTES.login} replace />} />
      </Routes>
    </Router>
  )
}
