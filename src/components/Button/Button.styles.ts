import styled from "styled-components";

import { ButtonStyledProps } from "./Button.types";

const Button = styled.button<ButtonStyledProps>`
  margin-top: 1rem;
  padding: 10px;
  width: ${(props) => props.width}rem;
  outline: none;
  border-radius: 1px;
  border: 1px solid black;
  font-size: 1rem;
  background-color: #6600ff;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

export { Button };
