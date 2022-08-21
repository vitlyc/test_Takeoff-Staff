export enum CONTACTS_ACTION_TYPES {
  SET_CONTACTS_MAP = "contacts/SET_CONTACTS_MAP",
  DELETE_CONTACT = "contacts/DELETE_CONTACT",
  EDIT_CONTACT = "contacts/EDIT_CONTACT",
}

export type Contacts = {
  id: string;
  name: string;
  email: string;
  phone: string;
}[];

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

// { id: number, name: string }[]
