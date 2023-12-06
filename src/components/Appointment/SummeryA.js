import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {NavLink,useLocation}  from "react-router-dom"
export default function SummeryA() {


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const time = searchParams.get('time');
  const date = searchParams.get('date');
console.log(date);
  return (
    <div className='summeryCoin'>

<div className='s-icon '>
<HomeIcon style={{ fontSize: '1rem',color:'white' }} />

</div>
  <div className='appointment-text  col-5'>
        <h1>In-Clinic</h1>
        <p>Select Your Custom Type</p>
        <h2>Fees approx ₹ 500</h2>
        <h3>(pay at clinic)</h3>
      </div>
<div className='time col-5'>
<div className='d-flex'>
<AccessTimeIcon  style={{ fontSize: '2rem',color:'green' }}/>
<h1>{time}</h1>
</div>

<div className='d-flex my-3'>
<DateRangeIcon  style={{ fontSize: '2rem',color:'green' }}/>
<h1>{date}</h1>
</div>
</div>
<div className='change'>
<NavLink to="/"> change Date</NavLink>
</div>

    </div>
  )
}
