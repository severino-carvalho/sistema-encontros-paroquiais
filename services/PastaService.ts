import { GenericoService } from '@/services/GenericoService'
import { PastaReqDto, PastaResDto } from '@/types/dtos/services/pasta'

class PastaService extends GenericoService<PastaReqDto, PastaResDto> {}

export const pastaService = new PastaService('')
