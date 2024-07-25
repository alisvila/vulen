import classNames from "classnames";
import Image from "next/image";

const heads = [
  {
    title: "ردیف",
    size: "2",
  },
  {
    title: "عنوان",
    size: "8",
  },
  {
    title: "اقدام",
    size: "2",
  },
];
export function Table({
  label = "نام",
  placeholder = "وارد کنید",
  headers = heads,
  data = [1, 2, 3, 4, 5, 6],
  className,
  error,
  isDisabled = false,
  isRequired,
  options = [],
  itemOfTable,
  ...rest
}: any) {
  return (
    <table className='w-full flex flex-col'>
      <thead className='p-2 w-full'>
        <tr className='w-full grid grid-cols-12 p-2 border-b-2 border-Neutral-500'>
          {headers?.map((item?: any, index?: any) => (
            <td
              className={`col-span-${item.size} ${index === headers.length - 1 && "text-left pl-4"}`}
            >
              {item.title}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item: any, index: any) => (
          <tr
            className='w-full grid grid-cols-12 p-2 px-4 border-Neutral-400 border-b-2 min-h-14
              items-center'
          >
            {itemOfTable(item, index)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
