import React, { FC, JSX } from 'react';
import styles from './Title.module.scss';

type TitleProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  id?: string;
};

const Title: FC<TitleProps> = ({
  text,
  level = 1,
  className = '',
  id = '',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag id={id} className={`${styles.title} ${className}`}>
      {text}
    </Tag>
  );
};

export { Title };
