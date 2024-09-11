import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "../assets/css/bootstrap.min.css";

import "../assets/css/main.css";
import "../assets/css/main2.css";
import "../assets/css/mainq.css";
import "../assets/css/mainq2.css";
import "../assets/css/blue.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/owl.transitions.css";
import "../assets/css/animate.min.css";
import "../assets/css/rateit.css";
import "../assets/css/bootstrap-select.min.css";
import "../assets/css/custom.css";

import "../assets/css/font-awesome.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Szoplo",
  description: "Prawdopodobnie najnizsze ceny w internecie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Barlow:200,300,300i,400,400i,500,500i,600,700,800"
          rel="stylesheet"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,600italic,700,700italic,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>

      <script async src="assets/js/jquery-1.11.1.min.js"></script>
      <script async src="assets/js/jquery-1.11.1.min.js"></script>
      <script async src="assets/js/bootstrap.min.js"></script>
      <script async src="assets/js/bootstrap-hover-dropdown.min.js"></script>
      <script async src="assets/js/owl.carousel.min.js"></script>
      <script async src="assets/js/echo.min.js"></script>
      <script async src="assets/js/jquery.easing-1.3.min.js"></script>
      <script async src="assets/js/bootstrap-slider.min.js"></script>
      <script async src="assets/js/jquery.rateit.min.js"></script>
      <script async src="assets/js/lightbox.min.js"></script>
      <script async src="assets/js/bootstrap-select.min.js"></script>
      <script async src="assets/js/wow.min.js"></script>
      <script async src="assets/js/scripts.js"></script>
    </html>
  );
}
