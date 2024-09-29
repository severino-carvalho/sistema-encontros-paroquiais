'use client'

import { Container } from '@/components/atomos/Container'
import { ListagemEncontro } from '@/components/moleculas/Encontro/ListagemEncontro'
import { TreeDataNode } from 'antd'

export async function ConfiguracoesEncontro() {
  const treeData: TreeDataNode[] = [
    {
      title: 'parent 0',
      key: '0-0',
      isLeaf: false,
      children: [
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      isLeaf: false,
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      ],
    },
  ]

  return (
    <Container>
      <ListagemEncontro treeData={treeData} />
    </Container>
  )
}
