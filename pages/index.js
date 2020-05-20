import React, { useEffect } from 'react'
import { Layout, Typography, Divider } from 'antd'
import DownloadList from '../components/downloadList'
import TaskContext from '../context/task'

export default function Home() {
  const task = TaskContext.useContainer()
  
  useEffect(() => {
    // setInterval(() => {
    //   task.getdownloadList()
    // }, 5000)
    task.getdownloadList()
  }, []);

  return (
    <div className="app">
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content style={{ padding: '24px', minHeight: 280, maxWidth: 1000, margin: 'auto' }}>
          <DownloadList />
        </Layout.Content>
      </Layout>
    </div>
  )
}
