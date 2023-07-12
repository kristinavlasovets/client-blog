'use client';

import React, { ChangeEvent, FC, RefObject, useState } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { usePopUp } from '@/hooks/usePopUp';
import tags from '@/shared/tags.json';

import { TagsSearchProps } from './types';

import styles from './styles.module.scss';

const TagsSearch: FC<TagsSearchProps> = ({ handleChooseTag }) => {
  const [popUpRef, isVisible, setIsVisible] = usePopUp();

  const { t } = useMyTranslation();

  const searchQuery = (start: string, pattern: string) => {
    if (start.length > pattern.length) {
      return false;
    }

    const startQuery = pattern.slice(0, start.length);
    return startQuery.toLocaleLowerCase() === start.toLocaleLowerCase();
  };

  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    setIsVisible(true);
    setValue(currentValue);

    if (currentValue) {
      const filteredTags = tags.filter((tag) => searchQuery(currentValue, tag));
      setSearchTags(filteredTags);
    } else {
      setIsVisible(false);
      setSearchTags([]);
    }
  };

  const handleClickTag = (tag: string) => () => {
    setIsVisible(false);
    setValue(tag);
  };

  const handleSearchTag = (tag: string) => () => {
    handleChooseTag(tag)();
  };

  return (
    <form className={styles.wrapper} ref={popUpRef as RefObject<HTMLFormElement>}>
      <input
        className={styles.input}
        placeholder={t('Category.placeholder')}
        value={value}
        onChange={handleChange}
        data-testid="tagsSearchInput"
      />
      <button type="button" className={styles.button} onClick={handleSearchTag(value)}>
        {t('Category.button')}
      </button>
      {isVisible && (
        <ul className={styles.list}>
          {searchTags.length > 0 ? (
            searchTags.map((tag) => (
              <li className={styles.item} onClick={handleClickTag(tag)} key={tag}>
                {tag}
              </li>
            ))
          ) : (
            <li className={styles.item}>{t('Category.message')}</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default TagsSearch;
