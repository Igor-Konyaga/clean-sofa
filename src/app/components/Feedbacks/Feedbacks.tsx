import { Title } from '@/app/shared';
import styles from './Feedbacks.module.scss';
import { Container } from '../Container/Container';
import { StarRating } from '@/app/shared/StarRating/ui/StarRating';

const feedbacksData = [
  {
    id: 1,
    username: 'Наталія',
    feedback:
      'Хочу подякувати команді АнтиБруд за чудову роботу. Відчистили коврик із застарілою плямою від фарби просто чудово. Сервіс на найвищому рівні. Рекомендую на всі 100%.',
    stars: 5,
    date: '13.07.24',
  },
  {
    id: 2,
    username: 'Анна',
    feedback: 'Дуже гарно почистити килими. Дякую!',
    stars: 5,
    date: '17.02.20',
  },
  {
    id: 3,
    username: 'Анонімно',
    feedback: 'Дуже сподобалась їхня робота,зробили все як обіцяли.',
    stars: 5,
    date: '02.11.2015',
  },
  {
    id: 4,
    username: 'Татьяна',
    feedback: 'Дякуємо команді Антибруд за якісну роботу! Рекомендую!',
    stars: 5,
    date: '14.01.19',
  },
  {
    id: 5,
    username: 'Анонімно',
    feedback:
      'Замовляла чистку дивана, приїхали як обіцяли, все відмінно відчистилось. Хочу наголосити що дуже ефективно!!! Раджу всім.',
    stars: 5,
    date: '27.01.2016',
  },
  {
    id: 6,
    username: 'Анонімно',
    feedback:
      'Чудова хімчистка!! Килими як нові після їхньої роботи!! Чекати не довго потрібно.',
    stars: 5,
    date: '12.06.24',
  },
  {
    id: 7,
    username: 'Анонімно',
    feedback: `Дякую хлопцям за їхню роботу! Якісно, ​​швидко і не дорого)) Ось це те, що подобається всім)`,
    stars: 5,
    date: '17.12.2016',
  },
  {
    id: 8,
    username: 'Олеся',
    feedback:
      'Мій диван ніколи не був таким чистим, навіть коли привезли з магазину. Відмили навіть плями від вина.',
    stars: 5,
    date: '12.06.24',
  },
];

export const Feedbacks = () => {
  return (
    <section id="feedbacks" className={styles.feedbacks}>
      <Container>
        <Title id="feedbacksTitle" text="ВІДГУКИ" level={2} />

        <ul className={styles.feedbacksList}>
          {feedbacksData.map(({ id, username, feedback, stars, date }) => {
            return (
              <li key={id} className={styles.feedback}>
                <div className={styles.feedbackHeader}>
                  <h3 className={styles.username}>{username}</h3>
                  <StarRating stars={stars} />
                </div>
                <p className={styles.feedbackText}>{feedback}</p>
                <p className={styles.date}>{date}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
