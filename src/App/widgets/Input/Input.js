import React from 'react';
import './Input.scss';

const Input = ({ placeholder, width }) =>
<div className='input-container'>
  <div className='input-border'>
    <input type='text' class='input' placeholder={placeholder} style={{ width: width || '' }} />
  </div>
</div>

export default Input;
