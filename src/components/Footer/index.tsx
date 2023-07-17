import React, { FC } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { blogContacts, blogTitle, socials } from '@/constants';
import { LanguageProps } from '@/types';

import NavMenu from '../NavMenu';

import Newsletter from './Newsletter';

import styles from './styles.module.scss';

const Footer: FC<LanguageProps> = ({ lng }) => {
  const { t } = serverTranslation(lng);
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <span className={styles.title}>{blogTitle}</span>
          <div className={styles.links}>
            <NavMenu variant="footer" />
          </div>
        </div>
        <Newsletter />
        <div className={styles.contacts}>
          <section className={styles.info}>
            <p>{t('Footer.info')}</p>
            <p>{blogContacts}</p>
          </section>
          <div className={styles.icons}>
            {socials.map(({ icon, href }) => (
              <a href={href} key={href}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
