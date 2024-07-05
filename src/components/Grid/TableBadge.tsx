import React from "react";

type TableBadgeProps = {
  children: JSX.Element | string;
};

export default function TableBadge({ children }: TableBadgeProps) {
  return (
    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 dark:bg-gray-800 dark:text-blue-400">
      {children}
    </span>
  );
}
