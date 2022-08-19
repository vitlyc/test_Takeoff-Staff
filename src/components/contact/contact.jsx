import "./contact.scss";
import { BiTrashAlt, BiUserPlus, BiEditAlt, BiSave } from "react-icons/bi";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = () => {};

  const clickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div className="contact-container">
      <div className="fields">
        <input type="text" disabled={isEdit} value="name" onChange={handleInputChange} />
        <input type="text" disabled={isEdit} value="name" onChange={handleInputChange} />
      </div>
      <div className="buttons">
        <BiEditAlt />
        <BiTrashAlt />
        <BiSave />
      </div>
    </div>
  );
};
export default Contact;
