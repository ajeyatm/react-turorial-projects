import { LoginOutlined } from '@ant-design/icons'
import CButton from '@libs/ui/button'

export default function Home() {
  return (
    <div>
      <CButton type='primary' text='Refresh' size='large' />
      {/* <Button type='primary'>Refresh</Button> */}
      <CButton type='dashed' text='logout' icon={<LoginOutlined />} />
      {/* <Button type='dashed'>logout</Button> */}
      <CButton type='link' text='hello' size='small' />

      {/**LOgin */}
      <CButton text='hshsh' type='dashed' />
    </div>
  )
}
