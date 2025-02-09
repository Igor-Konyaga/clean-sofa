import Link from 'next/link';
import styles from './Navigation.module.scss';

import { Dispatch, SetStateAction } from 'react';
import { Phone } from '../CustomIcons/Phone/Phone';
import { Location } from '../CustomIcons/Location/Location';
import { InstagramIcon } from '../CustomIcons/InstagramIcon/InstagramIcon';
import { FacebookIcon } from '../CustomIcons/FacebookIcon/FacebookIcon';
import { TelegramIcon } from '../CustomIcons/TelegramIcon/TelegramIcon';

export const navItems = [
  { label: 'Про нас', href: '#about-us' },
  { label: 'Послуги', href: '#services' },
  { label: 'Прайс', href: '#price' },
  { label: 'Галерея', href: '#galleryTitle' },
  { label: 'Відгуки', href: '#feedbacks' },
  { label: 'Контакти', href: '#contactsInfo' },
];

const mapsUrl = `https://www.google.com/maps/place/48%C2%B035'58.5%22N+22%C2%B019'07.9%22E/@48.599572,22.318862,16z/data=!4m4!3m3!8m2!3d48.5995724!4d22.3188617?hl=uk&entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D`;

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

      <div className={styles.contactInfo}>
        <Link href="tel:0504320020" className={styles.phone}>
          <Phone />
          <p>+380 (50) 432-00-20</p>
        </Link>
        <Link
          className={styles.location}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Location />
          <p>м.Ужгород вул.О.Блистіва 11</p>
        </Link>
      </div>

			<div className={styles.socialLinks}>
          <Link
            className={styles.instSocialLink}
            href="https://www.instagram.com/himchistka_kylymiv?utm_source=qr&igsh=MThwcW1ieGNvcXRxdg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
          <Link
            className={styles.socialLink}
            href="https://www.facebook.com/share/15pnnsSwEh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Link
            className={styles.socialLink}
            href="https://t.me/OlexandrBSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
          </Link>
        </div>
    </nav>
  );
};
