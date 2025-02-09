'use client';
import styles from './Contacts.module.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { fetchTelegramMessage } from '@/app/services/telegremMessage';
import { MdOutlineDone } from 'react-icons/md';
import { Title } from '@/app/shared';
import { Phone } from '../CustomIcons/Phone/Phone';
import { Location } from '../CustomIcons/Location/Location';
import Link from 'next/link';
import { TelegramIcon } from '../CustomIcons/TelegramIcon/TelegramIcon';
import { FacebookIcon } from '../CustomIcons/FacebookIcon/FacebookIcon';
import { InstagramIcon } from '../CustomIcons/InstagramIcon/InstagramIcon';
import { Slide, toast } from 'react-toastify';

const mapsUrl = `https://www.google.com/maps/place/48%C2%B035'58.5%22N+22%C2%B019'07.9%22E/@48.599572,22.318862,16z/data=!4m4!3m3!8m2!3d48.5995724!4d22.3188617?hl=uk&entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D`;
export const Contacts = () => {
  const [statusOk, setStatusOk] = useState<boolean>(false);
  const [error, setError] = useState<string | unknown>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const validName = name.split('').length >= 2;
  const validPhone = phone.split('').length >= 9;

  useEffect(() => {
    if (statusOk) {
      setTimeout(() => {
        setStatusOk(false);
      }, 3000);
    }
  }, [statusOk]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setPhone(e.target.value);
    }
  };

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Ім'я: ${name}\nНомер: ${phone}`;

    try {
      const { data } = await fetchTelegramMessage(message);
      setStatusOk(data.ok);

      toast.success('Заявка відправлена', {
        autoClose: 3000,
        transition: Slide,
      });
    } catch (error) {
      toast.error('Не вдалося відправити', {
        autoClose: 3000,
        transition: Slide,
      });
      setError(error);
    } finally {
      setName('');
      setPhone('');
    }
  }

  return (
    <section id="contacts" className={styles.contacts}>
      <Title
        id="contactsTitle"
        text="КОНТАКТИ"
        level={2}
        className={styles.title}
      />
      <form id="contactForm" onSubmit={submitForm} className={styles.form}>
        <h2 className={styles.title}>Залиште заявку</h2>
        <p className={styles.subtitle}>Ми з вами зв'яжемось</p>
        <div className={styles.formBody}>
          <div className={styles.wrapperInput}>
            <label className={styles.label} htmlFor="name">
              Ім`я
            </label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Введіть ім'я"
              required
            />
          </div>
          <div className={styles.wrapperInput}>
            <label className={styles.label} htmlFor="phone">
              Телефон
            </label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="number"
              id="phone"
              name="phone"
              value={phone}
              placeholder="+38 (___)___ __ __"
              required
            />
          </div>
        </div>
        <div className={styles.wrapperBtn}>
          <button
            disabled={!validName || !validPhone}
            className={styles.submitBtn}
            type="submit"
          >
            Відправити
          </button>
        </div>
      </form>

      <div
        onClick={() => setStatusOk(true)}
        id="contactsInfo"
        className={styles.contactInfo}
      >
        <div className={styles.left}>
          <Link href="tel:0504320020" className={styles.phone}>
            <Phone />
            <p>+380 (50) 432-00-20</p>
          </Link>
          <Link
            className={styles.location}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Location />
            <p>м.Ужгород вул.О.Блистіва 11</p>
          </Link>
        </div>
        <div className={styles.right}>
          <Link
            className={styles.instSocialLink}
            href="https://www.instagram.com/himchistka_kylymiv?utm_source=qr&igsh=MThwcW1ieGNvcXRxdg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
          <Link
            className={styles.socialLink}
            href="https://www.facebook.com/share/15pnnsSwEh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Link
            className={styles.socialLink}
            href="https://t.me/OlexandrBSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};
