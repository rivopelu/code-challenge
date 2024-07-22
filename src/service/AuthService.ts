import { IResLogin } from "../models/IResLogin";
import { ROUTES } from "../routes/routes";

export default class AuthServices {
  public successLogin(data: IResLogin): void {
    localStorage.setItem("access_token", data.access_token);
    window.location.replace(ROUTES.HOME());
  }

  public async Logout() {
    localStorage.clear();
    window.location.replace(ROUTES.LOGIN());
  }

  public authCheck(): boolean {
    return !!localStorage.getItem("access_token");
  }
}
