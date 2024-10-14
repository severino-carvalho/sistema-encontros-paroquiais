import { PastaResDto } from '../pasta'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface EncontroResDto extends EntidadeDto {
  id: number
  nome: string
  pastas: PastaResDto[]
}
