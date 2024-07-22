import { Avatar, Button } from "@nextui-org/react";
import BrandLogo from "../components/BrandLogo";
import { useAppSelector } from "../redux/store";
import AuthServices from "../service/AuthService";

export default function HomePage() {
  const data = useAppSelector((state) => state.app);
  const authService = new AuthServices();
  return (
    <div className="min-h-screen h-full  flex-grow   flex flex-col">
      <div className="bg-white border-b h-20 flex items-center ">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <BrandLogo />
          </div>
        </div>
      </div>

      <div className=" h-full flex-1  text-center w-full flex items-center justify-center flex-col gap-4">
        <Avatar
          className="h-[180px] w-[180px]"
          src={data?.getMe?.data?.avatar}
        />
        <h1 className="text-5xl font-semibold uppercase tracking-[10px]">
          {data.getMe?.data?.name}
        </h1>
        <p className="text-2xl ">({data?.getMe?.data?.username})</p>
        <Button
          onClick={() => authService.Logout()}
          size="lg"
          color="danger"
          variant="flat"
          radius="full"
        >
          <div className="px-10 font-semibold">LOG OUT</div>
        </Button>
      </div>
    </div>
  );
}
