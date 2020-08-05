import { Popconfirm, message } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default ({ removeBangumi }) => (
  <Popconfirm
    title="你確定要從追蹤清單中刪除? 將不保留任何紀錄 (注意!目前並不能移除當季新番，會出現問題)"
    okText="刪除"
    cancelText="放棄"
    onConfirm={removeBangumi}
  >
    <DeleteOutlined key="delete" />
  </Popconfirm>
)