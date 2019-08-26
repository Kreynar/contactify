import React, { useState } from 'react';
import FilterBar from './FilterBar/FilterBar';
import UserCard from './UserCard/UserCard';
import UsersTable from './UsersTable/UsersTable';
import contacts from '../../contacts.json';
import './Contacts.scss';

const filterContacts = ({
  contacts,
  nameFilter,
  cityFilter,
  activeFilter
}) => contacts.filter(
  contact => (contact.name.toLowerCase().includes(nameFilter)
  && contact.city.toLowerCase().includes(cityFilter)
  && (!activeFilter || (!!contact.active === activeFilter)))
);

const Contacts = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [activeFilter, setActiveFilter] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(contacts[0].id);
  const selectedContact = contacts.find(
    contact => contact.id === selectedContactId
  );
  const setFilters = ({
    name,
    city,
    active
  }) => {
    setNameFilter(name);
    setCityFilter(city);
    setActiveFilter(active);
  };
  const filteredContacts = filterContacts({
    contacts,
    nameFilter,
    cityFilter,
    activeFilter
  });
  return (
    <div>
      <FilterBar onFilterClick={setFilters}/>
      <div className='users-view-container'>
        <div className='card-container'>
          <UserCard name={selectedContact.name}
                    surname={selectedContact.surname}
                    city={selectedContact.city}
                    phone={selectedContact.phone}
                    email={selectedContact.email}/>
        </div>
        <div className='table-container'>
          <UsersTable contacts={filteredContacts}
                      selectedContactId={selectedContactId}
                      onContactSelect={setSelectedContactId}/>
        </div>
      </div>
    </div>
  );
}

export default Contacts;