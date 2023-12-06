import React, { useState } from 'react';
import './finalCall.css';
import { addTimeSlot } from '../../Fetching/gettingData';
import { useLocation } from 'react-router-dom';

const FinalCall = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const time = searchParams.get('time');
  const date = searchParams.get('date');

  const [dialogue, setDialogue] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const otpReceived = async () => {
    if (phoneNumber.length === 10) {
      setDialogue(true);
      setPhoneError(''); // Reset phone error
    } else {
      setPhoneError('Enter a correct phone number (10 digits)');
    }
  };

  const otpCorrect = async () => {
    await addTimeSlot(time, date);
    setBookingSuccess(true);
    console.log("helllo");
  };

  const closeBookingSuccess = () => {
    setBookingSuccess(false);
  };

  return (
    <div className="container">
      <div className="content">
        <p style={{ fontWeight: 700 }}>Enter phone number to continue</p>
        <p>Please enter your WhatsApp number to receive timely updates.</p>
        <div className="input-container">
          <input
            type="text"
            placeholder=" mobile number *"
            style={{ borderBottom: '1px solid black', width: '40vw' }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="whatsapp-logo">
            <img src="https://remedoapp.com/rweb/assets/images/WhatsApp.png" alt="WhatsApp logo" />
          </div>
        </div>
        {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        <span>Please enter the mobile number of the patient. You will receive a confirmation message on this number.</span>
        <div className='otp-button'>
          <button className="send-otp-button" onClick={otpReceived}>
            Send OTP
          </button>
          {dialogue ? (
            <div className='box'>
              <button onClick={otpCorrect} style={{ borderRadius: '1rem' }}>Make Otp Success</button>
              <button style={{ borderRadius: '1rem' }}>Make Otp wrong</button>
            </div>
          ) : null}
        </div>
      </div>

      {bookingSuccess && (
        <div className="booking-success-popup">
          <p>Booking Successful!</p>
          <button onClick={closeBookingSuccess}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FinalCall;
