import 'antd/dist/antd.css'
import '../styles.scss'
import SocketContext from '../context/socket'
import TaskContext from '../context/task'
import BangumiContext from '../context/bangumi'
import WebSocketContainer from '../container/WebSocketContainer'

function MyApp({ Component, pageProps }) {
  return (
    <SocketContext.Provider>
      <TaskContext.Provider>
        <BangumiContext.Provider>
          <Component {...pageProps} />
          <WebSocketContainer />
        </BangumiContext.Provider>
      </TaskContext.Provider>
    </SocketContext.Provider>
  )
}

export default MyApp
