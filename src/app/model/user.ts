import {ROLE} from "../enum/ROLE";

export default class User {
  id: number;
  userId: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: ROLE;
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
