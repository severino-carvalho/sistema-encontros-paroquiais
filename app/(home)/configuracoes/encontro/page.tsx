import { Container } from '@/components/atomos/Container'
import { ListagemEncontro } from '@/components/organismos/Encontro/ListagemEncontro'

export default function Page() {
  return (
    <Container className={'gap-5'}>
      <h1 className="text-center">Configurações do Encontro</h1>

      <ListagemEncontro />
    </Container>
  )
}
