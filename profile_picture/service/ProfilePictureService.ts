import { Request } from "../../../../utils/Http";
import { IProfilePictureModel } from "../model/ProfilePictureModel";

export default class ProfilePictureService {
  public async EditProfilePicture(
    nama: string,
    email: string,
    phone: number,
    image: any
  ): Promise<IProfilePictureModel> {
    const results = await Request({
      url: "/profile",
      method: "POST",
      data: {
        nama,
        email,
        no_telepon: phone,
        image,
      },
    });
    return results;
  }
}
