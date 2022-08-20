import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { contactsReducer } from "./contacts/contacts.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer,
});
