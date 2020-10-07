import React from "react"
import { useField } from "formik"

import { Props } from "./Input.types"

import { Field, InputContainer, Label, Error } from "./Input.styles"

const Input: React.FC<Props> = ({ label, fieldData, ...props }) => {
  const [_, { error }] = useField(props as any)
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Field name={props.name} {...fieldData} />
      <Error>{error}</Error>
    </InputContainer>
  )
}

export default Input
