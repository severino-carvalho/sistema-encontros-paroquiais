'use client'

import Link from 'next/link'
import { ItemMenuProps } from '@/types/components/ConfigMenuProps'

export function ConfigMenuItem(props: Readonly<ItemMenuProps>) {
  return (
    <li key={props.label}>
      <Link href={props.href} className="text-blue-500">
        <span>{props.label}</span>
      </Link>
    </li>
  )
}
