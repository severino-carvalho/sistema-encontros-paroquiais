'use client'

import { SideItemProps } from '@/types/components/Sidebar'
import { ConfigProvider, Menu } from 'antd'

type SidebarContentProps = {
  items: SideItemProps[]
  onClick: (e: unknown) => void
  isExpanded?: boolean
}

export function SidebarContent(props: SidebarContentProps) {
  if (!props.isExpanded) return null

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: 'bg-transparent',
          },
        },
      }}
    >
      <Menu
        mode="inline"
        expandIcon
        items={props.items}
        onClick={props.onClick}
      />
    </ConfigProvider>
  )
}
