import { AboutUs } from './components/AboutUs/AboutUs';
import { Contacts } from './components/Contacts/Contacts';
import { Container } from './components/Container/Container';
import { FAQ } from './components/FAQ/FAQ';
import { Feedbacks } from './components/Feedbacks/Feedbacks';
import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Price } from './components/Price/Price';
import { Services } from './components/Services/Services';
import { Statistics } from './components/Statistics/Statistics';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Statistics />
        <Container>
          <AboutUs />
          <Services />
        </Container>
        <Price />
        <Feedbacks />
        <Container>
          {/* <Gallery /> */}
          <FAQ />
        </Container>
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
