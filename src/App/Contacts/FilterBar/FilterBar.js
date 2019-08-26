import React, { useRef } from 'react';
import Input from '../../widgets/Input/Input';
import './FilterBar.scss';

const FilterBar = ({
  // nameFilter,
  // cityFilter,
  // activeFilter,
  // onNameFilterChange,
  // onCityFilterChange,
  // onActiveFilterChange,
  onFilterClick
}) => {
  const nameRef = useRef('');
  const cityRef = useRef('');
  const activeRef = useRef(false);
  return (
    <div className='filter-bar-container'>
      <div className='name-input-container'>
        <Input placeholder='Name'
               value={nameRef.current.value}
               onChange={value => nameRef.current = value}/>
      </div>
      <div className='city-input-container'>
        <Input placeholder='City'
               width={150}
               value={cityRef.current.value}
               onChange={value => cityRef.current = value}/>
      </div>
      <div className='active-checkbox-container'>
        <label>
          <input type="checkbox"
                 defaultChecked={activeRef.current.value}
                 onChange={() => activeRef.current = !activeRef.current}/>
          Show active
        </label>
      </div>
      <div className='filter-button-container'>
    <button onClick={() => onFilterClick({
        name: nameRef.current,
        city: cityRef.current,
        active: activeRef.current
      })} className='filter-button'>
      FILTER
    </button>
  </div>
  <div className='add-contract-button-container'>
    <button className='add-contract-button'>
      <div className='plus-circle-container'>
        <div className='plus-circle-inner-container'>
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <div className='add-contract-text-container'>
        ADD NEW CONTRACT
      </div>
    </button>
  </div>
</div>
  );
}

export default FilterBar;