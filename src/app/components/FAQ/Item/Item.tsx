'use client';
import { FC, useState } from 'react';
import styles from './Item.module.scss';
import { ArrowIcon } from '../../CustomIcons/ArrowIcon/ArrowIcon';

type Props = {
  title: string;
  desc: string;
};

export const Item: FC<Props> = ({ title, desc }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className={styles.item}>
      <button
        onClick={() => setOpen(!open)}
        className={styles.btn}
        type="button"
      >
        <span className={styles.title}>{title}</span>

        <span
          className={open ? `${styles.icon} ${styles.openIcon}` : styles.icon}
        >
          <ArrowIcon />
        </span>
      </button>
      <p className={open ? `${styles.desc} ${styles.open}` : styles.desc}>
        {desc}
      </p>
    </li>
  );
};
