import { Button } from 'antd'
import { ReactNode } from 'react'
// import { BaseButtonProps } from 'antd/es/button/button'

interface IButtonProps {
  type: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  text: string
  size?: 'large' | 'middle' | 'small'
  icon?: ReactNode
}

export default function CButton(props: IButtonProps) {
  return (
    <>
      <Button
        type={props.type}
        size={props.size ?? 'middle'}
        icon={props.icon ?? undefined}
      >
        {props.text}
      </Button>
    </>
  )
}
