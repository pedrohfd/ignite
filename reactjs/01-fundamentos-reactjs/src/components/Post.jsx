import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/62259990?v=4'
          />
          <div className={styles.authorInfo}>
            <strong>Pedro Henrique</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title='07 de Dezembro as 08:13' dateTime='2022-12-07 08:13:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a>jane.design/doctorcare</a>
        </p>

        <p>
          <a>#novoprojeto</a> <a>#nlw</a> <a>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
