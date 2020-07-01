import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'

const { Header } = Layout

export default () => {
  const router = useRouter()
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[router.pathname == '/'? '1': '2']}>
        <Menu.Item key="1"><Link href="/"><a>下載列表</a></Link></Menu.Item>
        <Menu.Item key="2"><Link href="/bangumi"><a>番劇總覽</a></Link></Menu.Item>
      </Menu>
    </Header>
  )
}
  

