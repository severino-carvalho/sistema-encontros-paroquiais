'use client'

import { SettingOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { Avatar } from '@/components/atomos/Avatar'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
]

export function DropdownAvatar() {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar />
      </a>
    </Dropdown>
  )
}
