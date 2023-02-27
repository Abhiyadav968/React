import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import teams from '../Teams/Teams'
import contact from '../Contact/Contact'
import Navbar from '../Navbar/Navbar'

const Router = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/teams" element={<teams />} />
                        <Route path="/contact" element={<contact />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Router