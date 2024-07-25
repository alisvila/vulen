"use client";
import { useState } from "react";
import Header from "./header";
import SideMenu from "./newSideMenu";
import BackDrop from "./backdrop";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store/store";
import BreadCrumb from "@/utils/BreadCrumb";
import { useQuery } from "react-query";
import { setUserRole } from "@/store/userSlice";
import { fetchUserRole } from "@/services/userService";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  useQuery("userRoles", async () => {
    const result = await fetchUserRole();
    const namesArray = result.content.data.map((obj: any) => obj.name);
    dispatch(setUserRole(namesArray));
    return result;
  });
  
  const changeStatusSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };
  return (
    <>
      <Provider store={store}>
        <div className="w-full h-full">
          <Header showSideMenu={changeStatusSideMenu} />
          {showSideMenu && <BackDrop closeSideMenu={changeStatusSideMenu} />}
          <main className="w-full h-full flex flex-row flex-grow z-0">
            <SideMenu show={showSideMenu} />
            <div
              className="w-full h-full mb-20 flex flex-col flex-grow py-4 px-6 bg-dashboard
                overflow-y-auto"
            >
              <BreadCrumb />
              <div className="w-full h-full">{children}</div>
            </div>
          </main>
        </div>
      </Provider>
    </>
  );
}
