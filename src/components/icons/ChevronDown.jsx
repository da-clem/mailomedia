import React from "react";

export default function ChevronDown({ className, onClick }) {
  return (
    <svg
      className={className}
      width="31"
      height="19"
      viewBox="0 0 31 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M30.6985 3.9873L27.1985 0.487305L15.6985 11.9873L4.19849 0.487305L0.698486 3.9873L15.6985 18.9873L30.6985 3.9873Z"
        fill="#242635"
      />
    </svg>
  );
}
