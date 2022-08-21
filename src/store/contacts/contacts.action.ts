import { CONTACTS_ACTION_TYPES, Contacts, Contact } from "./contacts.types";
import { createAction, ActionWithPayload } from "../../utils/reducer/reducer.utils";

export type SetContactsMap = ActionWithPayload<
  CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP,
  Contacts
>;
export type RemoveContactFromMap = ActionWithPayload<
  CONTACTS_ACTION_TYPES.DELETE_CONTACT,
  Contacts
>;
export type EditContactMap = ActionWithPayload<
  CONTACTS_ACTION_TYPES.EDIT_CONTACT,
  Contacts
>;

export type ContactsAction = SetContactsMap | RemoveContactFromMap | EditContactMap;

export const setContactsMap = (contactsMap: Contacts): SetContactsMap => {
  return createAction(CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP, contactsMap);
};

export const removeContactFromMap = (
  contactsMap: Contacts,
  contactToRemove: Contact
): RemoveContactFromMap => {
  const newContacts = removeContact(contactsMap, contactToRemove);
  return createAction(CONTACTS_ACTION_TYPES.DELETE_CONTACT, newContacts);
};

export const editContactMap = (
  contactsMap: Contacts,
  contactToEdit: Contact
): EditContactMap => {
  const newContacts = editContact(contactsMap, contactToEdit);
  return createAction(CONTACTS_ACTION_TYPES.EDIT_CONTACT, newContacts);
};

const removeContact = (contactsMap: Contacts, contactToRemove: Contact) => {
  return contactsMap.filter((contact: Contact) => contact.id !== contactToRemove.id);
};

const editContact = (contactsMap: Contacts, contactToEdit: Contact) => {
  const editedContacts = contactsMap.map((contact: Contact) => {
    if (contact.id === contactToEdit.id) {
      return { ...contact, ...contactToEdit };
    } else return contact;
  });
  return editedContacts;
};
