import React from 'react'
import Header from '../header/header'
import SummeryA from '../Appointment/SummeryA'
import FinalCall from '../otpPage/finalCall'
import DoctoresTable from '../Doctors/DoctoresTable'
import FAQ from '../question/question'

export default function WhatsAppPage() {
  return (
    <div>
        <Header />
        <DoctoresTable />
        <SummeryA />
        <FinalCall />
        <FAQ />
    </div>
  )
}
