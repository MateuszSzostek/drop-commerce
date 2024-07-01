import { createServer } from "miragejs"
import {
  registerHandlerMock,
  loginHandlerMock,
  forgotPasswordHandlerMock,
  resetPasswordHandlerMock,
} from "../../../app/identify-and-access-context/__mock__/identify-and-access-mock-route-handlers"
import {
  updateCompanyDetailsHandlerMock,
  updateInvoiceDetailsHandlerMock,
  getCompanyDetailsHandlerMock,
} from "../../../app/company-context/__mock__/company-mock-route-handlers"
import { plLocationHandlerMock, enLocationHandlerMock, nlLocationHandlerMock } from "../../config/i18n/mock-translation-routes"

const mockApiServer = createServer({
  routes() {
    //when mirrage js mock server is running there need to be additional routes for translation files
    this.get("/locales/pl/translation.json", plLocationHandlerMock)
    this.get("/locales/en/translation.json", enLocationHandlerMock)
    this.get("/locales/nl/translation.json", nlLocationHandlerMock)
    //mocked auth routes
    this.post("/auth/register", registerHandlerMock)
    this.post("/auth/login", loginHandlerMock)
    this.post("/auth/forgot_password", forgotPasswordHandlerMock)
    this.post("/auth/reset_password", resetPasswordHandlerMock)
    //mocked company routes
    this.post("/company/update_company_details", updateCompanyDetailsHandlerMock)
    this.post("/company/update_invoice_details", updateInvoiceDetailsHandlerMock)
    this.post("/company/get_company_details", getCompanyDetailsHandlerMock)
  },
})

mockApiServer.db.loadData({
  users: [],
  companies: [],
})

export default mockApiServer
