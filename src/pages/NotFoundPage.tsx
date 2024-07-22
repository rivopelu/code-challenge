import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function NotFoundPage() {
  return (
    <div className=" flex gap-10 items-center uppercase flex-col min-h-screen justify-center text-center text-5xl">
      <div>Page Not Found</div>
      <Button variant="bordered" color="primary" as={Link} to={ROUTES.HOME()}>
        Back To Home
      </Button>
    </div>
  );
}
