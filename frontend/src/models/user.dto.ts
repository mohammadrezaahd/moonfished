export interface IUserBase {
  username: string;
  email: string;
}

export interface IUserGet extends IUserBase {
  id: number;
}

export interface IUserCreate extends IUserBase {
  password: string;
  repeat_password: string;
}
