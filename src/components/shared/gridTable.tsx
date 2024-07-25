"use client";
import { TableHeader } from "@r/models/tableHeader";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const personHeader: TableHeader[] = [
  { sortable: true, title: "ردیف", action: [] },
  { sortable: false, title: "اقدام", action: [{ key: "view", action: "/" }] },
];
// ASK: explain plz
export default function GridTable({
  header,
  body,
}: {
  header: TableHeader[];
  body: any[];
}) {
  const searchParam = useSearchParams();
  return (
    <div className='w-full'>
      <div className='overflow-x-auto flex flex-col py-2'>
        <table className='min-w-full flex flex-col'>
          <thead>
            <tr className='flex flex-row xl:justify-between'>
              {header.map((x, index) => (
                <th
                  scope='col'
                  key={index}
                  className={`bg-[#F2F3F7] px-4 h-10 rounded ml-2 ${
                    index === 0
                      ? "w-16"
                      : index === 1
                        ? "w-36"
                        : index === 5
                          ? "w-44"
                          : "w-28"
                  }`}
                >
                  <div className='w-full h-full flex flex-row items-center justify-center'>
                    {/* {
                                    x.sortable === true ?
                                        <Image src="/assets/img/sorting.svg" alt="sort" width={10} height={10} className="ml-2" />
                                        : null
                                } */}
                    <span className='text-Neutral-600 text-xs text-nowrap'>
                      {x.title}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {body.length !== 0 ? (
            <tbody className='text-Neutral-600'>
              {body.map((x, index) => (
                <tr
                  key={index}
                  className='flex flex-row items-center xl:justify-between my-2 text-center border-b
                    border-[#8E8E8E] py-2'
                >
                  <td scope='row' className='px-4 w-16 h-10 ml-2'>
                    {index +
                      1 +
                      (searchParam?.has("page")! === true
                        ? (Number(searchParam?.get("page")!) - 1) *
                          (searchParam?.has("size")! === true
                            ? Number(searchParam?.get("size")!)
                            : 5)
                        : 0)}
                  </td>
                  <td scope='row' className='px-4 w-36 h-10 ml-2'>
                    {x.name}
                  </td>
                  <td scope='row' className='px-4 w-28 h-10 ml-2'>
                    {x.nationalId}
                  </td>
                  <td
                    scope='row'
                    className='px-4 w-28 ml-2 bg-Secondary border border-Primary rounded-3xl text-center'
                  >
                    {x.personType === "RealPerson" ? "حقیقی" : "حقوقی"}
                  </td>
                  <td scope='row' className='px-4 w-28 h-10 ml-2'>
                    {x.contactNumber}
                  </td>
                  <td scope='row' className='px-4 w-44 h-10 ml-2'>
                    {x.email}
                  </td>
                  <td
                    scope='row'
                    className='px-4 w-28 h-10 ml-2 flex flex-col justify-center items-center'
                  >
                    <Link
                      href={
                        x.personType === "RealPerson"
                          ? "/dashboard/person/addOrEditRealPerson?id=" + x.id
                          : "/dashboard/person/addOrEditLegalPerson?id=" + x.id
                      }
                    >
                      <Image
                        src='/assets/img/edit.svg'
                        alt='edit'
                        width={12}
                        height={10}
                        className='cursor-pointer'
                      />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
      <hr />
      {body.length === 0 ? (
        <div className='w-full h-80 flex flex-col items-center justify-center'>
          <Image
            src='/assets/img/cartable.png'
            alt=''
            width={230}
            height={190}
          />
        </div>
      ) : null}
    </div>
  );
}
