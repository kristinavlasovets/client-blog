import React, { FC, useState } from 'react';
import Image from 'next/image';

import { icons } from '@/constants/icons';
import authors from '@/shared/authors.json';

import styles from './styles.module.scss';

const Carousel: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const { from, image, name, review } = authors[currentTestimonial];

  const handleBack = () => {
    if (currentTestimonial !== 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  const handleNext = () => {
    if (currentTestimonial !== authors.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.review}>{review}</p>
      <div className={styles.content}>
        <div className={styles.author}>
          <div className={styles.image}>
            <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.from}>{from}</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <button
            type="button"
            className={`${styles.button} ${currentTestimonial !== 0 || styles.disabled}`}
            onClick={handleBack}
          >
            {icons.back}
          </button>
          <button
            type="button"
            className={`${styles.button} ${
              currentTestimonial !== authors.length - 1 || styles.disabled
            }`}
            onClick={handleNext}
          >
            {icons.next}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
