'use client'

import { Container } from '@/components/atomos/Container'
import { ListagemEncontro } from '@/components/moleculas/Encontro/ListagemEncontro'

type ConfiguracoesEncontroProps = {
  encontroId?: number
}

export async function ConfiguracoesEncontro(
  props: Readonly<ConfiguracoesEncontroProps>,
) {
  return (
    <Container>
      <ListagemEncontro treeData={[]} />
    </Container>
  )
}
