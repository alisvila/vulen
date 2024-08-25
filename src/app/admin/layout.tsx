import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-ellipsis bg-gray-50 py-4">top</div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full bg-blue-500 text-white md:w-1/2">lef-col</div>
        <div className="w-full bg-gray-200 py-4 text-center text-white md:w-1/2">
          <div className="flex h-64 items-center justify-center bg-blue-500 text-white">
            Centered Content
          </div>
        </div>
      </div>
    </div>
  );
}
