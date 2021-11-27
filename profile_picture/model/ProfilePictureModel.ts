interface IDataProfileImage {
  id: number;
  username: string;
  type: string;
  member_id: number;
  customer_id: number;
  name: string;
  email: string;
  image: string;
  member: {
    ktp_image: string;
    profile_image: string;
  };
}
export interface IProfilePictureModel {
  data: IDataProfileImage;
  statusCode: number;
  message: string;
  error_message: string;
}
