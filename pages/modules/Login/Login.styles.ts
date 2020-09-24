import styled from "styled-components"
import {
  centerAbsoluteElement,
  centerBlockElement,
} from "../../../styles/mixins"

const LoginContainer = styled.div`
  ${centerBlockElement()};
  height: 100%;
  width: 100%;
  position: absolute;
`
export { LoginContainer }
