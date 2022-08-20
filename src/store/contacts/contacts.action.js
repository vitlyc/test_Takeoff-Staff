import CONTACTS_ACTION_TYPES from "./contacts.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setContactsMap = (contactsMap) => {
  console.log(contactsMap);
  return createAction(CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP, contactsMap);
};

export const removeContactFromMap = (contactsMap, contactToRemove) => {
  const newContacts = removeContact(contactsMap, contactToRemove);
  console.log(newContacts);
  return createAction(CONTACTS_ACTION_TYPES.DELTE_CONTACT, newContacts);
};

const removeContact = (contactsMap, contactToRemove) => {
  return contactsMap.filter((contact) => contact.id !== contactToRemove.id);
};
