import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import notify from '@/utils/notify'
import router from '@/router'
import { HTTP_CONFIG } from '@/config/http.config'

class Request {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: HTTP_CONFIG.BASE_URL,
      timeout: HTTP_CONFIG.TIMEOUT,
    })

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (response.status === 200) {
          return response.data
        }
        return response
      },
      (error) => {
        const status = error.response?.status
        if (status === 401 || status === 403) {
          notify.error('登录失效，请重新登录')
          router.push('/login')
        } else {
          notify.error('服务器宕机啦~ 请稍后重试')
        }
        return Promise.reject(error)
      },
    )
  }

  public get<T>(url: string, params?: object): Promise<T> {
    return this.instance.get(url, { params })
  }

  public post<T>(url: string, data?: object): Promise<T> {
    return this.instance.post(url, data)
  }

  public put<T>(url: string, data?: object): Promise<T> {
    return this.instance.put(url, data)
  }

  public delete<T>(url: string, params?: object): Promise<T> {
    return this.instance.delete(url, { params })
  }
}

export default new Request()
