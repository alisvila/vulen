import React, { ReactNode } from "react";

type CustomBoxProps = {
  children: ReactNode;
  title?: string;
};

export default function CustomBox({ title = "", children }: CustomBoxProps) {
  return (
    <section className="w-full bg-white rounded-[5px] shadow-cartable px-4 py-3">
      <h2 className="text-sm text-Primary font-IranSansMedium px-2 border-r-2 border-Primary mb-4">
        {title}
      </h2>
      <div className="w-full">{children}</div>
    </section>
  );
}
