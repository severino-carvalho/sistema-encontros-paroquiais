import { IGenericoService } from '@/types/services/GenericoService'
import { AxiosInstance } from 'axios'
import { ServerApi } from '@/libs/axios/ServerAPI'
import { FiltroResult } from '@/types/services/FiltroResult'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export class GenericoService<S, R extends EntidadeDto>
  implements IGenericoService<S, R>
{
  private readonly url: string
  private readonly serverAPI: AxiosInstance

  constructor(url: string) {
    this.url = url
    this.serverAPI = ServerApi
  }

  public async findAll(): Promise<FiltroResult<R>> {
    const { data } = await this.serverAPI.get<FiltroResult<R>>(this.url)

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
