import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NewCart from './Components/NewCart';
import DataProvider from './Components/Context/DataProvider';

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <NewCart/>
      </DataProvider>
      {/* <div className="bg-indigo-600 w-full h-screen"></div> */}

    </>
  );
}

export default App;