"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "./sideMenuItems";
import { useSelector } from "react-redux";

const MenuItemWithChild = ({
  item,
  subMenuStatus,
  changeSubMenuHandler,
}: any) => {
  const role = useSelector((state: any) => state.user.role);
  if (!role.includes(item.role) && item.role !== "All") return
  return (
    <>
      <li>
        <button
          onClick={() => changeSubMenuHandler(item.id)}
          className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6
            hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2
            hover:border-Primary`}
        >
          <div className="flex flex-row items-center pr-4">
            <Image
              src={`/assets/img/${item.icon}.svg`}
              alt=''
              width={15}
              height={15}
            />
            <p className={"w-full px-3 my-3  "}>{item.label}</p>
          </div>
          <Image src='/assets/img/downArrow.svg' alt='' width={10} height={5} />
        </button>
      </li>
      <li>
        <ul
          className={`mx-4 overflow-hidden transition-all ease-in ${
            subMenuStatus.includes(item.id)
              ? `h-${item.children.length * 12}`
              : "h-0"
          }`}
        >
          {item.children.map((item: any) => (
            <MenuItem item={item} />
          ))}
        </ul>
        {item.hasDivider && <hr className="ml-10" />}
      </li>
    </>
  );
};

const MenuItem = ({ item }: any) => {
  const role = useSelector((state: any) => state.user.role);
  const pathname = usePathname();
  
  if (!role.includes(item.role) && item.role !== "All") return
  return (
    <li key={item.id}>
      <Link href={item.path ?? ""}>
        <div
          className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6
          hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2
          hover:border-Primary ${
            pathname === item.path
              ? "bg-Secondary text-Primary rounded-r border-r-2 border-Primary"
              : ""
          }`}
        >
          <div className="flex flex-row items-center pr-4">
            <Image
              src={`/assets/img/${item.icon}.svg`}
              alt={item.label}
              width={15}
              height={15}
            />
            <p className={"w-full px-3 my-3"}>{item.label}</p>
          </div>
        </div>
      </Link>
      {item.hasDivider && <hr className="ml-10" />}
    </li>
  );
};

export default function SideMenu({ show }: { show: boolean }) {
  const [subMenuStatus, setSubMenuStatus] = useState<number[]>([]);

  const changeSubMenuHandler = (index: number) => {
    let tempSubMenuStatus = [...subMenuStatus];
    if (!tempSubMenuStatus.includes(index)) {
      tempSubMenuStatus.push(index);
    } else {
      tempSubMenuStatus.splice(tempSubMenuStatus.indexOf(index), 1);
    }
    setSubMenuStatus([...tempSubMenuStatus]);
  };

  return (
    <aside
      className={`fixed right-0 inset-y-0 lg:static lg:flex w-3/5 lg:w-96 z-20 lg:z-0 lg:h-full
      text-black bg-white lg:shadow-sideMenu transition-all duration-100 ${
        show
          ? "translate-x-0 lg:translate-x-0"
          : "translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="w-full h-full overflow-y-auto pt-6 pr-6">
        <ul className="w-full text-blackText font-IranSansMedium pl-0.5">
          {menuItems.map((item) => (
            <>
              {item.children.length > 0 ? (
                <MenuItemWithChild
                  item={item}
                  subMenuStatus={subMenuStatus}
                  changeSubMenuHandler={changeSubMenuHandler}
                />
              ) : (
                <MenuItem item={item} />
              )}
            </>
          ))}
        </ul>
        <div className="w-full flex flex-col justify-center items-center pl-6 pr-4">
          <Image
            src='/assets/img/scale.png'
            alt=''
            width={0}
            height={0}
            sizes='100%'
            className="w-44 h-40"
          />
        </div>
        <hr className="ml-6 mr-4" />
        <div
          className="w-full flex flex-row justify-between items-center pl-6 mt-2 text-xs text-Primary
            font-IranSansMedium"
        >
          <div className="flex flex-row items-center pr-4">
            <Image
              src='/assets/img/headset1.svg'
              alt='support'
              width={30}
              height={30}
            />
            <span className="mr-1">تماس با پشتیبانی:</span>
          </div>
          <a href='tel:02141721000'>021-41721000</a>
        </div>
      </div>
    </aside>
  );
}
