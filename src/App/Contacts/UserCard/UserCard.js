import React, { memo } from 'react';
import './UserCard.scss';

const USER_PIC_SRC = process.env.PUBLIC_URL + 'userpic.jpg';

const UserCard = ({
  name,
  surname,
  city,
  email,
  phone
}) => 
<div className='user-card-container'>
  <img src={USER_PIC_SRC} alt="Users's photo" className='user-photo' />
  <div className='user-details-container'>
    <div className='key-value-container'>
      <div className='key'>Name:</div>
      <div className='value'>{name}</div>
    </div>
    <div className='key-value-container'>
      <div className='key'>Surname:</div>
      <div className='value'>{surname}</div>
    </div>
    <div className='key-value-container'>
      <div className='key'>City:</div>
      <div className='value'>{city}</div>
    </div>
    <div className='key-value-container'>
      <div className='key'>Email:</div>
      <div className='value'>
        <a href={`mailto: ${email}`} className='email'>{email}</a>
      </div>
    </div>
    <div className='key-value-container'>
      <div className='key'>Phone:</div>
      <div className='value'>{phone}</div>
    </div>
  </div>
</div>

export default memo(UserCard);