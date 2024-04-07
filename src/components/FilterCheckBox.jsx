import React from 'react'

const FilterCheckBox = ({name, onChange}) => {
  return (
    <div>
        <label className='flex flex-row'>
            <input type='checkbox'  onChange={onChange}/>
            {name}
        </label>
    </div>
  )
}

export default FilterCheckBox