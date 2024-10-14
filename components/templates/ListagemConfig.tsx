import { IListagemConfig } from '@/types/components/IListagemConfig'
import { Table } from 'antd'

export function ListagemConfig<T>(props: Readonly<IListagemConfig<T>>) {
  return (
    <Table<T>
      columns={props.headers}
      dataSource={props.dados}
      pagination={{ position: ['bottomCenter'] }}
    />
  )
}
