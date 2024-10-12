import clsx from 'clsx'
import { DropdownAvatar } from '@/components/moleculas/Dropdown/DropdownAvatar'

type SideTopProps = {
  isCollapse?: boolean
}

export function SideTop(props: SideTopProps) {
  return (
    <div
      className={clsx(
        'flex h-20 w-full items-center justify-end bg-white p-4 transition-all duration-500 ease-in-out',
        { '-translate-y-20': props.isCollapse },
      )}
    >
      <DropdownAvatar />
    </div>
  )
}
