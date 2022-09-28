import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.kheader}>
        <div className={styles.ktop}>
          <div className={styles.klink}>
            <p className={styles.krozaliss}>Rozaliss</p>
          </div>
          <div className={styles.kright}>
            <a href="#" className={styles.klink1}><p className={styles.kprofessional}>Compte Proféssionel ?</p></a>
            <a href="#" className={styles.klink2}><p>Blog</p></a>
            <div className={styles.kchangelang}>
              <div className={styles.kfrflag}>
                <div className={styles.kfrgroup}>
                  <div className={styles.kfrflagblue}></div>
                  <div className={styles.kfrflagwhite}></div>
                  <div className={styles.kfrflagred}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.kbottom}>
          <div className={styles.kinner}>
            <Image src="/Imgs/logo.png" alt="logo" width={56} height={56} className={styles.kimage}></Image>
            <div className={styles.knavigation}></div>
            <div className={styles.kinput}></div>
            <div className={styles.kbuttons}></div>
          </div>
        </div>
      </header>


    </div>

  )
}
