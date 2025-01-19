'use client';
import styles from './ConsultationForm.module.scss';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {fetchTelegramMessage} from '@/app/services/telegremMessage';
import {MdOutlineDone} from 'react-icons/md';

export const ConsultationForm = () => {
    const [statusOk, setStatusOk] = useState<boolean>(false);
    const [error, setError] = useState<string | unknown>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const validName = name.split('').length <= 2;
    const validPhone = phone.split('').length <= 8;

    useEffect(() => {
        if (statusOk) {
            setTimeout(() => {
                setStatusOk(false);
            }, 5000);
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
            const {data} = await fetchTelegramMessage(message);
            setStatusOk(data.ok);
        } catch (error) {
            setError(error);
        } finally {
            setName('');
            setPhone('');
        }
    }

    return (
        <section id="consultationForm" className={styles.section}>
            <form onSubmit={submitForm} className={styles.form}>
                <h2 className={styles.title}>Безкоштовна консультація</h2>
                <p className={styles.text}>
                    Наш майстер зв`яжеться з вами в найближчий час для обговорення деталей
                </p>
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
                            required
                        />
                    </div>
                    <div className={styles.wrapperInput}>
                        <label className={styles.label} htmlFor="name">
                            Телефон
                        </label>
                        <input
                            onChange={handleChange}
                            className={styles.input}
                            type="number"
                            id="phone"
                            name="phone"
                            value={phone}
                            placeholder="+38 (0__)___ __ __"
                            required
                        />
                    </div>
                </div>
                <div className={styles.wrapperBtn}>


                    <button
                        disabled={validName || validPhone}
                        className={styles.submitBtn}
                        type="submit"
                    >
                        Відправити
                    </button>

                    <p
                        className={
                            statusOk ? `${styles.message} ${styles.active}` : styles.message
                        }
                    >
                        <MdOutlineDone className={styles.icon}/>
                        Відправлено
                    </p>
                </div>
            </form>
        </section>
    );
};
