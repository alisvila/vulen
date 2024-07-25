import { ArchiveButton, DeleteButton, EditButton, ViewButton } from "@/components/shared/button";
import View from "@/components/shared/svgComponents/view";
import { SimpleTableDataModel } from "@r/models/simpleTableDataModel";
import { Actions } from "@r/models/tableHeader";
import Image from "next/image";
import Link from "next/link";

// ASK: explain plz
export default function SimpleTable({ body, action }: { body: any[], action: Actions[] }) {
    return (
        <div className='w-full overflow-x-auto'>
            <table className='min-w-full border-collapse'>
                <tr>
                    <th className="w-16 px-6 h-10 rounded">ردیف</th>
                    <th className="w-96 lg:w-full px-2 h-10 text-right">عنوان</th>
                    <th className="w-20 px-6 h-10 rounded">اقدام</th>
                </tr>
                {
                    body.length >= 0 ? 
                    body.map((body_item,index)=>
                        <tr key={index} className='text-center text-Neutral-600 hover:bg-Neutral-100 border-t border-t-grays-1'>
                            <td scope='row' className='px-6 h-10 w-16'>{(index+1)}</td>
                            <td className="text-right w-96 lg:w-full px-2 h-10">{body_item.title}</td>
                            <td><div className='flex flex-row items-center justify-center space-x-2'>{
                                action.map((act)=>{
                                    switch (act?.key) {
                                        case "archive":
                                          return <ArchiveButton />;
                                          break;
                                        case "delete":
                                          return <DeleteButton click={() => act?.action(body_item)}/>;
                                          break;
                                        case "edit":
                                          if (typeof act.action === "string") {
                                            return (
                                              <Link
                                                href={
                                                    act.action.toString() +
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
                                                click={() => act?.action(body_item)}
                                              />
                                            );
                                          }
                                          break;
                                        case "view":
                                          if (typeof act.action === "string") {
                                            return (
                                              <Link
                                                href={
                                                    act.action.toString() +
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
                                      }
                                })
                            }</div></td>
                        </tr>
                    )
                    : null
                }
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