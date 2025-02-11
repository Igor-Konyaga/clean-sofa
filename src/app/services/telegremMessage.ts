import axios from 'axios';

const TOKEN = '7808532859:AAGmDwaKKsGoxpJC2thb2O6-czKNB8r42j8';
const CHAT_ID = '-4784064551';
const URL_API_TG = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const fetchTelegramMessage = async (message: string) => {
  const data = await axios.post(URL_API_TG, {
    chat_id: CHAT_ID,
    text: message,
  });

  return data;
};
