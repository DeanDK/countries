import React from "react";

import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
