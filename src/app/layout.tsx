'use client'

import { usePathname } from "next/navigation";
import "./globals.css";
import Header from './templates/Header';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();

  // You can add specific paths where the header should not appear
  const hideHeaderPaths = ["/"];
  console.log(router);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* Conditionally render Header */}
          {!hideHeaderPaths.includes(router) && <Header />}
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
