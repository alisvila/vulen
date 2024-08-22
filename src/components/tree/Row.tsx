import React from "react";
import Icon from "./icon";
// import { CheckBox } from "../checkbox";

type RowProps = {
  element: any;
  onRowClick: any;
  expanded: Set<number>;
  checked: boolean;
  onChecked: any
};

export default function Row({ element, onRowClick, expanded, checked, onChecked }: RowProps) {
  const isExpanded = (id: number) => {
    if (expanded.has(id)) {
      return true;
    }
    return false;
  };

  const hasChild = () => {
    if (element.children && element.children.length > 0) {
      {
        return (
          <li className="border-r-2 border-transparent">
            <a
              
              data-twe-collapse-init
            //   href='#collapseThree'
              role='button'
              aria-expanded='false'
              aria-controls='collapseThree'
              className="focus:text-primary active:text-primary flex items-center px-2 relative"
            >
                <Icon onClick={() => {console.log(element.id);onRowClick(element.id)}} className={isExpanded(element.id) ? `rotate-90 absolute right-[-8px]` : 'absolute right-[-8px]'} />
                {/* <CheckBox element={element} checked={checked} onChecked={onChecked}/> */}
            </a>
            <ul
              className={isExpanded(element.id) ? "visible" : "hidden"}
              id='collapseThree'
              data-twe-collapse-item
            >
              {element.children.map((row: any) => {
                return (
                  <div className="mr-6">
                    <Row
                        checked={checked}
                        onChecked={onChecked}
                      expanded={expanded}
                      element={row}
                      onRowClick={onRowClick}
                    />
                  </div>
                );
              })}
            </ul>
          </li>
        );
      }
    } else {
      return (
        <li
        //   onClick={() => onRowClick(element.id)}
          className="border-r-2 border-Secondary-2"
        >
          {/* {element.id} */}
          <div className="focus:text-primary active:text-primary flex items-center px-2 relative">
            {/* <CheckBox checked={checked} title={element.id} onChecked={onChecked} element={element}/> */}
          </div>
        </li>
      );
    }
  };
  return (
    <>
      {hasChild()}
    </>
  );
}
