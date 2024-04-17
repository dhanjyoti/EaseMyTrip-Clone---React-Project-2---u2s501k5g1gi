import React from "react";

const FilterCheckBox = ({ name, onChange }) => {
  return (
    <div>
      <label className="flex flex-row gap-2 py-[1px]">
        <input type="checkbox" onChange={onChange} />
        {name}
      </label>
    </div>
  );
};

export default FilterCheckBox;
