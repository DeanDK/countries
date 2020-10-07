import styled from "styled-components"

const SearchContainer = styled.div`
  height: 5rem;
  width: 20rem;
  background-color: #fff;
`

const CustomSelect = styled.div`
  position: relative select {
    display: none;
  }
`

const Select = styled.select`
  background-color: DodgerBlue;

  &:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
`

export { SearchContainer }
