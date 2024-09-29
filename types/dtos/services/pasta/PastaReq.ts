import { EncontroReq } from '../encontro'

export interface PastaReq {
  id: number
  equipe: string
  arquivo: string
  encontro: EncontroReq
}
