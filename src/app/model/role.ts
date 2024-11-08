import {ROLE} from "../enum/ROLE";

export default class Role {
  id: number;
  organizationId: number;
  organizationName: string;
  role: ROLE;
  userId: number;
}
