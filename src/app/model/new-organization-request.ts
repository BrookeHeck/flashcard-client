import User from "./user";

export default class NewOrganizationRequest {
  id: number;
  organizationDisplayName: string;
  admin: User;
  timeOfInsert: Date;
}
