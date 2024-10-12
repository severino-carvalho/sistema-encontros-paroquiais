import { TableProps } from 'antd'

export interface IListagemConfig<T> {
  dados: T[]
  headers: TableProps<T>['columns']
  isLoading: boolean
}
