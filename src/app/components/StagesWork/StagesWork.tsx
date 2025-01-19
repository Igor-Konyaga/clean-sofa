import Image from 'next/image';
import styles from './StagesWork.module.scss';
import manager from '/public/images/manager.png';
import master1 from '/public/images/master1.png';
import master2 from '/public/images/master2.png';

const stagesItems = [
  {
    label: 'Консультація',
    src: manager,
    height: 194,
    description:
      'Наш менеджер зв’яжеться з вами для уточнення ваших данних. Після буде сформована заявка на безкоштовний попередній огляд.',
  },
  {
    label: 'Попередній огляд',
    src: master1,
    height: 218,
    description:
      'До вас завітає наш майстер для огляду приміщення. Він надасть вам інформацію, що до підготовки приміщення до обробки.',
  },
  {
    label: 'Обробка',
    src: master2,
    height: 232,
    description:
      'У назначений час до вас завітає майстер і зробить обробку приміщення. Обробка у средньому триває 30-60 хвилин.',
  },
];

export const StagesWork = () => {
  return (
    <section className={styles.stagesWork}>
      <h2 className={styles.stagesWorkTitle}>Етапи роботи</h2>
      <ul className={styles.stagesWorkList}>
        {stagesItems.map(({ label, src, height, description }) => {
          return (
            <li key={label} className={styles.stagesWorkListItem}>
              <Image className={styles.image} src={src} width={260} height={height} alt={label} />
              <div className={styles.wrapperInfo}>
                <h3 className={styles.itemTitle}>{label}</h3>
                <p className={styles.itemDesc}>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
