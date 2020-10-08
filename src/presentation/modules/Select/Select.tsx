import React from "react"
import Dropdown from "react-dropdown"
import defaultOption from "react-dropdown"

import mapboxClient from "../../../data/mapbox/mapboxClient"
import { getStatesName } from "../../../utils/getStatesName"
import { Props } from "./Select.types"

const Select: React.FC<Props> = ({ data }) => {
  const states = getStatesName(data.country.states)

  const handleChange = async (option: { value: string; label: string }) => {
    const state = option.value
    let result = null

    try {
      result = await mapboxClient.getGeoLocationData(state)
    } catch (e) {
      throw new Error(e)
    }

    const [lng, lat] = result.features[0].center

    mapboxClient.flyToLocation(lng, lat)
  }

  return (
    <Dropdown
      options={states || []}
      value={defaultOption}
      placeholder='Select an option'
      onChange={handleChange}
    />
  )
}

export default Select
