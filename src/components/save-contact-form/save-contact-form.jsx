import "./save-contact-form.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useState, useEffect, useRef } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
};

const SaveContactForm = ({ handleCreateContact, getContactsMap }) => {
  const [inputs, setInputs] = useState(INITIAL_STATE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const resetForm = () => setInputs(INITIAL_STATE);

  const idContact = new Date().getTime();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const newContact = { ...inputs, id: idContact };
    handleCreateContact(newContact);
    resetForm();
    getContactsMap();
  };

  return (
    <div className="save-form">
      <form onSubmit={handleSubmitForm}>
        <div className="fields">
          <input
            name="name"
            type="text"
            required
            value={inputs.name}
            onChange={handleInputChange}
            placeholder="name"
          />
          <input
            name="email"
            type="text"
            required
            value={inputs.email}
            onChange={handleInputChange}
            placeholder="email"
          />
          <input
            name="phone"
            type="text"
            required
            value={inputs.phone}
            onChange={handleInputChange}
            placeholder="phone"
          />
        </div>
        <Button type="submit">Save Contact</Button>
      </form>
    </div>
  );
};
export default SaveContactForm;
