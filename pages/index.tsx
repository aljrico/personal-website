import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>Alejandro J Rico</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.circle} src="avatar.png"></img>
        <h2 className={styles.title}>Alejandro J Rico</h2>
        <p className={styles.description}>
          Data Scientist / Software Developer
        </p>

        <div className={styles.grid}>
          <Link href="/projects">
            <a className={styles.card}>
              <h3>Projects</h3>
              <p>
                Explore the list of the projects that have been eating away my
                free time.
              </p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h3>About</h3>
              <p>
                Let me tell you my story. Find out know who I am and where do I
                com from.
              </p>
            </a>
          </Link>

          <Link href="/posts">
            <a className={styles.card}>
              <h3>Posts</h3>
              <p>
                Read about what I'm working on, my ideas and projects. You may
                find some code.
              </p>
            </a>
          </Link>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <Link href="/">
          <a>
            &copy; {currentYear} &bull; Alejandro Jiménez Rico &bull;
            <span className={styles.logo}>
            <FontAwesomeIcon icon={faSignature} />
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          </a>
        </Link>
      </footer> */}
    </div>
  );
};

export default Home;