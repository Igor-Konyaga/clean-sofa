import axios from 'axios';

const TOKEN = '';
const CHAT_ID = '';
const URL_API_TG = ``;

export const fetchTelegramMessage = async (message: string) => {
  const data = await axios.post(URL_API_TG, {
    chat_id: CHAT_ID,
    text: message,
  });

  return data;
};
