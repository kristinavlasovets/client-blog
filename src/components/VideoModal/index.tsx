import React, { FC } from 'react';

import styles from './styles.module.scss';

const VideoModal: FC = () => (
  <div className={styles.wrapper}>
    <iframe
      aria-label="video"
      width="500px"
      height="300px"
      allowFullScreen
      title="video"
      className={styles.video}
      src="https://www.youtube.com/embed/zMf_xeGPn6s"
    />
  </div>
);

export default VideoModal;
