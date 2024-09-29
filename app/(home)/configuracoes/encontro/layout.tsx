import { Container } from '@/components/atomos/Container'
import { IChildren } from '@/types/components/IChildren'

interface ILayoutEncontro extends IChildren {}

export default function LayoutEncontro(props: ILayoutEncontro) {
  return <Container>{props.children}</Container>
}
