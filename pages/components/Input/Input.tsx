import React from "react"

import { Props } from "./Input.types"
import { Field, InputContainer, Label } from "./Input.styles"

const Input: React.FC<Props> = ({ label }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Field />
    </InputContainer>
  )
}

export default Input
