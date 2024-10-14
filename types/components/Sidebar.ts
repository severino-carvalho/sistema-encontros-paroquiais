import { RotasEnum } from '@/types/enums/RotasEnum'
import { MenuProps } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

export type SideItemProps = {
  href?: RotasEnum
} & MenuItem
