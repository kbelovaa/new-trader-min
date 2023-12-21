import axios from 'axios';

const server_url = process.env.REACT_APP_SERVER_URL;

export const getSchedule = async () => {
  const { data } = await axios.get(`${server_url}/google/schedule`);

  return data.schedule;
};

export const bookCall = async (row, name, surname, email, mobile, platform, weekday, date, time) => {
  const { data } = await axios.post(`${server_url}/google/book`, {
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
  const { data } = await axios.post(`${server_url}/google/contact-us`, { name, email, text });

  return data.success;
};
