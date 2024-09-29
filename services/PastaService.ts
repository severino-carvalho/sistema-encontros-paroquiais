import { GenericoService } from '@/services/GenericoService'
import { PastaReq, PastaRes } from '@/types/dtos/services/pasta'

class PastaService extends GenericoService<PastaReq, PastaRes> {}

export const pastaService = new PastaService('')
