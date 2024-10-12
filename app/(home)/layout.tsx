'use client'

import { IChildren } from '@/types/components/IChildren'
import { SideBar } from '@/components/organismos/Sidebar/SideBar'
import { Contexts } from '@/contexts'

export default function HomeLayout(props: Readonly<IChildren>) {
  return (
    <Contexts>
      <div className="flex h-full w-full">
        <SideBar>
          <main className={'flex h-full w-full flex-col p-10'}>
            {props.children}
          </main>
        </SideBar>
      </div>
    </Contexts>
  )
}
