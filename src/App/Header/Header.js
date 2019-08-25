import React from 'react';
import * as constants from '../constants';
import Input from '../widgets/Input/Input'
import './Header.scss';

const CONTACTIFY_LOGO_SRC = process.env.PUBLIC_URL + '/contactify-logo.png';
const CONTACTIFY_LOGO_ALT = 'Contactify';

const Header = ({ selectedTab, onTabSelect }) =>
<div className='header-container'>
  <div className='logo-container'>
    <img src={CONTACTIFY_LOGO_SRC} alt={CONTACTIFY_LOGO_ALT} className='logo' /> 
  </div>
  <div className='tabs-container'>
    <div className='tabs-backround'>
      <button className={`tab left-tab ${constants.DASHBOARD_TAB === selectedTab ? 'selected-tab-left' : null}`}
              onClick={() => onTabSelect(constants.DASHBOARD_TAB)}>
        DASHBOARD
      </button>
      <button className={`tab middle-tab ${constants.CONTACTS_TAB === selectedTab ? 'selected-tab' : null}`}
              onClick={() => onTabSelect(constants.CONTACTS_TAB)}>
        CONTACTS
      </button>
      <button className={`tab right-tab ${constants.NOTIFICATIONS_TAB === selectedTab ? 'selected-tab-right' : null}`}
              onClick={() => onTabSelect(constants.NOTIFICATIONS_TAB)}>
        NOTIFICATIONS
      </button>
    </div>
  </div>
  <div className='search-container'>
    <Input placeholder='Search' />
    <button className='search-button'><i class="fas fa-search"></i></button>
    
  </div>
</div>

export default Header;