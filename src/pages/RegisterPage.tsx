import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import BrandLogo from "../components/BrandLogo";
import InputText from "../components/InputText";
import { ASSETS } from "../constants/assets";
import { useRegisterPage } from "./useRegisterPage";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function RegisterPage() {
  const page = useRegisterPage();
  const formik = page.formik;
  return (
    <div className="grid lg:grid-cols-2 ">
      <div
        className="bg-primary lg:block hidden min-h-screen bg-cover"
        style={{ backgroundImage: `url(${ASSETS.BG_REGISTER})` }}
      ></div>
      <div className="flex items-center justify-center  ">
        <div className="f w-full  h-full lg:max-h-[80vh] items-center flex flex-col justify-center ">
          <Card radius="md" shadow="none" className="max-w-xl w-full border">
            <CardHeader className="p-6">
              <BrandLogo />
            </CardHeader>
            <Divider />
            <CardBody className="p-6">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-3xl ">Hey There !</h3>
                  <p>Please enter your data to register</p>
                </div>
                <InputText
                  colors="primary"
                  label="Name"
                  placeholder="Insert your name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onEnter={formik.handleSubmit}
                  required
                  errorMessage={formik.touched.name && formik.errors.name}
                />
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
                <InputText
                  colors="primary"
                  label="confirmation password"
                  placeholder="Insert your password again"
                  name="confirm_password"
                  onBlur={formik.handleBlur}
                  type={page.showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  value={formik.values.confirm_password}
                  onEnter={formik.handleSubmit}
                  required
                  errorMessage={
                    formik.touched.confirm_password &&
                    formik.errors.confirm_password
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
                  register
                </Button>
                <p className="text-slate-500">
                  do you have an account ?
                  <Link
                    to={ROUTES.LOGIN()}
                    className="text-primary hover:underline"
                  >
                    {" "}
                    Sign In Here
                  </Link>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
