import React, { useEffect } from 'react'
import { Layout, Typography, Divider } from 'antd'
import Header from '../components/header'
import BangumiContext from '../context/bangumi'
import BangumiList from '../components/bangumiList'

export default function Home() {
  const bangumi = BangumiContext.useContainer()
  
  useEffect(() => {
    // setInterval(() => {
    //   task.getdownloadList()
    // }, 5000)
    bangumi.getBangumiList()
  }, []);

  return (
    <div className="app">
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout.Content style={{ padding: '24px', minHeight: 280, maxWidth: 1000, margin: 'auto' }}>
          <BangumiList />
        </Layout.Content>
      </Layout>
    </div>
  )
}
