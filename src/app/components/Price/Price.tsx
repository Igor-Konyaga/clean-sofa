import { Title } from '@/app/shared';
import styles from './Price.module.scss';
import { Container } from '../Container/Container';

export const Price = () => {
  return (
    <section id="price" className={styles.price}>
      <Container>
        <div className={styles.content}>
          <Title text="Прайс" level={2} className={styles.priceTitle} />
          <div className={styles.priceTable}></div>
        </div>
      </Container>
    </section>
  );
};
