import React from "react"
import Dropdown from "react-dropdown"

import { getStatesName } from "../../../utils/getStatesName"
import { Props } from "./Select.types"

const Select: React.FC<Props> = ({ data, loading, error }) => {
  const states = getStatesName(data.country.states)

  const handleChange = (e) => {
    debugger
  }

  return (
    <Dropdown
      options={states || []}
      value={states[0] || ""}
      placeholder='Select an option'
      onChange={handleChange}
    />
  )
}

export default Select
