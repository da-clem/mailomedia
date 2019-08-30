import React from "react";

export default function Marker() {
  return (
    <svg
      width="38"
      height="59"
      viewBox="0 0 38 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.9171 52.3337C26.5922 52.3337 32.8141 47.4834 32.8141 41.5003C32.8141 35.5172 26.5922 30.667 18.9171 30.667C11.2419 30.667 5.02002 35.5172 5.02002 41.5003C5.02002 47.4834 11.2419 52.3337 18.9171 52.3337Z"
          stroke="#29ABE0"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.7422 0.583008C10.0535 0.583008 3.00586 7.76738 3.00586 16.6247C3.00586 28.6559 18.7422 46.4163 18.7422 46.4163C18.7422 46.4163 34.4786 28.6559 34.4786 16.6247C34.4786 7.76738 27.431 0.583008 18.7422 0.583008ZM18.7422 22.3538C15.6399 22.3538 13.1221 19.7872 13.1221 16.6247C13.1221 13.4622 15.6399 10.8955 18.7422 10.8955C21.8445 10.8955 24.3624 13.4622 24.3624 16.6247C24.3624 19.7872 21.8445 22.3538 18.7422 22.3538Z"
        fill="#29ABE0"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0.52002"
          y="28.167"
          width="36.7941"
          height="30.6667"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
