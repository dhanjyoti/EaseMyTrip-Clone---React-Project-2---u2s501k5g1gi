import React from "react";
import * as CB from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const CheckBox = ({ label }) => (
  <div className="flex items-center">
    <CB.Root
      className="border border-gray-300 flex h-[18px] w-[18px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none"
      id={label}
    >
      <CB.Indicator className="text-violet11">
        <CheckIcon />
      </CB.Indicator>
    </CB.Root>
    <label
      className="pl-[15px] text-sm leading-none text-black"
      htmlFor={label}
    >
      {label}
    </label>
  </div>
);

export default CheckBox;
