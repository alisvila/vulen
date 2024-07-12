import React from 'react'

export default function icon({className}: {className?: string}) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className={`h-2 w-2 ${className}`}>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
  )
}
