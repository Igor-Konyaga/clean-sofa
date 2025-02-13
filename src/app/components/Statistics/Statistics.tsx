import { Container } from '../Container/Container';
import styles from './Statistics.module.scss';

const data = [
  {
    title: 'Виконаних замовлень',
    value: '4000',
  },
  {
    title: 'Років на ринку',
    value: '15',
  },
  {
    title: 'Задоволених кліентів',
    value: '1200',
  },
];

export const Statistics = () => {
  return (
    <section className={styles.statisticsSection}>
      <Container>
        <ul className={styles.statisticsList}>
          {data.map(({ title, value }) => {
            return (
              <li key={title} className={styles.statisticsItem}>
                <p className={styles.statisticsValue}>{value}+</p>
                <p className={styles.statisticsTitle}>{title}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
