import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'

class ApiClient {
  private static axios: AxiosInstance
  private static backendBaseUrl: string
  private static timeout: number

  constructor() {
    const backendBaseUrl = process.env.BACKEND_BASE_URL
    if (backendBaseUrl === undefined) {
      console.error('backend base url is not found.')
      return
    }
    ApiClient.backendBaseUrl = backendBaseUrl
    ApiClient.timeout = parseInt(process.env.AXIOS_TIME_OUT || '15000', 10)
    ApiClient.init()
  }

  private static init = (token?: string) => {
    ApiClient.axios = ApiClient.createAxiosInstance(this.backendBaseUrl)
  }

  private static initIfNot = () => {
    if (!ApiClient.axios) {
      ApiClient.init()
    }
  }

  private static createAxiosInstance = (baseURL: string) => {
    if (!baseURL) throw new Error('base url is required.')
    const instance = axios
      .create({
        baseURL: baseURL,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 15_000,
      })
    axios.interceptors.response.use(
      (config: any) => this.requestSuccess(config), // FIXME anyを削りたい...
      (config: any) => this.requestFailure(config), // FIXME anyを削りたい...
    )
    return instance
  }

  static requestSuccess(config: AxiosRequestConfig) {
    return config
  }

  static requestFailure(config: AxiosRequestConfig) {
    return Promise.reject(config)
  }

  async get<Response>({url}: { url: string }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.get<Response>(url)
    } catch (error: unknown) {
      throw new Error('get method cause error:')
    }
  }

  async post<Request, Response>({url, data}: { url: string, data: Request }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.post<Request, Response>(url, data)
    } catch (error: unknown) {
      throw new Error('post method cause error:')
    }
  }

  async delete<Response>({url}: { url: string }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.delete<Response>(url)
    } catch (error: unknown) {
      throw new Error('delete method cause error:')
    }
  }

  async patch<Request, Response>({url, data}: { url: string, data: Request }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.patch<Response>(url, data)
    } catch (error: unknown) {
      throw new Error('patch method cause error:')
    }
  }

  async put<Request, Response>({url, data}: { url: string, data: Request }) {
    ApiClient.initIfNot()
    try {
      return await ApiClient.axios.put<Response>(url, data)
    } catch (error: unknown) {
      throw new Error('put method cause error:')
    }
  }
}

export default new ApiClient()
