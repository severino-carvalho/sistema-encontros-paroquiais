import { ComponentProps } from 'react'

interface IContainer extends ComponentProps<'div'> {}

export function Container(props: IContainer) {
  return (
    <div className="flex flex-1 flex-col" {...props}>
      {props.children}
    </div>
  )
}
