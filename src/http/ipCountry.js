import axios from 'axios';

export const getIp = async () => {
  const response = axios.get('https://ipinfo.io/json?token=353f74029ca066');

  return response;
};
