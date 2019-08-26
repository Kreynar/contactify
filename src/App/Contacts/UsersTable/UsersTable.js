import React, { memo } from 'react';
import './UsersTable.scss';

const UsersTable = ({
  contacts,
  selectedContactId,
  onContactSelect
}) =>
<div className='users-table-container'>
  <div className="users-table">
    <div className='table-headers'>
      <div className='name-header'>Name</div>
      <div className='surname-header'>Surname</div>
      <div className='city-header'>City</div>
      <div className='email-header'>Email</div>
      <div className='phone-header'>Phone</div>
      <div className='edit-header'></div>
    </div>
    {contacts.map(contact =>
      <div className={`table-row ${selectedContactId === contact.id ? 'table-row-highlighted' : null}`}
           onClick={() => onContactSelect(contact.id)}
           key={contact.id}>
        <div className='name-cell'>
          <div className='active'>
            {contact.active
            ? <i className="far fa-eye"></i>
            : <i className="far fa-eye-slash"></i>}
          </div>
          {contact.name}
        </div>
        <div className='surname-cell'>{contact.surname}</div>
        <div className='city-cell'>{contact.city}</div>
        <div className='email-cell'>{contact.email}</div>
        <div className='phone-cell'>{contact.phone}</div>
        <div className='edit-cell'>
          <div className={`util-container ${selectedContactId === contact.id && 'util-container-highlighted'}`}>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className={`util-container ${selectedContactId === contact.id && 'util-container-highlighted'}`}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

export default memo(UsersTable);