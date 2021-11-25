import { IMember } from "../../models/Member";

export interface IProfilePictureModel {
  data: IMember;
  statusCode: number;
  message: string;
  error_message: string;
}
