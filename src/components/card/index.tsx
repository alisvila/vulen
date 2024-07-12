import React from "react";

export default function Card({children}: any) {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      
      <div className="px-6 py-4">
        {children}
      </div>
      <div className="px-6 pb-2 pt-4">
       
      </div>
    </div>
  );
}
