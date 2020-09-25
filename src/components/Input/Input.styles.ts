import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: black;
  font-size: 1rem;
`;
const Field = styled.input`
  height: 2rem;
  width: 15rem;
  border-radius: 2px;
  outline: none;
  border: 1px solid black;
  border-radius: 1<px;
`;

const Error = styled.label`
  color: red;
  font-size: 0.8rem;
`;

export { InputContainer, Label, Field, Error };
