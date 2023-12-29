import React, { useEffect, useState } from 'react';
import { format, parse } from 'date-fns';
import { bookCall } from '../../http/google';
import { convertTime, getRow } from '../../utils/schedule';
import { platforms } from '../../constants/booking';
import Calendar from '../Calendar/Calendar';
import PhoneField from '../PhoneField/PhoneField';
import ModalWindow from '../ModalWindow/ModalWindow';
import './Booking.scss';

const Booking = ({ rawSchedule, callTime, ipCountry, timeZone }) => {
  const [selectedDay, setSelectedDay] = useState(format(new Date(), 'dd.MM.yyyy'));
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [name, setName] = useState('');
  const [surname, setSurame] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [mobile, setMobile] = useState('');
  const [isMobileValid, setIsMobileValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (callTime.length !== 0) {
      setSelectedDay(callTime[0].date);
      setSelectedTime(callTime[0].time[0]);
    }
  }, [callTime]);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormInvalid = () => {
    if (!name ||
      !surname ||
      !email ||
      !isEmailValid ||
      !mobile ||
      !isMobileValid ||
      !selectedDay ||
      !selectedTime ||
      !selectedPlatform) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async () => {
    if (!checkIsFormInvalid()) {
      try {
        setShowSpinner(true);
        const row = getRow(rawSchedule, selectedDay, selectedTime) + 2;
        const result = await bookCall(
          row,
          name,
          surname,
          email,
          mobile,
          selectedPlatform,
          format(parse(selectedDay, 'dd.MM.yyyy', new Date()), 'EEE'),
          ...convertTime(selectedTime, selectedDay, timeZone, 'Europe/Oslo'),
        );
        if (result) {
          setIsModalOpen(true);
        }
      } finally {
        setShowSpinner(false);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking">
          <h2 className="booking__title title">Book a call</h2>
          <p className="booking__text text">
            The objective of the introductory call is to have a quick meet-and-greet, assess compatibility, and talk
            about backgrounds, motivations, and what to expect moving forward
          </p>
          <h3 className="booking__subtitle">1. Select date and time</h3>
          {callTime.length === 0 ? (
            <div className="spinner"></div>
          ) : (
            <Calendar
              callTime={callTime}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          )}
          <h3 className="booking__subtitle">2. Select platform</h3>
          <div className="booking__platforms">
            {platforms.map((platform, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlatform(platform)}
                className={`booking__platform ${selectedPlatform === platform ? 'booking__platform_selected' : ''}`}
              >
                <input
                  id={platform}
                  type="radio"
                  value={platform}
                  checked={selectedPlatform === platform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <label htmlFor={platform} className="booking__platform-label">
                  {platform}
                </label>
              </div>
            ))}
          </div>
          <h3 className="booking__subtitle">3. Fill in</h3>
          <form className={`booking__form ${isFormValid ? '' : 'invalid'}`}>
            <div className="input-wrap">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!name ? 'invalid-field' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="surname" className="label">
                Surname
              </label>
              <input
                id="surname"
                type="text"
                className={`input ${!surname ? 'invalid-field' : ''}`}
                value={surname}
                onChange={(e) => setSurame(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="text"
                className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isEmailValid ? 'hidden' : 'input__note'}>Please enter a valid email address.</p>
            </div>
            <PhoneField
              ipCountry={ipCountry}
              mobile={mobile}
              setMobile={setMobile}
              isMobileValid={isMobileValid}
              setIsMobileValid={setIsMobileValid}
            />
            <p className={!isFormValid && (!name || !surname || !email || !mobile) ? 'input__note' : 'hidden'}>
              Please fill in all fields
            </p>
          </form>
          <h3 className="booking__subtitle">Summary</h3>
          <div className="booking__summary">
            <p className="booking__summary-text">
              {`${selectedDay} ${format(
                parse(selectedDay, 'dd.MM.yyyy', new Date()),
                'EEE',
              )}, ${selectedTime} (${timeZone})`}
            </p>
            <p className="booking__summary-text">{selectedPlatform}</p>
            <p className={name === '' && surname === '' ? 'hidden' : 'booking__summary-text'}>{`${name} ${surname}`}</p>
            <p className={email === '' ? 'hidden' : 'booking__summary-text'}>{email}</p>
            <p className={mobile === '' ? 'hidden' : 'booking__summary-text'}>{mobile}</p>
          </div>
          {showSpinner ? (
            <div className="spinner spinner_small"></div>
          ) : (
            <button className={`booking__btn btn btn_solid ${checkIsFormInvalid() ? 'inactive' : ''}`} onClick={handleFormSubmit}>
              Book
            </button>
          )}
        </div>
      </div>
      <ModalWindow
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        date={selectedDay}
        time={selectedTime}
        timeZone={timeZone}
      />
    </section>
  );
};

export default Booking;
