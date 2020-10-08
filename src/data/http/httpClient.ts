class HttpClient {
  get onBeforeRequest(): () => Promise<void> | void {
    return this._onBeforeRequest
  }

  set onBeforeRequest(value: () => Promise<void> | void) {
    this._onBeforeRequest = value
  }

  get onAfterRequest(): (response: Response) => Promise<void> | void {
    return this._onAfterRequest
  }

  set onAfterRequest(value: (response: Response) => Promise<void> | void) {
    this._onAfterRequest = value
  }

  get accessToken() {
    return this._accessToken
  }

  set accessToken(value: string | null) {
    this._accessToken = value
  }

  private static async extractData(response: Response) {
    const content = await response.text()

    if (content.length > 0) {
      return JSON.parse(content)
    }

    return {}
  }

  private static handleStatus(response: Response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }

    throw response
  }

  private static async handleError(error: any) {
    let errorResponse

    if (error instanceof Response) {
      errorResponse = await error.json()
    }

    if (errorResponse) {
      if (errorResponse.reason) {
        throw new Error(errorResponse.reason)
      } else if (errorResponse.error_description) {
        throw new Error(errorResponse.error_description)
      }
    }

    throw error
  }

  private _accessToken: string | null
  private _onBeforeRequest: () => Promise<void> | void
  private _onAfterRequest: (response: Response) => Promise<void> | void

  public async get<T>(
    url: string,
    contentType: string,
    headers?: Headers
  ): Promise<T> {
    return this.request<T>(`${url}`, {
      method: "GET",
      headers: this.requestHeader(contentType, headers),
    })
  }

  public async post<T>(
    url: string,
    body: string | FormData,
    contentType?: string,
    headers?: Headers
  ): Promise<T> {
    return this.request<T>(`/api${url}`, {
      method: "POST",
      headers: this.requestHeader(contentType, headers),
      body,
    })
  }

  public async put<T>(
    url: string,
    body: string,
    contentType: string,
    headers?: Headers
  ): Promise<T> {
    return this.request<T>(`/api${url}`, {
      method: "PUT",
      headers: this.requestHeader(contentType, headers),
      body,
    })
  }

  public async delete<T>(
    url: string,
    contentType: string,
    headers?: Headers
  ): Promise<T> {
    return this.request<T>(`/api${url}`, {
      method: "DELETE",
      headers: this.requestHeader(contentType, headers),
    })
  }

  private async request<T>(url: string, init: RequestInit): Promise<any> {
    if (this._onBeforeRequest) {
      await this._onBeforeRequest()
    }

    try {
      let response = await window.fetch(url, init)

      if (this._onAfterRequest) {
        await this._onAfterRequest(response)
      }

      response = HttpClient.handleStatus(response)

      return HttpClient.extractData(response)
    } catch (error) {
      await HttpClient.handleError(error)
    }
  }

  private initializeHeaders(contentType?: string) {
    let defaultHeaders

    if (contentType) {
      defaultHeaders = new Headers({
        Accept: "application/json",
        "Content-Type": contentType,
      })
    } else {
      defaultHeaders = new Headers({
        Accept: "application/json",
      })
    }

    return defaultHeaders
  }

  private requestHeader(contentType?: string, additionalHeaders?: Headers) {
    const defaultHeaders = this.initializeHeaders(contentType)

    if (this._accessToken) {
      defaultHeaders.append("Authorization", `Bearer ${this._accessToken}`)
    }

    if (additionalHeaders) {
      additionalHeaders.forEach((value: string, key: string) => {
        if (defaultHeaders.has(key)) {
          defaultHeaders.delete(key)
        }

        defaultHeaders.append(key, value)
      })
    }

    return defaultHeaders
  }
}

const httpClient = new HttpClient()

export default httpClient
