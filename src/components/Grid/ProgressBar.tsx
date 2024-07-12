import React from "react";

export default function ProgressBar({ percent }: { percent: number }) {
  // TODO: percent not implemented
  return (
    <div
      className={`h-1.5 w-48 overflow-hidden rounded-full bg-blue-200`}
    >
      <div className="h-1.5 w-2/3 bg-blue-500"></div>
    </div>
  );
}
