import "./contact-list.scss";
import Contact from "../contact/contact";

const ContactList = () => {
  return (
    <div className="contacts">
      <h1>contacts</h1>
      <ul className="contacts-container">
        <Contact />
      </ul>
    </div>
  );
};

export default ContactList;
