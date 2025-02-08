import Link from 'next/link';
import styles from './Navigation.module.scss';

import { Dispatch, SetStateAction } from 'react';

export const navItems = [
  { label: 'Про нас', href: '#about-us' },
  { label: 'Послуги', href: '#services' },
  { label: 'Прайс', href: '#price' },
  { label: 'Галерея', href: '#galleryTitle' },
  { label: 'Відгуки', href: '#feedbacks' },
  { label: 'Контакти', href: '#contactsInfo' },
];

type Props = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <nav
      className={
        openMenu
          ? `${styles.navigation} ${styles.visibleMenu}`
          : styles.navigation
      }
    >
      <ul className={styles.navList}>
        {navItems.map((link) => {
          return (
            <li
              onClick={() => setOpenMenu(false)}
              key={link.label}
              className={styles.navItem}
            >
              <Link className={styles.navLink} href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
