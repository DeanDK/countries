import mapboxgl from "mapbox-gl";

import { LayerDataModel } from "../models/Map";

export class MapboxClient {
  get map() {
    return this._map;
  }

  set map(value: mapboxgl.Map) {
    this._map = value;
  }

  private _map: mapboxgl.Map;
  private mapImages: Array<{ url: string; name: string }> = [
    {
      url: "assets/images/bike-metrics/bike-icon.png",
      name: "bike-icon",
    },
    {
      url: "assets/images/bike-metrics/bike-selected.png",
      name: "bike-selected-icon",
    },
  ];

  constructor(mapContainer?: React.MutableRefObject<HTMLDivElement>) {
    if (mapContainer) {
      this.map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
        center: [0, 0],
        zoom: 5,
      });
    }
  }

  private addMarkerDataToSource(
    layerSource: mapboxgl.GeoJSONSource,
    layers: string[]
  ) {
    const markerData: any = [];
    const markerDataGeoJSONObj: any = {};

    for (const i of layers) {
      markerData.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [0, 0],
        },
        properties: {
          id: i.toString(),
        },
      });
    }

    markerDataGeoJSONObj.type = "FeatureCollection";
    markerDataGeoJSONObj.features = markerData;
    layerSource.setData(markerDataGeoJSONObj);
  }

  public loadMapImages(): Promise<unknown> {
    return new Promise(
      (resolve: () => void, reject: (error: Error) => void) => {
        this.mapImages.forEach((o: { url: string; name: string }) => {
          this.map.loadImage(o.url, (error: Error, image: ImageData) => {
            if (error) {
              reject(error);
            }
            this.map.addImage(o.name, image);
          });
        });
        resolve();
      }
    );
  }

  public initializeLayer(data: LayerDataModel) {
    this.map.addSource(data.sourceName, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    data.layers.forEach((layerId: string) => {
      this.map.addLayer({
        id: layerId,
        type: "symbol",
        source: data.sourceName,
        layout: {
          "icon-image": data.layerImage,
          "icon-allow-overlap": true,
        },
        filter: ["==", "$type", "Point"],
      });
    });
  }
}
