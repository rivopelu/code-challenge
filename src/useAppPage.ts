import { useNavigate } from "react-router-dom";
import { AppActions } from "./redux/AppActions";
import { useAppDispatch, useAppSelector } from "./redux/store";
import AuthServices from "./service/AuthService";
import { useEffect } from "react";
import { ROUTES } from "./routes/routes";

export function useAppPage() {
  const actions = new AppActions();
  const dispatch = useAppDispatch();
  const authService = new AuthServices();
  const navigate = useNavigate();
  const general = useAppSelector((state) => state.app);
  const pageLoading = general.getMe?.loading;
  useEffect(() => {
    if (authService.authCheck()) {
      dispatch(actions.getMeData()).then();
    } else {
      navigate(ROUTES.LOGIN());
    }
  }, []);
  return {
    pageLoading,
  };
}
