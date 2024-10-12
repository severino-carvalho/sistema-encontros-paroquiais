import { ConfigMenuItem } from '@/components/atomos/ConfigMenu/ConfigMenuItem'
import { ItemMenuProps } from '@/types/components/ConfigMenuProps'

type ConfiguracoesMenuProps = {
  opcoes: ItemMenuProps[]
}

export function ConfiguracoesMenu(props: Readonly<ConfiguracoesMenuProps>) {
  return (
    <section className={'flex pt-4'}>
      <ul>
        {props.opcoes.map((opcao) => (
          <ConfigMenuItem
            key={opcao.href}
            label={opcao.label}
            href={opcao.href}
          />
        ))}
      </ul>
    </section>
  )
}
