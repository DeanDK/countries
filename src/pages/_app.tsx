import React from "react";

import { LocationContextProvider } from "../context/locationContext";

import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

function App({ Component, pageProps }) {
  return (
    <LocationContextProvider>
      <Component {...pageProps} />
    </LocationContextProvider>
  );
}

export default App;
