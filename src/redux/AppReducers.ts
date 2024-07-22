import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasePayload, IPayloadData } from "../models/IResponse";
import { IResGetMe } from "../models/IResGetMe";

const initState: IAppSlice = {};

export const AppSlice = createSlice({
  name: "app",
  initialState: initState,
  reducers: {
    getMe: (state: IAppSlice, action: BasePayload<IResGetMe>) => {
      state.getMe = action.payload;
    },
  },
});

type IAppSlice = {
  getMe?: IPayloadData<IResGetMe>;
};
