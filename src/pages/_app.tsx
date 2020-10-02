import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { createApolloClient } from "../utils/createApolloClient";
import MapPage from "./../modules/Map/Map";

import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

function App({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <MapPage>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </MapPage>
  );
}

export default App;
