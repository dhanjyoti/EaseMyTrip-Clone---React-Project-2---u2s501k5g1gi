import React, { useState } from 'react';

const RadioOption = () => {
  const options = [
    { id: 1, label: 'Defence Forces' },
    { id: 2, label: 'Students' },
    { id: 3, label: 'Senior Citizens' },
    { id: 4, label: 'Doctors Nurses' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center space-x-[22px]">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-1">
          {/* The round radio button */}
          <input
            type="radio"
            id={`roundRadioButton${option.id}`}
            checked={selectedOption === option.id}
            onChange={() => handleOptionChange(option.id)}
            className="hidden"
          />
          <label
            htmlFor={`roundRadioButton${option.id}`}
            className="w-[17px] h-[17px] rounded-full border-[1px] border-white cursor-pointer flex items-center justify-center hover:bg-gray-100"
          >
            {/* Checkmark icon (hidden by default) */}
            <svg
              className={`w-[16px] h-[16px] text-[#2f81ed] ${selectedOption === option.id ? 'bg-white rounded-full' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
            </svg>
          </label>
          {/* Text next to the radio button */}
          <span className='text-white text-sm font-medium'>{option.label}</span>
        </div>
      ))}
    </div>
  )
}

export default RadioOption