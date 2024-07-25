'use client'
import Signout from "@/components/shared/svgComponents/signout";
import { logoutApi } from "@/services/axios/axiosApi's";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

enum days {
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
}

export default function Header({showSideMenu}:{showSideMenu:()=>void}) {
    const [accountOption,setAccountOption]=useState<boolean>(false);
    const currentDate = new Date();
    const signoutHandler = ()=>{
        logoutApi().finally(()=>{signOut();});
    }
    return (
        <header className="w-full h-24 bg-white text-Primary shadow-header z-10 relative flex flex-col px-5">
            { accountOption && <div onClick={()=>setAccountOption(false)} className="fixed inset-0 z-10"/>}
            <div className="w-full h-full grid grid-cols-6 lg:grid-cols-10 gap-2 items-center">
                <Image onClick={showSideMenu} src="/assets/img/menu.svg" alt=" hamburger menu" width={20} height={20} className="col-span-1 lg:hidden cursor-pointer" />
                <div className="col-span-4 lg:col-span-5 col-start-2 lg:col-start-1 flex flex-row items-center justify-center lg:justify-start">
                    <h1 className="text-Primary text-center text-sm tracking-tight">
                        <b>پرتو |</b> پایگاه رسیدگی به تخلفات و ناهنجاری های بازار سرمایه
                    </h1>
                    <div className="hidden lg:flex flex-col items-center justify-start mr-8 text-Neutral-600">
                        <span>{days[(currentDate.getDay() )] + " " + currentDate.toLocaleDateString('fa-IR')}</span>
                        <span className="font-sans text-xs">{currentDate.toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                    </div>
                </div>
                <div className="hidden col-span-3 col-start-8 lg:flex flex-col items-end">
                    <div onClick={()=>setAccountOption(true)} className="w-60 h-14 bg-Secondary rounded-4xl flex flex-row items-center justify-between px-2 shadow-account cursor-pointer relative">
                        <div className={`absolute inset-x-0 z-20 translate-y-16 overflow-hidden transition-all ease-in-out shadow-account rounded bg-white ${accountOption ? "h-14" : "h-0"}`}>
                            <div className="w-full h-full flex flex-col">
                                <button onClick={signoutHandler} className="w-full h-full flex flex-row items-center px-4 hover:bg-Neutral-200">
                                    <Signout/>
                                    <span className="mr-2">خروج از سیستم</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <Image src="/assets/img/avatar.png" alt="down arrow" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col mr-2">
                                <span className="font-IranSansMedium">ادمین</span>
                                <span className="text-xs">ادمین</span>
                            </div>
                        </div>
                        <Image src="/assets/img/downArrow.svg" alt="down arrow" width={10} height={5} />
                    </div>
                </div>
            </div>
        </header>
    );
}