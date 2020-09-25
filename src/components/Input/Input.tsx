import React from "react";

import { Props } from "./Input.types";
import { Field, InputContainer, Label } from "./Input.styles";

const Input: React.FC<Props> = ({ label, name, field }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Field name={name} {...field} />
    </InputContainer>
  );
};

export default Input;
