import { EncontroResDto } from '../encontro'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface PastaResDto extends EntidadeDto {
  equipe: string
  arquivo: string
  encontro: EncontroResDto
}
