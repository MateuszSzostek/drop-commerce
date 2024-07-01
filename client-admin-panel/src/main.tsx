import React, { Suspense } from "react"
import { ConfigProvider } from "antd"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./common/styles/global.scss"
import "./common/styles/themes.scss"
import "./common/styles/variables.scss"
import "./common/styles/typography.scss"
import { store, persistor } from "./common/config/toolkit/store.ts"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import Head from "./common/components/head/Head.tsx"
import { GoogleOAuthProvider } from "@react-oauth/google"
import "./common/config/i18n/i18n.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="<your_client_id>">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Lato Regular",
          },
        }}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Head />
            <Suspense fallback="loading">
              <App />
            </Suspense>
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>,
)
