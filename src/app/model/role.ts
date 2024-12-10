import {ROLE} from "../enum/ROLE";

export default class Role {
  id: number;
  organizationId: number;
  organizationName: string;
  role: ROLE;
  userId: number;


  constructor(organizationId: number, role: ROLE, userId: number) {
    this.organizationId = organizationId;
    this.role = role;
    this.userId = userId;
  }
}
