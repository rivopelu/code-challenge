import { toast } from "react-toastify";
import AuthServices from "./AuthService";
import axios, { AxiosError } from "axios";

export default class ErrorService {
  private authService = new AuthServices();

  private handleSnackbar(message: string) {
    toast.error(message);
  }

  private handleSnackbarSuccess(message: string) {
    toast.success(message);
  }

  public fetchApiError(error: AxiosError<any>) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      this.authService.Logout().then();
    } else {
      let message;

      if (axios.isAxiosError(error) && error.response) {
        if (error?.response?.status && error?.response?.status >= 500) {
          message = "Terjadi Kesalahan Pada Sistem";
        } else {
          message = error?.response?.data?.errors?.message
            ? error?.response?.data?.errors?.message
            : "Terjadi Kesalahan Pada Sistem";
        }
      } else message = String(error);

      return this.handleSnackbar(message);
    }
  }

  public fetchApiSuccess(message: string) {
    return this.handleSnackbarSuccess(message ? message : "Success");
  }
}
