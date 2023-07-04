export type TLoginUser = {
  login: string;
  mail: string;
};
export type TUser = {
  login: string;
  mail: string;
  id: string;
  campains?: string[];
};
export type State = TUser;
