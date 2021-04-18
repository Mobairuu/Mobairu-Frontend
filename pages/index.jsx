import Head from 'next/head'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobairu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Mobairu!
        </h1>
      </main>
    </div>
  )
}

export default Home
