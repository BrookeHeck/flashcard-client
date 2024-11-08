import Role from "./role";

export default class User {
  id: number;
  userId: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[]
  profileImageUrl: string;
  lastLoginDate: Date;
  dateJoined: Date;

  constructor(firstName: string, lastName: string, username: string, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
