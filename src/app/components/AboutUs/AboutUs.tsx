import Image from 'next/image';
import styles from './AboutUs.module.scss';
import sofa from '../../../../public/images/roomWithSofa.png';
import { Title } from '@/app/shared';

const text1 = `АнтиБруд – це надійна компанія з хімчистки м'яких меблів та професійного прання килимів в Ужгороді. Ми допомагаємо повернути свіжість і чистоту вашим меблям та килимам, використовуючи сучасні екологічні засоби та ефективні технології очищення.`;
const text2 = `З часом будь-які меблі та килими накопичують пил, плями, бактерії та неприємні запахи, які важко усунути самостійно. Наші спеціалісти знають, як впоратися з будь-якими забрудненнями, не пошкоджуючи структуру тканин та матеріалів. Ми використовуємо перевірені професійні методи очищення, які не тільки видаляють бруд, а й забезпечують тривалу свіжість та захист поверхонь.`;
const text3 = `Наша компанія працює як з приватними клієнтами, так і з бізнесом – обслуговуємо квартири, будинки, офіси, готелі, ресторани та інші заклади. Ми цінуємо довіру наших клієнтів, тому гарантуємо відповідальний підхід, пунктуальність і високу якість послуг.
`;
const text4 = `Якщо вам потрібне якісне чищення диванів, крісел, матраців або килимів – АнтиБруд стане вашим надійним партнером у боротьбі за чистоту та комфорт!`;

export const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <Title text="ПРО НАС" level={2} className={styles.aboutTitle} />
      <div className={styles.wrapperContent}>
        <div className={styles.wrapperText}>
          <p className={styles.text}>{text1}</p>
          <p className={styles.text}>{text2}</p>
          <p className={styles.text}>{text3}</p>
          <p className={styles.text}>{text4}</p>
        </div>
        <div className={styles.wrapperImg}>
          <Image className={styles.img} src={sofa} alt="room with sofa" />
        </div>
      </div>
    </section>
  );
};
