import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author='Pedro Henrique'
            content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam aut debitis vitae numquam distinctio porro iusto natus laboriosam corporis expedita, esse enim, perferendis ducimus suscipit voluptate, est ex fugiat.'
          />

          <Post author='Laura Fontolan' content='Laura linda' />
        </main>
      </div>
    </div>
  )
}
