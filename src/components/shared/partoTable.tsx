"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Badge from "./badges";
import { ArchiveButton, DeleteButton, EditButton, ReserPasswordButton, ViewButton } from "./button";
import View from "./svgComponents/view";
import { boolean } from "yup";
import { TableHeader } from "@r/models/tableHeader";

export default function PartoTable({header,body,}: {header: TableHeader[];body: any[];}) {
  const searchParam = useSearchParams();
  return (
    <div className='w-full overflow-x-auto'>
      <table className='min-w-full'>
        <tr>
          {header.map((x, index) => (
            <th scope='col' key={index} className={"bg-[#F2F3F7] w-auto px-6 h-10 rounded"}>
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
        {body.length !== 0
          ? body.map((body_item, index) => (
              <tr className='text-center text-Neutral-600 hover:bg-Neutral-100'>
                <td scope='row' className='px-6 h-10 w-14'>
                  {index +
                    1 +
                    (searchParam?.has("page")! === true
                      ? (Number(searchParam?.get("page")!) - 1) *
                        (searchParam?.has("pageSize")! === true
                          ? Number(searchParam?.get("pageSize")!)
                          : 5)
                      : 0)}
                </td>
                {Array(header.length - 1)
                  .fill(false)
                  .map((value, valueIndex) => {
                    if (!header[valueIndex + 1].action) {
                      if (
                        Object.keys(body_item).includes(
                          header[valueIndex + 1].orginalTitle!
                        )
                      ) {
                        if (header[valueIndex + 1]?.booleanValue?.length! > 0) {
                          return (
                            <td
                              key={"list" + valueIndex + 1}
                              scope='row'
                              className='px-6 h-10 w-auto'
                            >
                              <div className='flex flex-col justify-center items-center'>
                                <Badge
                                  title={
                                    header[valueIndex + 1].booleanValue
                                      ?.find(
                                        (item) =>
                                          item.type ===
                                          Object.entries(body_item).find(
                                            (key_value) =>
                                              key_value[0] ===
                                              header[valueIndex + 1]
                                                .orginalTitle
                                          )![1]
                                      )
                                      ?.title.toString()!
                                  }
                                  type={
                                    header[valueIndex + 1].badge?.find(
                                      (item) =>
                                        item.title ===
                                        header[valueIndex + 1].booleanValue
                                          ?.find(
                                            (item) =>
                                              item.type ===
                                              Object.entries(body_item).find(
                                                (key_value) =>
                                                  key_value[0] ===
                                                  header[valueIndex + 1]
                                                    .orginalTitle
                                              )![1]
                                          )
                                          ?.title.toString()!
                                    )?.type
                                  }
                                />
                              </div>
                            </td>
                          );
                        } else {
                          if (header[valueIndex + 1]?.badge?.length === 1) {
                            return (
                              <td
                                key={"list" + valueIndex}
                                scope='row'
                                className='px-6 h-10 w-auto'
                              >
                                <div className='flex flex-col justify-center items-center'>
                                  <Badge
                                    title={Object.entries(body_item!)
                                      .find(
                                        (item) =>
                                          item[0] ===
                                          header[valueIndex + 1].orginalTitle
                                      )![1]!
                                      .toString()}
                                    type={
                                      header[valueIndex + 1].badge![0].type!
                                    }
                                  />
                                </div>
                              </td>
                            );
                          } else if (
                            header[valueIndex + 1].badge?.length! > 1
                          ) {
                            return (
                              <td
                                key={"list" + valueIndex}
                                scope='row'
                                className='px-6 h-10 w-auto'
                              >
                                <div className='flex flex-col justify-center items-center'>
                                  <Badge
                                    title={Object.entries(body_item!)
                                      .find(
                                        (item) =>
                                          item[0] ===
                                          header[valueIndex + 1].orginalTitle
                                      )![1]!
                                      .toString()}
                                    type={
                                      header[valueIndex + 1].badge?.find(
                                        (item) =>
                                          item.title ===
                                          Object.entries(body_item!).find(
                                            (item) =>
                                              item[0] ===
                                              header[valueIndex + 1]
                                                .orginalTitle
                                          )![1]
                                      )?.type
                                    }
                                  />
                                </div>
                              </td>
                            );
                          } else {
                            return (
                              <td
                                key={"list" + valueIndex}
                                scope='row'
                                className='px-6 h-10 w-auto'
                              >
                                {Object.entries(body_item!)
                                  ?.find(
                                    (item) =>
                                      item[0] ===
                                      header[valueIndex + 1].orginalTitle
                                  )![1]
                                  ?.toString() === "" ||
                                Object.entries(body_item!)?.find(
                                  (item) =>
                                    item[0] ===
                                    header[valueIndex + 1].orginalTitle
                                )![1] === null
                                  ? "-"
                                  : Object.entries(body_item!)
                                      ?.find(
                                        (item) =>
                                          item[0] ===
                                          header[valueIndex + 1].orginalTitle
                                      )![1]
                                      ?.toString()}
                              </td>
                            );
                          }
                        }
                      } else {
                        return (
                          <td
                            key={"list" + valueIndex}
                            scope='row'
                            className='px-6 h-10 w-auto'
                          >
                            -
                          </td>
                        );
                      }
                    }
                  })}
                {Array(header.length - Object.values(body[0]).length)
                  .fill(false)
                  .map((number, actionIndex) => {
                    return (
                      <td key={actionIndex} dir='ltr'>
                        <div className='flex flex-row items-center justify-center space-x-2'>
                          {header[
                            Object.values(body[0]).length + actionIndex
                          ]?.action?.map((item) => {
                            switch (item?.key) {
                              case "archive":
                                return <ArchiveButton />;
                                break;
                              case "delete":
                                return <DeleteButton />;
                                break;
                              case "edit":
                                if (typeof item.action === "string") {
                                  return (
                                    <Link
                                      href={
                                        item.action.toString() +
                                        Object.values(body_item)[
                                          Object.keys(body_item).findIndex(
                                            (keys) => keys === "id"
                                          )
                                        ]
                                      }
                                    >
                                      <div>
                                        <EditButton />
                                      </div>
                                    </Link>
                                  );
                                } else {
                                  return (
                                    <EditButton
                                      click={() => item?.action(body_item)}
                                    />
                                  );
                                }
                                break;
                              case "view":
                                if (typeof item.action === "string") {
                                  return (
                                    <Link
                                      href={
                                        item.action.toString() +
                                        Object.values(body_item)[
                                          Object.keys(body_item).findIndex(
                                            (keys) => keys === "id"
                                          )
                                        ]
                                      }
                                    >
                                      <div className='p-2 flex flex-row items-center bg-Primary rounded w-20 h-8 text-white'>
                                        <span>مشاهده</span>
                                        <View />
                                      </div>
                                    </Link>
                                  );
                                } else {
                                  return <ViewButton title='مشاهده' />;
                                }
                                break;
                              case "password":
                                return <ReserPasswordButton click={() => item?.action(body_item)} title="بازنشانی کلمه عبور"/>
                                break;
                            }
                          })}
                        </div>
                      </td>
                    );
                  })}
              </tr>
            ))
          : null}
      </table>
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
