import "./contact-list.scss";
import Contact from "../contact/contact";

const contact = {
  name: "Bob",
  email: "bob@mail.com",
  phone: "9229876",
};

const ContactList = () => {
  return (
    <div className="contacts">
      <h1>contacts</h1>
      <ul className="contacts-container">
        <Contact contact={contact} />
      </ul>
    </div>
  );
};

export default ContactList;
