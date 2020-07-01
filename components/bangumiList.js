import { List, Card, Row, Col } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import BangumiContext from '../context/bangumi'
import styles from './bangumiList.module.scss'

const cardItem = (item) => (
  <Card
    className={styles.bangumiCard}
    actions={[
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Row>
      <Col span={8}>
        <img
          alt={item.name}
          src={item.img}
          className={styles.bangumiImage}
        />
      </Col>
      <Col span={16}>
        <Card.Meta
          title={`${item.name} / ${item.nameInJpn}`}
          description={
            <div>
              <div>季度: {item.season}</div>
              <div>建議搜尋名稱: {item.suggestName}</div>
              簡介: {item.description}
            </div>
          }
          className={styles.bangumiMeta}
        />
      </Col>
    </Row>
  </Card>
)

export default () => {
  const { list } = BangumiContext.useContainer()

  return (
    <List
      itemLayout="vertical"
      dataSource={list}
      renderItem={cardItem}
    />
  )
}