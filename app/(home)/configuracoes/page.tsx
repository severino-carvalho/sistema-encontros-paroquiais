import Link from 'next/link'
import { RotasEnum } from '@/types/enums/RotasEnum'

export default function Page() {
  return (
    <div>
      <h1>Configurações</h1>

      <Link href={RotasEnum.CONFIGURACOES_ENCONTRO} className="text-blue-500">
        <span>Encontro</span>
      </Link>
    </div>
  )
}
