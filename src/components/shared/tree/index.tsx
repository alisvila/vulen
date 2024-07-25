"use client";

import React, { useState } from "react";
import Row from "./Row";

export default function index() {
  const [expandedElements, setExpandedElements] = useState<Set<number>>(
    new Set()
  );
  const data: any = [
    {
      id: 1234,
      children: [
        {
          id: 122,
          value: false
        },
        {
          id: 2,
          value: false

        },
      ],
    },
    {
      id: 13,
    },
    {
      id: 24,
    },
    {
      id: 35,
      children: [
        {
          id: 0,
          children: [
            {
              id: 56,
            },
          ],
        },
      ],
    },
  ];
  const [checked, setChecked] = useState(data);

  const onChecked = (element: any) => {
    console.log(element)
    console.log(checked)
    setChecked({...checked, [element.id]: !element.value})
  };

  const onRowClick = (value: any) => {
    const tempSet = new Set(expandedElements);

    if (expandedElements.has(value)) {
      tempSet.delete(value);
    } else {
      tempSet.add(value);
    }
    setExpandedElements(tempSet);
  };

  const isChecked = (id: number) => {
    const thisIsInObject: any = data.find((item: any) => item.id === id)
    const thisIsInState: any = Object.values(checked).find((item: any) => item?.id === id)
    return thisIsInObject?.value || thisIsInState?.value
  };

  return (
    <ul className="hover:bg-secondary-100">
      {data.map((row: any) => {
        return (
          <Row
            expanded={expandedElements}
            checked={isChecked(row.id)}
            element={row}
            onRowClick={onRowClick}
            onChecked={onChecked}
          />
        );
      })}
    </ul>
  );
}
