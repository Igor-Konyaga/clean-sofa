import axios from 'axios';

const TOKEN = '6526856602:AAEImpuzfOgKQSuK4-wjGIaZ1g7151v6DlU';
const CHAT_ID = '-1002068499038';
const URL_API_TG = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const fetchTelegramMessage = async (message: string) => {
  const data = await axios.post(URL_API_TG, {
    chat_id: CHAT_ID,
    text: message,
  });

  return data;
};
