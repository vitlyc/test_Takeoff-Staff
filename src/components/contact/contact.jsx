import "./contact.scss";
import { BiTrashAlt, BiUserPlus, BiEditAlt, BiSave } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

const Contact = ({ contact }) => {
  const [isInputsDisabled, setInputsDisabled] = useState(true);
  const [inputs, setInputs] = useState(contact);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleEditContact = () => {
    setInputsDisabled(!isInputsDisabled);
    setInputs(contact);
    console.log("s");
  };

  const blockInputs = () => {
    setInputs(contact);
    setInputsDisabled(true);
  };

  const ref = useDetectClickOutside({ onTriggered: blockInputs });

  const handleSaveContact = () => {};

  return (
    <div className="contact-container" ref={ref}>
      <div className="fields">
        <input
          name="name"
          type="text"
          disabled={isInputsDisabled}
          value={inputs.name}
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="text"
          disabled={isInputsDisabled}
          value={inputs.email}
          onChange={handleInputChange}
        />
        <input
          name="phone"
          type="text"
          disabled={isInputsDisabled}
          value={inputs.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <BiEditAlt onClick={() => handleEditContact()} />
        <BiTrashAlt />
        {!isInputsDisabled ? <BiSave /> : ""}
      </div>
    </div>
  );
};
export default Contact;
