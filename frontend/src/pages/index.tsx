import Top from '../components/page/Top'

import styles from './index.module.css'

import type {NextPage} from 'next'

const Home: NextPage = () => (
  <div className={styles.container}>
    <Top />
  </div>
)

export default Home
