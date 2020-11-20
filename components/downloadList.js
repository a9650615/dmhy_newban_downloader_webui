import { Progress, Card, Space, List } from 'antd'
import TaskContext from '../context/task'
import styles from './downloadList.module.scss'

const showStatus = (status) => {
  switch(status) {
    case 0: return '暫停'
    case 1: return '等待'
    case 2: return '尋找種子中'
    case 3: return '下載中'
    case 4: return '已完成'
  }
}

const cardItem = (item) => (
  <List.Item key={item.link}>
    <Card className={styles.card}>
      <Card.Meta
        title={item.name}
        description={
          <Space>
            <span>{showStatus(item.status)}{item.downloadSpeed && `(${item.downloadSpeed})`}</span>
            <a target="_blank" href={item.magnet}>磁力連結</a>
            <a target="_blank" href={`https://share.dmhy.org${item.link}`}>檔案來源</a>
          </Space>
        }
      />
      <div>{item.progress!=null && <Progress percent={item.progress} />}</div>
    </Card>
  </List.Item>
)

export default function DownloadList() {
  const task = TaskContext.useContainer()

  return (
    <List
      itemLayout="horizontal"
      dataSource={task.downloadList}
      renderItem={cardItem}
    />
  )
}
