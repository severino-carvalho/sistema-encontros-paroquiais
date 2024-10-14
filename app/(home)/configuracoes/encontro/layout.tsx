import { IChildren } from '@/types/components/IChildren'

interface ILayoutEncontro extends IChildren {}

export default function LayoutEncontro(props: ILayoutEncontro) {
  return props.children
}
