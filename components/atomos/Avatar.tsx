import { Avatar as AvatarAntd } from 'antd'
import { AntDesignOutlined } from '@ant-design/icons'
import Image from 'next/image'

type AvatarProps = {
  href?: string
}

export function Avatar(props: AvatarProps) {
  if (!props.href) {
    return <AvatarAntd icon={<AntDesignOutlined />} />
  }

  return <AvatarAntd icon={<Image src={props.href} alt={'img_perfil'} />} />
}
