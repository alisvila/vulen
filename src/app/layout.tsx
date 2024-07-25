"use client";
import "./global.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/providers/react-query-provider";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
  params: { session, ...params },
}: {
  children?: ReactNode;
  params?: any;
}) {
  // const isLoading = useAppSelector((state)=>state.app.isLoading);
  return (
    <html dir='rtl' className={`${inter.className}`}>
      <body className='w-screen h-dvh overflow-hidden'>
        <link rel='icon' href='/favicon.png' sizes='any' />
        {/* {
          isLoading && <div className="fixed inset-0 z-40 bg-black bg-opacity-30 flex flex-col justify-center items-center">
          <div className="h-32 w-32 rounded bg-white flex flex-col justify-center items-center">
            <Spinner/>
          </div>
        </div>
        } */}
        <SessionProvider session={session}>
          <Provider store={store}>
          <ToastContainer />
          <QueryProvider>{children}</QueryProvider>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
