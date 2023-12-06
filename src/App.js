import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import FinalCall from './components/otpPage/finalCall';
import WhatsAppPage from './components/Main/WhatsAppPage';

const App = () => {
  return (
    <div>

    
    <Routes>
      <Route element={<Main />} path='/' />
      <Route element={<WhatsAppPage />} path='/appointment' />
   
    </Routes>
    </div>
  );
};

export default App;
