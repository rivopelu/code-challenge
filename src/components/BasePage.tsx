import { ReactNode } from "react";

export default function BasePage(props: IProps) {
  return <main className="min-h-screen bg-slate-100">{props.children}</main>;
}

interface IProps {
  children: ReactNode;
}
