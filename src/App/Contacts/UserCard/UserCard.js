import React from 'react';
import './UserCard.scss';

const USER_PIC_SRC = process.env.PUBLIC_URL + 'userpic.jpg';

const UserCard = () => 
<div className='user-card-container'>
  <img src={USER_PIC_SRC} alt="Users's photo" className='user-photo' />
  <div className='user-details-container'>
    <div className='keys-container'>
      <div className='key-container'>Name:</div>
      <div className='key-container'>Surname:</div>
      <div className='key-container'>City:</div>
      <div className='key-container'>Email:</div>
      <div className='key-container'>Phone:</div>
    </div>
    <div className='values-container'>
      <div className='value-container'></div>
    </div>
  </div>
</div>

export default UserCard;