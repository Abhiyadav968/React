import './App.css';
import DataProvider from './Component/Context/DataProvider';
import InputBox from './Component/InputBox/InputBox';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
     <DataProvider>
      <Navbar/>
         <InputBox/>
     </DataProvider>
     
    </>
  );
}

export default App;
