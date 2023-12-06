import React from 'react'
import Appointment from '../Appointment/appointment'
import DoctoresTable from '../Doctors/DoctoresTable'
import DateCarousel from '../Date/dateCar'
import TimeGrid from '../Slots/SlotsTab'
import FAQ from '../question/question'
import Header from '../header/header'
import "../../App.css"
function Main() {
  return (
    <div className='back;'>
    <Header />
   <div className='main '>

    <DoctoresTable />
    <Appointment />
    <DateCarousel />

<FAQ />    
    </div>
    </div>
 
  )
}

export default Main