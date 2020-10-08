import React, { useEffect, useRef, useState } from "react"

import { Props } from "./Map.types"
import { withApollo } from "../../../data/graphql/withApollo"
import mapboxClient from "./../../../data/mapbox/mapboxClient"

const styles: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: -1,
}

const Map: React.FC<Props> = ({ children }) => {
  const [mapbox, setMapbox] = useState<typeof mapboxClient | null>(null)

  const [ssrDocument, setSsrDocument] = useState<Document | null>(null)

  const mapContainer = useRef(ssrDocument?.createElement("div"))

  useEffect(() => {
    setSsrDocument(document)
    const initializeMap = ({ setMapbox, mapContainer }) => {
      mapboxClient.initializeMap(mapContainer)

      mapboxClient.map.on("load", () => {
        setMapbox(mapbox)
        mapboxClient.map.resize()
      })
    }

    if (!mapbox) initializeMap({ setMapbox, mapContainer })
  }, [mapbox])

  return (
    <React.Fragment>
      <div ref={(el) => el && (mapContainer.current = el)} style={styles} />
    </React.Fragment>
  )
}

export default withApollo({ ssr: false })(Map)
