import { PastaReq } from '../pasta'

export interface EncontroReq {
  id: number
  nome: string
  pastas: PastaReq[]
}
