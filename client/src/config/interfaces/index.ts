export interface IUserRegistration {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ITasksType {
  id: string;
  title: string;
  done: boolean;
  created_at: string;
  updated_at: string;
}

export interface ITasksUpdate {
  id: string;
  title?: string;
  done?: boolean;
}
