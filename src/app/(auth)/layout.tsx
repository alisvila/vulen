import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/assets/images/loginImage.svg";
import infoIcon from "@/public/assets/images/icons/infoCircleIcon.svg";
import headSetIcon from "@/public/assets/images/icons/headsetIcon.svg";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className='w-full min-h-full md:h-full bg-login_bg flex flex-col justify-center
                items-center relative'
        >
            <div
                className='w-full md:w-5/6 max-w-6xl md:h-[85%] bg-gradient-to-b from-secondary to-primaryy
                    z-10 rounded flex flex-col md:flex-row text-primaryy shadow-authLayout'
            >
                <div
                    className='w-full md:w-49% md:h-full bg-white shadow-rightBgLayout rounded-e-xl rounded-s
                        flex flex-col items-center gap-y-8 p-10'
                >
                    <h1 className='text-primaryy text-center text-lg mt-auto'>
                        
                    </h1>
                    <div className='border-[0.03125rem] border-primaryy/[.25] rounded-xl w-full py-4 mb-auto'>
                        {children}
                    </div>
                    <p className='text-xs text-center text-Neutral-500'>
                 تمامی حقوق
                    </p>
                </div>
                <div className='flex flex-col relative'>
                    <div className='flex flex-row items-center justify-end gap-x-[0.5rem] px-7 pt-7'>
                        <Link
                            href={"/"}
                            className='flex flex-row items-center text-white text-[0.8125rem]/[1.271875rem]
                                gap-x-[0.5rem]'
                        >
                  
                        </Link>
                        <Link
                            href={"/"}
                            className='flex flex-row items-center text-white text-[0.8125rem]/[1.271875rem]
                                gap-x-[0.5rem]'
                        >

                        </Link>
                    </div>
                    <div>

                        
                    </div>
                </div>
            </div>
        </main>
    );
}
