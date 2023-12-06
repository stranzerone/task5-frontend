import React, { useEffect, useState } from 'react';
import './slots.css'; // Import your CSS file for styling
import { addTimeSlot, getSlots } from '../../Fetching/gettingData';
import { NavLink } from 'react-router-dom';

const TimeGrid = (date) => {
  const startTime = '12:00 PM';
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isSlotBooked, setIsSlotBooked] = useState(false);
 const [booked,setBooked] =useState([null]);
  const timeIntervals = Array.from({ length: 12 }, (_, index) => {
    const minutes = index * 15;
    const time = new Date();
    time.setHours(12, 0);
    time.setMinutes(minutes);
    return time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  });

  const handleSlotSelection = (time) => {
 

    setSelectedSlot(time);
    setIsSlotBooked(true)

    
  };

 
  useEffect(() => {
    const fetchData = async () => {
    try{
      const data = await getSlots(date);
  
      console.log(data);
      setBooked(data)
      
    }catch(error){
      console.error(error)
    }

    };
  
      fetchData();

   console.log(date.date)
  }, [date]);
  

  return (
    <div className="slot-coin">
      <div className="clinic ps-4">
        <h1>Clinic Name</h1>

        <div className="d-flex">
          <input name="doctor" type="radio" />
          <label htmlFor="doctor">Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302</label>
        </div>
      </div>
      <div className="time-grid">
      {timeIntervals.map((time, index) => (
  <button
    key={index}
    className={`time-cell ${selectedSlot === time && isSlotBooked ? 'selected' : ''} ${booked.some(item => item && item.time === time) ? 'booked' : ''}`}
    onClick={() => handleSlotSelection(time)}
  >
    {time}
  </button>
))}

        <div>
        <NavLink 
          to={{
              pathname: '/appointment',
              search: `?date=${date.date}&time=${selectedSlot}`,
            }}
        >
        <button
        style={{borderRadius:"1rem"}}
           
          >
           Continue
          </button>
        </NavLink>
         
        </div>
      </div>
    </div>
  );
};


export default TimeGrid;