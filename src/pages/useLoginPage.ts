import { useFormik } from "formik";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { IReqLogin } from "../models/IReqLogin";
import { IResLogin } from "../models/IResLogin";
import { BaseResponse } from "../models/IResponse";
import { AppActions } from "../redux/AppActions";
import { useAppDispatch } from "../redux/store";
import AuthServices from "../service/AuthService";
import ErrorService from "../service/ErrorService";
import { UiServices } from "../service/UiService";

export function useLoginPage() {
  const dispatch = useAppDispatch();
  const [params] = useSearchParams();
  const successRegister = JSON.parse(params.get("success-register") as any);
  const actions = new AppActions();
  const uiService = new UiServices();
  const errorService = new ErrorService();
  const authService = new AuthServices();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const initForm: IReqLogin = {
    username: "",
    password: "",
  };

  const validationScheme = yup.object().shape({
    username: yup.string().required("username is required 😔"),
    password: yup.string().required("password is required 😔"),
  });

  const formik = useFormik({
    initialValues: initForm,
    validationSchema: validationScheme,
    onSubmit: (values: IReqLogin) => {
      setLoading(true);
      dispatch(actions.login(values))
        .then((res: BaseResponse<IResLogin>) => {
          authService.successLogin(res.data.response_data);
          setLoading(false);
          uiService.handleSnackbarSuccess("Registration Successfully");
        })
        .catch((e) => {
          errorService.fetchApiError(e);
          setLoading(false);
        });
    },
  });

  return {
    showPassword,
    setShowPassword,
    formik,
    loading,
    successRegister,
  };
}
