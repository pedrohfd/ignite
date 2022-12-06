import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author='Pedro Henrique'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quam aut debitis vitae numquam distinctio porro iusto natus laboriosam corporis expedita, esse enim, perferendis ducimus suscipit voluptate, est ex fugiat.'
      />

      <Post author='Laura Fontolan' content='Laura linda' />
    </div>
  )
}
