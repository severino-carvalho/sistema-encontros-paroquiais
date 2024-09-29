'use client'

import { FormFooter } from '@/components/moleculas/Form/FormFooter'
import { Diretorio } from '@/components/moleculas/Tree/Diretorio'
import { Form, Input, TreeDataNode } from 'antd'

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

export function FormEncontro() {
  const [form] = Form.useForm()

  function onSubmit(valores: unknown) {
    console.log(valores)
  }

  function onSelectItemDiretorio(node: TreeDataNode) {
    console.log(node)
  }

  return (
    <Form
      form={form}
      method="POST"
      layout="vertical"
      onSubmitCapture={onSubmit}
      className="flex h-full flex-1 flex-col p-5"
    >
      <Form.Item label="Nome" htmlFor="nome_encontro" required>
        <Input id="nome_encontro" placeholder="Nome do encontro" />
      </Form.Item>

      <Form.Item label="Pastas">
        <Diretorio treeData={treeData} onSelect={onSelectItemDiretorio} />
      </Form.Item>

      <FormFooter />
    </Form>
  )
}
