import React, { useState } from 'react';
import Footer from './Footer/Footer'
import Header from './Header/Header';
import Contacts from './Contacts/Contacts';
import * as constants from './constants';
import './App.scss';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(constants.CONTACTS_TAB);
  return (
    <div className="main-background">
      <Header selectedTab={selectedTab} onTabSelect={setSelectedTab}/>
      <Contacts />
      <Footer />
    </div>
  )
}

export default App;
