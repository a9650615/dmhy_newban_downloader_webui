import { useRef, useEffect, useState } from "react"
import { createContainer } from "unstated-next"
import WebSocket from '../lib/websocket'

function useSocket() {
  let [data, setData] = useState({})

  
  useEffect(() => {
    WebSocket.on('UPDATE_DOWNLOAD_STATUS', function(data) {
      setData({
        type: 'UPDATE_DOWNLOAD_STATUS',
        data
      })
    })

    WebSocket.on('START_DOWNLOAD', function(data) {
      setData({
        type: 'START_DOWNLOAD',
        data
      })
    })
  }, [])

  return {
    data
  }
}

export default createContainer(useSocket)
