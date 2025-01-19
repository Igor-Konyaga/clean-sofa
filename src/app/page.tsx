import { AboutUs } from './components/AboutUs/AboutUs';
import { ConsultationForm } from './components/ConsultationForm/ConsultationForm';
import { Container } from './components/Container/Container';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Price } from './components/Price/Price';
import { Services } from './components/Services/Services';
import { StagesWork } from './components/StagesWork/StagesWork';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
            <Container>
                <Header/>
            </Container>
            <main className={styles.main}>
                <Hero/>
                <Container>
                    <AboutUs/>
                    <Services/>
                    <StagesWork/>
                    <Price/>
                    <FAQ/>
                    <ConsultationForm/>
                </Container>
            </main>

            <Footer/>
        </div>
  );
}
