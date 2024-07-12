"use client"

import React, { useState } from "react";
import Icon from "./icon";
import Row from "./Row";

export default function index() {
  const [expandedElements, setExpandedElements] = useState(new Set());

  const data: any = [
    {
      id: 0,
      children: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 4,
          children: [
            {
              id: 5,
            },
          ],
        },
      ],
    },
  ];

  const onRowClick = (value: any) => {
    setExpandedElements((prev) => new Set(prev.add(value)));
  };

  return (
    <ul className="hover:bg-secondary-100 relative border-l-4 border-dotted border-indigo-500">
      {data.map((row: any) => {
        return (<Row element={row} onClick={onRowClick}/>)
      })}
      {/* <Row onClick={onRowClick} /> */}
      <li className="px-2">Two</li>
      <li className="">
        <a
          data-twe-collapse-init
          href="#collapseThree"
          role="button"
          aria-expanded="false"
          aria-controls="collapseThree"
          className="focus:text-primary active:text-primary flex items-center px-2"
        >
          <Icon className="absolute left-[-4px]" />
          Three
        </a>
        <ul
          className="!visible hidden"
          id="collapseThree"
          data-twe-collapse-item
        >
          <li className="hover:bg-secondary-100 ml-4 px-2">Second-one</li>
          <li className="hover:bg-secondary-100 ml-4 px-2">Second-two</li>
          <li className="relative ml-4">
            <a
              data-twe-collapse-init
              href="#collapseSecondThree"
              role="button"
              aria-expanded="false"
              aria-controls="collapseSecondThree"
              className="hover:bg-secondary-100 focus:text-primary active:text-primary flex items-center px-2"
            >
              <Icon />
              Second-three
            </a>
            <ul
              className="!visible hidden"
              id="collapseSecondThree"
              data-twe-collapse-item
            >
              <li className="ml-4 px-2">
                <a
                  data-twe-collapse-init
                  href="#collapseThirdOne"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseThirdOne"
                  className="hover:bg-secondary-100 focus:text-primary active:text-primary flex items-center px-2"
                >
                  <Icon />
                  Third-one
                </a>
                <ul
                  className="!visible hidden"
                  id="collapseThirdOne"
                  data-twe-collapse-item
                >
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-one
                  </li>
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-two
                  </li>
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-three
                  </li>
                </ul>
              </li>
              <li className="hover:bg-secondary-100 ml-4 px-2">Third-two</li>
              <li className="ml-4">
                <a
                  data-twe-collapse-init
                  href="#collapseThirdThree"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseThirdThree"
                  className="hover:bg-secondary-100 focus:text-primary active:text-primary flex items-center px-2"
                >
                  <Icon />
                  Third-three
                </a>
                <ul
                  className="!visible hidden"
                  id="collapseThirdThree"
                  data-twe-collapse-item
                >
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-one
                  </li>
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-two
                  </li>
                  <li className="hover:bg-secondary-100 ml-4 px-2">
                    Fourth-three
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
