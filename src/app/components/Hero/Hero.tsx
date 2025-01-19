import Link from 'next/link';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInfo}>
        <h1 className={styles.heroTitle}>Професійна дезинсекція</h1>
        <p className={styles.heroDesc}>
          Знищення тарганів, бліх, кліщів, гризунів у вашому приміщенні
        </p>
        <button className={styles.heroBtn}>
          <Link className={styles.heroLink} href={'#consultationForm'}>
            Безкоштовна консультація
          </Link>
        </button>
      </div>
    </section>
  );
};
