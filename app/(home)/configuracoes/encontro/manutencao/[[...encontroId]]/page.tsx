import { Container } from '@/components/atomos/Container'
import { ConfiguracoesEncontro } from '@/components/organismos/Encontro/ConfiguracoesEncontro'

type PageProps = {
  params: {
    encontroId?: number
  }
}

export default function Page(props: Readonly<PageProps>) {
  return (
    <Container>
      <h1 className="text-center">Configurações do Encontro</h1>
      <ConfiguracoesEncontro />
    </Container>
  )
}
