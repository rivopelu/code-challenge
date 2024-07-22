import ErrorService from "../service/ErrorService";
import { HttpService } from "../service/HttpService";

export default class BaseActions {
  get errorService(): ErrorService {
    return this._errorService;
  }

  get httpService(): HttpService {
    return this._httpService;
  }

  private _httpService: HttpService = new HttpService();
  private _errorService: ErrorService = new ErrorService();
}
