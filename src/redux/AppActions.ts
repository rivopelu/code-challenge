import { Dispatch } from "@reduxjs/toolkit";
import { ENDPOINT } from "../constants/endpoint";
import { IReqLogin } from "../models/IReqLogin";
import { IReqRegister } from "../models/IReqRegister";
import BaseActions from "./BaseActions";
import { AppSlice } from "./AppReducers";
import { BaseResponse } from "../models/IResponse";
import { IResGetMe } from "../models/IResGetMe";

export class AppActions extends BaseActions {
  private actions = AppSlice.actions;
  register(data: IReqRegister) {
    return async () => {
      return this.httpService.POST(ENDPOINT.REGISTER(), data);
    };
  }
  login(data: IReqLogin) {
    return async () => {
      return this.httpService.POST(ENDPOINT.LOGIN(), data);
    };
  }
  getMeData() {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.getMe({ loading: true, data: undefined }));
      await this.httpService
        .GET(ENDPOINT.GET_ME())
        .then((res: BaseResponse<IResGetMe>) => {
          dispatch(
            this.actions.getMe({ loading: false, data: res.data.response_data })
          );
        })
        .catch((e) => {
          this.errorService.fetchApiError(e);
          dispatch(this.actions.getMe({ loading: false, data: undefined }));
        });
    };
  }
}
