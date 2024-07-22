import { Input } from "@nextui-org/react";
import { HTMLInputTypeAttribute, ReactNode } from "react";

export default function InputText(props: IProps) {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && props.onEnter) {
      props.onEnter();
    }
  };
  return (
    <Input
      onKeyDown={handleKeyDown}
      labelPlacement={"outside"}
      className={"text-start"}
      variant="underlined"
      isDisabled={props.disabled}
      size={"md"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      onBlur={props.onBlur}
      isRequired={props.required}
      autoComplete="false"
      type={props.type}
      label={props.label}
      startContent={props.startContent}
      endContent={props.endContent}
      isInvalid={!!props.errorMessage}
      errorMessage={props.errorMessage}
      color={props.errorMessage ? "danger" : props.colors || "default"}
    />
  );
}

interface IProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  endContent?: ReactNode;
  onChange?: any;
  onBlur?: any;
  errorMessage?: any;
  startContent?: ReactNode;
  className?: string;
  colors?: "default" | "primary";
  onEnter?: () => void;
}
