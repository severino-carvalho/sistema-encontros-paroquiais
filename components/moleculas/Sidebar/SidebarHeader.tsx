'use client'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import clsx from 'clsx'
import Link from 'next/link'
import { RotasEnum } from '@/types/enums/RotasEnum'

type SidebarHeaderProps = {
  titulo: string
  isCollapse?: boolean
  onClick?: (e: unknown) => void
}

export function SidebarHeader(props: SidebarHeaderProps) {
  return (
    <div
      className={clsx(
        'flex h-20 items-center truncate bg-white p-4 shadow-black transition-all duration-500 ease-in-out',
        { 'justify-end': props.isCollapse },
        { 'justify-between': !props.isCollapse },
      )}
    >
      {!props.isCollapse && (
        <Link href={RotasEnum.HOME}>
          <h3
            className={clsx(
              'text-center text-2xl transition-all duration-500 ease-in-out',
            )}
          >
            {props.titulo}
          </h3>
        </Link>
      )}

      <Button
        type="primary"
        onClick={props.onClick}
        icon={props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </div>
  )
}
