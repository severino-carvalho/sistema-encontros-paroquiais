import { EncontroReqDto } from '../encontro'
import { EntidadeDto } from '@/types/dtos/EntidadeDto'

export interface PastaReqDto extends EntidadeDto {
  equipe: string
  arquivo: string
  encontro: EncontroReqDto
}
