'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import UsersSvg from "../shared/svgComponents/users";

export default function SideMenu({ show }: { show: boolean }) {
    const pathname = usePathname();
    const [activeOptionMenu, setActiveOptionMenu] = useState<number>(0);
    const [subMenuStatus, setSubMenuStatus] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
    const changeSubMenuHandler = (index: number) => {
        let tempSubMenuStatus: boolean[] = [...subMenuStatus];
        tempSubMenuStatus[index] = !tempSubMenuStatus[index];
        setSubMenuStatus([...tempSubMenuStatus]);
    }
    useEffect(() => {
        switch (pathname) {
            case "/dashboard":
                setActiveOptionMenu(1)
                break;
            case "/dashboard/basic-Information":
                setActiveOptionMenu(8);
                break;
            case "/dashboard/person/person-list":
                setActiveOptionMenu(9);
                break;
            case "/dashboard/user-management/users":
                setActiveOptionMenu(10);
                break;
            case "/dashboard/groups":
                setActiveOptionMenu(11);
                break;
            case "/dashboard/positions":
                setActiveOptionMenu(12);
                break;
            default:
                break;
        }
    }, [pathname])
    return (
        <aside className={`fixed right-0 inset-y-0 lg:static lg:flex w-3/5  lg:w-96 z-20 lg:z-0 lg:h-full text-black bg-white lg:shadow-sideMenu transition-all duration-100 ${show === true ? "translate-x-0 lg:translate-x-0" : "translate-x-full lg:translate-x-0"}`}>
            <div className="w-full h-full overflow-y-auto pt-6 pr-6">
                <ul className="w-full text-blackText font-IranSansMedium pl-0.5">
                    <li>
                        <Link href="/">
                            <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary ${activeOptionMenu === 1 ? "bg-Secondary text-Primary rounded-r border-r-2 border-Primary" : ""}`}>
                                <div className="flex flex-row items-center pr-4">
                                    <Image src="/assets/img/home.svg" alt="" width={15} height={15} />
                                    <p className={`w-full px-3 my-3 `}>داشبورد من</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/plus.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>ثبت تخلف جدید</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/file.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>پرونده تخلف</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/decision.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>تصمیم های در حال اجرا</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/criminally.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>بار مجرمانه</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                        <hr className="ml-10" />
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/ding.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>اطلاعیه ها</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/massages.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>پیام ها</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                    <li>
                        <Link href="/dashboard/basic-Information">
                            <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary ${activeOptionMenu === 8 ? "bg-Secondary text-Primary rounded-r border-r-2 border-Primary" : ""}`}>
                                <div className="flex flex-row items-center pr-4">
                                    <Image src="/assets/img/baseInfo.svg" alt="" width={15} height={15} />
                                    <p className={`w-full px-3 my-3  `}>اطلاعات پایه</p>
                                </div>
                            </div>
                        </Link>
                        <hr className="ml-10" />
                    </li>
                    <li>
                        <Link href="/dashboard/person/person-list">
                            <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary ${activeOptionMenu === 9 ? "bg-Secondary text-Primary rounded-r border-r-2 border-Primary" : ""}`}>
                                <div className="flex flex-row items-center pr-4">
                                    <Image src="/assets/img/persons.svg" alt="" width={15} height={15} />
                                    <p className={`w-full px-3 my-3  `}>مدیریت اشخاص</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => changeSubMenuHandler(5)} className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/access.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>مدیریت کاربران و دسترسی ها</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </button>
                    </li>
                    <li>
                        <ul className={`mx-4 overflow-hidden transition-all ease-in ${subMenuStatus[5] === true ? "h-36" : "h-0"}`}>
                            <li>
                                <Link href={'/dashboard/user-management/users'}>
                                    <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded hover:border-r-2 hover:border-Primary ${activeOptionMenu === 10 ? "bg-Secondary text-Primary rounded border-r-2 border-Primary" : ""}`}>
                                        <div className="flex flex-row items-center pr-4">
                                            <UsersSvg className={activeOptionMenu === 10 ? "fill-Primary" : ""} />
                                            <p className={`w-full px-3 my-3  `}>کاربران</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/dashboard/groups'}>
                                    <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded hover:border-r-2 hover:border-Primary ${activeOptionMenu === 11 ? "bg-Secondary text-Primary rounded border-r-2 border-Primary" : ""}`}>
                                        <div className="flex flex-row items-center pr-4">
                                            <Image src="/assets/img/groups.svg" alt="" width={15} height={15} />
                                            <p className={`w-full px-3 my-3  `}>واحد های سازمانی</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link href={'/dashboard/positions'}>
                                    <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded hover:border-r-2 hover:border-Primary ${activeOptionMenu === 12 ? "bg-Secondary text-Primary rounded border-r-2 border-Primary" : ""}`}>
                                        <div className="flex flex-row items-center pr-4">
                                            <Image src="/assets/img/positions.svg" alt="" width={15} height={15} />
                                            <p className={`w-full px-3 my-3  `}>نقش ها</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/logs.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>لاگ های سامانه</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                    <li>
                        <div className={`w-full h-full flex flex-row items-center justify-between cursor-pointer pl-6 hover:bg-Secondary hover:text-Primary hover:rounded-r hover:border-r-2 hover:border-Primary`}>
                            <div className="flex flex-row items-center pr-4">
                                <Image src="/assets/img/report.svg" alt="" width={15} height={15} />
                                <p className={`w-full px-3 my-3  `}>گزارش</p>
                            </div>
                            <Image src="/assets/img/downArrow.svg" alt="" width={10} height={5} />
                        </div>
                    </li>
                </ul>
                <div className="w-full flex flex-col justify-center items-center pl-6  pr-4">
                    <Image src="/assets/img/scale.png" alt="" width={0} height={0} sizes="100%" className="w-44 h-40" />
                </div>
                <hr className="ml-6  mr-4" />
                <div className="w-full flex flex-row justify-between items-center pl-6 mt-2 text-xs text-Primary font-IranSansMedium">
                    <div className="flex flex-row items-center pr-4">
                        <Image src="/assets/img/headset1.svg" alt="support" width={30} height={30} />
                        <span className="mr-1">تماس با پشتیبانی:</span>
                    </div>
                    <a href="tel:02141721000">021-41721000</a>
                </div>
            </div>
        </aside>
    );
}