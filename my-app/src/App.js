import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import DarkMode from './DarkMode';
// import TextForm from './components/TextForm';
import { useState } from 'react';
import Modal from './components/Modal';
import Form from './Form';
function App() {

  const [darkMode, setDarkMode] = useState(false);// weather darkmode enabil or not
  

  return (
    <>
      <Navbar />
      {/* <div className="container my-3"> */}
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        {/* <DarkMode /> */}
      {/* </div> */}
      <Form/>
      <Modal/>
    </>
  );
};

export default App;
