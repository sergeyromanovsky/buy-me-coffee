import React from "react";
import { StyledButton } from "./styled";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}
const Button = (props: Props) => {
  return <StyledButton {...props} />;
};

export default Button;
