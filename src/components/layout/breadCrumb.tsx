"use client";
import { BreadCrumbModel } from "@r/models/crumb";
import Image from "next/image";

export default function BreadCrumb({ route }: { route: BreadCrumbModel[] }) {
  return (
    <section className='w-full h-6 flex flex-row items-center'>
      <ul>
        {route.map((x, index) => (
          <>
            {x.title === "/" ? (
              <li key={index} className='flex flex-row items-center'>
                <a href={x.link}>
                  <Image
                    src='/assets/img/home.svg'
                    alt='dashboard'
                    width={14}
                    height={14}
                  />
                </a>
                {/* <span className="mx-2 mt-1">/</span>
                    <span className="mt-0.5">داشبورد</span> */}
              </li>
            ) : null}
          </>
        ))}
      </ul>
    </section>
  );
}
