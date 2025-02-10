import Image from 'next/image';
import styles from './Services.module.scss';
import carpetWashing from '/public/images/carpetWashing.jpg';
import rotaryDevice from '/public/images/rotaryDevice.jpg';
import furnitureСleaning from '/public/images/furnitureСleaning.jpg';

import { Title } from '@/app/shared';

const serviceItems = [
  { label: 'Хімчистка меблів', src: furnitureСleaning },
  { label: 'Прання килимів', src: carpetWashing },
  { label: 'Хімчистка ковроліну', src: rotaryDevice },
];

export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <Title text="ПОСЛУГИ" level={2} className={styles.servicesTitle} />
      <ul className={styles.servicesList}>
        {serviceItems.map(({ label, src }) => {
          return (
            <li key={label} className={styles.servicesListItem}>
              <div className={styles.wrapperImg}>
                <Image className={styles.img} src={src} alt={label} />
              </div>

              <h3 className={styles.itemTitle}>{label}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
