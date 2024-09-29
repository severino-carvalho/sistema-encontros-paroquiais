import { EncontroRes } from '../encontro'

export interface PastaRes {
  id: number
  equipe: string
  arquivo: string
  encontro: EncontroRes
}
