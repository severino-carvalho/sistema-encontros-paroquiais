import { PastaReqDto } from '../pasta'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface EncontroReqDto extends EntidadeDto {
  nome: string
  pastas: PastaReqDto[]
}
