import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/pedrohfd.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Henrique</strong>
              <time
                title='07 de Dezembro as 08:13'
                dateTime='2022-12-07 08:13:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
