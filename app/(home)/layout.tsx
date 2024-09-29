import { IChildren } from '@/types/components/IChildren'
import { Sidebar } from '@/components/organismos/Sidebar/Sidebar'

export default function HomeLayout(props: IChildren) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />

      <div>{props.children}</div>
    </div>
  )
}
