"use client";

import Guide from "@/components/shared/guide";
import Image from "next/image";
import { useState } from "react";
import BaseWizard from "../_component/BaseWizard";


export default function AddOrEditUser() {
  const guides: string[] = [
    "لطفا جهت اضافه کردن کاربر جدید بر روی دکمه کاربر جدید کلیک کنید و کاربر مورد نظر خود را اضافه کنید.",
    "از گزینه جستجو نیز جهت فیلتر کردن موارد مورد نظر خود استفاده کنید.",
  ];
  const [guideShow, setGuideShow] = useState<boolean>(true);
  return (
    <main className='w-full h-auto px-1 pb-32'>
      <div className='flex flex-row items-center'>
        <h1 className='font-IranSansMedium text-base my-4'>مدیریت کاربران</h1>
        {guideShow === false ? (
          <Image
            onClick={() => setGuideShow(!guideShow)}
            src='/assets/img/info-circle.svg'
            alt='guide'
            width={16}
            height={16}
            className='cursor-pointer mr-1'
          />
        ) : null}
      </div>
      <Guide
        close={() => setGuideShow(!guideShow)}
        guideList={guides}
        show={guideShow}
      />
      <BaseWizard />
    </main>
  );
}
