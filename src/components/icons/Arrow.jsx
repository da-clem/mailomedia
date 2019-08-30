import React from 'react'

export default function Arrow({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="48"
      viewBox="0 0 24 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon">
        <path
          id="Shape"
          d="M20 36L18.59 34.59L13 40.17L13 4L11 4L11 40.17L5.41 34.59L4 36L12 44L20 36Z"
          fill="#1C1C1C"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="4"
          y="4"
          width="16"
          height="40"
        >
          <path
            id="Shape_2"
            d="M20 36L18.59 34.59L13 40.17L13 4L11 4L11 40.17L5.41 34.59L4 36L12 44L20 36Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <g id="Color/Primary/Primary 1">
            <rect
              id="Color"
              x="42"
              y="-6"
              width="60"
              height="60"
              transform="rotate(90 42 -6)"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

