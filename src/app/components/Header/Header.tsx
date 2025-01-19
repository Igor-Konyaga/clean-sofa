'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { MenuIcon } from '../CustomIcons/MenuIcon/MenuIcon';
import { RxCross1 as IconCross } from "react-icons/rx";
import {FormEvent, useState} from 'react';

export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Link className={styles.logo} href={'/'}>
            <p className={styles.logoName}>DSR</p>
            <div className={styles.logoInfo}>
              <p className={styles.logoTitle}>Dezinsector</p>
              <p className={styles.logoText}>Знищення шкідників</p>
            </div>
          </Link>
        </div>

         <Navigation setOpenMenu={setVisibleMenu}  openMenu={visibleMenu} />

        <button onClick={handleClickMenu} className={styles.menuBtn} >
          {visibleMenu ? <IconCross className={styles.iconCross}/> : <MenuIcon className={styles.iconMenu} />}
        </button>
      </div>
    </header>
  );
};
