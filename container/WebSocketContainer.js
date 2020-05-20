import {useEffect} from 'react'
// import WebSocket from '../lib/websocket'
import SocketContext from '../context/socket'
import TaskContext from '../context/task'

export default function WebSocketContainer(prop) {
  if (!process.browser) return null// Client side only
  let task = TaskContext.useContainer()
  let socket = SocketContext.useContainer()

  useEffect(() => {
    const { type, data } = socket.data
    if (type == 'UPDATE_DOWNLOAD_STATUS') {
      task.updateDownloadItemByValue(data.link, data)
    }
  }, [socket.data])

  useEffect(() => {
    return () => { 
      console.log('container destroy')
    }
  }, [])

  return null
}