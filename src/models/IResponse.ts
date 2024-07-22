import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type BasePayload<T> = PayloadAction<IBasePayload<T>>;

interface IBasePayload<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
}

export interface IPayloadData<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
}

interface rootResponse<T> {
  response_data: T;
}
export type BaseResponse<T> = AxiosResponse<rootResponse<T>>;
