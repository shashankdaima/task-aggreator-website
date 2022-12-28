import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Task Aggregator</title>
        <meta name="description" content="Never miss a deadline again with our notification consolidation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Zencoder</a>
        </h1>

        <p className={styles.description}>
          Never miss a deadline again with our notification consolidation.
        </p>


        <div className={styles.grid}>
          <a href="/privacy-policy" className={styles.card}>
            <h2>Privacy Policy &rarr;</h2>
            <p>Learn about our privacy policy</p>
          </a>

          <a href="/terms-and-condition" className={styles.card}>
            <h2>Terms and Conditions &rarr;</h2>
            <p>Learn about our T&C</p>
          </a>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
