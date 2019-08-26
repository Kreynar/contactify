import React from 'react';
import './Input.scss';

const Input = ({
  placeholder, 
  width, 
  value, 
  onChange
}) =>
<div className='input-container'>
  <div className='input-border'>
    <input type='text'
           value={value}
           className='input'
           onChange={event => onChange(event.target.value)}
           placeholder={placeholder}
           style={{ width: width || '' }}/>
  </div>
</div>

export default Input;
