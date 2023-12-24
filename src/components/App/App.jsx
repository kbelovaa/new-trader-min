import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { getSchedule } from '../../http/google';
import { convertTime, getAvailableTime, convertArray } from '../../utils/schedule';
import { getIp } from '../../http/ipCountry';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Booking from '../Booking/Booking';
import ContactUs from '../ContactUs/ContactUs';
import Faq from '../Faq/Faq';
import './App.scss';

const App = () => {
  const [timeZone, setTimeZone] = useState(null);
  const [rawSchedule, setRawSchedule] = useState([]);
  const [callTime, setCallTime] = useState([]);
  const [ipCountry, setIpCountry] = useState('');

  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL)
    const fetchSchedule = async () => {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(userTimeZone);

      const schedule = await getSchedule();
      const localSchedule = schedule.map((time) => [
        time[0],
        ...convertTime(time[2], time[1], 'Europe/Oslo', userTimeZone),
      ]);
      setRawSchedule(localSchedule);
      setCallTime(getAvailableTime(convertArray(localSchedule)));
    };

    const getCountryFromIP = async () => {
      const response = await getIp();
      const countryData = response.data;
      if (countryData) {
        setIpCountry(countryData.country.toLowerCase());
      } else {
        setIpCountry('');
      }
    };

    fetchSchedule();
    getCountryFromIP();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route
            path="booking"
            element={
              <Booking rawSchedule={rawSchedule} callTime={callTime} ipCountry={ipCountry} timeZone={timeZone} />
            }
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
