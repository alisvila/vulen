"use client";
import Image from "next/image";

export default function Guide({
  show,
  guideList,
  close,
}: {
  show: boolean;
  guideList: string[];
  close: () => void;
}) {
  return (
    <div
      className={`w-full px-4 rounded-[30px] border-Primary bg-[#FCFCFC] flex flex-row
      items-center overflow-hidden relative transition-all duration-200 ${
        show === true ? "h-36 border" : "h-0"
      }`}
    >
      <Image
        onClick={close}
        src='/assets/img/close-circle.svg'
        alt='close'
        width={20}
        height={20}
        className={`absolute top-4 left-4 cursor-pointer ${show === false ? "hidden" : ""}`}
      />
      <Image
        src='/assets/img/guide.png'
        alt='guide'
        width={80}
        height={80}
        className='hidden md:flex'
      />
      <div className='flex flex-col mr-2 h-3/6 justify-between'>
        <span className='text-sm font-IranSansMedium text-Primary'>راهنما</span>
        <div className='flex flex-col gap-1'>
          {guideList.map((x, index) => (
            <span key={index} className='text-xs text-Neutral-600'>
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
