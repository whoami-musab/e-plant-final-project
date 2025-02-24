'use client'

import { usePathname } from "next/navigation";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from './templates/Header';
import Footer from './templates/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();

  // You can add specific paths where the header should not appear
  const hideHeaderPaths = [""];
  console.log(router);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {/* Conditionally render Header */}
          {/* <Header /> */}
          {!hideHeaderPaths.includes(router) && <Header />}
          <ToastContainer />
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}

// 'use client'

// import { usePathname } from "next/navigation";
// import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import store from "./redux/store/store";
// import Header from './templates/Header';
// import Footer from './templates/Footer';

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname(); // Get the current path

//   // Check if we are on the checkout page and hide the root content
//   const isCheckoutPage = pathname === "/checkout";

//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>
//           <Header /> {/* Always show the Header */}

//           <ToastContainer />

//           {/* Only show the / page content when NOT on the /checkout page */}
//           {!isCheckoutPage && children}

//           {/* Always show the Footer */}
//           <Footer />
//         </Provider>
//       </body>
//     </html>
//   );
// }
