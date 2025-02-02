import Image from 'next/image';
import styles from './AboutUs.module.scss';
import sofa from '../../../../public/images/roomWithSofa.png';
import { Title } from '@/app/shared';

const text = `Ми професійна хімчистка, яка допоможе підтримувати ваш дім та меблі у чистоті та свіжості. Наші клінери впораються з забрудненнями будь-якого рівня. 
Працюємо з різними типами приміщень, такі як: кафе, ресторани, офіси, готелі, житлові примішення. Ви можете не хвилюватися за безпеку ваших дітей чи тварин, адже ми використовуємо тільки професійну, якісну сертифіковану хімію.
Надаємо широкий спектр послуг для того щоб ваш дім був безпечним, чистим та комфортним.
Маємо безкоштовний виїзд нашого майстра до вашого примішення для детальної консультації. Також маємо приємні ціни за фіксованим прайсом.`;

export const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <Title text="ПРО НАС" level={2} className={styles.aboutTitle} />
      <div className={styles.wrapperContent}>
        <p className={styles.text}>{text}</p>
        <div className={styles.wrapperImg}>
          <Image className={styles.img} src={sofa} alt="room with sofa" />
        </div>
      </div>
    </section>
  );
};
