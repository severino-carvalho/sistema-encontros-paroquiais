'use client'

import { SideItemProps } from '@/types/components/Sidebar'
import { ConfigProvider, Menu } from 'antd'

type SidebarContentProps = {
  items: SideItemProps[]
  onClick: (e: unknown) => void
  isCollapse?: boolean
}

export function SidebarContent(props: SidebarContentProps) {
  if (props.isCollapse) return null

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: 'bg-transparent',
            activeBarBorderWidth: 0,
          },
        },
      }}
    >
      <Menu
        mode="inline"
        expandIcon
        items={props.items}
        onClick={props.onClick}
        className="bg-white"
      />
    </ConfigProvider>
  )
}
