import { ComponentProps } from 'react'
import clsx from 'clsx'

interface IContainer extends ComponentProps<'div'> {}

export function Container(props: IContainer) {
  return (
    <div
      {...props}
      className={clsx('flex h-full flex-1 flex-col', props.className)}
    >
      {props.children}
    </div>
  )
}
