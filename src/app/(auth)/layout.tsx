import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";
import login from "@/public/assets/images/loginImage.svg";
import infoIcon from "@/public/assets/images/icons/infoCircleIcon.svg";
import headSetIcon from "@/public/assets/images/icons/headsetIcon.svg";
import bird from './login-image.png'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex min-h-full w-full flex-col items-center justify-center bg-gray-100 md:h-full">
      <div className="shadow-lg border-2 border-indigo rounded-lg z-10 flex w-full max-w-6xl flex-col bg-white bg-gradient-to-b md:h-[85%] md:w-5/6 md:flex-row">
        <div className="flex w-full  justify-around flex-col items-center gap-y-8 p-10 md:h-full">
        <span className='font-medium text-xl'>ورود کاربران</span>

          {/* <h1 className="mt-auto text-center text-lg">پرنده ها</h1> */}
          <div className="w-full py-4">
            {children}
          </div>
          <p className="text-center text-xs">تمامی حقوق</p>
        </div>
        <div className="bg-indigo justify-around rounded-x-lg flex w-full flex-col items-center gap-y-8 p-10 md:h-full">
            <Image src={bird} alt="its just a bird" />
        </div>
      </div>
    </main>
  );
}
