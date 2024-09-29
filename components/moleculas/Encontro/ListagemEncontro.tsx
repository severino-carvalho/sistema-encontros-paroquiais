'use client'

import { Container } from '@/components/atomos/Container'
import { TreeDataNode } from 'antd'
import { Diretorio } from '../Tree/Diretorio'

interface IListagemEncontro {
  treeData: TreeDataNode[]
}

export function ListagemEncontro(props: IListagemEncontro) {
  return (
    <Container>
      <Diretorio treeData={props.treeData} />
    </Container>
  )
}
