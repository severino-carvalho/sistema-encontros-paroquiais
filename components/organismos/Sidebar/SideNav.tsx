'use client'

import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/moleculas/Sidebar'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { SideItemProps } from '@/types/components/Sidebar'
import clsx from 'clsx'

const sideContentData: SideItemProps[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
]

type SideNavProps = {
  isCollapse?: boolean
  onCollapse?: () => void
}

export function SideNav(props: SideNavProps) {
  return (
    <aside
      className={clsx(
        'flex h-full flex-col justify-between bg-white transition-all duration-500 ease-in-out',
        { 'w-16': props.isCollapse },
        { 'w-80': !props.isCollapse },
      )}
    >
      <SidebarHeader
        titulo={'SEP'}
        isCollapse={props.isCollapse}
        onClick={props.onCollapse}
      />

      <div className="h-full overflow-y-auto scroll-smooth bg-white focus:scroll-auto">
        <SidebarContent
          isCollapse={props.isCollapse}
          onClick={(e) => console.log(e)}
          items={sideContentData}
        />
      </div>

      <SidebarFooter />
    </aside>
  )
}
