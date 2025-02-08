import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Хімчистка меблів та прання килимів "АнтиБруд" 2013 - 2025
      </p>
    </footer>
  );
};
