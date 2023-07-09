import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import AboutHeader from '@/components/AboutHeader';
import AboutTeam from '@/components/AboutTeam';
import Authors from '@/components/Authors';
import JoinOurTeam from '@/components/JoinOurTeam';
import MisionVision from '@/components/MisionVision';
import Overview from '@/components/Overview';
import { PageProps } from '@/types';

import styles from './styles.module.scss';

const AboutUs: FC<PageProps> = ({ params: { lng } }) => {
  const { t } = serverTranslation(lng);
  return (
    <div className={styles.wrapper}>
      <AboutHeader lng={lng} />
      <Overview lng={lng} />
      <MisionVision lng={lng} variant="vision" />
      <AboutTeam
        variant="textLeft"
        label={t('AboutUs.creativeLabel')}
        title={t('AboutUs.creativeTitle')}
        text={t('AboutUs.creativeText')}
        src="/assets/images/group-of-hands.png"
        alt={t('creativeLabel')}
        shape="/assets/images/shapes.png"
      />
      <AboutTeam
        variant="textRight"
        label={t('AboutUs.whyLabel')}
        title={t('AboutUs.whyTitle')}
        text={t('AboutUs.whyText')}
        src="/assets/images/on-stairs.png"
        alt={t('AboutUs.whyLabel')}
        shape="/assets/images/circle.png"
      />
      <Authors lng={lng} variant="" />
      <JoinOurTeam lng={lng} />
    </div>
  );
};

export default AboutUs;
