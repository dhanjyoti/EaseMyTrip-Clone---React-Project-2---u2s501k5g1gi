import React from "react";
import Accordion from "../accordian/Accordian";
import CheckBox from "../checkbox/CheckBox";

const SideBarCollapse = ({ title, items, defaultOpen }) => {
  return (
    <Accordion
      defaultOpen={defaultOpen}
      value={"sidebar"}
      title={title}
      content={
        <div className="flex flex-col gap-3">
          {items?.map((item) => (
            <CheckBox key={item.label} label={item.label} />
          ))}
        </div>
      }
    />
  );
};

export default SideBarCollapse;
