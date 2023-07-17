import React, { FC } from 'react';
import Image from 'next/image';

import { AboutTeamProps } from './types';

import styles from './styles.module.scss';

const AboutTeam: FC<AboutTeamProps> = (props) => {
  const { variant, alt, src, shape, label, text, title } = props;

  return (
    <div
      className={styles.wrapper}
      style={{ flexDirection: variant === 'textRight' ? 'row' : 'row-reverse' }}
    >
      <div className={styles.image}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.shape}>
        <Image
          src={shape}
          alt={alt}
          fill
          style={{
            left: variant === 'textRight' ? '-500px' : '70px',
            top: variant === 'textRight' ? '210px' : '-70px',
          }}
        />
      </div>
      <section className={styles.content}>
        <h3 className={styles.label}>{label}</h3>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </section>
    </div>
  );
};

export default AboutTeam;
