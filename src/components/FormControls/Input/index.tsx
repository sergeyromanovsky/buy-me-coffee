import React, { ForwardedRef } from "react";
import {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import { Error, Label } from "../Shared/style";
import * as Styled from "./styled";

interface Props<T extends string> extends UseFormRegisterReturn<T> {
  label?: string;
  error?: FieldError;
}
const Input = React.forwardRef(function Input<
  T extends FieldValues,
  TFieldName extends FieldPath<T>
>(
  { error, label, ...rest }: Props<TFieldName>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div>
      <Label>{label}</Label>
      <Styled.Input {...rest} ref={ref} />
      {error && <Error>{error.message}</Error>}
    </div>
  );
});

export default Input;
