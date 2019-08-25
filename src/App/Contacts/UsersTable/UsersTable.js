import React from 'react';
import './UsersTable.scss';

const UsersTable = () =>
<div className='users-table-container'>
  <table className="users-table">
    <tr className='table-header'>
      <th className='name-header'>Name</th>
      <th className='surname-header'>Surname</th>
      <th className='city-header'>City</th>
      <th className='email-header'>Email</th>
      <th className='phone-header'>Phone</th>
      <th className='edit-header'></th>
    </tr>
  </table>
</div>

export default UsersTable;