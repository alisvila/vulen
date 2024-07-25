import React from 'react'

export default function icon({onClick, className}: {onClick: any, className?: string}) {
  return (
    <div onClick={onClick} className={`transition-transform duration-150 p-[1px] rotate-180 rounded bg-Secondary text-Primary ${className}`}>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className={`h-4 w-4`}>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  )
}
