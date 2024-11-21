import React, { useState } from "react";
import Header from "./Components//Header";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import contactsData from "./Data/contactsData";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-4">
          <ContactList
            contacts={contacts}
            onSelectContact={setSelectedContact}
            onAddContact={handleAddContact}
            onUpdateContact={handleUpdateContact}
          />
        </div>
        <div className="col-md-4">
          {selectedContact ? (
            <ContactDetails contact={selectedContact} />
          ) : (
            <p>Select a contact to view details</p>
          )}
        </div>
        <div className="col-md-4">
          <p>Click the Add contact + button to add a new contact or click edit existing ones.</p>
        </div>
      </div>
    </div>
  );
};

export default App;

