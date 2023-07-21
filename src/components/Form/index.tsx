'use client';

import React, { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMyTranslation } from '@/app/i18n/client';
import { envVariables } from '@/constants';
import query from '@/shared/query.json';
import { formSchema } from '@/utils/validationSchemas';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInputProps } from './types';

import styles from './styles.module.scss';

const Form: FC = () => {
  const [alertText, setAlertText] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  const { t } = useMyTranslation();

  const { emailJSServiceId, emailJSFormTemplate, emailJSPublicKey } = envVariables;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputProps>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const handleSendMessage: SubmitHandler<FormInputProps> = () => {
    emailjs
      .sendForm(
        emailJSServiceId,
        emailJSFormTemplate,
        formRef.current as HTMLFormElement,
        emailJSPublicKey
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setAlertText(t('ContactUs.sentAlert'));
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
    <form className={styles.wrapper} onSubmit={handleSubmit(handleSendMessage)} ref={formRef}>
      <div className={styles.inputWrapper}>
        {alertText && (
          <button type="button" className={styles.alert} onClick={handleCloseAlert}>
            {alertText}
          </button>
        )}
        <input
          type="text"
          {...register('fullName', {
            required: true,
          })}
          placeholder={t('ContactUs.placeholder1')}
          className={styles.input}
        />
        <p className={styles.errorMessage}>{errors.fullName?.message}</p>
        <input
          type="email"
          {...register('email', {
            required: true,
          })}
          placeholder={t('ContactUs.placeholder2')}
          className={styles.input}
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>

        <select className={styles.select} {...register('query')}>
          {query.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
        <p className={styles.errorMessage}>{errors.query?.message}</p>
        <textarea
          className={styles.textarea}
          placeholder={t('ContactUs.placeholder3')}
          {...register('message')}
        />
        <p className={styles.errorMessage}>{errors.message?.message}</p>
      </div>
      <button className={styles.button} type="submit">
        {t('ContactUs.button')}
      </button>
    </form>
  );
};

export default Form;
