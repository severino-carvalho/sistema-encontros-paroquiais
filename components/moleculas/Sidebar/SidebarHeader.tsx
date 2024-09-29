import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import clsx from 'clsx'

type SidebarHeaderProps = {
  titulo: string
  isExpanded?: boolean
  onClick?: (e: unknown) => void
}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center p-4 pt-10 transition-all delay-100 ease-in-out',
        {
          'justify-between': props.isExpanded,
          'justify-center': !props.isExpanded,
        },
      )}
    >
      {props.isExpanded && (
        <h1
          className={clsx(
            'text-center text-2xl transition-all delay-500 ease-in-out',
            { hidden: !props.isExpanded },
          )}
        >
          {props.titulo}
        </h1>
      )}

      <Button type="primary" onClick={props.onClick}>
        {props.isExpanded ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  )
}
