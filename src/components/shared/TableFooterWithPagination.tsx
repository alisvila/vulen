import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/shared/pagination";

export default function TableFooterWithPagination({ data }: any) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();

  const changePageCountHandler = (inputValue: string) => {
    if (searchParam?.size !== 0) {
      if (searchParam?.has("pageSize")) {
        let url: string = pathName! + "?";
        Array.from(searchParam!.entries()).forEach((x, index) => {
          if (x[0] !== "pageSize" && x[0] !== "page") {
            url +=
              x[0] +
              "=" +
              x[1] +
              (Array.from(searchParam!.entries()).length > index ? "&" : "");
          } else {
            if (inputValue !== "5" && x[0] !== "page") {
              url +=
                x[0] +
                "=" +
                inputValue +
                (Array.from(searchParam!.entries()).length - 1 > index
                  ? "&"
                  : "");
            } else {
              if (index === Array.from(searchParam!.entries()).length - 1)
                [(url = url.substring(0, url.length - 1))];
            }
          }
        });
        router.replace(url);
      } else {
        if (searchParam?.has("page")) {
          // OK
          let url: string = pathName! + "?";
          Array.from(searchParam!.entries()).forEach((param, index) => {
            if (param[0] === "page") {
              url = url;
            } else {
              url +=
                param[0] +
                "=" +
                param[1] +
                (Array.from(searchParam!.entries()).length > index ? "&" : "");
            }
          });
          url += "pageSize=" + inputValue;
          router.replace(url);
        } else {
          // OK
          router.replace(
            pathName + "?" + searchParam?.toString() + "&pageSize=" + inputValue
          );
        }
      }
    } else {
      // OK
      if (inputValue !== "5") {
        router.replace(pathName + "?pageSize=" + inputValue);
      }
    }
  };

  return (
    <div>
      {data.data && data.data.length === 0 ? null : (
        <div className="w-full flex flex-row items-center justify-between">
          <div className="w-1/5">
            {"نمایش " +
              ((searchParam?.has("page")!
                ? Number(searchParam?.get("page")!)
                : 1) *
                (searchParam?.has("pageSize")! === true
                  ? Number(searchParam?.get("pageSize")!)
                  : 5) -
                ((searchParam?.has("pageSize")! === true
                  ? Number(searchParam?.get("pageSize")!)
                  : 5) -
                  1)) +
              " تا " +
              (data.totalCount <
              (searchParam?.has("pageSize")! === true
                ? Number(searchParam?.get("pageSize")!)
                : 5)
                ? data.totalCount
                : (searchParam?.has("page")!
                      ? Number(searchParam?.get("page")!)
                      : 1) *
                      (searchParam?.has("pageSize")! === true
                        ? Number(searchParam?.get("pageSize")!)
                        : 5) >
                    data.totalCount
                  ? data.totalCount
                  : (searchParam?.has("page")!
                      ? Number(searchParam?.get("page")!)
                      : 1) *
                    (searchParam?.has("pageSize")! === true
                      ? Number(searchParam?.get("pageSize")!)
                      : 5)) +
              " از " +
              data.totalCount +
              " رکورد"}
          </div>
          <Pagination
            currentPage={
              searchParam?.has("page")! ? Number(searchParam?.get("page")!) : 1
            }
            numPages={Math.ceil(
              data.totalCount /
                (searchParam?.has("pageSize")! === true
                  ? Number(searchParam?.get("pageSize")!)
                  : 5)
            )}
          />
          <div className="w-44 text-blackText flex flex-row items-center">
            <span className="text-xs ml-2">نمایش به صورت</span>
            <select
              onChange={(e) => changePageCountHandler(e.target.value)}
              name='pageSize'
              id='pageSize'
              defaultValue={
                searchParam?.has("pageSize")!
                  ? Number(searchParam?.get("pageSize")!)
                  : 5
              }
              className="bg-[#D9D9D9] p-1"
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='25'>25</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
