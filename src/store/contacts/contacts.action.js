import CONTACTS_ACTION_TYPES from "./contacts.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setContactsMap = (contactsMap) => {
  console.log(contactsMap);
  return createAction(CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP, contactsMap);
};

export const removeContactFromMap = (contactsMap, contactToRemove) => {
  const newContacts = removeContact(contactsMap, contactToRemove);
  return createAction(CONTACTS_ACTION_TYPES.DELETE_CONTACT, newContacts);
};

export const editContactMap = (contactsMap, contactToEdit) => {
  const newContacts = editContact(contactsMap, contactToEdit);
  return createAction(CONTACTS_ACTION_TYPES.EDIT_CONTACT, newContacts);
};

const removeContact = (contactsMap, contactToRemove) => {
  return contactsMap.filter((contact) => contact.id !== contactToRemove.id);
};

const editContact = (contactsMap, contactToEdit) => {
  const editedContacts = contactsMap.map((contact) => {
    if (contact.id === contactToEdit.id) {
      return { ...contact, ...contactToEdit };
    } else return contact;
  });
  return editedContacts;
};
