import ActualTable from "@/components/Grid/ActualTable";
import Filters from "@/components/Grid/Filters";
import ProgressBar from "@/components/Grid/ProgressBar";
import Search from "@/components/Grid/Search";
import TableBadge from "@/components/Grid/TableBadge";
import UpperHEaderTitle from "@/components/Grid/UpperHEader";
import UpperHeaderBtn from "@/components/Grid/UpperHeaderBtn";
import React, { Component } from "react";

const tableContent = [
  {
    name: "company",
    sort: "alphabet",
    content: "Catalog",
    subcontenct: "catalogapp.io",
  },
  {
    name: "Status",
    component: () => {
      return <TableBadge>customer</TableBadge>;
    },
  },
  {
    name: "progress",
    component: () => {
      return (
        <ProgressBar percent={48} />
      );
    },
  },
];
export default function TableExample() {
  return (
    <section className="container mx-auto px-4">
      <div className="sm:flex sm:items-center sm:justify-between">
        <UpperHEaderTitle />
        <UpperHeaderBtn />
      </div>

      <div className="mt-6 md:flex md:items-center md:justify-between">
        <Filters />
        <Search />
      </div>

      <ActualTable content={tableContent}/>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Page{" "}
          <span className="font-medium text-gray-700 dark:text-gray-100">
            1 of 10
          </span>
        </div>

        <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
          <a
            href="#"
            className="flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <a
            href="#"
            className="flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:-scale-x-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
