import {USER_STATUS} from "../enum/USER_STATUS";

export default class UserDetailsForRole {
  roleId: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  dateAssignedRole: string;
  userStatus: USER_STATUS


  constructor(roleId: number, userId: number, firstName: string, lastName: string, email: string, dateAssignedRole: string, userStatus: USER_STATUS) {
    this.roleId = roleId;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateAssignedRole = dateAssignedRole;
    this.userStatus = userStatus;
  }
}
