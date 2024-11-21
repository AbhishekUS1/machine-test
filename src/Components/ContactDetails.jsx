import React from "react";

const ContactDetails = ({ contact }) => {
  return (
    <div className="card p-3 shadow-sm">
      <h4 className="text-center">Contact Details</h4>
      <div className="mt-3">
        <p><strong>Name:</strong> {contact.name}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Address:</strong> {contact.address}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
