import { Container } from '@/components/atomos/Container'
import { ConfiguracoesEncontro } from '@/components/organismos/Encontro/ConfiguracoesEncontro'

export default function Page() {
  return (
    <Container className="p-4">
      <h1 className="text-center">Configurações do Encontro</h1>

      <ConfiguracoesEncontro />
    </Container>
  )
}
