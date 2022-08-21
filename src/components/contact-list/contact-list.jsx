import "./contact-list.scss";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import SaveContactForm from "../save-contact-form/save-contact-form";
import { setContactsMap } from "../../store/contacts/contacts.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts } from "../../utils/Api";
import { createContact } from "../../utils/Api";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contactsMap);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const Bearer = currentUser.accessToken;

  console.log(Bearer);

  const getContactsMap = async () => {
    const contactsMap = await getContacts(Bearer);
    dispatch(setContactsMap(contactsMap));
  };
  useEffect(() => {
    getContactsMap();
  }, []);

  const handleCreateContact = (contact) => {
    createContact(contact, Bearer);
  };

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <SaveContactForm
        handleCreateContact={handleCreateContact}
        getContactsMap={getContactsMap}
      />
      <ul className="contacts-container">
        {contacts.map((contact, index) => {
          return <Contact contact={contact} key={contact.id} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
