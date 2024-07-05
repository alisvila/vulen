import React from "react";
import TableBadge from "./TableBadge";

export default function UpperHEaderTitle() {
  return (
    <div>
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Customers
          </h2>

            <TableBadge>
                240 vendors
            </TableBadge>
        </div>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
          These companies have purchased in the last 12 months.
        </p>
      </div>
    </div>
  );
}
