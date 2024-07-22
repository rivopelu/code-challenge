import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { ASSETS } from "../constants/assets";
import BrandLogo from "../components/BrandLogo";
import InputText from "../components/InputText";
import { useLoginPage } from "./useLoginPage";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function LoginPage() {
  const page = useLoginPage();
  const formik = page.formik;
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center  ">
        <div className="f w-full  h-full max-h-[80vh] items-center flex flex-col justify-center ">
          <div className="grid gap-6">
            {page.successRegister && (
              <Card
                radius="sm"
                shadow="none"
                className="max-w-xl w-full border bg-success-50  border-success text-success "
              >
                <CardBody>
                  <div>Your registration is successful, please log in</div>
                </CardBody>
              </Card>
            )}
            <Card radius="sm" shadow="none" className="max-w-xl w-full border">
              <CardHeader className="p-6">
                <BrandLogo />
              </CardHeader>
              <Divider />
              <CardBody className="p-6">
                <div className="grid gap-5">
                  <div>
                    <h3 className="text-3xl ">Hey There !</h3>
                    <p>Please enter your username and password for sign in </p>
                  </div>

                  <InputText
                    colors="primary"
                    label="Username"
                    placeholder="Insert your username"
                    name="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    onEnter={formik.handleSubmit}
                    required
                    errorMessage={
                      formik.touched.username && formik.errors.username
                    }
                  />
                  <InputText
                    colors="primary"
                    label="password"
                    placeholder="Insert your password"
                    name="password"
                    onBlur={formik.handleBlur}
                    type={page.showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onEnter={formik.handleSubmit}
                    required
                    errorMessage={
                      formik.touched.password && formik.errors.password
                    }
                  />

                  <Checkbox
                    isSelected={page.showPassword}
                    onValueChange={page.setShowPassword}
                  >
                    Show Password
                  </Checkbox>
                  <Button
                    isLoading={page.loading}
                    onClick={() => formik.handleSubmit()}
                    variant="flat"
                    color="primary"
                    className="uppercase font-semibold"
                  >
                    MASUK
                  </Button>
                  <p className="text-slate-500">
                    don't have an account yet?
                    <Link
                      to={ROUTES.REGISTER()}
                      className="text-primary hover:underline"
                    >
                      {" Sign Up Here"}
                    </Link>
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div
        className="bg-primary min-h-screen bg-cover"
        style={{ backgroundImage: `url(${ASSETS.LOGIN_BG})` }}
      ></div>
    </div>
  );
}
