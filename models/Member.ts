export interface IMember {
  id: number;
  code: string;
  parent_id: number;
  type: string;
  name: string;
  address: string;
  city: string;
  zip_code: string;
  province: string;
  sub_district: string;
  urban_village: string;
  phone: string;
  ktp: string;
  npwp: string;
  email: string;
  username: string;
  ktp_image: string;
  profile_image: string;
  bank_name: string;
  bank_branch: string;
  bank_acc: string;
  description: string;
  status: string;
  created_by: number;
  updated_by: number;
  deleted_by: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

export interface IProfileModel {
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
  deleted_at: null;
  created_at: string;
  updated_at: string;
}

export interface IProfile {
  data: IProfileModel
}