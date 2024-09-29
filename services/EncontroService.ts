import { GenericoService } from '@/services/GenericoService'
import { EncontroReq, EncontroRes } from '@/types/dtos/services/encontro'

class EncontroService extends GenericoService<EncontroReq, EncontroRes> {}

export const encontroService = new EncontroService('')
