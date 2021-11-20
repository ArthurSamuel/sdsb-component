import { IMember } from "../../models/Member";
interface IDataProfile {
  id: number;
  username: string;
  type: string;
  member_id: number;
  customer_id: number;
  name: string;
  email: string;
  image: string;
  description: string;
  status: string;
  pin: string;
  member: IMember;
  created_by: number;
  updated_by: number;
  deleted_by: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

export interface IProfileModel {
  data: IDataProfile;
  statusCode: number;
  message: string;
  error_message: string;
}
