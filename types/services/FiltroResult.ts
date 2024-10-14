import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface FiltroResult<T extends EntidadeDto> {
  dados: T[]
  total: number
}
