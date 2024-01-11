import React from "react";

function BusSeatIcon({size=12, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color || "#000"}
      version="1.1"
      viewBox="0 0 330 330"
      xmlSpace="preserve"
    >
      <path d="M315 0H15C6.716 0 0 6.716 0 15v300c0 8.284 6.716 15 15 15h300c8.284 0 15-6.716 15-15V15c0-8.284-6.715-15-15-15zm-15 300H30V30h270v270z"></path>
    </svg>
  );
}

export default BusSeatIcon;
