import React, { useState } from 'react';
import './dateCar.css'; // Import your CSS file for styling
import TimeGrid from '../Slots/SlotsTab';

const DateCarousel = () => {
  const [startDate, setStartDate] = useState(new Date());
  const endDate = new Date(startDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const [sendDate, setSendDate] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  endDate.setMonth(endDate.getMonth() + 1);

  const getFormattedDate = (date) => {
    const options = { weekday: 'short', day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const getDates = (start, count) => {
    const dates = [];
    let currentDate = new Date(start);
    for (let i = 0; i < count; i++) {
      // Only add dates that are not before the current date
      if (currentDate >= new Date()) {
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const handleNextDates = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 3);
    setStartDate(newStartDate);
  };

  const handlePrevDates = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 3);
    setStartDate(newStartDate);
  };

  const handleClick = async (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    setSendDate(formattedDate);
    setSelectedDate(date);
    setShowWarning(false); // Reset warning when a date is selected
  };

  const handleContinue = () => {
    if (selectedDate && sendDate) {
      // Proceed with your logic here
      console.log("Selected Date:", selectedDate);
      console.log("Selected Slot:", sendDate);
    } else {
      setShowWarning(true);
    }
  };

  const dates = getDates(startDate, 3);

  return (
    <div className="date-carousel-container col-12">
      <button onClick={handlePrevDates}>&lt;</button>
      <div className="date-carousel">
        {dates.map((date) => (
          <div
            key={date}
            onClick={() => handleClick(date)}
            className={` ${date === selectedDate ? 'bg-dark' : ''}  date-card`}
          >
            <p>{getFormattedDate(date)}</p>
            <h6>Slots Available:</h6>
          </div>
        ))}
      </div>
      <button onClick={handleNextDates}>&gt;</button>
      {showWarning && <p style={{ color: 'red' }}>Please select date and slot.</p>}
      <div>
       
        <TimeGrid date={sendDate} />
      </div>
    </div>
  );
};

export default DateCarousel;
