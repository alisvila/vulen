import React, { useState } from "react";
import useGetAllSearchParams from "../hooks/urlParams";

export default function Filters() {
  const { setItem, getAll } = useGetAllSearchParams();

  const changeFilter = (filter: string) => {
    setItem("filter", filter);
  };

  const buttonClasses =
    "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm dark:text-gray-300 dark:hover:bg-gray-800";
  const filterChecked = (name: string) => {
    const searchParams = getAll();
    if (Object.values(searchParams).includes(name)) {
      return "bg-gray-400 text-white";
    }
    return;
  };

  return (
    <div className="inline-flex divide-x overflow-hidden rounded-lg border bg-white rtl:flex-row-reverse dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
      <button
        onClick={(e) => changeFilter("all")}
        className={`${buttonClasses} ${filterChecked("all")}`}
      >
        View all
      </button>

      <button
        onClick={(e) => changeFilter("monitor")}
        className={`${buttonClasses} ${filterChecked("monitor")}`}
      >
        Monitored
      </button>

      <button
        onClick={(e) => changeFilter("unmonitored")}
        className={`${buttonClasses} ${filterChecked("unmonitored")}`}
      >
        Unmonitored
      </button>
    </div>
  );
}
