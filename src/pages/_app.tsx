import React from "react"

import { LocationContextProvider } from "../data/context/locationContext"

import "../presentation/styles/globals.css"
import "mapbox-gl/dist/mapbox-gl.css"

function App({ Component, pageProps }) {
  return (
    <LocationContextProvider>
      <Component {...pageProps} />
    </LocationContextProvider>
  )
}

export default App
