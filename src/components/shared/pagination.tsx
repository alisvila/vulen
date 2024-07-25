"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LeftArrow from "./svgComponents/leftArrow";
import RightArrow from "./svgComponents/rightArrow";
import { useEffect } from "react";

// ASK: explain plz
export default function Pagination({
  currentPage,
  numPages,
  onChange,
}: {
  currentPage: number;
  numPages: number;
  onChange?: (value?: number) => void;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams1 = useSearchParams();
  const changePageNumberHandler = (nextPage: number) => {
    //const sitePath = router.query?.slug!;
    let nextPageURL: string = pathName!;
    // sitePath.map(x=>{
    //     nextPageURL += "/" + x;
    // });
    let key = Object.keys(Object.fromEntries(searchParams1?.entries()!));
    let values = Object.values(Object.fromEntries(searchParams1?.entries()!));
    if (nextPage !== currentPage && nextPage <= numPages && nextPage >= 1) {
      if (key.length > 0 && nextPage !== 1) {
        nextPageURL = nextPageURL + "?";
        if (key.some((item) => item == "page")) {
          key.map((item, index) => {
            if (item === "page") {
              if (nextPage !== 1) {
                nextPageURL =
                  nextPageURL +
                  item +
                  "=" +
                  nextPage.toString() +
                  (index == key.length - 1 ? "" : "&");
              }
            } else {
              nextPageURL =
                nextPageURL +
                item +
                "=" +
                values[index] +
                (index == key.length - 1 ? "" : "&");
            }
          });
        } else {
          nextPageURL = nextPageURL + "page=" + nextPage.toString() + "&";
          key.map((item, index) => {
            nextPageURL =
              nextPageURL +
              item +
              "=" +
              values[index] +
              (index == key.length - 1 ? "" : "&");
          });
        }
    } else if (key.length === 0 && nextPage > 1) {
        nextPageURL = nextPageURL + "?" + "page=" + nextPage.toString();
      } else if (key.length > 0 && nextPage === 1) {
        if (!(key.length === 1 && key.some((item) => item == "page"))) {
          nextPageURL = nextPageURL + "?";
        }
        const findPageIndex = key.indexOf("page");
        key.splice(findPageIndex, 1);
        values.splice(findPageIndex, 1);
        if (key.length > 0) {
          key.map((item, index) => {
            nextPageURL =
              nextPageURL +
              item +
              "=" +
              values[index] +
              (index == key.length - 1 ? "" : "&");
          });
        }
      }
      onChange ? onChange(nextPage) : router.push(nextPageURL);
    }
  };

  if (numPages <= 6) {
    return (
      <div
        dir='ltr'
        className="w-full flex flex-row justify-center items-center my-5 text-blackText"
      >
        <button
          onClick={() => changePageNumberHandler(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
          className={`border border-[#BEBEBE] rounded bg-white w-8 h-8 mx-2 focus:outline-none flex
          items-center justify-center ${currentPage === 1 ? "" : ""}`}
        >
          <LeftArrow fill={currentPage === 1 ? "#BEBEBE" : undefined} />
        </button>
        {Array.from({ length: numPages }, (_, index) => (
          <button
            onClick={() => changePageNumberHandler(index + 1)}
            className={`border rounded w-8 h-8 focus:outline-none flex items-center justify-center mx-2
            ${
              currentPage === index + 1
                ? "border-Primary text-Primary bg-activePage"
                : "border-[#BEBEBE] bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePageNumberHandler(currentPage + 1)}
          disabled={currentPage === numPages ? true : false}
          className={`border border-[#BEBEBE] rounded w-8 h-8 mx-2 focus:outline-none flex
          items-center justify-center ${currentPage === numPages ? "" : ""}`}
        >
          <RightArrow fill={currentPage === numPages ? "#BEBEBE" : undefined} />
        </button>
      </div>
    );
  } else {
    return (
      <div
        dir='ltr'
        className="w-full flex flex-row justify-center items-center my-5 text-blackText"
      >
        <button
          onClick={() => changePageNumberHandler(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
          className={`border border-[#BEBEBE] bg-white rounded w-8 h-8 mx-2 focus:outline-none flex
          items-center justify-center ${currentPage === 1 ? "" : ""}`}
        >
          <LeftArrow fill={currentPage === 1 ? "#BEBEBE" : undefined} />
        </button>
        {currentPage > 3 ? (
          <button
            onClick={() => changePageNumberHandler(1)}
            className={`border rounded w-8 h-8 mx-2 focus:outline-none flex items-center justify-center
              ${
                currentPage === 1
                  ? "border-Primary text-Primary bg-activePage"
                  : "border-[#BEBEBE] bg-white"
              }`}
          >
            1
          </button>
        ) : null}
        {currentPage > 3 ? (
          <div
            className="rounded bg-white text-paginationBlackText w-8 h-8 mx-2 focus:outline-none flex
              items-center justify-center"
          >
            ...
          </div>
        ) : null}
        {currentPage <= 3
          ? Array.from({ length: 3 }, (_, index) => (
              <button
                onClick={() => changePageNumberHandler(index + 1)}
                className={`border rounded w-8 h-8 focus:outline-none flex items-center justify-center mx-2
                  ${
                    currentPage === index + 1
                      ? "border-Primary text-Primary bg-activePage"
                      : "border-[#BEBEBE] bg-white"
                  }`}
              >
                {index + 1}
              </button>
            ))
          : null}
        {currentPage > 3 && numPages - currentPage > 2
          ? Array.from({ length: 3 }, (_, index) => (
              <button
                onClick={() =>
                  changePageNumberHandler(index + (currentPage - 1))
                }
                className={`border rounded w-8 h-8 focus:outline-none flex items-center justify-center mx-2
                  ${
                    currentPage === index + (currentPage - 1)
                      ? "border-Primary text-Primary bg-activePage"
                      : "border-[#BEBEBE] bg-white"
                  }`}
              >
                {index + (currentPage - 1)}
              </button>
            ))
          : null}
        {numPages - currentPage <= 2
          ? Array.from({ length: 3 }, (_, index) => (
              <button
                onClick={() => changePageNumberHandler(numPages - (2 - index))}
                className={`border rounded w-8 h-8 focus:outline-none flex items-center justify-center mx-2
                  ${
                    currentPage === numPages - (2 - index)
                      ? "border-Primary text-Primary bg-activePage"
                      : "border-[#BEBEBE] bg-white"
                  }`}
              >
                {numPages - (2 - index)}
              </button>
            ))
          : null}
        {numPages - currentPage > 2 ? (
          <div
            className="rounded bg-white text-paginationBlackText w-8 h-8 mx-2 focus:outline-none flex
              items-center justify-center"
          >
            ...
          </div>
        ) : null}
        {numPages - currentPage > 2 ? (
          <button
            onClick={() => changePageNumberHandler(numPages)}
            className={`border rounded w-8 h-8 mx-2 focus:outline-none flex items-center justify-center
              ${
                currentPage === numPages
                  ? "border-Primary text-Primary bg-activePage"
                  : "border-[#BEBEBE] bg-white"
              }`}
          >
            {numPages}
          </button>
        ) : null}
        <button
          onClick={() => changePageNumberHandler(currentPage + 1)}
          disabled={currentPage === numPages ? true : false}
          className={`border border-[#BEBEBE] rounded bg-white w-8 h-8 mx-2 focus:outline-none flex
          items-center justify-center ${currentPage === numPages ? "" : ""}`}
        >
          <RightArrow fill={currentPage === numPages ? "#BEBEBE" : undefined} />
        </button>
      </div>
    );
  }
}
