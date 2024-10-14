import { RotasEnum } from '@/types/enums/RotasEnum'
import { Container } from '@/components/atomos/Container'
import { ConfiguracoesMenu } from '@/components/moleculas/ConfiguracoesMenu/ConfiguracoesMenu'
import { ItemMenuProps } from '@/types/components/ConfigMenuProps'

const OpcoesMenu: ItemMenuProps[] = [
  { label: 'Usuário', href: RotasEnum.CONFIGURACOES_USUARIO },
  { label: 'Encontro', href: RotasEnum.CONFIGURACOES_ENCONTRO },
  { label: 'Pasta', href: RotasEnum.CONFIGURACOES_PASTA },
]

export default function Page() {
  return (
    <Container>
      <h1 className={'text-3xl font-bold text-blue-500'}>Configurações</h1>

      <ConfiguracoesMenu opcoes={OpcoesMenu} />
    </Container>
  )
}
