import { PropsWithChildren } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { IHead } from "./Head.types"

export default function Head({ children }: PropsWithChildren<IHead>) {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-Commerce</title>
        <link rel="canonical" href="http://todo" />
        <link rel="manifest" href="/manifest.json" />
        {children}
      </Helmet>
    </HelmetProvider>
  )
}
