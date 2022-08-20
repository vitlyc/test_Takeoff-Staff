import CONTACTS_ACTION_TYPES from "./contacts.types";

export const CONTACTS_INITIAL_STATE = {
  contactsMap: [],
};

export const contactsReducer = (state = CONTACTS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CONTACTS_ACTION_TYPES.SET_CONTACTS_MAP:
      return { ...state, contactsMap: payload };
    case CONTACTS_ACTION_TYPES.DELTE_CONTACT:
      return { ...state, contactsMap: payload };
    default:
      return state;
  }
};
