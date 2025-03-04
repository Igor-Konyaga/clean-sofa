'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { RxCross1 as IconCross } from 'react-icons/rx';
import { useState } from 'react';
import { DropIcon } from '../CustomIcons/DropIcon/DropIcon';
import { MenuIcon } from '../CustomIcons/MenuIcon/MenuIcon';

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
            <p className={styles.logoName}>АнтиБруд</p>
            <DropIcon width={36} height={36} />
          </Link>
        </div>

        <Navigation setOpenMenu={setVisibleMenu} openMenu={visibleMenu} />

        <button onClick={handleClickMenu} className={styles.menuBtn}>
          {visibleMenu ? (
            <IconCross className={styles.iconCross} />
          ) : (
            <MenuIcon className={styles.iconMenu} />
          )}
        </button>
      </div>
    </header>
  );
};
