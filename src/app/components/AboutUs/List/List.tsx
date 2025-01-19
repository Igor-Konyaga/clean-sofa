import styles from './List.module.scss';
import {ListItem} from "@/app/components/AboutUs/ListItem/ListItem";
import contract from '/public/images/contract.png';
import discounts from '/public/images/discounts.png';
import experience from '/public/images/experience.png';
import guarantee from '/public/images/guarantee.png';
import means from '/public/images/means.png';
import noMediators from '/public/images/noMediators.png';
import price from '/public/images/price.png';
import professionally from '/public/images/professionally.png';

const aboutItem = [
    {
        label: 'Досвід роботи',
        src: experience,
        info: 'Наш досвід у цій сфері більше 4 років. Виконуємо роботи любої складності',
    },
    {
        label: 'Гарантія 1 рік',
        src: guarantee,
        info: 'При виконанні наших рекомендацій, гарантія 1 рік',
    },
    {
        label: 'Фіксована ціна',
        src: price,
        info: 'У нас ви не переплачуєте більше фіксованої ціни. Також ми не на`язуємо додаткові послуги',
    },
    {
        label: 'Договір за 1 день',
        src: contract,
        info: 'Складаємо договір перед виконанням робіт',
    },
    {
        label: 'Безпечні засоби',
        src: means,
        info: 'У роботі використовуємо сертифіковані засоби закордоних виробників. При дотримані норм техніки безпеки вони абсолютно безпечні для людей і тварин',
    },
    {
        label: 'Без посередників',
        src: noMediators,
        info: 'Ви будете працювати безпосередньо з нашою бригадою майстрів без посередників, за чесними цінами на дезінсекцію',
    },
    {
        label: 'Професійно',
        src: professionally,
        info: 'Виконуємо роботи будь-якої складності, тому що абсолютно впевнені в кваліфікації наших фахівців',
    },
    {
        label: 'Діють знижки',
        src: discounts,
        info: 'Надаємо хороші знижки та вигідні умови - військовим, пенсіонерам та людям з інвалідністю',
    },
];

export const List = () => {
    return (
        <ul className={styles.aboutList}>
            {aboutItem.map(({label, src, info}) => {
                return (
                    <ListItem key={label} label={label} src={src} info={info} />
                );
            })}
        </ul>
)
}