import React from "react";

export default function Row({onNodeClick, element}: any) {

    const hasChild = () => {
        if (element.children && element.children.length > 0) {
            
        }
    }
  return (
      <li onClick={() => onNodeClick(element.id)} className="px-2">Oneeee</li>
  );
}
