import React, { useEffect, useRef, useState } from "react";

import { MapboxClient } from "../../helpers/mapboxClient";
import { Props } from "./Map.types";

const styles: React.CSSProperties = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: -1,
};

const Map: React.FC<Props> = ({ children }) => {
  const [mapboxClient, setMapboxClient] = useState<MapboxClient | null>(null);
  const [ssrDocument, setSsrDocument] = useState<Document | null>(null);
  const mapContainer = useRef(ssrDocument?.createElement("div"));

  useEffect(() => {
    setSsrDocument(document);
    const initializeMap = ({ setMapboxClient, mapContainer }) => {
      const mapboxClient = new MapboxClient(mapContainer);
      mapboxClient.map.on("load", () => {
        setMapboxClient(mapboxClient);
        mapboxClient.map.resize();
      });
    };

    if (!mapboxClient) initializeMap({ setMapboxClient, mapContainer });
  }, [mapboxClient]);

  return (
    <React.Fragment>
      <div ref={(el) => el && (mapContainer.current = el)} style={styles} />
      {children}
    </React.Fragment>
  );
};

export default Map;
