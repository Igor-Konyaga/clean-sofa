import styles from './AboutUs.module.scss';
import {List} from "@/app/components/AboutUs/List/List";

export const AboutUs = () => {
    return (
        <section id="about-us" className={styles.aboutUs}>
            <h2 className={styles.aboutTitle}>Про нас</h2>
            <List/>
        </section>
    );
};
