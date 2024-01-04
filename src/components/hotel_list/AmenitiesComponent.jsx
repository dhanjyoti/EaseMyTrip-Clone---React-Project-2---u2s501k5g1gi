import React from "react";

const AmenitiesComponent = ({ facility, para }) => {
  console.log("hello");
  return (
    <ul>
      <li className="flex flex-row">
        <img src={facility} />
        <p>{para}</p>
      </li>
    </ul>
  );
};

export default AmenitiesComponent;
