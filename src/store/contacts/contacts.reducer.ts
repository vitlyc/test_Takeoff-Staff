import { CONTACTS_ACTION_TYPES } from "./contacts.types";
import { ContactsAction } from "./contacts.action";

export const CONTACTS_INITIAL_STATE = {
  contactsMap: [],
};

export const contactsReducer = (
  state = CONTACTS_INITIAL_STATE,
  action = {} as ContactsAction
) => {
  // const { type, payload } = action;

  switch (action.type) {
    case CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP:
      return { ...state, contactsMap: action.payload };
    case CONTACTS_ACTION_TYPES.DELETE_CONTACT:
      return { ...state, contactsMap: action.payload };
    case CONTACTS_ACTION_TYPES.EDIT_CONTACT:
      return { ...state, contactsMap: action.payload };
    default:
      return state;
  }
};
