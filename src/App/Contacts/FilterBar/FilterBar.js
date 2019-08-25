import React from 'react';
import Input from '../../widgets/Input/Input';
import './FilterBar.scss';

const FilterBar = () =>
<div className='filter-bar-container'>
  <div className='name-input-container'>
    <Input placeholder='Name' />
  </div>
  <div className='city-input-container'>
    <Input placeholder='City' width={150} />
  </div>
  <div className='active-checkbox-container'>
    <label>
      <input type="checkbox" name="active" value="active" />
      Show active
    </label>
  </div>
  <div class='filter-button-container'>
    <button class='filter-button'>FILTER</button>
  </div>
  <div className='add-contract-button-container'>
    <button className='add-contract-button'>
      <div className='plus-circle-container'>
        <div className='plus-circle-inner-container'>
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
      <div className='add-contract-text-container'>
        ADD NEW CONTRACT
      </div>
    </button>
  </div>
</div>

export default FilterBar;