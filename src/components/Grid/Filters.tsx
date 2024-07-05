import React from 'react'

export default function Filters() {
  return (
    <div className="inline-flex divide-x overflow-hidden rounded-lg border bg-white rtl:flex-row-reverse dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900">
    <button className="bg-gray-100 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
      View all
    </button>

    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm dark:text-gray-300 dark:hover:bg-gray-800">
      Monitored
    </button>

    <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm dark:text-gray-300 dark:hover:bg-gray-800">
      Unmonitored
    </button>
  </div>
  )
}
