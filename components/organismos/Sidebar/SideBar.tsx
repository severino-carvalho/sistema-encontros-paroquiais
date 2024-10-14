'use client'

import { useState } from 'react'
import { SideNav } from '@/components/organismos/Sidebar/SideNav'
import { SideTop } from '@/components/organismos/Sidebar/SideTop'
import { IChildren } from '@/types/components/IChildren'

export function SideBar(props: IChildren) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function handleCollapse() {
    setIsCollapsed((isCollapsed) => !isCollapsed)
  }

  return (
    <div className={'flex flex-1'}>
      <SideNav isCollapse={isCollapsed} onCollapse={handleCollapse} />

      <div className={'flex flex-1 flex-col'}>
        <SideTop isCollapse={isCollapsed} />

        {props.children}
      </div>
    </div>
  )
}
