export interface ProtectedRouteProps {
  isAuthenticated: boolean
  Component: React.ComponentType<NonNullable<unknown>>
  path: string
}

export const ROUTES = {
  app: "app",
  auth: "auth",
  login: "login",
  register: "register",
  newPassword: "reset_password",
  resetPassword: "reset-password",
  dashboard: "dashboard",
  products: "products",
  product: "product",
  customers: "customers",
  customer: "customer",
  orders: "orders",
  order: "order",
  categories: "categories",
  chat: "chat",
  invoices: "invoices",
  costs: "costs",
}
