import {USER_STATUS} from "../enum/USER_STATUS";

export default class UserDetailsForRole {
  roleId: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  dateAssignedRole: string;
  userStatus: USER_STATUS
}
