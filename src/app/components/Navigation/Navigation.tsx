import Link from 'next/link';
import styles from './Navigation.module.scss';
import { InstagramIcon } from '../CustomIcons/InstagramIcon/InstagramIcon';
import { TelegramIcon } from '../CustomIcons/TelegramIcon/TelegramIcon';
import {Dispatch, SetStateAction} from "react";

export const navItems = [
  { label: 'Про нас', href: '#about-us' },
  { label: 'Послуги', href: '#services' },
  { label: 'Прайс', href: '#price' },
  { label: 'FAQ', href: '#question' },
];

type Props = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const Navigation = ({ openMenu, setOpenMenu }: Props) => {
  return (
    <nav   className={openMenu ? `${styles.navigation} ${styles.visibleMenu}` : styles.navigation}>
      <ul className={styles.navList}>
        {navItems.map((link) => {
          return (
            <li onClick={() => setOpenMenu(false)} key={link.label} className={styles.navItem}>
              <Link className={styles.navLink} href={link.href}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul  className={styles.navListSocial}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="tel:0669090058">
            +380669090058
          </Link>
        </li>
        <li className={styles.navItemWrapperSocial}>
          <button>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className={styles.navLink}
              href="https://instagram.com/dezinsector.if/"
            >
              <InstagramIcon className={styles.navLinkIcon} />
            </Link>
          </button>

          <button>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className={styles.navLink}
              href="https://t.me/Ihor_Koniaha"
            >
              <TelegramIcon className={styles.navLinkIcon} />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
