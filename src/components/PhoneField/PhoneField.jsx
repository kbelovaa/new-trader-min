import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { isValidNumber } from 'libphonenumber-js';
import 'react-phone-input-2/lib/style.css';
import './PhoneField.scss';

const PhoneField = ({ ipCountry, mobile, setMobile, isMobileValid, setIsMobileValid }) => {
  const handleMobileChange = (value, country, e, formattedValue) => {
    setMobile(formattedValue);
    if (country.countryCode) {
      const phoneNumber = value === '' || isValidNumber(value, country.countryCode.toUpperCase());
      setIsMobileValid(!!phoneNumber);
    }
  };

  return (
    <div className="input-wrap">
      <label htmlFor="mobile" className="label">
        Phone nr
      </label>
      <PhoneInput
        value={mobile}
        onChange={handleMobileChange}
        country={ipCountry}
        enableSearch={true}
        inputClass={`${!ipCountry ? 'default' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        buttonClass={`${!ipCountry ? 'hidden' : ''} ${!mobile || !isMobileValid ? 'invalid-field' : ''}`}
        autoFormat
      />
      <p className={isMobileValid ? 'hidden' : 'input__note'}>Please enter a valid mobile number.</p>
    </div>
  );
};

export default PhoneField;
