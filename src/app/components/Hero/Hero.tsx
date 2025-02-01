import Link from 'next/link';
import styles from './Hero.module.scss';
import sofa from '../../../../public/images/sofa.png';
import Image from 'next/image';
export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInfo}>
        <div className={styles.wrapperImg}>
          <Image src={sofa} alt="sofa" />
        </div>
        <h2 className={styles.heroSubtitle}>
          Відчуйте справжню чистоту ваших меблів та килимів
        </h2>
        <button className={styles.heroBtn}>
          <Link className={styles.heroLink} href={'#consultationForm'}>
            Замовити
          </Link>
        </button>
      </div>
    </section>
  );
};
