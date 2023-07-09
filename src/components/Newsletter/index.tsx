'use client';

import React, { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMyTranslation } from '@/app/i18n/client';
import { newsletterSchema } from '@/utils/validationSchemas';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { NewsletterInputProps } from './types';

import styles from './styles.module.scss';

const Newsletter: FC = () => {
  const { t } = useMyTranslation();

  const [alertText, setAlertText] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInputProps>({
    resolver: yupResolver(newsletterSchema),
    mode: 'onChange',
  });

  const handleSubscribe: SubmitHandler<NewsletterInputProps> = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE!,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setAlertText(t('Footer.subscribedAlert'));
          }
        },
        (error) => {
          setAlertText(error.text);
        }
      );

    reset();
  };

  const handleCloseAlert = () => {
    setAlertText('');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(handleSubscribe)} ref={formRef}>
      <div className={styles.form}>
        <h3 className={styles.title}>{t('Newsletter.title')}</h3>
        <div className={styles.main}>
          <div className={styles.inputWrapper}>
            {alertText && (
              <button type="button" className={styles.alert} onClick={handleCloseAlert}>
                {alertText}
              </button>
            )}
            <input
              type="email"
              {...register('email', {
                required: true,
              })}
              placeholder={t('Newsletter.placeholder')}
              className={styles.input}
            />
            <p className={styles.errorMessage}>{errors.email?.message}</p>
          </div>
          <button className={styles.button} type="submit">
            {t('Newsletter.button')}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
