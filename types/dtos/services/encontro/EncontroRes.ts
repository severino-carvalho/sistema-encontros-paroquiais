import { PastaRes } from '../pasta'

export interface EncontroRes {
  id: number
  nome: string
  pastas: PastaRes[]
}
