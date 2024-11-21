import React, { useState, useEffect } from "react";

const ContactForm = ({ onAddContact, onUpdateContact, editContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setPhone(editContact.phone);
      setEmail(editContact.email);
      setAddress(editContact.address);
    } else {
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editContact) {
      onUpdateContact({
        ...editContact,
        name,
        phone,
        email,
        address,
      });
    } else {
      onAddContact({
        id: Date.now(), 
        name,
        phone,
        email,
        address,
      });
    }

    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 shadow-sm bg-light rounded">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        {editContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
};

export default ContactForm;
