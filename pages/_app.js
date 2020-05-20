import 'antd/dist/antd.css'
import '../styles.scss'
import SocketContext from '../context/socket'
import TaskContext from '../context/task'
import WebSocketContainer from '../container/WebSocketContainer'

function MyApp({ Component, pageProps }) {
  return (
    <SocketContext.Provider>
      <TaskContext.Provider>
        <Component {...pageProps} />
        <WebSocketContainer />
      </TaskContext.Provider>
    </SocketContext.Provider>
  )
}

export default MyApp
