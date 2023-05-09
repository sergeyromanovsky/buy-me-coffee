import React, { ForwardedRef } from "react";
import {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegisterReturn,
} from "react-hook-form";
import * as Styled from "./styled";
import { Error, Label } from "../Shared/style";

interface Props<T extends string> extends UseFormRegisterReturn<T> {
  label?: string;
  error?: FieldError;
}
const TextArea = React.forwardRef(function TextArea<
  T extends FieldValues,
  TFieldName extends FieldPath<T>
>(
  { error, label, ...rest }: Props<TFieldName>,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <div>
      <Label>{label}</Label>
      <Styled.TextArea {...rest} ref={ref} />
      {error && <Error>{error.message}</Error>}
    </div>
  );
});

export default TextArea;
