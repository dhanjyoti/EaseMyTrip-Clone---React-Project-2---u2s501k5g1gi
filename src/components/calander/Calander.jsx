import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calander = ({onChange,selected, customInput, className=""}) => {
  return (
    <DatePicker minDate={new Date()} selected={selected} onChange={onChange} customInput={customInput} wrapperClassName={className}/>
  );
};

export default Calander