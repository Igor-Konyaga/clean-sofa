// 'use client';
import { Title } from '@/app/shared';
import styles from './Price.module.scss';
import { Container } from '../Container/Container';
import { Modal } from '@/app/shared/ui/Modal/ui/Modal';
import { useState } from 'react';

const furniture = [
  { title: 'Диван (одне посад місце)', price: '400-500' },
  { title: 'Матрац односпальний', price: '800-1000' },
  { title: 'Матрац двоспальний', price: '1200-1400' },
  { title: 'Матрац дитячий', price: '300-500' },
  { title: 'Матрац Топер(типу Дормео) (чистимо у цеху)', price: '600-800' },
  { title: 'Крісло', price: '700-800' },
  { title: 'Стілець', price: '150-200' },
  { title: 'Подушка', price: '100-150' },
  { title: 'Мінімальне замовлення', price: '800' },
];
const carpet = [
  { title: 'Килими та ковролін', price: '100 грн/м2' },
  { title: 'Покривала, ковдри (синтетика)', price: '70 грн/м2' },
  { title: 'Виведення запаху', price: '+30 грн/м2' },
  { title: 'Збрерігання килима (після 15 діб)', price: '10 грн/доба' },
  { title: 'Доставка (забрати та доставити)', price: '150 грн' },
];

export const Price = () => {
  // const [openModal, setIsOpenModal] = useState(false);
  return (
    <section id="price" className={styles.price}>
      <Container>
        <div className={styles.content}>
          <Title text="ПРАЙС" level={2} className={styles.priceTitle} />
          <div id="priceTable" className={styles.priceTable}>
            <div>
              <Title
                text="Хімчистка меблів"
                level={3}
                className={styles.subtitle}
              />
              <ul className={styles.priceList}>
                {furniture.map(({ title, price }) => {
                  return (
                    <li key={title} className={styles.priceItem}>
                      <p className={styles.itemTitle}>{title}</p>
                      {/* {title === 'Диван (одне посад місце)' && (
                        <button onClick={() => setIsOpenModal(true)}>
                          open
                        </button>
                      )} */}
                      <p className={styles.itemPrice}>{price} грн</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Title
                text="Прання килимів"
                level={3}
                className={styles.subtitle}
              />
              <ul className={styles.priceList}>
                {carpet.map(({ title, price }) => {
                  return (
                    <li key={title} className={styles.priceItem}>
                      <p className={styles.itemTitle}>{title}</p>
                      <p className={styles.itemPrice}>{price}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
      {/* <Modal
        openModal={openModal}
        renderContent={() => (
          <div>
            <button onClick={() => setIsOpenModal(false)}>Close</button>
          </div>
        )}
      /> */}
    </section>
  );
};
