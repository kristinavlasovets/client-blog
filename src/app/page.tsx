import React from 'react';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.text}>Home</p>
      </div>
    </main>
  );
}
