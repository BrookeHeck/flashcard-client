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
}
