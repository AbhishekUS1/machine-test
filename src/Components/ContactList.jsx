import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactList = ({ contacts,
  onSelectContact,
  onAddContact,
  onUpdateContact,
  onDeleteContact }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editContact, setEditContact] = useState(null); 
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleEditClick = (contact) => {
    setEditContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditContact(null);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
        <h5 className="m-0">All Contacts</h5>
        <button
          className="btn btn-light btn-sm"
          onClick={() => {
            setEditContact(null); 
            setShowModal(true);
          }}
        >
          + Add Contact
        </button>
      </div>
      <div className="p-3">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search Contact"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="list-group">
  {filteredContacts.map((contact) => (
    <li
      key={contact.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => onSelectContact(contact)}
      >
        <i className="bi bi-person-circle me-2"></i>
        {contact.name}
      </span>
      <div>
        <span className="me-3">{contact.phone}</span>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={() => handleEditClick(contact)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
      </div>

            {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editContact ? "Edit Contact" : "Add Contact"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <ContactForm
                  onAddContact={(newContact) => {
                    onAddContact(newContact);
                    closeModal();
                  }}
                  onUpdateContact={(updatedContact) => {
                    onUpdateContact(updatedContact);
                    closeModal();
                  }}
                  editContact={editContact}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
