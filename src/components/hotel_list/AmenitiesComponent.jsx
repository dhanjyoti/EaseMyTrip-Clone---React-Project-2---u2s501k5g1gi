import React from "react";

const AmenitiesComponent = ({ facility, para }) => {
  console.log("hello");
  return (
    <li className="flex flex-row gap-2 w-[169px] text-sm basis-1/6">
      <img src={facility} />
      <p className="min-w-[169px]">{para}</p>
    </li>
  );
};

export default AmenitiesComponent;
