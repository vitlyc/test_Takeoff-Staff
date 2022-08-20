import "./contact-list.scss";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import { setContactsMap } from "../../store/contacts/contacts.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts } from "../../utils/Api";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contactsMap);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(contactsMap);

  useEffect(() => {
    const getContactsMap = async () => {
      const contactsMap = await getContacts();
      dispatch(setContactsMap(contactsMap));
    };
    getContactsMap();
    console.log(contacts);
  }, []);

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul className="contacts-container">
        {
          contacts.map((contact, index) => {
            return <Contact contact={contact} key={contact.id} />;
          })
          // console.log(contacts)
        }
      </ul>
    </div>
  );
};

export default ContactList;
