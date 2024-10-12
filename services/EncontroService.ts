import { GenericoService } from '@/services/GenericoService'
import { EncontroReqDto, EncontroResDto } from '@/types/dtos/services/encontro'

class EncontroService extends GenericoService<EncontroReqDto, EncontroResDto> {}

export const encontroService = new EncontroService('')
