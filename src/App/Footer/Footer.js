import React from 'react';

import './Footer.scss';

const MOCK_LAST_SYNC_DATE = '2015-06-02 14:33:10';
const HELP_DESK_AVAILABLE_TIME = 'I-IV 8:00-18:00, V 8:00-16:45'

const Footer = () =>
<div className='footer'>
  <div className='left-container'>
    <div><a href='#'>Dashboard</a></div>
    <div><a href='#'>Contacts</a></div>
    <div><a href='#'>Notifications</a></div>
    <div className='copyright-line'>
      <i class="far fa-copyright copyright-icon"></i> 2015 Contactify
      <a href='#' className='about'>About</a>
      <a href='#' className='privacy'>Privacy</a>
    </div>
  </div>
  <div className='middle-container'>
    <div className='middle-inner-container'>
      <div className='center big-icon'><i class="fas fa-cloud-upload-alt"></i></div>
      <div className='center last-synced-container'>
        <div>Last synced:</div>
        <div>{MOCK_LAST_SYNC_DATE}</div>
      </div>
      <div className='center force-sync-line'>
        <i class="fas fa-sync-alt"></i>
        <a href='#'>Force sync</a>
      </div>
    </div>
    <div className='middle-inner-container'>
      <div className='center big-icon'><i class="fas fa-stethoscope"></i></div>
      <div className='help-desk-container'>
        <div>Help desk and Resolution center available:</div>
        <div>{HELP_DESK_AVAILABLE_TIME}</div>
      </div>
    </div>
  </div>
  <div className='right-container'>
      <div><a href='#'>Groups</a></div>
      <div><a href='#'>Frequently contacted</a></div>
      <div><a href='#'>Preferences</a></div>
      <div><a href='#'>Log out</a></div>
    </div>
</div>

export default Footer;