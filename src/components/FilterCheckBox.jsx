import React from 'react'

const FilterCheckBox = ({name}) => {
  return (
    <div>
        <label className='flex flex-row'>
            <input type='checkbox'  />
            {name}
        </label>
    </div>
  )
}

export default FilterCheckBox