import React from "react";

import { Props } from "./Input.types";
import { Field, InputContainer, Label, Error } from "./Input.styles";
import { useField } from "formik";

const Input: React.FC<Props> = ({ label, fieldData, ...props }) => {
  const [_, { error }] = useField(props as any);
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Field name={props.name} {...fieldData} />
      <Error>{error}</Error>
    </InputContainer>
  );
};

export default Input;
