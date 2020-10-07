import mapboxgl from "mapbox-gl"
import httpClient from "../http/httpClient"
import { LayerDataModel } from "./mapboxClient.types"

export class MapboxClient {
  get map() {
    return this._map
  }

  set map(value: mapboxgl.Map) {
    this._map = value
  }

  private _map: mapboxgl.Map
  private mapImages: Array<{ url: string; name: string }> = []
  private accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  constructor(mapContainer?: React.MutableRefObject<HTMLDivElement>) {
    if (mapContainer) {
      this.map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/dark-v10",
        accessToken: this.accessToken,
        center: [0, 0],
        zoom: 5,
      })
    }
  }

  public async getGeoLocationData(target: string) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${target}.json?access_token=${this.accessToken}`

    return await httpClient.get(url, "application/json")
  }

  public loadMapImages(): Promise<unknown> {
    return new Promise(
      (resolve: () => void, reject: (error: Error) => void) => {
        this.mapImages.forEach((o: { url: string; name: string }) => {
          this.map.loadImage(o.url, (error: Error, image: ImageData) => {
            if (error) {
              reject(error)
            }
            this.map.addImage(o.name, image)
          })
        })
        resolve()
      }
    )
  }

  public initializeLayer(data: LayerDataModel) {
    this.map.addSource(data.sourceName, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    })

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
      })
    })
  }
}
