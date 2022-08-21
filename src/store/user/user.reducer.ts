import { USER_ACTION_TYPES } from "./user.types";
import { UserAction } from "./user.action";
import { User } from "./user.types";

export type UserState = {
  currentUser: User | null;
};

export const USER_INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {} as UserAction) => {
  // const { type, payload } = action;

  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case USER_ACTION_TYPES.EXIT_CURRENT_USER:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
