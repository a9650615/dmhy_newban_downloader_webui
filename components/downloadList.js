import { Skeleton, Switch, Card, Avatar, Meta } from 'antd'
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
  <Card className={styles.card}>
    <Card.Meta
      title={item.name}
      description={showStatus(item.status)}
    />
  </Card>
)

export default function DownloadList() {
  const task = TaskContext.useContainer()

  return task.downloadList.map(cardItem)
}
