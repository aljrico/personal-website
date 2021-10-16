import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>harrypotter &rarr;</h3>
            <p>
              <div className={styles.packageLogoContainer}>
                {' '}
                <img
                  alt="harrypotter"
                  className={styles.packageLogo}
                  src="https://raw.githubusercontent.com/aljrico/harrypotter/master/man/figures/logo.png"
                />{' '}
              </div>
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Projects;
