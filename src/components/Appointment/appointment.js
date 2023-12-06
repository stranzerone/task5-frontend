import React, { useState } from 'react';
import "./appoint.css";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';

export default function Appointment() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <div className='appointmentCoin d-flex'>
      <div className='appointment-text col-7'>
        <h1>Book Appointment</h1>
        <p>Select Your Custom Type</p>
        <h2>Fees approx ₹ 500</h2>
        <h3>(pay at clinic)</h3>
      </div>

      <div className='appointment-icons d-flex col-5 '>
        <div
          className={`icon icon-1 ${selectedIcon === 'icon-1' ? 'selected' : ''}`}
          onClick={() => handleIconClick('icon-1')}
        >
          <HomeIcon style={{ fontSize: '3rem' }} />
          <p>In-Clinic</p>
        </div>

        <div
          className={`icon icon-2 ${selectedIcon === 'icon-2' ? 'selected' : ''}`}
          onClick={() => handleIconClick('icon-2')}
        >
          <LocalPhoneIcon style={{ fontSize: '3rem' }} />
          <p>Audio</p>
        </div>

        <div
          className={`icon icon-3 ${selectedIcon === 'icon-3' ? 'selected' : ''}`}
          onClick={() => handleIconClick('icon-3')}
        >
          <VideocamIcon style={{ fontSize: '3rem' }} />
          <p>Video</p>
        </div>
      </div>
    </div>
  );
}
