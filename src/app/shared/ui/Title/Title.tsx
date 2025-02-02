import React, { FC, JSX } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Title: FC<TitleProps> = ({ text, level = 1, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`${styles.title} ${className}`}>{text}</Tag>;
};

export { Title };
