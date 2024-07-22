import { useEffect, useState } from "react";
import { IReqRegister } from "../models/IReqRegister";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAppDispatch } from "../redux/store";
import { AppActions } from "../redux/AppActions";
import { UiServices } from "../service/UiService";
import ErrorService from "../service/ErrorService";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import AuthServices from "../service/AuthService";

export function useRegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const actions = new AppActions();
  const authService = new AuthServices();
  const uiService = new UiServices();
  const errorService = new ErrorService();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (authService.authCheck()) {
      navigate(ROUTES.HOME());
    }
  }, []);

  const initForm: IReqRegister = {
    name: "",
    username: "",
    password: "",
    confirm_password: "",
  };

  const validationScheme = yup.object().shape({
    name: yup.string().required("name is required 😔"),
    username: yup.string().required("username is required 😔"),
    password: yup.string().required("password is required 😔"),
    confirm_password: yup
      .string()
      .required("confirmation password is required 😔")
      .min(8, "The minimum password must be 8 characters")
      .oneOf(
        [yup.ref("password")],
        "The password you entered is not the same 😔"
      ),
  });

  const formik = useFormik({
    initialValues: initForm,
    validationSchema: validationScheme,
    onSubmit: (values: IReqRegister) => {
      setLoading(true);
      dispatch(actions.register(values))
        .then(() => {
          setLoading(false);
          uiService.handleSnackbarSuccess("Registration Successfully");
          navigate(ROUTES.LOGIN() + "?success-register=true");
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
  };
}
