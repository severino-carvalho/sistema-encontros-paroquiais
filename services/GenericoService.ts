import { IGenericoService } from '@/types/services/GenericoService'
import { AxiosInstance } from 'axios'
import { ServerApi } from '@/libs/axios/ServerAPI'

export class GenericoService<S, R> implements IGenericoService<S, R> {
  private url: string
  private serverAPI: AxiosInstance

  constructor(url: string) {
    this.url = url
    this.serverAPI = ServerApi
  }

  public async findAll(): Promise<R[]> {
    const { data } = await this.serverAPI.get<R[]>(this.url)

    return data
  }

  public async save(data: S): Promise<R> {
    const { data: responseData } = await this.serverAPI.post<R>(this.url, data)
    return responseData
  }

  async update(id: string, data: S): Promise<R> {
    const { data: responseData } = await this.serverAPI.put<R>(this.url, data)
    return responseData
  }

  async delete(id: string): Promise<R> {
    const { data: responseData } = await this.serverAPI.delete<R>(id)
    return responseData
  }
}
