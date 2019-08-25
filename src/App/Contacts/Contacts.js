import React from 'react';
import FilterBar from './FilterBar/FilterBar';
import UserCard from './UserCard/UserCard';
import UsersTable from './UsersTable/UsersTable';
import './Contacts.scss';

const Contacts = () =>
<div>
  <FilterBar />
  <div className='users-view-container'>
    <div className='card-container'>
      <UserCard />
    </div>
    <div className='table-container'>
      <UsersTable />
    </div>
  </div>
</div>

export default Contacts;