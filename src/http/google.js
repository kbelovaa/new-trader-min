import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getSchedule = async () => {
  const { data } = await axios.get(`${serverUrl}/google/schedule`);

  return data.schedule;
};

export const bookCall = async (row, name, surname, email, mobile, platform, weekday, date, time) => {
  const { data } = await axios.post(`${serverUrl}/google/book`, {
    row,
    name,
    surname,
    email,
    mobile,
    platform,
    weekday,
    date,
    time,
  });

  return data.success;
};

export const contactUs = async (name, email, text) => {
  const { data } = await axios.post(`${serverUrl}/google/contact-us`, { name, email, text });

  return data.success;
};
