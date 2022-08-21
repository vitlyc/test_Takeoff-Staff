import { USER_ACTION_TYPES, User } from "./user.types";
import {
  createAction,
  ActionWithPayload,
  Action,
} from "../../utils/reducer/reducer.utils";

export type ExitCurrentUser = Action<USER_ACTION_TYPES.EXIT_CURRENT_USER>;
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>;

export type UserAction = ExitCurrentUser | SetCurrentUser;

export const setCurrentUser = (user: User): SetCurrentUser =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const exitCurrentUser = (): ExitCurrentUser =>
  createAction(USER_ACTION_TYPES.EXIT_CURRENT_USER);
