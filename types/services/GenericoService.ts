import { FiltroResult } from '@/types/services/FiltroResult'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface IGenericoService<S, R extends EntidadeDto> {
  findAll(): Promise<FiltroResult<R>>

  save(data: S): Promise<R>

  update(id: string, data: S): Promise<R>

  delete(id: string): Promise<R>
}
