export enum USER_ACTION_TYPES {
  SET_CURRENT_USER = "user/SET_CURRENT_USER",
  EXIT_CURRENT_USER = "user/EXIT_CURRENT_USER",
}
export type User = {
  currentUser: {
    accessToken: string;
    user: {
      email: string;
      id: string;
    };
  };
};
