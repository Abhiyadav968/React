import './App.css';
import DataProvider from './Components/Context/DataProvider';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Form />
      </DataProvider>
    </>
  );
}

export default App;
