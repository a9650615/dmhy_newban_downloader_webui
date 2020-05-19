import 'antd/dist/antd.css'
import '../styles.scss'
import TaskContent from '../context/task'

function MyApp({ Component, pageProps }) {
  return (
    <TaskContent.Provider>
      <Component {...pageProps} />
    </TaskContent.Provider>
  )
}

export default MyApp
