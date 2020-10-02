import { createContext, useState, useEffect } from "react";
import httpClient from "../helpers/http/httpClient";

export const LocationContext = createContext({});

export function LocationContextProvider({ children }) {
  const [position, setPosition] = useState<{ lng: number; lat: number }>();
  const state = localStorage.getItem("state");
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${state}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await httpClient.get(url, "application/json");
      setPosition(data);
    };
    fetchData();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        position,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
