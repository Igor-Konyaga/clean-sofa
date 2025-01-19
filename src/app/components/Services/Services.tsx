import Image from 'next/image';
import styles from './Services.module.scss';
import bug from '/public/images/bug.png';
import cockroach from '/public/images/cockroach.png';
import flea from '/public/images/flea.png';
import mouse from '/public/images/mouse.png';

const serviceItems = [
  { label: 'Таргани', src: cockroach },
  { label: 'Клопи', src: bug },
  { label: 'Блохи', src: flea },
  { label: 'Гризуни', src: mouse },
];

export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.servicesTitle}>Послуги</h2>
      <ul className={styles.servicesList}>
        {serviceItems.map(({ label, src }) => {
          return (
            <li key={label} className={styles.servicesListItem}>
              <Image className={styles.img}  src={src} width={295} height={295} alt={label} />
              <h3 className={styles.itemTitle}>{label}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
